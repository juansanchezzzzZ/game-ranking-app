import { Component } from '@angular/core';
import { Logo } from './logo/logo';

@Component({
  selector: 'app-auth-card-header',
  standalone: true,
  imports: [Logo],
  templateUrl: './auth-card-header.html',
  styleUrl: './auth-card-header.css',
})
export class AuthCardHeader {}
