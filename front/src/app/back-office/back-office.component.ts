import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
// import { getUsers } from '../services/user.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {

  // inName = new FormControl('');
  userForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      inLastname: ['', Validators.required],
      inFirstname: ['', Validators.required],
      inMail: ['', Validators.required],
      inSkills: ['', Validators.required],
      inSocial: ['', Validators.required],
      inInfo: ['', Validators.required],
      inHobbies: ['', Validators.required],
    });
  }

  // New = new User()

  ngOnInit(): void {
    // this.user = this.userService.getUserById().subscribe(user => this.user = user);
  }

  saveUser(): void {
    console.log(this.userForm.value);
    if (this.userForm.dirty && this.userForm.valid) {
      alert(
          `Formulaire complet !
On va te trouver un travail ${this.userForm.get('inFirstname').value} ${this.userForm.get('inLastname').value} !`
      );
    }
    else {
      alert('Il te manque des cases !');
    }

    // save(): void {
    //   this.heroService.updateHero(this.hero)
    //       .subscribe(() => this.goBack());
    // }

    // getUser(): void {
    //   this.userService.getUsers()
    //     .subscribe(users => this.users = users);
    // }
  }
}
