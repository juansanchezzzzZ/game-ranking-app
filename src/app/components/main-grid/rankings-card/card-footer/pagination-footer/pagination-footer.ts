import { Component } from '@angular/core';
import { PreviousButton } from './previous-button/previous-button';
import { NextButton } from './next-button/next-button';
import { StatusText } from './status-text/status-text';

@Component({
  selector: 'app-pagination-footer',
  standalone: true,
  imports: [PreviousButton, StatusText, NextButton],
  templateUrl: './pagination-footer.html',
  styleUrl: './pagination-footer.css',
})
export class PaginationFooter {}
