import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NotificationItem {
  id: number;
  title: string;
  description: string;
  time: string;
  type: 'Purchase' | 'Career' | 'Certificate';
  icon: string;
  accent: string;
  softAccent: string;
  actionLabel: string;
  actionRoute: string;
  unread: boolean;
}

@Component({
  selector: 'app-notifications',
  imports: [CommonModule, RouterLink],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  readonly notifications: NotificationItem[] = [
    {
      id: 1,
      title: 'Course purchased successfully',
      description: 'You enrolled in Mobile App UI Masterclass and can start learning immediately.',
      time: '10 minutes ago',
      type: 'Purchase',
      icon: 'fa-solid fa-cart-shopping',
      accent: '#2563eb',
      softAccent: 'rgba(37, 99, 235, 0.12)',
      actionLabel: 'Open Course',
      actionRoute: '/application/course-player',
      unread: true
    },
    {
      id: 2,
      title: 'Job application submitted',
      description: 'Your application for Junior Frontend Developer at PixelForge has been received.',
      time: '1 hour ago',
      type: 'Career',
      icon: 'fa-solid fa-briefcase',
      accent: '#f59e0b',
      softAccent: 'rgba(245, 158, 11, 0.14)',
      actionLabel: 'View Jobs',
      actionRoute: '/application/applied-jobs',
      unread: true
    },
    {
      id: 3,
      title: 'Certificate generated',
      description: 'Your certificate for Advanced Angular Interface Design is ready to download.',
      time: 'Today, 08:40 AM',
      type: 'Certificate',
      icon: 'fa-solid fa-award',
      accent: '#8b5cf6',
      softAccent: 'rgba(139, 92, 246, 0.12)',
      actionLabel: 'View Certificate',
      actionRoute: '/application/certificates',
      unread: true
    },
    {
      id: 4,
      title: 'New course recommendation',
      description: 'Based on your recent activity, Software Testing Essentials has been suggested for you.',
      time: 'Yesterday',
      type: 'Purchase',
      icon: 'fa-solid fa-lightbulb',
      accent: '#0f766e',
      softAccent: 'rgba(15, 118, 110, 0.12)',
      actionLabel: 'Browse Courses',
      actionRoute: '/application/courses',
      unread: false
    },
    {
      id: 5,
      title: 'Interview preparation reminder',
      description: 'Mock interview session for your applied roles starts tomorrow at 11:00 AM.',
      time: 'Yesterday',
      type: 'Career',
      icon: 'fa-solid fa-bell',
      accent: '#ef4444',
      softAccent: 'rgba(239, 68, 68, 0.12)',
      actionLabel: 'Check Schedule',
      actionRoute: '/application/jobs',
      unread: false
    }
  ];

  get unreadCount(): number {
    return this.notifications.filter((notification) => notification.unread).length;
  }

  get purchaseCount(): number {
    return this.notifications.filter((notification) => notification.type === 'Purchase').length;
  }

  get careerCount(): number {
    return this.notifications.filter((notification) => notification.type === 'Career').length;
  }

  get certificateCount(): number {
    return this.notifications.filter((notification) => notification.type === 'Certificate').length;
  }

  markAllAsRead(): void {
    this.notifications.forEach((notification) => {
      notification.unread = false;
    });
  }
}
