import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() : void {
    this.userForm = this.fb.group({
      inFirstname: ['Jean', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      inLastname: ['DUPONT', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      inMail: ['jean.dupont@du', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      inPhone: ['07', [Validators.required, Validators.pattern('^[0-9 %+]+')]],
      inPicture:['toto.jpeg',[Validators.required]],
      inDate: ['12/07/1983'],
      inAddress: ['Paris', [Validators.required]],
      inBio: ['Bonjour, je suis M.Dupont, un nouvel arrivant dans la BDD !'],
    });
  }

  createUser(): void {
      if (this.userForm.valid){
        this.user = {
          id: 0,
          languages: [], skills: [],
          firstName:this.userForm.get('inFirstname').value,
          lastName: this.userForm.get('inLastname').value,
          email: this.userForm.get('inMail').value,
          phoneNumber: this.userForm.get('inPhone').value,
          picture: this.userForm.get('inPicture').value,
          birthDate: new Date('2019-05-27'),
          address: this.userForm.get('inAddress').value,
          bio: this.userForm.get('inBio').value
        };
        console.log('user send : ');
        this.userService.createUser(this.user).subscribe();
        this.router.navigateByUrl('');
      }
  }
  get infirstName() {
    return this.userForm.get('infirstName');
  }
  get inlastName() {
    return this.userForm.get('inlastName');
  }
  get inemail() {
    return this.userForm.get('inemail');
  }
  get inphoneNumber() {
    return this.userForm.get('inphoneNumber');
  }
  get inpicture() {
    return this.userForm.get('inpicture');
  }
  get inbirthDate() {
    return this.userForm.get('inbirthDate');
  }
  get inaddress() {
    return this.userForm.get('inaddress');
  }
  get inbio() {
    return this.userForm.get('inbio');
  }
}
