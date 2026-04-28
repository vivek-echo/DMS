import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HomeComponent } from './demo/admin-panel/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'default',
    redirectTo: 'application/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'create-course',
    redirectTo: 'application/create-course',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    redirectTo: 'application/courses',
    pathMatch: 'full'
  },
  {
    path: 'course-player',
    redirectTo: 'application/course-player',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    redirectTo: 'application/categories',
    pathMatch: 'full'
  },
  {
    path: 'certificates',
    redirectTo: 'application/certificates',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    redirectTo: 'application/profile',
    pathMatch: 'full'
  },
  {
    path: 'notifications',
    redirectTo: 'application/notifications',
    pathMatch: 'full'
  },
  {
    path: 'payment-history',
    redirectTo: 'application/payment-history',
    pathMatch: 'full'
  },
  {
    path: 'add-job',
    redirectTo: 'application/add-job',
    pathMatch: 'full'
  },
  {
    path: 'jobs',
    redirectTo: 'application/jobs',
    pathMatch: 'full'
  },
  {
    path: 'applied-jobs',
    redirectTo: 'application/applied-jobs',
    pathMatch: 'full'
  },
  {
    path: 'typography',
    redirectTo: 'application/typography',
    pathMatch: 'full'
  },
  {
    path: 'color',
    redirectTo: 'application/color',
    pathMatch: 'full'
  },
  {
    path: 'sample-page',
    redirectTo: 'application/sample-page',
    pathMatch: 'full'
  },
  {
    path: 'application',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./demo/application/application.module').then((m) => m.ApplicationModule)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component').then((c) => c.TypographyComponent)
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component').then((c) => c.ElementColorComponent)
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/admin-panel/login/login.component').then((c) => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/pages/authentication/register/register.component').then((c) => c.RegisterComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
