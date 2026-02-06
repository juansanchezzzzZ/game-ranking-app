import { Component } from '@angular/core';
import { AuthCard } from './auth-card/auth-card';

@Component({
  selector: 'app-auth-grid',
  standalone: true,
  imports: [AuthCard],
  templateUrl: './auth-grid.html',
  styleUrl: './auth-grid.css',
})
export class AuthGrid {}
