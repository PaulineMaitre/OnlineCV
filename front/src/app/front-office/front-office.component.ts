import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})
export class FrontOfficeComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute,) { }
  @Input() userId: number;
  user: User;

  ngOnInit(): void {
    this.getUserId()
  }

  getUserId(): void {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }
}
