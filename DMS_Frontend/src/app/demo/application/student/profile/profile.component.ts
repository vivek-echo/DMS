import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface ProfileFormValue {
  name: string;
  email: string;
  role: string;
  phone: string;
  location: string;
  about: string;
  skills: string;
}

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private fb = inject(FormBuilder);

  readonly initialProfile: ProfileFormValue = {
    name: 'Aarav Mehta',
    email: 'aarav.mehta@demoacademy.com',
    role: 'Student Designer & Frontend Learner',
    phone: '+91 98765 43210',
    location: 'Ahmedabad, India',
    about:
      'Focused on combining UI design, frontend engineering, and practical job-ready projects. Actively completing courses in Angular, branding, and finance fundamentals.',
    skills: 'Angular, UI/UX, Graphic Design, TypeScript, Presentation Design, Team Collaboration'
  };

  demoMessage = '';

  readonly profileForm = this.fb.group({
    name: [this.initialProfile.name, Validators.required],
    email: [this.initialProfile.email, [Validators.required, Validators.email]],
    role: [this.initialProfile.role, Validators.required],
    phone: [this.initialProfile.phone, Validators.required],
    location: [this.initialProfile.location, Validators.required],
    about: [this.initialProfile.about, Validators.required],
    skills: [this.initialProfile.skills, Validators.required]
  });

  get currentName(): string {
    return this.profileForm.get('name')?.value?.trim() || 'Learner Name';
  }

  get currentEmail(): string {
    return this.profileForm.get('email')?.value?.trim() || 'learner@example.com';
  }

  get currentRole(): string {
    return this.profileForm.get('role')?.value?.trim() || 'Student Profile';
  }

  get skillTags(): string[] {
    const skills = this.profileForm.get('skills')?.value ?? '';
    return skills
      .split(',')
      .map((skill) => skill.trim())
      .filter(Boolean);
  }

  get profileImage(): string {
    return this.createProfileImage(this.currentName);
  }

  saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.demoMessage = 'Profile details updated in the UI. Demo mode is enabled, so no data was saved to a backend.';
  }

  resetProfile(): void {
    this.profileForm.reset(this.initialProfile);
    this.demoMessage = 'Profile values restored to the default demo record.';
  }

  private createProfileImage(name: string): string {
    const initials = name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none">
        <defs>
          <linearGradient id="avatar" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#1d4ed8" />
            <stop offset="100%" stop-color="#14b8a6" />
          </linearGradient>
        </defs>
        <rect width="240" height="240" rx="48" fill="url(#avatar)" />
        <circle cx="182" cy="58" r="36" fill="#ffffff" fill-opacity="0.18" />
        <circle cx="58" cy="196" r="54" fill="#ffffff" fill-opacity="0.12" />
        <text x="120" y="132" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="72" font-weight="700">
          ${initials}
        </text>
      </svg>
    `.trim();

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
}
