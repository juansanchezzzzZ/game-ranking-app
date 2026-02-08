import { 
  Component, 
  inject, 
  Input, 
  Output, 
  EventEmitter, 
  ChangeDetectorRef, 
  HostListener, 
  ElementRef 
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  AsyncValidatorFn
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../../services/auth.service';
import { timer, switchMap, catchError, of, take } from 'rxjs';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.css'],
})
export class RegisterForm {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);
  private eRef = inject(ElementRef);

  @Input() set initialEmail(value: string) {
    if (value) {
      this.form.patchValue({ email: value });
      this.email.markAsTouched();
    }
  }

  form: FormGroup;
  submitted = false;
  isLoading = false;
  errorMessage: string | null = null;

  constructor() {
    this.form = this.fb.group({
      username: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(3)],
        asyncValidators: [this.usernameUniqueValidator()],
        nonNullable: true
      }),
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true
      }),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)],
        nonNullable: true
      }),
      confirmPassword: this.fb.control('', {
        validators: [Validators.required],
        nonNullable: true
      })
    }, { validators: this.passwordMatchValidator });
  }

  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.submitted = false;
      this.errorMessage = null;
      this.form.markAsUntouched();
      this.cdr.markForCheck();
    }
  }

  usernameUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value || control.value.length < 3) return of(null);
      return timer(600).pipe(
        switchMap(async () => {
          const exists = await this.authService.checkIfUsernameExists(control.value);
          this.cdr.markForCheck();
          return exists ? { usernameTaken: true } : null;
        }),
        take(1),
        catchError(() => of(null))
      );
    };
  }

  async submit(): Promise<void> {
    this.submitted = true;
    this.errorMessage = null;

    if (this.form.invalid || this.form.pending) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.cdr.markForCheck();

    const { email, password, username } = this.form.getRawValue();

    try {
      await this.authService.signUp(email, password, username);
    } catch (error: any) {
      this.errorMessage = this.mapFirebaseError(error.code);
      this.email.setErrors({ firebase: true });
      this.email.markAsTouched();
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }

  private mapFirebaseError(code: string): string {
    switch (code) {
      case 'auth/invalid-email': return 'The email format is invalid.';
      case 'auth/email-already-in-use': return 'This email is already in use.';
      case 'auth/weak-password': return 'The password is too weak.';
      default: return 'Registration failed. Try again.';
    }
  }

  onBlur(): void {
    this.submitted = false;
  }

  onFocus(): void {
    this.submitted = false;
    this.errorMessage = null;
  }

  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    if (password !== confirm && confirm.length > 0) {
      group.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  get username(): AbstractControl { return this.form.get('username')!; }
  get email(): AbstractControl { return this.form.get('email')!; }
  get password(): AbstractControl { return this.form.get('password')!; }
  get confirmPassword(): AbstractControl { return this.form.get('confirmPassword')!; }
}