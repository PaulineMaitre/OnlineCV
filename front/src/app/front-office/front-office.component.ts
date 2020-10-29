import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
export class FrontOfficeComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User;

  ngOnInit(): void {
    // this.userService.getUserById().subscribe(data => {
    this.userService.getUserById(2).subscribe(data => {
      this.user = data;
    });
  }
}
