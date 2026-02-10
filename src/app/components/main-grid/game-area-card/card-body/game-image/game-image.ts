import { Component, inject } from '@angular/core';
import { GameService } from '../../../../../services/game.service';

@Component({
  selector: 'app-game-image',
  standalone: true,
  templateUrl: './game-image.html',
  styleUrl: './game-image.css'
})
export class GameImage {
  protected gameService = inject(GameService);
}