import { Component } from '@angular/core';
import { TableBody } from './table-body/table-body';
import { TableHeader } from './table-header/table-header';

@Component({
  selector: 'app-rankings-table',
  standalone: true,
  imports: [TableHeader, TableBody],
  templateUrl: './rankings-table.html',
  styleUrl: './rankings-table.css',
})
export class RankingsTable {}
