import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationFooter } from './pagination-footer/pagination-footer';

@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [CommonModule, PaginationFooter],
  templateUrl: './card-footer.html',
  styleUrl: './card-footer.css'
})
export class CardFooter {}