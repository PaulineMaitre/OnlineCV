import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {Language} from '../models/Language';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
export class FrontOfficeComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() userId = 1;
  user: User;

  ngOnInit(): void {
    // this.userService.getUserById().subscribe(data => {
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }
}
