import { Component, inject } from '@angular/core';
import { GameService } from '../../../../../services/game.service';

@Component({
  selector: 'app-start-game-button',
  standalone: true,
  templateUrl: './start-game-button.html',
  styleUrl: './start-game-button.css'
})
export class StartGameButton {
  protected gameService = inject(GameService);

  handleAction() {
    if (this.gameService.isPlaying()) {
      this.gameService.stopGame();
    } else {
      this.gameService.startGame();
    }
  }
}