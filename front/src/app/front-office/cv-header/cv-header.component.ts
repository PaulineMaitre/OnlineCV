import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CvHeaderComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User;

  ngOnInit(): void {
    this.user = this.userService.getUserTest();
  }

}
