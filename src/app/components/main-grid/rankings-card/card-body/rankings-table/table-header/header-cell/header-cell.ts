import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-cell',
  standalone: true,
  templateUrl: './header-cell.html',
  styleUrl: './header-cell.css',
})
export class HeaderCell {
  @Input() text = '';
}
