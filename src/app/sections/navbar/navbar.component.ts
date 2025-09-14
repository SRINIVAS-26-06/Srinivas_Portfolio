import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  private roles = [
    'Full-Stack Developer',
    'Innovator',
    'Lifelong Learner'
  ];
  private typingElement!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.typingElement = this.el.nativeElement.querySelector('.typing-text');
    this.startTypingEffect();
  }

  private startTypingEffect() {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = this.roles[roleIndex];

      if (isDeleting) {
        charIndex--;
        this.typingElement.textContent = currentRole.substring(0, charIndex);
      } else {
        charIndex++;
        this.typingElement.textContent = currentRole.substring(0, charIndex);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 1200); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % this.roles.length;
      }

      setTimeout(type, isDeleting ? 50 : 100); // speed
    };

    type();
  }
}
