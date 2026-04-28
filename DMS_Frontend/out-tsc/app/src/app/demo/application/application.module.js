import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as i0 from "@angular/core";
export class ApplicationModule {
    static { this.ɵfac = function ApplicationModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ApplicationModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, ApplicationRoutingModule, DashboardComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ApplicationRoutingModule, ApplicationComponent, DashboardComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ApplicationModule, { imports: [CommonModule, ApplicationRoutingModule, ApplicationComponent, DashboardComponent] }); })();
//# sourceMappingURL=application.module.js.map