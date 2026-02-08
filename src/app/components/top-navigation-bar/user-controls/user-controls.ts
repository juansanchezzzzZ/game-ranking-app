import { Component } from '@angular/core';
import { LogoutButton } from './logout-button/logout-button';

@Component({
  selector: 'app-user-controls',
  standalone: true,
  imports: [LogoutButton],
  templateUrl: './user-controls.html',
  styleUrl: './user-controls.css'
})
export class UserControls {}