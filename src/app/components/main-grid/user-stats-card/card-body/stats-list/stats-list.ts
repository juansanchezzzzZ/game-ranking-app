import { Component } from '@angular/core';
import { StatsItem } from './stats-item/stats-item';

@Component({
  selector: 'app-stats-list',
  standalone: true,
  imports: [StatsItem],
  templateUrl: './stats-list.html',
  styleUrl: './stats-list.css',
})
export class StatsList {}
