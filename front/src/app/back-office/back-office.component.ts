import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Skill} from '../models/Skill';
import {Network} from '../models/Network';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
})
export class BackOfficeComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  newSkill:Skill;
  newSocial:Network;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getUser();
    setTimeout(() => {  /*console.log(this.user);*/ }, 2000);
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
    this.userService.getUserById(1).subscribe(data => {
      this.user = data;
    });
  }

  updateUserFromForm(): void {
   /* this.user.logo = 'Raphael';
    this.user.firstName = this.userForm.get('inFirstname').value;
    this.user.lastName = this.userForm.get('inLastname').value;
    this.user.email = this.userForm.get('inMail').value;
    this.user.bio = this.userForm.get('inBio').value;
    this.user.phoneNumber = this.userForm.get('inphone').value;
    this.userService.updateUser(this.user).subscribe();
    console.log(`Form updated : User is now ${this.user.firstName} ${this.user.lastName}`);*/
    /*this.newSocial = {
      id:this.user.skills.length++,
      name: this.userForm.get('inSocial').value,
      link: '',
      logo: '',
    }
    this.userService.createNetwork(this.newSocial).subscribe();*/
    this.newSkill = {
      id:this.user.skills.length++,
      // name:this.userForm.get('inSkills').value,
      name: 'superskill',
      logo:'',
      level:5,
      user: this.user.id};
    this.userService.createSkill(this.newSkill).subscribe();
    console.log(`Fields created`);
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
