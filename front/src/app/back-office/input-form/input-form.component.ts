import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  map = new Map<string, string>();

  constructor() { }

  ngOnInit(): void {
  }

  createMap() : void {
    this.map.set('class', 'firstName')
  }

  @Input()
  inputForm : Map<string, string>;
}
