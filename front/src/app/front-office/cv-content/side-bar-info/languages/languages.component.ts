import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../../../../models/Language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor() { }
  @Input() languages: Language[];

  ngOnInit(): void {
  }
}
