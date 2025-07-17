import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Smart Travel Planner',
      description:
        'AI-based travel assistant that adjusts itinerary based on weather, currency, and budget.',
      image: 'assets/projects/travel.png',
      technologies: [
        'Angular',
        'OpenWeather API',
        'Currency API',
        'Responsive UI',
      ],
      github: 'https://github.com/SRINIVAS-26-06/smart-travel-planner',
      demo: 'hi',
    },
    {
      title: 'Weather Search App',
      description:
        'A responsive web application that allows users to search real-time weather information using the OpenWeather API. Developed using HTML, CSS, and JavaScript.',
      image: 'assets/projects/weather.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      github: 'https://github.com/SRINIVAS-26-06/Weather-Search-App',
      demo: 'hi', 
    },
    {
      title: 'Smart Agriculture',
      description:
        'AI-powered crop yield prediction and recommendation system built with Flask. Achieved 85% accuracy, improving agricultural planning and reducing crop wastage by 15%.',
      image: 'assets/projects/agriculture.png',
      technologies: ['Python', 'Flask', 'Machine Learning', 'Responsive UI'],
      github: 'https://github.com/SRINIVAS-26-06/smart-travel-planner',
      demo: 'https://flask-dxyk.onrender.com/',
    },
  ];
}
