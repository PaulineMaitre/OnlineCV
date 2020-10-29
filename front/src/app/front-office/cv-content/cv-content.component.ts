import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.css']
})
export class CvContentComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }

}
