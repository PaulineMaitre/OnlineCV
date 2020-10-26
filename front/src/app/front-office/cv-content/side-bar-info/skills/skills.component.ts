import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/User';
import {Skill} from '../../../../models/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  @Input() skills: Skill;
  @Input() languages: Skill;

  ngOnInit(): void {
  }
  skillLevelToPercent(skillLevel: number): number {
    return skillLevel * 20;
  }


}
