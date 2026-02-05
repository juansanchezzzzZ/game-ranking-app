import { Component } from '@angular/core';
import {CardHeader} from './card-header/card-header';
import {CardBody} from './card-body/card-body';
import {CardFooter} from './card-footer/card-footer';

@Component({
  selector: 'app-user-stats-card',
  imports: [CardHeader, CardBody, CardFooter],
  templateUrl: './user-stats-card.html',
  styleUrl: './user-stats-card.css',
})
export class UserStatsCard {}
