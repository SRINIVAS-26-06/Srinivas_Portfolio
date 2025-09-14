import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faReact, faNodeJs, faAngular, faGithub, faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLeaf, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  // Icons
  faReact = faReact;
  faNodeJs = faNodeJs;
  faAngular = faAngular;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDatabase = faDatabase;
  faLeaf = faLeaf;
  faDownload = faDownload;

  ngAfterViewInit(): void {
    const icons = document.querySelectorAll('.rotating-icon');
    let angle = 0;

    setInterval(() => {
      angle += 2;
      icons.forEach((icon, index) => {
        const radius = 110;
        const x = Math.cos((angle + index * (360 / icons.length)) * (Math.PI / 180)) * radius;
        const y = Math.sin((angle + index * (360 / icons.length)) * (Math.PI / 180)) * radius;
        (icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    }, 40);

    // Intersection animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('#about h2, #about p, #about a, .animation-container');
    elements.forEach(el => observer.observe(el));
  }
}
