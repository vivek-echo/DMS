import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'default',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'create-course',
        loadComponent: () => import('./course/add-course/add-course.component').then((c) => c.AddCourseComponent)
      },
      {
        path: 'categories',
        loadComponent: () => import('./course/categories/categories.component').then((c) => c.CategoriesComponent)
      },
      {
        path: 'courses',
        loadComponent: () => import('./course/view-course/view-course.component').then((c) => c.ViewCourseComponent)
      },
      {
        path: 'course-player',
        loadComponent: () => import('./course/course-player/course-player.component').then((c) => c.CoursePlayerComponent)
      },
      {
        path: 'certificates',
        loadComponent: () => import('./student/certificates/certificates.component').then((c) => c.CertificatesComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./student/profile/profile.component').then((c) => c.ProfileComponent)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./student/notifications/notifications.component').then((c) => c.NotificationsComponent)
      },
      {
        path: 'payment-history',
        loadComponent: () => import('./student/payment-history/payment-history.component').then((c) => c.PaymentHistoryComponent)
      },
      {
        path: 'add-job',
        loadComponent: () => import('./job/add-job/add-job.component').then((c) => c.AddJobComponent)
      },
      {
        path: 'jobs',
        loadComponent: () => import('./job/view-jobs/view-jobs.component').then((c) => c.ViewJobsComponent)
      },
      {
        path: 'applied-jobs',
        loadComponent: () => import('./job/applied-jobs/applied-jobs.component').then((c) => c.AppliedJobsComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {}
