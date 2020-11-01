import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User;
  @Input() userId: number;

  constructor(private userService: UserService,
              private router: Router,private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.getUserId();
    setTimeout(() => {}, 2000);
  }

  getUserId(): void {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }

}
