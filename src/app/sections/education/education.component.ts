import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements AfterViewInit {
  @ViewChildren('animateBox', { read: ElementRef }) boxes!: QueryList<ElementRef>;
  @ViewChildren('animateHeading', { read: ElementRef }) heading!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    this.heading.forEach(h => observer.observe(h.nativeElement));
    this.boxes.forEach((b, index) => {
      b.nativeElement.style.transitionDelay = `${index * 0.3}s`; // staggered effect
      observer.observe(b.nativeElement);
    });
  }
}
