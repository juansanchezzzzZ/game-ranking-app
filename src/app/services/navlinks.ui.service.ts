import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavlinksUiService {
  readonly visibleSections = signal({
    game: true,
    leaderboard: true,
    profile: true
  });

  toggleSection(section: 'game' | 'leaderboard' | 'profile'): void {
    this.visibleSections.update((state) => ({
      ...state,
      [section]: !state[section],
    }));
  }
}