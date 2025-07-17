// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { Component,signal } from '@angular/core';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { LeadershipComponent } from './sections/leadership/leadership.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { AchievementsComponent } from './sections/achievements/achievements.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { CertificatesComponent } from './sections/certificates/certificates.component';
import { EducationComponent } from './sections/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    LeadershipComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    AchievementsComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
}

