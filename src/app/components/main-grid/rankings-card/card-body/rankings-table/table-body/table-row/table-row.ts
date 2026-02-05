import { Component, Input } from '@angular/core';
import { TableCell } from './table-cell/table-cell';

@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [TableCell],
  templateUrl: './table-row.html',
  styleUrl: './table-row.css',
})
export class TableRow {
  @Input() rank!: number;
  @Input() name!: string;
  @Input() score!: number;
}
