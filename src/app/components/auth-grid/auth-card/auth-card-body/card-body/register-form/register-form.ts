import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.css'],
})
export class RegisterForm {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        username: this.fb.control('', {
          validators: [Validators.required, Validators.minLength(3)],
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

  submit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.getRawValue();
    console.log('REGISTER DATA', data);
  }

  /** Se llama cuando se hace click fuera del form */
  onBlur(): void {
    this.submitted = false;
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

  get username(): AbstractControl {
    return this.form.get('username')!;
  }

  get email(): AbstractControl {
    return this.form.get('email')!;
  }

  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  get confirmPassword(): AbstractControl {
    return this.form.get('confirmPassword')!;
  }
}
