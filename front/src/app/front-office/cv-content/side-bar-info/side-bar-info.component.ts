import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';

@Component({
  selector: 'app-side-bar-info',
  templateUrl: './side-bar-info.component.html',
  styleUrls: ['./side-bar-info.component.css']
})
export class SideBarInfoComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }

}
