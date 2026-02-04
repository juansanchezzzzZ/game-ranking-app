import { Component } from '@angular/core';
import { StartGameButton } from './start-game-button/start-game-button';

@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [StartGameButton],
  templateUrl: './card-footer.html',
  styleUrl: './card-footer.css'
})
export class CardFooter {}
