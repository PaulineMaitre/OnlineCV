import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-frame-content',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  FrameTitle = [
    'Formation',
    'Expériences professionnelles',
    'Projets',
  ];

// frPropo = FrameContent(Experience,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())
// frPropo = FrameContent(Formation,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())
// frPropo = FrameContent(Projets,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())

  constructor() { }

  ngOnInit() { }

  add() {
    this.FrameTitle.push('Projets');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.FrameTitle, event.previousIndex, event.currentIndex);
  }
}


