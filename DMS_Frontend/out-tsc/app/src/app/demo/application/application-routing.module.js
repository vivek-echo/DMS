import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
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
                path: 'courses',
                loadComponent: () => import('./course/view-course/view-course.component').then((c) => c.ViewCourseComponent)
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
export class ApplicationRoutingModule {
    static { this.ɵfac = function ApplicationRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ApplicationRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ApplicationRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=application-routing.module.js.map