import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-frame-item-form',
  templateUrl: './frame-item-form.component.html',
  styleUrls: ['./frame-item-form.component.css']
})
export class FrameItemFormComponent implements OnInit {

  frameItemForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createFrameItemForm();
  }

  createFrameItemForm() {
    this.frameItemForm = this.fb.group({
      title: ['', Validators.required],
      period: ['', Validators.required],
      location: ['', Validators.required],
      logo: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  saveFrame(): void {
    console.log(this.frameItemForm.value);
    if (this.frameItemForm.dirty && this.frameItemForm.valid) {
      alert(
          `Formulaire complet !`
      );
    }
    else {
      alert('Il te manque des cases !');
    }
  }

}
