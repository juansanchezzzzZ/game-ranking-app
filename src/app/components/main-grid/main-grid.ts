import { Component } from '@angular/core';
import {inject} from '@angular/core';
import { UserFirebaseService } from '../../services/user-firebase.service';
import { UserService } from '../../services/user.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [],
  templateUrl: './main-grid.html',
  styleUrl: './main-grid.css'
})
export class MainGrid implements OnInit {
  userService = inject(UserService); 
  userFirebaseService = inject(UserFirebaseService);

  ngOnInit() {
    this.userFirebaseService.getUsers().subscribe(users => {
      console.log(users);
    });


}
}
