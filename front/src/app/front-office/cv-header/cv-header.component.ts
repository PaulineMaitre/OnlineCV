import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CvHeaderComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }
  clickEvent(): void {
    console.log('HELLO');
  }

}
