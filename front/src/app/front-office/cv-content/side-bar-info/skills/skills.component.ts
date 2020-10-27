import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/User';
import {Skill} from '../../../../models/Skill';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() {
  }

  @Input() skills: Skill;
  @Input() languages: Skill;
  @Input() test: number;



  ngOnInit(): void {
    this.fillProgressBar(50000, 0)
  }

  fillProgressBar(time: number, idSkill: number): void {
    const duration = time/this.skillLevelToPercent(this.skills[idSkill].level);
    console.log(duration);
    console.log(this.skillLevelToPercent(this.skills[idSkill].level));
    for (let i = 0; i < this.skillLevelToPercent(this.skills[idSkill].level); i++) {
      setTimeout(() => {
        this.test = this.skillLevelToPercent(this.skills[idSkill].level) * i/this.skillLevelToPercent(this.skills[idSkill].level)
      }, duration);
    }
  }

  skillLevelToPercent(skillLevel: number): number {
    return skillLevel * 20;
  }
}
