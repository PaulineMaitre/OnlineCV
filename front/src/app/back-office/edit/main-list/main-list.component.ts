import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {User} from '../../../models/User';

@Component({
  selector: 'app-list-frame-content',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  FrameTitle = [
    'Formation',
    // 'Expériences professionnelles',
    // 'Projets',
  ];
  @Input() user: User;

  constructor() { }

  ngOnInit() { }

  add() {
    this.FrameTitle.push('Projets');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.FrameTitle, event.previousIndex, event.currentIndex);
  }
}


