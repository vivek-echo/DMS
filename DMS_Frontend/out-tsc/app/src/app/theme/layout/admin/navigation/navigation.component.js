// Angular import
import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
// project import
import { NavContentComponent } from './nav-content/nav-content.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/application/dashboard"];
function NavigationComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 4);
} }
function NavigationComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 5);
} }
export class NavigationComponent {
    constructor() {
        // public props
        this.NavCollapsedMob = output();
        this.SubmenuCollapse = output();
        this.navCollapsedMob = false;
        this.windowWidth = window.innerWidth;
    }
    // public method
    navCollapseMob() {
        if (this.windowWidth < 1025) {
            this.NavCollapsedMob.emit();
        }
    }
    navSubmenuCollapse() {
        document.querySelector('app-navigation.coded-navbar')?.classList.add('coded-trigger');
    }
    static { this.ɵfac = function NavigationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavigationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { NavCollapsedMob: "NavCollapsedMob", SubmenuCollapse: "SubmenuCollapse" }, decls: 7, vars: 3, consts: [[1, ""], [1, "navbar-wrapper"], [1, "m-header"], [1, "b-brand", 3, "routerLink"], ["src", "assets/images/Logo-small.svg", "alt", "small-menu-logo", 1, "logo", "logo-sm"], ["src", "assets/images/logo.svg", "alt", "logo", 1, "logo", "logo-lg"], [1, "scroll-div", "w-100", "compact", 3, "NavCollapsedMob", "SubmenuCollapse"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
            i0.ɵɵconditionalCreate(4, NavigationComponent_Conditional_4_Template, 1, 0, "img", 4)(5, NavigationComponent_Conditional_5_Template, 1, 0, "img", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "app-nav-content", 6);
            i0.ɵɵlistener("NavCollapsedMob", function NavigationComponent_Template_app_nav_content_NavCollapsedMob_6_listener() { return ctx.navCollapseMob(); })("SubmenuCollapse", function NavigationComponent_Template_app_nav_content_SubmenuCollapse_6_listener() { return ctx.navSubmenuCollapse(); });
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.themeMode === "compact" ? 4 : 5);
        } }, dependencies: [NavContentComponent, RouterModule, i1.RouterLink], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationComponent, [{
        type: Component,
        args: [{ selector: 'app-navigation', imports: [NavContentComponent, RouterModule], template: "<nav class=\"\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"m-header\">\n      <a [routerLink]=\"['/application/dashboard']\" class=\"b-brand\">\n        @if (themeMode === 'compact') {\n          <img src=\"assets/images/Logo-small.svg\" alt=\"small-menu-logo\" class=\"logo logo-sm\" />\n        } @else {\n          <img src=\"assets/images/logo.svg\" alt=\"logo\" class=\"logo logo-lg\" />\n        }\n      </a>\n    </div>\n    <app-nav-content (NavCollapsedMob)=\"navCollapseMob()\" (SubmenuCollapse)=\"navSubmenuCollapse()\" class=\"scroll-div w-100 compact\" />\n  </div>\n</nav>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, { NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }], SubmenuCollapse: [{ type: i0.Output, args: ["SubmenuCollapse"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavigationComponent, { className: "NavigationComponent", filePath: "src/app/theme/layout/admin/navigation/navigation.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=navigation.component.js.map