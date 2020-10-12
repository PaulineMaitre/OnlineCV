import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
  // template: `
  //   Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  // `
})
export class BackOfficeComponent implements OnInit {

  constructor(
    // private cartService: CartService,
    // private formBuilder: FormBuilder,
  ) { }
  inName = new FormControl('');
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
