import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRow } from './table-row/table-row';

@Component({
  selector: 'app-table-body',
  standalone: true,
  imports: [CommonModule, TableRow],
  templateUrl: './table-body.html',
  styleUrl: './table-body.css',
})
export class TableBody {
  players = [
    { rank: 1, name: 'DragonSlayer', score: 25840 },
    { rank: 2, name: 'ShadowWolf', score: 21450 },
    { rank: 3, name: 'PixelKing', score: 19820 },
  ];
}
