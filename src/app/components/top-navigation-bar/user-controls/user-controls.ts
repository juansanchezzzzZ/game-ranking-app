import { Component } from '@angular/core';

@Component({
  selector: 'app-user-controls',
  standalone: true,
  template: `
    <div class="controls">
      <button class="logout">Logout</button>
      <div class="profile">👤</div>
    </div>
  `,
  styleUrl: './user-controls.css'
})
export class UserControls {}
