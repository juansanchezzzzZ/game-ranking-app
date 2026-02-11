import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavlinksUiService } from '../../../services/navlinks.ui.service';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-links.html',
  styleUrl: './navigation-links.css'
})
export class NavigationLinks {
  private uiService = inject(NavlinksUiService);
  
  sections = this.uiService.visibleSections;

  toggle(section: 'game' | 'leaderboard' | 'profile'): void {
    this.uiService.toggleSection(section);
  }
}