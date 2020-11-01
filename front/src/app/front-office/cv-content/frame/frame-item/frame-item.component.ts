import {Component, Input, OnInit} from '@angular/core';
import {FrameContent} from '../../../../models/FrameContent';

@Component({
  selector: 'app-frame-item',
  templateUrl: './frame-item.component.html',
  styleUrls: ['./frame-item.component.css']
})
export class FrameItemComponent implements OnInit {

  constructor() { }
  @Input() content: FrameContent;
  ngOnInit(): void {
  }

}
