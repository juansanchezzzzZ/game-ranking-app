import { 
  Component, 
  inject, 
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
  AbstractControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css'],
})
export class LoginForm {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);
  private eRef = inject(ElementRef);

  @Output() switchMode = new EventEmitter<string>();

  form: FormGroup;
  submitted = false;
  isLoading = false;
  errorMessage: string | null = null;

  constructor() {
    this.form = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true
      }),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)],
        nonNullable: true
      }),
    });
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

  async submit(): Promise<void> {
    this.submitted = true;
    this.errorMessage = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.cdr.markForCheck();

    const { email, password } = this.form.getRawValue();

    try {
      await this.authService.signIn(email, password);
    } catch (error: any) {
      if (error.code === 'auth/too-many-requests') {
        this.errorMessage = 'Too many failed attempts. Access blocked temporarily.';
        this.password.setErrors({ blocked: true });
        this.form.patchValue({ password: '' });
        return;
      }

      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
        const existsInDb = await this.authService.checkIfEmailInFirestore(email);
        if (!existsInDb) {
          this.switchMode.emit(email);
          return;
        }
      }

      this.errorMessage = this.mapFirebaseError(error.code);
      this.password.setErrors({ wrongPassword: true });
      this.form.patchValue({ password: '' });

    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }

  private mapFirebaseError(code: string): string {
    switch (code) {
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';
      default:
        return 'Error signing in.';
    }
  }

  onBlur(): void {
    this.submitted = false;
  }

  onFocus(): void {
    this.submitted = false;
    this.errorMessage = null;
  }

  get email(): AbstractControl { return this.form.get('email')!; }
  get password(): AbstractControl { return this.form.get('password')!; }
}