import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {Network} from '../../../../models/Network';
import {Skill} from '../../../../models/Skill';
import {Language} from '../../../../models/Language';
import {FrameContent} from '../../../../models/FrameContent';
import {FrameItem} from '../../../../models/FrameItem';
import {User} from '../../../../models/User';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-frame-content-form',
  templateUrl: './frame-content-form.component.html',
  styleUrls: ['./frame-content-form.component.css']
})

export class FrameContentFormComponent implements OnInit {

  frameContentForm: FormGroup;
  contentForm = [
    'Episode I - The Phantom Menace',
    // 'Episode II - Attack of the Clones',
    // 'Episode III - Revenge of the Sith',
  ];
  constructor(private fb: FormBuilder, private userService: UserService) {}

  // @Input() title: string;
  @Input() user: User;

  ngOnInit(): void {
    this.createFrameContentForm();
  }
  createFrameContentForm() {
    this.frameContentForm = this.fb.group({
      title: ['', Validators.required],
      logo: ['', Validators.required],
      frameItem: this.fb.array([])
    });
  }

  get frameItemForm() {
    return this.frameContentForm.get('frameItem') as FormArray
  }
  //
  // get title() {
  //   return this.frameItemForm.get('title');
  // }
  // get logoItem() {
  //   return this.frameContentForm.get('frameItem').get('logoItem');
  // }
  // get titleItem() {
  //   return this.frameContentForm.get('frameItem').get('titleItem');
  // }
  // get period() {
  //   return this.frameContentForm.get('frameItem').get('period');
  // }
  // get location() {
  //   return this.frameContentForm.get('frameItem').get('location');
  // }
  // get logo() {
  //   return this.frameContentForm.get('frameItem').get('logo');
  // }
  // get content() {
  //   return this.frameContentForm.get('frameItem').get('content');
  // }


  addFrameItem () {
    const frame = this.fb.group({
      titleItem: ['', Validators.required],
      period: ['', Validators.required],
      location: ['', Validators.required],
      logoItem: ['', Validators.required],
      content: ['', Validators.required],
        })
    this.frameItemForm.push(frame)
  }

  deleteFrameItem(i) {
    this.frameItemForm.removeAt(i)
  }



  // getUser(): void {
  //   this.userService.getUserById(1).subscribe(data => {
  //     this.user = data;
  //   });
  // }

  save(): void {
    if (this.frameContentForm.valid) {
      this.user.frame.push(new FrameContent({
            title: this.frameContentForm.get('title').value,
            order: 1,
            logo: this.frameContentForm.get('logo').value,
            frameItem: [new FrameItem({
              title:'item name',
              period: 'Du 3 au 7 janvier',
              location: 'Paris',
              order: 2,
              logo: '',
              content:'content of the item',
              frame: 1,
            })],
            user: this.user.id,
          }
      ));
      console.log('Trying to send : ', this.frameContentForm.value)
      this.userService.updateUser(this.user).subscribe();
    } else {
      console.log('form invalide')
    }
  }

  addContentForm() {
    this.contentForm.push(null);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.contentForm, event.previousIndex, event.currentIndex);
  }
}
