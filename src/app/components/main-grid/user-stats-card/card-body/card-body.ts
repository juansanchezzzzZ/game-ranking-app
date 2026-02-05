import { Component } from '@angular/core';
import { AvatarImage } from './avatar-image/avatar-image';
import { StatsList } from './stats-list/stats-list';

@Component({
  selector: 'app-card-body',
  imports: [AvatarImage, StatsList],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css',
})
export class CardBody {

}
