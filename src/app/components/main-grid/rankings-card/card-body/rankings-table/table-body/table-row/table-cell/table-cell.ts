import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [],
  templateUrl: './table-cell.html',
  styleUrl: './table-cell.css',
})
export class TableCell {
  align = input<'left' | 'center' | 'right'>('left');
  weight = input<'normal' | 'bold'>('normal');

  justifyContent = computed(() => {
    const alignment = this.align();
    return alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : 'flex-start';
  });

  fontWeight = computed(() => this.weight() === 'bold' ? '700' : '400');
}