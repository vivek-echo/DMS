import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-job',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.scss'
})
export class AddJobComponent {
  readonly jobTypes = ['Job', 'Internship'];

  readonly jobForm: FormGroup;

  submitted = false;
  demoMessage = '';

  constructor(private readonly fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      salary: ['', Validators.required],
      skillsRequired: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.jobForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  get skillPreview(): string[] {
    const value = (this.jobForm.get('skillsRequired')?.value as string | null) ?? '';

    return value
      .split(',')
      .map((skill) => skill.trim())
      .filter(Boolean)
      .slice(0, 6);
  }

  get selectedTypeClass(): string {
    if (this.jobForm.get('type')?.value === 'Internship') {
      return 'preview-badge internship-badge';
    }

    if (this.jobForm.get('type')?.value === 'Job') {
      return 'preview-badge job-badge';
    }

    return 'preview-badge neutral-badge';
  }

  onSubmit(): void {
    this.submitted = true;
    this.demoMessage = '';

    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      return;
    }

    this.demoMessage = 'Job form validated successfully. Demo mode is active, so no posting was submitted.';
  }
}
