import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {

  // inName = new FormControl('');
  user: User;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    this.userService.getUserById().subscribe(data => {
      this.user = data;
    });
  }
  updateUser(): void {
    this.user.logo = 'Raphael';
    console.log(this.user.logo);
    this.userService.putUpdateUser(this.user).subscribe();
  }
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(
          `Name: ${this.userForm.value.inLastname} Email: ${this.userForm.value.inFirstname}`
      );
    }
  }
}
