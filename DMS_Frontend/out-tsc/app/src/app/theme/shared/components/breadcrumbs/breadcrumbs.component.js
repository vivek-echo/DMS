// Angular Import
import { Component, Input, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
// project import
import { NavigationItems } from 'src/app/theme/layout/admin/navigation/navigation';
import { SharedModule } from '../../shared.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/application/dashboard"];
function BreadcrumbComponent_For_1_Conditional_0_For_6_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r1.title, " ");
} }
function BreadcrumbComponent_For_1_Conditional_0_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, BreadcrumbComponent_For_1_Conditional_0_For_6_Conditional_0_Template, 2, 1, "h5", 9);
} if (rf & 2) {
    const ɵ$index_13_r2 = ctx.$index;
    const ɵ$count_13_r3 = ctx.$count;
    i0.ɵɵconditional(ɵ$index_13_r2 === ɵ$count_13_r3 - 1 ? 0 : -1);
} }
function BreadcrumbComponent_For_1_Conditional_0_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 10);
    i0.ɵɵelement(2, "path", 11)(3, "path", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
} }
function BreadcrumbComponent_For_1_Conditional_0_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c0));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate("Home");
} }
function BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6)(1, "a", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", breadcrumb_r4.url);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(breadcrumb_r4.title);
} }
function BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6)(1, "a", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(breadcrumb_r4.title);
} }
function BreadcrumbComponent_For_1_Conditional_0_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_0_Template, 3, 2, "li", 6);
    i0.ɵɵconditionalCreate(1, BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_1_Template, 3, 1, "li", 6);
} if (rf & 2) {
    const breadcrumb_r4 = ctx.$implicit;
    i0.ɵɵconditional(breadcrumb_r4.url !== false ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(breadcrumb_r4.url === false && breadcrumb_r4.type !== "group" ? 1 : -1);
} }
function BreadcrumbComponent_For_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    i0.ɵɵrepeaterCreate(5, BreadcrumbComponent_For_1_Conditional_0_For_6_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ul", 5)(8, "li", 6);
    i0.ɵɵconditionalCreate(9, BreadcrumbComponent_For_1_Conditional_0_Conditional_9_Template, 4, 2, "a", 7);
    i0.ɵɵconditionalCreate(10, BreadcrumbComponent_For_1_Conditional_0_Conditional_10_Template, 2, 3, "a", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, BreadcrumbComponent_For_1_Conditional_0_For_12_Template, 2, 2, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r4.navigationList);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r4.type === "icon" ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r4.type === "text" ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r4.navigationList);
} }
function BreadcrumbComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, BreadcrumbComponent_For_1_Conditional_0_Template, 13, 2, "div", 0);
} if (rf & 2) {
    const breadcrumb_r6 = ctx.$implicit;
    const ɵ$index_1_r7 = ctx.$index;
    const ɵ$count_1_r8 = ctx.$count;
    i0.ɵɵconditional(ɵ$index_1_r7 === ɵ$count_1_r8 - 1 && breadcrumb_r6.breadcrumbs !== false ? 0 : -1);
} }
export class BreadcrumbComponent {
    // constructor
    constructor() {
        this.route = inject(Router);
        this.titleService = inject(Title);
        this.breadcrumbList = [];
        this.navigations = NavigationItems;
        this.type = 'icon';
        this.setBreadcrumb();
    }
    // public method
    setBreadcrumb() {
        this.route.events.subscribe((router) => {
            if (router instanceof NavigationEnd) {
                const activeLink = router.url;
                const breadcrumbList = this.filterNavigation(this.navigations, activeLink);
                const title = breadcrumbList[breadcrumbList.length - 1]?.title || 'Welcome';
                this.navigationList = breadcrumbList.splice(-2);
                this.titleService.setTitle(title + ' | Berry Angular Admin Template');
            }
        });
    }
    filterNavigation(navItems, activeLink) {
        for (const navItem of navItems) {
            if (navItem.type === 'item' && 'url' in navItem && navItem.url === activeLink) {
                return [
                    {
                        url: 'url' in navItem ? navItem.url : false,
                        title: navItem.title,
                        breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
                        type: navItem.type
                    }
                ];
            }
            if ((navItem.type === 'group' || navItem.type === 'collapse') && 'children' in navItem) {
                const breadcrumbList = this.filterNavigation(navItem.children, activeLink);
                if (breadcrumbList.length > 0) {
                    breadcrumbList.unshift({
                        url: 'url' in navItem ? navItem.url : false,
                        title: navItem.title,
                        breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
                        type: navItem.type
                    });
                    return breadcrumbList;
                }
            }
        }
        return [];
    }
    static { this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BreadcrumbComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { type: "type" }, decls: 2, vars: 0, consts: [[1, "page-header"], [1, "page-block"], [1, "row", "align-items-center"], [1, "col-md-12", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "page-header-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["title", "Home", 3, "routerLink"], [3, "routerLink"], [1, "m-b-10"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "var(--bs-secondary)", 1, "icon", "icon-tabler", "icons-tabler-filled", "icon-tabler-home"], ["stroke", "none", "d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"], [1, "text-muted", "f-w-500", 3, "routerLink"], ["href", "javascript:", 1, "f-w-500", "text-dark"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, BreadcrumbComponent_For_1_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.navigationList);
        } }, dependencies: [RouterModule, i1.RouterLink, SharedModule], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb', imports: [RouterModule, SharedModule], template: "@for (breadcrumb of navigationList; track breadcrumb; let last = $last) {\n  @if (last && breadcrumb.breadcrumbs !== false) {\n    <div class=\"page-header\">\n      <div class=\"page-block\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-12 d-sm-flex align-items-center justify-content-between\">\n            <div class=\"page-header-title\">\n              @for (breadcrumb of navigationList; track breadcrumb; let last = $last) {\n                @if (last) {\n                  <h5 class=\"m-b-10\">\n                    {{ breadcrumb.title }}\n                  </h5>\n                }\n              }\n            </div>\n            <ul class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                @if (type === 'icon') {\n                  <a [routerLink]=\"['/application/dashboard']\" title=\"Home\">\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"24\"\n                      height=\"24\"\n                      viewBox=\"0 0 24 24\"\n                      fill=\"var(--bs-secondary)\"\n                      class=\"icon icon-tabler icons-tabler-filled icon-tabler-home\"\n                    >\n                      <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\n                      <path\n                        d=\"M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z\"\n                      />\n                    </svg>\n                  </a>\n                }\n                @if (type === 'text') {\n                  <a [routerLink]=\"['/application/dashboard']\">{{ 'Home' }}</a>\n                }\n              </li>\n              @for (breadcrumb of navigationList; track breadcrumb) {\n                @if (breadcrumb.url !== false) {\n                  <li class=\"breadcrumb-item\">\n                    <a class=\"text-muted f-w-500\" [routerLink]=\"breadcrumb.url\">{{ breadcrumb.title }}</a>\n                  </li>\n                }\n                @if (breadcrumb.url === false && breadcrumb.type !== 'group') {\n                  <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:\" class=\"f-w-500 text-dark\">{{ breadcrumb.title }}</a>\n                  </li>\n                }\n              }\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n}\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { type: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "src/app/theme/shared/components/breadcrumbs/breadcrumbs.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=breadcrumbs.component.js.map