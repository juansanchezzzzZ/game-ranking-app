import { Component } from '@angular/core';
import { GameAreaCard } from './game-area-card/game-area-card';
import { UserStatsCard } from './user-stats-card/user-stats-card';
import { RankingsCard } from './rankings-card/rankings-card';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [GameAreaCard, UserStatsCard, RankingsCard],
  templateUrl: './main-grid.html',
  styleUrl: './main-grid.css'
})
export class MainGrid {}
