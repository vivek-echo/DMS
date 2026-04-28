import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CertificateItem {
  id: number;
  courseName: string;
  studentName: string;
  date: string;
  instructor: string;
  credentialId: string;
  grade: string;
}

@Component({
  selector: 'app-certificates',
  imports: [CommonModule, RouterLink],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  demoMessage = '';

  readonly certificates: CertificateItem[] = [
    {
      id: 1,
      courseName: 'Advanced Angular Interface Design',
      studentName: 'Aarav Mehta',
      date: 'April 18, 2026',
      instructor: 'Priya Sharma',
      credentialId: 'DMS-ANG-2026-1184',
      grade: 'Distinction'
    },
    {
      id: 2,
      courseName: 'Graphic Design for Brand Campaigns',
      studentName: 'Aarav Mehta',
      date: 'March 29, 2026',
      instructor: 'Rohan Kapoor',
      credentialId: 'DMS-GDM-2026-1042',
      grade: 'Merit'
    },
    {
      id: 3,
      courseName: 'Finance Fundamentals for Startups',
      studentName: 'Aarav Mehta',
      date: 'February 12, 2026',
      instructor: 'Naina Verma',
      credentialId: 'DMS-FIN-2026-0917',
      grade: 'Distinction'
    }
  ];

  selectedCertificate: CertificateItem = this.certificates[0];

  get totalLearningHours(): number {
    return this.certificates.length * 18;
  }

  selectCertificate(certificate: CertificateItem): void {
    this.selectedCertificate = certificate;
    this.demoMessage = '';
  }

  downloadCertificate(certificate: CertificateItem): void {
    this.selectedCertificate = certificate;
    this.demoMessage = `Demo mode: ${certificate.courseName} is ready for certificate download preview.`;
  }
}
