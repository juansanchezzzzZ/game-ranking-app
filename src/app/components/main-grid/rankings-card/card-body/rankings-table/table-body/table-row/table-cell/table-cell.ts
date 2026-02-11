import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  templateUrl: './table-cell.html',
  styleUrl: './table-cell.css',
})
export class TableCell {
  align = input<'left' | 'center' | 'right'>('left');
  weight = input<'normal' | 'bold' | number>('normal');

  justifyContent = computed(() => {
    const alignment = this.align();
    if (alignment === 'center') return 'center';
    if (alignment === 'right') return 'flex-end';
    return 'flex-start';
  });

  fontWeight = computed(() => this.weight());
}