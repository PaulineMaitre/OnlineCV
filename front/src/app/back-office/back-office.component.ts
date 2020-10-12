import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {

  constructor(
    // private cartService: CartService,
    // private formBuilder: FormBuilder,
  ) { }
  inName = new FormControl('');
  inSocial = new FormControl('');
  inSkills = new FormControl('');
  inProjects = new FormControl('');
  inHobbies = new FormControl('');
  inInfo = new FormControl('');

  ngOnInit(): void {
  }

  // addUser(user: User) : void {
  //
  // }

  // getUser(): void {
  //   this.userService.getUsers()
  //     .subscribe(users => this.users = users);
  // }
}
