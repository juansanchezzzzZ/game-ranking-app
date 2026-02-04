import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [],
  templateUrl: './main-grid.html',
  styleUrl: './main-grid.css',
})
export class MainGrid implements OnInit {
  users: User[] = [];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users => {
      console.log(users);
    }));
  }
}
