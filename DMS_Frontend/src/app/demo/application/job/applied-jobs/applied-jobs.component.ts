import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ApplicationStatus = 'Applied' | 'Shortlisted' | 'Rejected';

interface AppliedJobItem {
  title: string;
  company: string;
  status: ApplicationStatus;
  date?: string;
}

interface StatusSummaryItem {
  label: ApplicationStatus;
  icon: string;
  accentClass: string;
}

@Component({
  selector: 'app-applied-jobs',
  imports: [CommonModule, RouterLink],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.scss'
})
export class AppliedJobsComponent {
  readonly appliedJobs: AppliedJobItem[] = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      status: 'Applied',
      date: '18 Apr 2026'
    },
    {
      title: 'Graphic Design Intern',
      company: 'Creative Studio',
      status: 'Shortlisted',
      date: '24 Apr 2026'
    }
  ];

  readonly statusSummary: StatusSummaryItem[] = [
    {
      label: 'Applied',
      icon: 'ti ti-send',
      accentClass: 'status-card-applied'
    },
    {
      label: 'Shortlisted',
      icon: 'ti ti-circle-check',
      accentClass: 'status-card-shortlisted'
    },
    {
      label: 'Rejected',
      icon: 'ti ti-circle-x',
      accentClass: 'status-card-rejected'
    }
  ];

  getStatusCount(status: ApplicationStatus): number {
    return this.appliedJobs.filter((job) => job.status === status).length;
  }

  getStatusBadgeClass(status: ApplicationStatus): string {
    switch (status) {
      case 'Shortlisted':
        return 'status-badge shortlisted-badge';
      case 'Rejected':
        return 'status-badge rejected-badge';
      default:
        return 'status-badge applied-badge';
    }
  }
}
