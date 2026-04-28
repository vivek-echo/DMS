// Angular import
import { Component, output } from '@angular/core';
// project import
import { BerryConfig } from 'src/app/app-config';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import * as i0 from "@angular/core";
export class NavBarComponent {
    // Constructor
    constructor() {
        // public props
        this.NavCollapse = output();
        this.NavCollapsedMob = output();
        this.windowWidth = window.innerWidth;
        this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
        this.navCollapsedMob = false;
    }
    // public method
    navCollapse() {
        if (this.windowWidth >= 1025) {
            this.navCollapsed = !this.navCollapsed;
            this.NavCollapse.emit();
        }
    }
    navCollapseMob() {
        if (this.windowWidth < 1025) {
            this.NavCollapsedMob.emit();
        }
    }
    static { this.ɵfac = function NavBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavBarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavBarComponent, selectors: [["app-nav-bar"]], outputs: { NavCollapse: "NavCollapse", NavCollapsedMob: "NavCollapsedMob" }, decls: 5, vars: 1, consts: [[1, "pc-header", "coded-header"], [3, "NavCollapse", "navCollapsed"], [1, "header-wrapper"], [3, "NavCollapsedMob"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "app-nav-logo", 1);
            i0.ɵɵlistener("NavCollapse", function NavBarComponent_Template_app_nav_logo_NavCollapse_1_listener() { return ctx.navCollapse(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2)(3, "app-nav-left", 3);
            i0.ɵɵlistener("NavCollapsedMob", function NavBarComponent_Template_app_nav_left_NavCollapsedMob_3_listener() { return ctx.navCollapseMob(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "app-nav-right");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("navCollapsed", ctx.navCollapsed);
        } }, dependencies: [NavLogoComponent, NavLeftComponent, NavRightComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavBarComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-bar', imports: [NavLogoComponent, NavLeftComponent, NavRightComponent], template: "<header class=\"pc-header coded-header\">\n  <app-nav-logo [navCollapsed]=\"navCollapsed\" (NavCollapse)=\"navCollapse()\" />\n  <div class=\"header-wrapper\">\n    <app-nav-left (NavCollapsedMob)=\"navCollapseMob()\" />\n    <app-nav-right />\n  </div>\n</header>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { NavCollapse: [{ type: i0.Output, args: ["NavCollapse"] }], NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavBarComponent, { className: "NavBarComponent", filePath: "src/app/theme/layout/admin/nav-bar/nav-bar.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=nav-bar.component.js.map