import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainGrid } from "./components/main-grid/main-grid";
import { TopNavigationBar } from "./components/top-navigation-bar/top-navigation-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainGrid, TopNavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('game-ranking-app');
}
