import { Component } from '@angular/core';
import { Logo } from './logo/logo';
import { NavigationLinks } from './navigation-links/navigation-links';
import { UserControls } from './user-controls/user-controls';

@Component({
  selector: 'app-top-navigation-bar',
  standalone: true,
  imports: [Logo, NavigationLinks, UserControls],
  templateUrl: './top-navigation-bar.html',
  styleUrl: './top-navigation-bar.css',
})
export class TopNavigationBar {}
