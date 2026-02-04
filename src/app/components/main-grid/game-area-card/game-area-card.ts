import { Component } from '@angular/core';
import { CardHeader } from './card-header/card-header';
import { CardBody } from './card-body/card-body';
import { CardFooter } from './card-footer/card-footer';

@Component({
  selector: 'app-game-area-card',
  standalone: true,
  imports: [CardHeader, CardBody, CardFooter],
  templateUrl: './game-area-card.html'
})
export class GameAreaCard {}
