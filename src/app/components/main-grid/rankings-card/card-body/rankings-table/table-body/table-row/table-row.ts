import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TableCell } from './table-cell/table-cell';

@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [DecimalPipe, TableCell],
  templateUrl: './table-row.html',
  styleUrl: './table-row.css',
})
export class TableRow {
  rank = input<number | string>(0);
  name = input<string>('');
  score = input<number>(0);
  isSticky = input<boolean>(false);
}