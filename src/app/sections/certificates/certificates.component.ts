import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');   // animate on enter
        } else {
          entry.target.classList.remove('visible'); // reset when out of view
        }
      });
    }, { threshold: 0.1 }); // start as soon as 10% enters viewport

    // Observe heading
    const heading = document.querySelector('#certificates h2');
    if (heading) observer.observe(heading);

    // Observe all cards
    const cards = document.querySelectorAll('.certificate-card');
    cards.forEach(card => observer.observe(card));
  }
}
