import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  AsyncValidatorFn
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../services/auth.service';
import { timer, switchMap, map, catchError, of, take } from 'rxjs';

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
  private router = inject(Router);

  form: FormGroup;
  submitted = false;
  isLoading = false;
  errorMessage: string | null = null;

  constructor() {
    this.form = this.fb.group(
      {
        username: this.fb.control('', {
          validators: [Validators.required, Validators.minLength(3)],
          asyncValidators: [this.usernameUniqueValidator()], 
          updateOn: 'change', // Valida mientras escribe
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
        }),
      },
      { validators: this.passwordMatchValidator }
    );
  }


  usernameUniqueValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value || control.value.length < 3) {
        return of(null);
      }

      return timer(600).pipe(
        switchMap(async () => {
          const exists = await this.authService.checkIfUsernameExists(control.value);
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
    const { email, password, username } = this.form.getRawValue();

    try {
      await this.authService.signUp(email, password, username);
      console.log('REGISTER SUCCESS');
      window.location.reload(); 
    } catch (error: any) {
      console.error('REGISTER ERROR:', error);
      this.errorMessage = this.mapFirebaseError(error.code);
    } finally {
      this.isLoading = false;
    }
  }

  private mapFirebaseError(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Este correo ya está en uso.';
      case 'auth/weak-password':
        return 'La contraseña debe tener al menos 6 caracteres.';
      default:
        return 'Error al crear la cuenta.';
    }
  }

  onBlur(): void {
    if (this.form.valid) {
      this.submitted = false;
    }
  }

  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;

    if (password !== confirm) {
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