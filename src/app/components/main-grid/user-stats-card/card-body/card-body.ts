import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarImage } from './avatar-image/avatar-image';
import { StatsList } from './stats-list/stats-list';

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [CommonModule, AvatarImage, StatsList],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css'
})
export class CardBody {}