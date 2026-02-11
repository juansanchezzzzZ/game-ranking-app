import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeader } from './table-header/table-header';
import { TableBody } from './table-body/table-body';

@Component({
  selector: 'app-rankings-table',
  standalone: true,
  imports: [CommonModule, TableHeader, TableBody],
  templateUrl: './rankings-table.html',
  styleUrl: './rankings-table.css',
})
export class RankingsTable {}