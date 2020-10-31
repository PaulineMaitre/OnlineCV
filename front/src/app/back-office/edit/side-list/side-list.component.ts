import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Network} from '../../../models/Network';
import {Skill} from '../../../models/Skill';

@Component({
  selector: 'app-list-frame-content-side',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.css']
})
export class SideListComponent implements OnInit {

  contentBlock = [
    {name: 'Réseaux sociaux', elements: ['name','logo','link',], type:'socialLink'},
    {name: 'Langues', elements: ['name','logo','level',],type:'languages'},
    {name: 'Compétences',elements: ['name','logo','level',],type:'skills'}
  ]
  containers = [
    'Episode I - The Phantom Menace',
  ];
  toAdd = [
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker']

  @Input()
  names: string;
  fields: [string];
  type: string;

  constructor() { }

  ngOnInit() { }

  add() {
    this.containers.push(this.toAdd[1]);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.containers, event.previousIndex, event.currentIndex);
  }
}
