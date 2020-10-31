import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-frame-content-form',
  templateUrl: './frame-content-form.component.html',
  styleUrls: ['./frame-content-form.component.css']
})

export class FrameContentFormComponent implements OnInit {
  frameContentForm: FormGroup;
  fontentForm = [
    'Episode I - The Phantom Menace',
    // 'Episode II - Attack of the Clones',
    // 'Episode III - Revenge of the Sith',
  ];
  selectedFile: ImageSnippet;


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

  processFile(imageInput: any) {
    console.log('processing file')
    // const file: File = imageInput.files[0];
    // const reader = new FileReader();
    //
    // reader.addEventListener('load', (event: any) => {
    //
    //   this.selectedFile = new ImageSnippet(event.target.result, file);
    //
    //   this.imageService.uploadImage(this.selectedFile.file).subscribe(
    //       (res) => {
    //
    //       },
    //       (err) => {
    //
    //       })
    // });
    //
    // reader.readAsDataURL(file);
  }
  save() {
    console.log('Function save activated')
  }

  addContentForm() {
    this.fontentForm.push(null);
  }
}
