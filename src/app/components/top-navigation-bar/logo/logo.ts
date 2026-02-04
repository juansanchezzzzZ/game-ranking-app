import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="logo">
      <span class="icon">🟦</span>
      <span class="text">PIXEL RANK</span>
    </div>
  `,
  styleUrl: './logo.css'
})
export class Logo {}
