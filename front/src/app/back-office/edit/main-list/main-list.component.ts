import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-frame-content',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  containers = [
    'Episode I - The Phantom Menace',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
  ];

  toAdd = [
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker']

// frPropo = FrameContent(Experience,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())
// frPropo = FrameContent(Formation,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())
// frPropo = FrameContent(Projets,[Frameitem('EPF'),Frameitem('Lycée'),Frameitem())

  constructor() { }

  ngOnInit() { }

  add() {
    this.containers.push(this.toAdd[1]);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.containers, event.previousIndex, event.currentIndex);
  }
}


