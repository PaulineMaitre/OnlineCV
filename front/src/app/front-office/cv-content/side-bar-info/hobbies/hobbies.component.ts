import {Component, Input, OnInit} from '@angular/core';
import {Hobby} from '../../../../models/Hobby';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }
  @Input() hobbies: Hobby[];

  ngOnInit(): void {
  }

}
