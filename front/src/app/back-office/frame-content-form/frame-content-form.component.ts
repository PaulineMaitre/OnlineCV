import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-frame-content-form',
  templateUrl: './frame-content-form.component.html',
  styleUrls: ['./frame-content-form.component.css']
})
export class FrameContentFormComponent implements OnInit {
  frameContentForm: FormGroup;
  containers = [
    'Episode I - The Phantom Menace',
    // 'Episode II - Attack of the Clones',
    // 'Episode III - Revenge of the Sith',
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createFrameContentForm();
  }
  ngOnInit(): void {
  }
  createFrameContentForm() {
    this.frameContentForm = this.fb.group({
      title: ['', Validators.required],
      logo: ['', Validators.required],
    });
  }

  add() {
    this.containers.push(null);
  }
}
