import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      infirstName:['',[Validators.required,Validators.minLength(2), Validators.maxLength(25)]],
      inlastName:['',[Validators.required,Validators.minLength(2), Validators.maxLength(25)]],
      inemail: ['',[Validators.required, Validators.email,Validators.minLength(5), Validators.maxLength(50)]],
      inphoneNumber:['',[Validators.required, Validators.pattern('^[0-9 %+]+')]],
      inpicture:['',[Validators.required]],
      inbirthDate:['',[Validators.required]],
      inaddress: ['',[Validators.required]],
      inbio: ['',[Validators.required]],
    })
  }

  createUser(): void {
      if (this.userForm.valid){
        this.user = {
          id: 0, languages: [], skills: [],
          firstName:this.userForm.get('infirstName').value,
          lastName: this.userForm.get('inlastName').value,
          email: this.userForm.get('inemail').value,
          phoneNumber: this.userForm.get('inphoneNumber').value,
          picture: this.userForm.get('inpicture').value,
          address: this.userForm.get('inaddress').value,
          bio: this.userForm.get('inbio').value
        };

        this.userService.createUser(this.user).subscribe();
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
