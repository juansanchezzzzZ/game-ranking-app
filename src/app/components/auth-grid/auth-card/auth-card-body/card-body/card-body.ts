import { Component } from '@angular/core';
import { LoginForm } from './login-form/login-form';
import { RegisterForm } from './register-form/register-form';

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [LoginForm, RegisterForm],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css',
})
export class CardBody {}
