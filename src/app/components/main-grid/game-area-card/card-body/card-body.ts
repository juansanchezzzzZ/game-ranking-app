import { Component } from '@angular/core';
import { GameImage } from './game-image/game-image';

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [GameImage],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css'
})
export class CardBody {}
