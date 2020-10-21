import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {

  userForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getUser();
    setTimeout(() => {  console.log(this.user); }, 2000);
  }

  createForm() {
    // Mettre des validators ?
    this.userForm = this.fb.group({
      inLastname: [''],
      inFirstname: [''],
      inMail: [''],
      inSkills: [''],
      inSocial: [''],
      inBio: [''],
      inHobbies: [''],
      inphone: [''],
    });
  }

  getUser(): void {
    this.userService.getUserById().subscribe(data => {
      this.user = data;
    });
  }

  updateUserFromForm(): void {
    // this.user.logo = 'Raphael';
    this.user.firstName = this.userForm.get('inFirstname').value;
    this.user.lastName = this.userForm.get('inLastname').value;
    this.user.email = this.userForm.get('inMail').value;
    this.user.socialLink.push(this.userForm.get('inSocial').value);
    this.user.skills.push(this.userForm.get('inSkills').value);
    this.user.bio = this.userForm.get('inBio').value;
    this.user.phoneNumber = this.userForm.get('inphone').value;
    this.userService.putUpdateUser(this.user).subscribe();
    console.log(`Form updated : User is now ${this.user.firstName} ${this.user.lastName}`);
  }

//   saveUser() {
//     if (this.userForm.dirty && this.userForm.valid) {
//       alert(
//           `Formulaire complet !
// On va te trouver un travail ${this.userForm.get('inFirstname').value} ${this.userForm.get('inLastname').value} !`
//       );
//     }
//     else {
//       alert('Il te manque des cases !');
//     }
//   }
}
