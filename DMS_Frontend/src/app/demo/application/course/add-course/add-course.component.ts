import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-course',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  readonly courseTypes = ['Chemistry', 'Graphic Design', 'Software', 'Mobile App', 'Finance', 'Art & Humanities'];

  readonly courseForm: FormGroup;

  submitted = false;
  bannerPreview: string | null = null;
  bannerFileName = '';
  demoMessage = '';

  constructor(private readonly fb: FormBuilder) {
    this.courseForm = this.fb.group({
      courseType: ['', Validators.required],
      courseName: ['', Validators.required],
      coursePrice: [null, [Validators.required, Validators.min(1)]],
      courseBanner: [null, Validators.required]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.courseForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  onBannerSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    this.courseForm.patchValue({ courseBanner: file });
    this.courseForm.get('courseBanner')?.markAsTouched();
    this.courseForm.get('courseBanner')?.updateValueAndValidity();
    this.demoMessage = '';

    if (!file) {
      this.bannerPreview = null;
      this.bannerFileName = '';
      return;
    }

    this.bannerFileName = file.name;

    if (!file.type.startsWith('image/')) {
      this.bannerPreview = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.bannerPreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    this.submitted = true;
    this.demoMessage = '';

    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    this.demoMessage = 'Course form validated successfully. Demo mode is enabled, so no course was submitted.';
  }
}
