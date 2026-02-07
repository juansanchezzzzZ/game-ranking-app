import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-footer.html',
  styleUrls: ['./card-footer.css'],
})
export class CardFooter {
  @Input() isLogin!: boolean;

  @Output() onLogin = new EventEmitter<void>();
  @Output() onRegister = new EventEmitter<void>();
}
