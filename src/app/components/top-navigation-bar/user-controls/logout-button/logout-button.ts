import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  templateUrl: './logout-button.html',
  styleUrl: './logout-button.css',
})
export class LogoutButton {
  private authService = inject(AuthService);

  onLogout() {
    this.authService.logout();
  }
}