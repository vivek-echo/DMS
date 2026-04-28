import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface CourseItem {
  id: number;
  name: string;
  type: string;
  price: number;
  rating: number;
  learners: string;
  lessons: number;
  duration: string;
  level: string;
  description: string;
  accent: string;
  banner: string;
}

interface PriceRangeOption {
  value: string;
  label: string;
  min: number | null;
  max: number | null;
}

interface RatingOption {
  value: string;
  label: string;
  min: number | null;
}

@Component({
  selector: 'app-view-course',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.scss'
})
export class ViewCourseComponent {
  private route = inject(ActivatedRoute);

  searchTerm = '';
  selectedCategory = 'All Categories';
  selectedPriceRange = 'all';
  selectedRating = 'all';

  readonly categoryOptions = [
    'All Categories',
    'Chemistry',
    'Graphic Design',
    'Software',
    'Mobile App',
    'Finance',
    'Art & Humanities'
  ];

  readonly priceRanges: PriceRangeOption[] = [
    { value: 'all', label: 'All Prices', min: null, max: null },
    { value: 'under-1500', label: 'Under Rs. 1,500', min: null, max: 1499 },
    { value: '1500-2000', label: 'Rs. 1,500 - 2,000', min: 1500, max: 2000 },
    { value: 'above-2000', label: 'Above Rs. 2,000', min: 2001, max: null }
  ];

  readonly ratingOptions: RatingOption[] = [
    { value: 'all', label: 'Any Rating', min: null },
    { value: '4-plus', label: '4.0 & above', min: 4 },
    { value: '4.5-plus', label: '4.5 & above', min: 4.5 },
    { value: '4.8-plus', label: '4.8 & above', min: 4.8 }
  ];

  readonly courses: CourseItem[] = [
    {
      id: 1,
      name: 'Advanced Angular Interface Design',
      type: 'Software',
      price: 2499,
      rating: 4.8,
      learners: '2.4k learners',
      lessons: 28,
      duration: '20 hours',
      level: 'Intermediate',
      description: 'Build production-style Angular interfaces, dashboards, and polished component systems.',
      accent: '#2563eb',
      banner: this.createBanner('Angular UI', 'Dashboards / Components / Flows', '#2563eb', '#0f172a')
    },
    {
      id: 2,
      name: 'Mobile App UI Masterclass',
      type: 'Mobile App',
      price: 2199,
      rating: 4.7,
      learners: '1.9k learners',
      lessons: 24,
      duration: '16 hours',
      level: 'Intermediate',
      description: 'Design modern app experiences with mobile-first flows, onboarding, and polished interactions.',
      accent: '#7c3aed',
      banner: this.createBanner('Mobile App UI', 'Figma / UX / Prototype', '#7c3aed', '#1d4ed8')
    },
    {
      id: 3,
      name: 'Graphic Design for Brand Campaigns',
      type: 'Graphic Design',
      price: 1799,
      rating: 4.9,
      learners: '3.2k learners',
      lessons: 19,
      duration: '14 hours',
      level: 'Beginner',
      description: 'Craft campaign visuals, typography systems, and brand-ready creative assets.',
      accent: '#ec4899',
      banner: this.createBanner('Graphic Design', 'Branding / Typography / Social', '#ec4899', '#7c3aed')
    },
    {
      id: 4,
      name: 'Organic Chemistry Lab Basics',
      type: 'Chemistry',
      price: 1599,
      rating: 4.5,
      learners: '980 learners',
      lessons: 17,
      duration: '12 hours',
      level: 'Beginner',
      description: 'Understand safe lab practices, reactions, and experimentation workflows for chemistry learners.',
      accent: '#0f766e',
      banner: this.createBanner('Chemistry Lab', 'Experiments / Reactions / Safety', '#0f766e', '#164e63')
    },
    {
      id: 5,
      name: 'Finance Fundamentals for Startups',
      type: 'Finance',
      price: 1499,
      rating: 4.6,
      learners: '1.2k learners',
      lessons: 15,
      duration: '11 hours',
      level: 'Beginner',
      description: 'Learn budgeting, runway planning, profit metrics, and investor-friendly financial basics.',
      accent: '#f59e0b',
      banner: this.createBanner('Finance Basics', 'Budgets / Forecasts / Growth', '#f59e0b', '#ea580c')
    },
    {
      id: 6,
      name: 'Art History & Visual Culture',
      type: 'Art & Humanities',
      price: 1299,
      rating: 4.4,
      learners: '1.5k learners',
      lessons: 13,
      duration: '10 hours',
      level: 'Beginner',
      description: 'Explore visual culture, artistic movements, and interpretation frameworks with guided lectures.',
      accent: '#ef4444',
      banner: this.createBanner('Art & Humanities', 'History / Culture / Critique', '#ef4444', '#7f1d1d')
    },
    {
      id: 7,
      name: 'Software Testing Essentials',
      type: 'Software',
      price: 1899,
      rating: 4.9,
      learners: '2.7k learners',
      lessons: 22,
      duration: '15 hours',
      level: 'Intermediate',
      description: 'Improve product quality with test planning, automation basics, and release confidence.',
      accent: '#1d4ed8',
      banner: this.createBanner('Testing Essentials', 'QA / Automation / Quality', '#1d4ed8', '#0f172a')
    },
    {
      id: 8,
      name: 'React Native Product Sprint',
      type: 'Mobile App',
      price: 2399,
      rating: 4.8,
      learners: '1.1k learners',
      lessons: 26,
      duration: '18 hours',
      level: 'Advanced',
      description: 'Ship a polished cross-platform app experience with reusable product workflows.',
      accent: '#14b8a6',
      banner: this.createBanner('React Native', 'Apps / Components / Launch', '#14b8a6', '#0f766e')
    }
  ];

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const category = params.get('category');
      this.selectedCategory = this.categoryOptions.includes(category ?? '') ? category ?? 'All Categories' : 'All Categories';
    });
  }

  get filteredCourses(): CourseItem[] {
    const searchValue = this.searchTerm.trim().toLowerCase();
    const selectedPrice = this.priceRanges.find((range) => range.value === this.selectedPriceRange) ?? this.priceRanges[0];
    const selectedRating = this.ratingOptions.find((option) => option.value === this.selectedRating) ?? this.ratingOptions[0];

    return this.courses.filter((course) => {
      const matchesSearch =
        !searchValue ||
        course.name.toLowerCase().includes(searchValue) ||
        course.description.toLowerCase().includes(searchValue) ||
        course.type.toLowerCase().includes(searchValue);

      const matchesCategory = this.selectedCategory === 'All Categories' || course.type === this.selectedCategory;
      const matchesPrice =
        (selectedPrice.min === null || course.price >= selectedPrice.min) &&
        (selectedPrice.max === null || course.price <= selectedPrice.max);
      const matchesRating = selectedRating.min === null || course.rating >= selectedRating.min;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }

  get activeFilters(): string[] {
    const filters: string[] = [];

    if (this.searchTerm.trim()) {
      filters.push(`Search: ${this.searchTerm.trim()}`);
    }

    if (this.selectedCategory !== 'All Categories') {
      filters.push(this.selectedCategory);
    }

    const selectedPrice = this.priceRanges.find((range) => range.value === this.selectedPriceRange);
    if (selectedPrice && selectedPrice.value !== 'all') {
      filters.push(selectedPrice.label);
    }

    const selectedRating = this.ratingOptions.find((option) => option.value === this.selectedRating);
    if (selectedRating && selectedRating.value !== 'all') {
      filters.push(selectedRating.label);
    }

    return filters;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'All Categories';
    this.selectedPriceRange = 'all';
    this.selectedRating = 'all';
  }

  private createBanner(title: string, subtitle: string, startColor: string, endColor: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="720" height="420" viewBox="0 0 720 420" fill="none">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${startColor}" />
            <stop offset="100%" stop-color="${endColor}" />
          </linearGradient>
        </defs>
        <rect width="720" height="420" rx="36" fill="url(#bg)" />
        <circle cx="584" cy="88" r="110" fill="#ffffff" fill-opacity="0.14" />
        <circle cx="122" cy="356" r="94" fill="#ffffff" fill-opacity="0.1" />
        <path
          d="M0 330C96 278 198 260 300 286C384 308 472 374 592 376C633 377 676 369 720 350V420H0V330Z"
          fill="#ffffff"
          fill-opacity="0.16"
        />
        <rect x="48" y="46" width="156" height="40" rx="20" fill="#ffffff" fill-opacity="0.18" />
        <text x="78" y="72" fill="#ffffff" font-family="Arial, sans-serif" font-size="18" font-weight="700">
          DEMO COURSE
        </text>
        <text x="48" y="236" fill="#ffffff" font-family="Arial, sans-serif" font-size="40" font-weight="700">
          ${title}
        </text>
        <text x="48" y="272" fill="#ffffff" fill-opacity="0.84" font-family="Arial, sans-serif" font-size="22">
          ${subtitle}
        </text>
      </svg>
    `.trim();

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
}
