import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainGrid } from "./components/main-grid/main-grid";
import { TopNavigationBar } from "./components/top-navigation-bar/top-navigation-bar";
import { AuthGrid } from './components/auth-grid/auth-grid';

@Component({
  selector: 'app-root',
  imports: [ MainGrid, TopNavigationBar, AuthGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('game-ranking-app');
}
