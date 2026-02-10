import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../services/auth.service';
import { StatsItem } from './stats-item/stats-item';

@Component({
  selector: 'app-stats-list',
  standalone: true,
  imports: [CommonModule, StatsItem],
  templateUrl: './stats-list.html',
  styleUrl: './stats-list.css',
})
export class StatsList {
  private authService = inject(AuthService);
  protected userData$ = this.authService.userProfile$;
}