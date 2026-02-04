import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  @Input() text: string = '';
}
