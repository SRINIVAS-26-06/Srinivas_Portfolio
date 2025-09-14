import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements AfterViewInit {

  @ViewChildren('animateCard') cards!: QueryList<ElementRef>;
  @ViewChildren('experienceHeading') heading!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, { threshold: 0 }); // triggers when even a bit enters viewport

    this.cards.forEach(card => observer.observe(card.nativeElement));
    this.heading.forEach(h => observer.observe(h.nativeElement));
  }
}
