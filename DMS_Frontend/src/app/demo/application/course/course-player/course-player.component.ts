import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type CourseTab = 'overview' | 'notes' | 'qa';

interface CourseTabItem {
  id: CourseTab;
  label: string;
  icon: string;
}

interface CourseOverviewItem {
  title: string;
  text: string;
  icon: string;
}

interface CourseNote {
  title: string;
  time: string;
  text: string;
}

interface CourseQuestion {
  student: string;
  question: string;
  answer: string;
}

interface CourseLesson {
  id: string;
  label: string;
  title: string;
  duration: string;
  completed?: boolean;
}

interface CourseModule {
  id: string;
  title: string;
  expanded: boolean;
  lessons: CourseLesson[];
}

@Component({
  selector: 'app-course-player',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-player.component.html',
  styleUrl: './course-player.component.scss'
})
export class CoursePlayerComponent {
  readonly course = {
    title: 'Web Development Bootcamp',
    instructor: 'Amit Sir',
    progress: 60,
    description: 'A practical bootcamp focused on HTML, CSS, JavaScript, and responsive UI building with real lesson flow.'
  };

  readonly tabs: CourseTabItem[] = [
    { id: 'overview', label: 'Overview', icon: 'fa-regular fa-rectangle-list' },
    { id: 'notes', label: 'Notes', icon: 'fa-regular fa-note-sticky' },
    { id: 'qa', label: 'Q&A', icon: 'fa-regular fa-comments' }
  ];

  readonly overviewItems: CourseOverviewItem[] = [
    {
      title: 'What you will learn',
      text: 'Build a strong front-end foundation with structured lessons, guided practice, and beginner-friendly explanations.',
      icon: 'fa-solid fa-laptop-code'
    },
    {
      title: 'Hands-on outcomes',
      text: 'Create page layouts, style interfaces confidently, and understand how HTML, CSS, and JavaScript fit together.',
      icon: 'fa-solid fa-screwdriver-wrench'
    },
    {
      title: 'Course resources',
      text: 'Each lesson includes concise notes, recap points, and module-based progression so learners always know what is next.',
      icon: 'fa-solid fa-folder-open'
    },
    {
      title: 'Learning format',
      text: 'Short lesson blocks with a clear current lesson state make the experience feel like a real learning product.',
      icon: 'fa-solid fa-graduation-cap'
    }
  ];

  readonly notes: CourseNote[] = [
    {
      title: 'CSS Selectors Recap',
      time: '08:12',
      text: 'Class selectors target reusable UI patterns, while element selectors are helpful for broad base styling.'
    },
    {
      title: 'Box Model Reminder',
      time: '12:45',
      text: 'Padding affects inner spacing, margin affects outer spacing, and border sits between them for visible structure.'
    },
    {
      title: 'Responsive Tip',
      time: '16:20',
      text: 'Use flexible widths and Bootstrap grid utilities to keep layouts readable on tablets and phones.'
    }
  ];

  readonly questions: CourseQuestion[] = [
    {
      student: 'Riya',
      question: 'When should I use padding instead of margin in page layouts?',
      answer: 'Use padding when you want breathing room inside a card or section, and margin when you need space between separate elements.'
    },
    {
      student: 'Karan',
      question: 'Why is CSS Basics shown as the current lesson?',
      answer: 'This demo player starts on Lesson 2 to simulate a learner resuming from their most recent progress checkpoint.'
    }
  ];

  modules: CourseModule[] = [
    {
      id: 'module-1',
      title: 'Module 1: Introduction',
      expanded: true,
      lessons: [
        {
          id: 'lesson-1',
          label: 'Lesson 1',
          title: 'HTML Basics',
          duration: '12 min',
          completed: true
        },
        {
          id: 'lesson-2',
          label: 'Lesson 2',
          title: 'CSS Basics',
          duration: '18 min'
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2: Basics',
      expanded: true,
      lessons: [
        {
          id: 'lesson-3',
          label: 'Lesson 3',
          title: 'JavaScript Intro',
          duration: '21 min'
        },
        {
          id: 'lesson-4',
          label: 'Lesson 4',
          title: 'Bootstrap Essentials',
          duration: '16 min'
        }
      ]
    }
  ];

  activeTab: CourseTab = 'overview';
  selectedLessonId = 'lesson-2';

  get selectedLesson(): CourseLesson | undefined {
    return this.modules.flatMap((module) => module.lessons).find((lesson) => lesson.id === this.selectedLessonId);
  }

  get totalLessons(): number {
    return this.modules.reduce((count, module) => count + module.lessons.length, 0);
  }

  get completedLessons(): number {
    return this.modules.reduce((count, module) => count + module.lessons.filter((lesson) => lesson.completed).length, 0);
  }

  setActiveTab(tab: CourseTab): void {
    this.activeTab = tab;
  }

  selectLesson(lessonId: string): void {
    this.selectedLessonId = lessonId;

    const parentModule = this.modules.find((module) => module.lessons.some((lesson) => lesson.id === lessonId));

    if (parentModule) {
      parentModule.expanded = true;
    }
  }

  toggleModule(moduleId: string): void {
    const module = this.modules.find((item) => item.id === moduleId);

    if (module) {
      module.expanded = !module.expanded;
    }
  }
}
