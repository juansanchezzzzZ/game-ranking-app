import { Component } from '@angular/core';
import { PaginationFooter } from './pagination-footer/pagination-footer';

@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [PaginationFooter],
  templateUrl: './card-footer.html',
  styleUrl: './card-footer.css',
})
export class CardFooter {}
