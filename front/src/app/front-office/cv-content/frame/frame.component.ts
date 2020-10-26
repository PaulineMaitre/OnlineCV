import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {FrameContent} from '../../../models/FrameContent';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  constructor() { }
  @Input() frame: FrameContent;
  ngOnInit(): void {
  }

}
