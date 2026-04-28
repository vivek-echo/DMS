// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// project import
import { CardComponent } from './components/card/card.component';
// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export class SharedModule {
    static { this.ɵfac = function SharedModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SharedModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbDropdownModule,
            NgbNavModule,
            NgbModule,
            NgbCollapseModule,
            NgScrollbarModule, CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            NgbDropdownModule,
            NgbNavModule,
            NgbCollapseModule,
            NgScrollbarModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CardComponent,
                    NgbDropdownModule,
                    NgbNavModule,
                    NgbModule,
                    NgbCollapseModule,
                    NgScrollbarModule
                ],
                exports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CardComponent,
                    NgbModule,
                    NgbDropdownModule,
                    NgbNavModule,
                    NgbCollapseModule,
                    NgScrollbarModule
                ],
                declarations: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CardComponent,
        NgbDropdownModule,
        NgbNavModule,
        NgbModule,
        NgbCollapseModule,
        NgScrollbarModule], exports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CardComponent,
        NgbModule,
        NgbDropdownModule,
        NgbNavModule,
        NgbCollapseModule,
        NgScrollbarModule] }); })();
//# sourceMappingURL=shared.module.js.map