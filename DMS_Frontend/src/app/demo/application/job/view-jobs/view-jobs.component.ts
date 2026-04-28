import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type OpportunityType = 'Job' | 'Internship';

interface JobItem {
  title: string;
  type: OpportunityType;
  company: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
  bannerImage: string;
}

@Component({
  selector: 'app-view-jobs',
  imports: [CommonModule, RouterLink],
  templateUrl: './view-jobs.component.html',
  styleUrl: './view-jobs.component.scss'
})
export class ViewJobsComponent {
  readonly jobs: JobItem[] = [
    {
      title: 'Frontend Developer',
      type: 'Job',
      company: 'Tech Solutions',
      location: 'Patna',
      salary: 'INR 25,000/month',
      description: 'Looking for Angular developer',
      skills: ['Angular', 'TypeScript', 'Bootstrap'],
      bannerImage: this.createBanner('Frontend Developer', 'Tech Solutions', '#2563eb', '#0f172a')
    },
    {
      title: 'Graphic Design Intern',
      type: 'Internship',
      company: 'Creative Studio',
      location: 'Remote',
      salary: 'INR 8,000/month',
      description: 'Internship for freshers',
      skills: ['Photoshop', 'Illustrator', 'Creativity'],
      bannerImage: this.createBanner('Graphic Design Intern', 'Creative Studio', '#ec4899', '#7c3aed')
    }
  ];

  getTypeClass(type: OpportunityType): string {
    return type === 'Job' ? 'type-badge badge-job' : 'type-badge badge-internship';
  }

  private createBanner(title: string, company: string, startColor: string, endColor: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="720" height="320" viewBox="0 0 720 320" fill="none">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${startColor}" />
            <stop offset="100%" stop-color="${endColor}" />
          </linearGradient>
        </defs>
        <rect width="720" height="320" rx="32" fill="url(#bg)" />
        <circle cx="610" cy="74" r="90" fill="#ffffff" fill-opacity="0.14" />
        <circle cx="545" cy="262" r="126" fill="#ffffff" fill-opacity="0.08" />
        <path
          d="M0 250C80 228 157 218 250 234C350 251 407 300 511 302C590 304 649 276 720 222V320H0V250Z"
          fill="#ffffff"
          fill-opacity="0.15"
        />
        <rect x="42" y="38" width="138" height="36" rx="18" fill="#ffffff" fill-opacity="0.18" />
        <text x="70" y="61" fill="#ffffff" font-family="Arial, sans-serif" font-size="17" font-weight="700">
          CAREER DESK
        </text>
        <text x="42" y="188" fill="#ffffff" font-family="Arial, sans-serif" font-size="38" font-weight="700">
          ${title}
        </text>
        <text x="42" y="224" fill="#ffffff" fill-opacity="0.84" font-family="Arial, sans-serif" font-size="22">
          ${company}
        </text>
      </svg>
    `.trim();

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
}
