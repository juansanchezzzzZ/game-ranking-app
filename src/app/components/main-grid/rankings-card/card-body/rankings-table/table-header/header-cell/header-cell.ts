import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-cell.html',
  styleUrl: './header-cell.css',
})
export class HeaderCell {
  @Input() align: 'left' | 'center' | 'right' = 'left';
}