import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../../../../models/Language';

declare var $: any;

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor() { }
  @Input() languages: Language;

  ngOnInit(): void {
  }
  languageLevelToPercent(languageLevel: number): number {
    return languageLevel * 20;
  }


}
