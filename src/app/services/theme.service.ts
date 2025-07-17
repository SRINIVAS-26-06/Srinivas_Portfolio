import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  toggleTheme(): void {
    this.darkMode = !this.darkMode;

    const theme = this.darkMode ? 'dark-theme' : 'light-theme';

    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
  }

  get isDarkMode(): boolean {
    return this.darkMode;
  }
}
