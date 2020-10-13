import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { getUsers } from '../services/user.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {

  // inName = new FormControl('');

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      inLastname: ['', Validators.required],
      inFirstname: ['', Validators.required],
      inSkills: ['', Validators.required],
      inSocial: ['', Validators.required],
      inInfo: ['', Validators.required],
      inHobbies: ['', Validators.required],
    });
  }


  // New = new User()

  ngOnInit(): void {
    // this.getUsers();
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(
          `Name: ${this.userForm.value.inLastname} Email: ${this.userForm.value.inFirstname}`
      );
    }

    // getUsers(): void {
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.userService.getHero(id)
    //       .subscribe(hero => this.hero = hero);
    // }
    //
    // goBack(): void {
    //   this.location.back();
    // }
    //
    // save(): void {
    //   this.heroService.updateHero(this.hero)
    //       .subscribe(() => this.goBack());
    // }
    // addUser(firstName: string, lastName: string) : void {
    //   console.log(`Adding: ${firstName} ${lastName} to the database (Faut faire la fonction pour ça)`);
    // }
    // getUser(): void {
    //   this.userService.getUsers()
    //     .subscribe(users => this.users = users);
    // }
  }
}
