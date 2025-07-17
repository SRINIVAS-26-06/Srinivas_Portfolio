import { Component } from '@angular/core';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone:true,
  imports:[SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent { }
