import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
  styleUrls: ['./side-form.component.css']
})
export class SideFormComponent implements OnInit {

  constructor() { }

    @Input()
    name: string;

  ngOnInit(): void {
  }

}
