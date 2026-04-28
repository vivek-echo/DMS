import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

interface DashboardStat {
  label: string;
  value: number;
  note: string;
  icon: string;
  accent: string;
  softAccent: string;
}

interface DashboardCourse {
  id: number;
  name: string;
  progress: number;
  lessonCount: number;
  duration: string;
  accent: string;
  softAccent: string;
  bannerImage: string;
}

interface DashboardActivity {
  text: string;
  time: string;
  icon: string;
  accent: string;
  softAccent: string;
}

interface DashboardTask {
  title: string;
  course: string;
  timeline: string;
  accent: string;
  softAccent: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly learnerName = 'Aarav';

  readonly stats: DashboardStat[] = [
    {
      label: 'Enrolled Courses',
      value: 5,
      note: 'Across development, design and CAD tracks',
      icon: 'fa-solid fa-book-open-reader',
      accent: '#2563eb',
      softAccent: 'rgba(37, 99, 235, 0.12)'
    },
    {
      label: 'Completed Courses',
      value: 2,
      note: 'Two programs finished successfully',
      icon: 'fa-solid fa-circle-check',
      accent: '#059669',
      softAccent: 'rgba(5, 150, 105, 0.12)'
    },
    {
      label: 'Pending Courses',
      value: 3,
      note: 'Ready to resume from your last lesson',
      icon: 'fa-solid fa-hourglass-half',
      accent: '#f59e0b',
      softAccent: 'rgba(245, 158, 11, 0.14)'
    },
    {
      label: 'Certificates Earned',
      value: 2,
      note: 'Latest certificate downloaded this week',
      icon: 'fa-solid fa-award',
      accent: '#8b5cf6',
      softAccent: 'rgba(139, 92, 246, 0.12)'
    }
  ];

  readonly courses: DashboardCourse[] = [
    {
      id: 1,
      name: 'Web Development Bootcamp',
      progress: 60,
      lessonCount: 24,
      duration: '18 hours',
      accent: '#2563eb',
      softAccent: 'rgba(37, 99, 235, 0.12)',
      bannerImage: this.createBanner('Web Development', 'HTML / CSS / JS', '#1d4ed8', '#0f172a')
    },
    {
      id: 2,
      name: 'Graphic Design Mastery',
      progress: 30,
      lessonCount: 16,
      duration: '12 hours',
      accent: '#ec4899',
      softAccent: 'rgba(236, 72, 153, 0.14)',
      bannerImage: this.createBanner('Graphic Design', 'Branding / UI / Visuals', '#ec4899', '#7c3aed')
    },
    {
      id: 3,
      name: 'AutoCAD Training',
      progress: 80,
      lessonCount: 20,
      duration: '15 hours',
      accent: '#0f766e',
      softAccent: 'rgba(15, 118, 110, 0.12)',
      bannerImage: this.createBanner('AutoCAD Training', 'Drafting / Modeling / Plans', '#0f766e', '#164e63')
    }
  ];

  readonly recentActivities: DashboardActivity[] = [
    {
      text: 'Completed lesson 3 in Web Development',
      time: '2 hours ago',
      icon: 'fa-solid fa-circle-check',
      accent: '#059669',
      softAccent: 'rgba(5, 150, 105, 0.12)'
    },
    {
      text: 'Enrolled in Graphic Design course',
      time: 'Yesterday',
      icon: 'fa-solid fa-user-plus',
      accent: '#2563eb',
      softAccent: 'rgba(37, 99, 235, 0.12)'
    },
    {
      text: 'Downloaded certificate',
      time: '2 days ago',
      icon: 'fa-solid fa-download',
      accent: '#8b5cf6',
      softAccent: 'rgba(139, 92, 246, 0.12)'
    }
  ];

  readonly upcomingTasks: DashboardTask[] = [
    {
      title: 'Complete Module 4',
      course: 'Web Development Bootcamp',
      timeline: 'Today',
      accent: '#2563eb',
      softAccent: 'rgba(37, 99, 235, 0.12)'
    },
    {
      title: 'Submit assignment',
      course: 'Graphic Design Mastery',
      timeline: 'Tomorrow',
      accent: '#f59e0b',
      softAccent: 'rgba(245, 158, 11, 0.14)'
    },
    {
      title: 'Watch pending videos',
      course: 'AutoCAD Training',
      timeline: 'This week',
      accent: '#059669',
      softAccent: 'rgba(5, 150, 105, 0.12)'
    }
  ];

  private createBanner(title: string, subtitle: string, startColor: string, endColor: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360" fill="none">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${startColor}" />
            <stop offset="100%" stop-color="${endColor}" />
          </linearGradient>
        </defs>
        <rect width="720" height="360" rx="32" fill="url(#bg)" />
        <circle cx="615" cy="70" r="96" fill="#ffffff" fill-opacity="0.14" />
        <circle cx="570" cy="285" r="126" fill="#ffffff" fill-opacity="0.09" />
        <path
          d="M0 292C81 258 132 250 214 262C292 274 347 318 431 324C525 331 607 283 720 220V360H0V292Z"
          fill="#ffffff"
          fill-opacity="0.16"
        />
        <g stroke="#ffffff" stroke-opacity="0.16" stroke-width="1">
          <path d="M42 54H236" />
          <path d="M42 82H312" />
          <path d="M42 110H280" />
        </g>
        <rect x="42" y="42" width="144" height="38" rx="19" fill="#ffffff" fill-opacity="0.18" />
        <text x="71" y="67" fill="#ffffff" font-family="Arial, sans-serif" font-size="18" font-weight="700">
          LIVE COURSE
        </text>
        <text x="42" y="220" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="700">
          ${title}
        </text>
        <text x="42" y="258" fill="#ffffff" fill-opacity="0.84" font-family="Arial, sans-serif" font-size="22">
          ${subtitle}
        </text>
      </svg>
    `.trim();

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
}
