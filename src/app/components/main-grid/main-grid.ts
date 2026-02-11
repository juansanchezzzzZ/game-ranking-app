import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAreaCard } from './game-area-card/game-area-card';
import { UserStatsCard } from './user-stats-card/user-stats-card';
import { RankingsCard } from './rankings-card/rankings-card';
import { NavlinksUiService } from '../../services/navlinks.ui.service';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [CommonModule, GameAreaCard, UserStatsCard, RankingsCard],
  templateUrl: './main-grid.html',
  styleUrl: './main-grid.css'
})
export class MainGrid {
  private uiService = inject(NavlinksUiService);
  
  sections = this.uiService.visibleSections;
}