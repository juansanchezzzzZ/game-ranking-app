import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginForm } from './login-form/login-form';
import { RegisterForm } from './register-form/register-form';

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [CommonModule, LoginForm, RegisterForm],
  templateUrl: './card-body.html',
  styleUrls: ['./card-body.css'],
})
export class CardBody {
  isLogin = true;

  showLogin() {
    this.isLogin = true;
  }

  showRegister() {
    this.isLogin = false;
  }
}
