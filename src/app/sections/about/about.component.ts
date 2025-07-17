import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const icons = document.querySelectorAll('.rotating-icon');
    let angle = 0;

    setInterval(() => {
      angle += 3;
      icons.forEach((icon, index) => {
        const radius = 100;
        const x = Math.cos((angle + index * 72) * (Math.PI / 180)) * radius;
        const y = Math.sin((angle + index * 72) * (Math.PI / 180)) * radius;
        (icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    }, 30);
  }
}
