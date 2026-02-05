import { Component } from '@angular/core';
import { HeaderCell } from './header-cell/header-cell';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [HeaderCell],
  templateUrl: './table-header.html',
  styleUrl: './table-header.css',
})
export class TableHeader {}
