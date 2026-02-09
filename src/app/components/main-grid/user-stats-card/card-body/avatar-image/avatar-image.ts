import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../services/auth.service'; // Ajusta la ruta

@Component({
  selector: 'app-avatar-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-image.html',
  styleUrl: './avatar-image.css'
})
export class AvatarImage {
  private authService = inject(AuthService);
  
  // Obtenemos el perfil completo
  userData$ = this.authService.userProfile$;
  
  defaultAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=default';
}