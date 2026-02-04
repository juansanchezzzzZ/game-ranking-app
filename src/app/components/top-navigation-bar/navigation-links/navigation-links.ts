import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  template: `
    <div class="links">
      <a>GAME</a>
      <a>LEADERBOARD</a>
      <a>PROFILE</a>
    </div>
  `,
  styleUrl: './navigation-links.css'
})
export class NavigationLinks {}
