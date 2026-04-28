import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CategoryCard {
  name: string;
  description: string;
  courseCount: number;
  learnerCount: string;
  nextCohort: string;
  icon: string;
  accent: string;
  softAccent: string;
}

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  readonly categories: CategoryCard[] = [
    {
      name: 'Chemistry',
      description: 'Lab fundamentals, chemical analysis, and research-ready concepts.',
      courseCount: 14,
      learnerCount: '1.2k learners',
      nextCohort: 'Starts 06 May',
      icon: 'fa-solid fa-flask-vial',
      accent: '#0f766e',
      softAccent: 'rgba(15, 118, 110, 0.12)'
    },
    {
      name: 'Graphic Design',
      description: 'Brand systems, social creatives, typography, and visual storytelling.',
      courseCount: 22,
      learnerCount: '2.9k learners',
      nextCohort: 'Starts 02 May',
      icon: 'fa-solid fa-pen-ruler',
      accent: '#ec4899',
      softAccent: 'rgba(236, 72, 153, 0.12)'
    },
    {
      name: 'Software',
      description: 'Frontend, backend, testing, and production-ready engineering workflows.',
      courseCount: 36,
      learnerCount: '4.6k learners',
      nextCohort: 'Starts 30 Apr',
      icon: 'fa-solid fa-code',
      accent: '#2563eb',
      softAccent: 'rgba(37, 99, 235, 0.12)'
    },
    {
      name: 'Mobile App',
      description: 'UX patterns, Flutter basics, Android UI, and launch-focused projects.',
      courseCount: 18,
      learnerCount: '2.1k learners',
      nextCohort: 'Starts 04 May',
      icon: 'fa-solid fa-mobile-screen-button',
      accent: '#7c3aed',
      softAccent: 'rgba(124, 58, 237, 0.12)'
    },
    {
      name: 'Finance',
      description: 'Core accounting, startup finance, analysis frameworks, and business math.',
      courseCount: 11,
      learnerCount: '1.4k learners',
      nextCohort: 'Starts 08 May',
      icon: 'fa-solid fa-chart-line',
      accent: '#f59e0b',
      softAccent: 'rgba(245, 158, 11, 0.14)'
    },
    {
      name: 'Art & Humanities',
      description: 'Creative practice, culture studies, communication, and research writing.',
      courseCount: 16,
      learnerCount: '1.8k learners',
      nextCohort: 'Starts 10 May',
      icon: 'fa-solid fa-palette',
      accent: '#ef4444',
      softAccent: 'rgba(239, 68, 68, 0.12)'
    }
  ];
}
