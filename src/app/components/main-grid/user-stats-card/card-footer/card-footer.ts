import { Component } from '@angular/core';
import { EditProfileButton } from './edit-profile-button/edit-profile-button';

@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [EditProfileButton],
  templateUrl: './card-footer.html',
  styleUrl: './card-footer.css',
})
export class CardFooter {}
