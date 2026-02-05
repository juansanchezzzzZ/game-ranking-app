import { Component } from '@angular/core';
import { Title} from './title/title';

@Component({
  selector: 'app-card-header',
  imports: [Title],
  templateUrl: './card-header.html',
  styleUrl: './card-header.css',
})
export class CardHeader {

}
