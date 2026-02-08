import { Component, Output, EventEmitter } from '@angular/core';
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
  tempEmail = '';

  @Output() modeSwitched = new EventEmitter<void>();

  handleSmartSwitch(email: string) {
    this.tempEmail = email;
    this.isLogin = false;
    this.modeSwitched.emit();
  }

  showLogin() {
    this.isLogin = true;
    this.tempEmail = '';
  }

  showRegister() {
    this.isLogin = false;
  }
}