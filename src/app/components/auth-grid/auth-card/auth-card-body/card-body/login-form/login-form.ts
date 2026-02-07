import { Component, inject } from '@angular/core';
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

  async submit(): Promise<void> {
    this.submitted = true;
    this.errorMessage = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const { email, password } = this.form.getRawValue();

    try {
      await this.authService.signIn(email, password);
      
      console.log('LOGIN SUCCESS');

    } catch (error: any) {
      console.error('LOGIN ERROR:', error);
      this.errorMessage = this.mapFirebaseError(error.code);
    } finally {
      this.isLoading = false;
    }
  }

  private mapFirebaseError(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
      case 'auth/invalid-credential':
        return 'Credenciales incorrectas o el usuario no existe.';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      case 'auth/too-many-requests':
        return 'Demasiados intentos fallidos. Inténtalo más tarde.';
      default:
        return 'Error al iniciar sesión. Verifica tus datos.';
    }
  }

  onBlur(): void {
    if (this.form.valid) {
      this.submitted = false;
    }
  }

  get email(): AbstractControl { return this.form.get('email')!; }
  get password(): AbstractControl { return this.form.get('password')!; }
}