import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); // start anim as soon as 10% enters

    // Heading
    const heading = document.querySelector('#achievements h2');
    if (heading) observer.observe(heading);

    // Cards
    const cards = document.querySelectorAll('.achievement-card');
    cards.forEach(card => observer.observe(card));
  }
}
