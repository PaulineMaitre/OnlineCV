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

  ngOnInit(): void {
    for(let i = 0; i < this.skills.length; i++) {
      this.fillProgressBar(1000, i)
    }
  }

  fillProgressBar(time: number, idSkill: number): void {
    const level = this.skillLevelToPercent(this.skills[idSkill].level)
    const duration = time/level;
    for (let i = 0; i < level; i++) {
      setTimeout(() => {
        this.skills[idSkill].level = level * i/level;
      }, duration*i);
    }
  }

  skillLevelToPercent(skillLevel: number): number {
    return skillLevel * 20;
  }
}
