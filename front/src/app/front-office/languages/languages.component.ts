import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }
  languageLevelToPercent(languageLevel: number): number {
    return languageLevel * 20;
  }

}
