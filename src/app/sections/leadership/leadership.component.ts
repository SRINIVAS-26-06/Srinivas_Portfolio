import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-leadership',
  standalone: true,
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements AfterViewInit {

  @ViewChildren('animateCard', { read: ElementRef }) cards!: QueryList<ElementRef>;
  @ViewChildren('leadershipHeading', { read: ElementRef }) heading!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0 }); // triggers when any part enters viewport

    // Observe all cards
    this.cards.forEach(card => observer.observe(card.nativeElement));

    // Observe heading
    this.heading.forEach(h => observer.observe(h.nativeElement));
  }
}
