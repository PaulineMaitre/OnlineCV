import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }
  skillLevelToPercent(skillLevel: number): number {
    return skillLevel * 20;
  }


}
