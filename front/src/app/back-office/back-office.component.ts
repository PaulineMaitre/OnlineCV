import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder} from '@angular/forms';
import { getUsers } from '../services/user.service';

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

  // Create new user ==> Add User

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
  }
  // addUser(user: User) : void {
  //
  // }

  // getUser(): void {
  //   this.userService.getUsers()
  //     .subscribe(users => this.users = users);
  // }
}
