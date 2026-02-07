import { Component, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { MainGrid } from "./components/main-grid/main-grid";
import { TopNavigationBar } from "./components/top-navigation-bar/top-navigation-bar";
import { AuthGrid } from './components/auth-grid/auth-grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainGrid, TopNavigationBar, AuthGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private auth = inject(Auth);
  
  forceAuthMode = true; 

  user$ = user(this.auth); 
}