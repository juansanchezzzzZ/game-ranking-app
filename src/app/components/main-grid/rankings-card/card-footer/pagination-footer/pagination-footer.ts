import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardStoreService } from '../../../../../services/leaderboard.store.service';

@Component({
  selector: 'app-pagination-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-footer.html',
  styleUrl: './pagination-footer.css',
})
export class PaginationFooter {
  store = inject(LeaderboardStoreService);
}