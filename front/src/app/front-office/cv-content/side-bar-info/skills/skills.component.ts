import {Component, Input, OnInit} from '@angular/core';
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

  @Input() skills: Skill[];
  @Input() test: number;
  @Input() test1: number;

  ngOnInit(): void {
    this.fillProgressBar(2000, 0)
  }

  fillProgressBar(time: number, idSkill: number): void {
    const duration = time/this.skillLevelToPercent(this.skills[idSkill].level);
    for (let i = 0; i < this.skillLevelToPercent(this.skills[idSkill].level); i++) {
      setTimeout(() => {
        this.test = this.skillLevelToPercent(this.skills[idSkill].level) * i/this.skillLevelToPercent(this.skills[idSkill].level)
      }, duration*i);
    }
  }

  skillLevelToPercent(skillLevel: number): number {
    return skillLevel * 20;
  }
}
