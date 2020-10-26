import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }
  formatBirthDate(birthDate: Date): string {
    const date = new Date(birthDate);
    const stringBirthDate = date.getDate() + '/' + (date.getMonth() + 1 )+ '/' + date.getFullYear();
    return stringBirthDate;
  }

}
