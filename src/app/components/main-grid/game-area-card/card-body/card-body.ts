import { Component, inject } from '@angular/core';
import { GameImage } from './game-image/game-image';
import { GameIframe } from './game-iframe/game-iframe';
import { GameService } from '../../../../services/game.service';

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [GameImage, GameIframe],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css'
})
export class CardBody {
  protected gameService = inject(GameService);
}