import { Component } from '@angular/core';
import { CardHeader } from './card-header/card-header';
import { CardBody } from './card-body/card-body';
import { CardFooter } from './card-footer/card-footer';

@Component({
  selector: 'app-rankings-card',
  imports: [CardHeader, CardBody, CardFooter],
  templateUrl: './rankings-card.html',
  styleUrl: './rankings-card.css',
})
export class RankingsCard {

}
