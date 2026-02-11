import { Component } from '@angular/core';
import { RankingsTable } from './rankings-table/rankings-table';

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [RankingsTable],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css',
})
export class CardBody {}