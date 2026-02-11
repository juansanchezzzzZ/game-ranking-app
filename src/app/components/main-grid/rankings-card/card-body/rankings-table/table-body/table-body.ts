import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRow } from './table-row/table-row';
import { LeaderboardStoreService } from '../../../../../../services/leaderboard.store.service';

@Component({
  selector: 'app-table-body',
  standalone: true,
  imports: [CommonModule, TableRow],
  templateUrl: './table-body.html',
  styleUrl: './table-body.css',
})
export class TableBody {
  store = inject(LeaderboardStoreService);

  getRank(index: number): number {
    return (this.store.currentPage() - 1) * this.store.pageSize + (index + 1);
  }
}