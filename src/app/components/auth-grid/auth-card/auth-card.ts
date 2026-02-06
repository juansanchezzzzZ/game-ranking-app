import { Component } from '@angular/core';
import { AuthCardHeader } from './auth-card-header/auth-card-header';
import { AuthCardBody } from './auth-card-body/auth-card-body';

@Component({
  selector: 'app-auth-card',
  standalone: true,
  imports: [AuthCardHeader, AuthCardBody],
  templateUrl: './auth-card.html',
  styleUrl: './auth-card.css',
})
export class AuthCard {}
