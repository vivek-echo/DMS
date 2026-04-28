import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CourseItem {
  name: string;
  type: string;
  price: number;
  banner: string;
}

@Component({
  selector: 'app-view-course',
  imports: [CommonModule, RouterLink],
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.scss'
})
export class ViewCourseComponent {
  readonly courses: CourseItem[] = [
    {
      name: 'Web Development Bootcamp',
      type: 'Software',
      price: 1999,
      banner: 'https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg'
    },
    {
      name: 'Graphic Design Mastery',
      type: 'Graphic Design',
      price: 1499,
      banner: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg'
    },
    {
      name: 'Finance Basics',
      type: 'Finance',
      price: 999,
      banner: 'https://images.pexels.com/photos/6694866/pexels-photo-6694866.jpeg'
    }
  ];
}
