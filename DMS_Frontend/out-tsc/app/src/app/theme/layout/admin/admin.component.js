// Angular import
import { Component, effect, inject } from '@angular/core';
import { CommonModule, Location, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
// Project import
import { ConfigurationComponent } from './configuration/configuration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { LayoutStateService } from '../../shared/service/layout-state.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = (a0, a1, a2, a3) => ({ "navbar-collapsed": a0, horizontal: a1, compact: a2, "mob-open": a3 });
export class AdminComponent {
    // Constructor
    constructor() {
        this.location = inject(Location);
        this.locationStrategy = inject(LocationStrategy);
        this.cdr = inject(ChangeDetectorRef);
        this.layoutState = inject(LayoutStateService);
        this.navCollapsed = false;
        this.navCollapsedMob = false;
        effect(() => {
            this.navCollapsedMob = this.layoutState.navCollapsedMob();
            this.cdr.detectChanges();
        });
    }
    // life cycle hook
    ngAfterViewInit() {
        this.windowWidth = window.innerWidth;
        this.cdr.detectChanges();
    }
    // private method
    isThemeLayout(layout) {
        this.currentLayout = layout;
    }
    // public method
    navMobClick() {
        this.layoutState.toggleNavCollapsedMob();
        if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
            document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.closeMenu();
        }
    }
    closeMenu() {
        this.layoutState.toggleNavCollapsedMob();
    }
    static { this.ɵfac = function AdminComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminComponent, selectors: [["app-admin"]], decls: 31, vars: 6, consts: [[1, "coded-navbar", "pc-sidebar", 3, "NavCollapsedMob", "ngClass"], [3, "NavCollapse", "NavCollapsedMob"], [1, "pc-container"], [1, "coded-wrapper"], [1, "coded-content"], [1, "coded-inner-content"], [1, "main-body"], [1, "page-wrapper"], ["tabindex", "0", 1, "pc-menu-overlay", 3, "click", "keydown"], [1, "pc-footer"], [1, "footer-wrapper", "container-fluid"], [1, "row"], [1, "col", "my-1"], [1, "m-0"], ["href", "https://codedthemes.com", "target", "_blank"], [1, "col-auto", "my-1"], [1, "list-inline", "footer-link", "mb-0"], [1, "list-inline-item"], ["href", "https://codedthemes.com/", "target", "_blank"], ["href", "https://codedthemes.com/privacy-policy/", "target", "_blank"], ["href", "https://codedthemes.support-hub.io/", "target", "_blank"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-navigation", 0);
            i0.ɵɵlistener("NavCollapsedMob", function AdminComponent_Template_app_navigation_NavCollapsedMob_0_listener() { return ctx.navMobClick(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "app-nav-bar", 1);
            i0.ɵɵlistener("NavCollapse", function AdminComponent_Template_app_nav_bar_NavCollapse_1_listener() { return ctx.navCollapsed = !ctx.navCollapsed; })("NavCollapsedMob", function AdminComponent_Template_app_nav_bar_NavCollapsedMob_1_listener() { return ctx.navMobClick(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
            i0.ɵɵelement(6, "app-breadcrumb");
            i0.ɵɵelementStart(7, "div", 6)(8, "div", 7);
            i0.ɵɵelement(9, "router-outlet");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵlistener("click", function AdminComponent_Template_div_click_10_listener() { return ctx.closeMenu(); })("keydown", function AdminComponent_Template_div_keydown_10_listener($event) { return ctx.handleKeyDown($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "footer", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "p", 13);
            i0.ɵɵtext(16, " Copyright \u00A9 ");
            i0.ɵɵelementStart(17, "a", 14);
            i0.ɵɵtext(18, "CodedThemes");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 15)(20, "ul", 16)(21, "li", 17)(22, "a", 18);
            i0.ɵɵtext(23, "Home");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "li", 17)(25, "a", 19);
            i0.ɵɵtext(26, "Privacy Policy");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "li", 17)(28, "a", 20);
            i0.ɵɵtext(29, "Contact us");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelement(30, "app-configuration");
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(1, _c0, ctx.navCollapsed, ctx.currentLayout === "horizontal", ctx.currentLayout === "compact", ctx.navCollapsedMob));
        } }, dependencies: [CommonModule, i1.NgClass, NavigationComponent, NavBarComponent, ConfigurationComponent, RouterModule, i2.RouterOutlet, BreadcrumbComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminComponent, [{
        type: Component,
        args: [{ selector: 'app-admin', imports: [CommonModule, NavigationComponent, NavBarComponent, ConfigurationComponent, RouterModule, BreadcrumbComponent], template: "<app-navigation\n  class=\"coded-navbar pc-sidebar\"\n  [ngClass]=\"{\n    'navbar-collapsed': navCollapsed,\n    horizontal: currentLayout === 'horizontal',\n    compact: currentLayout === 'compact',\n    'mob-open': navCollapsedMob\n  }\"\n  (NavCollapsedMob)=\"navMobClick()\"\n/>\n<app-nav-bar (NavCollapse)=\"this.navCollapsed = !this.navCollapsed\" (NavCollapsedMob)=\"navMobClick()\" />\n<div class=\"pc-container\">\n  <div class=\"coded-wrapper\">\n    <div class=\"coded-content\">\n      <div class=\"coded-inner-content\">\n        <app-breadcrumb />\n        <div class=\"main-body\">\n          <div class=\"page-wrapper\">\n            <router-outlet />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pc-menu-overlay\" (click)=\"closeMenu()\" (keydown)=\"handleKeyDown($event)\" tabindex=\"0\"></div>\n</div>\n<footer class=\"pc-footer\">\n  <div class=\"footer-wrapper container-fluid\">\n    <div class=\"row\">\n      <div class=\"col my-1\">\n        <p class=\"m-0\">\n          Copyright &copy;\n          <a href=\"https://codedthemes.com\" target=\"_blank\">CodedThemes</a>\n        </p>\n      </div>\n      <div class=\"col-auto my-1\">\n        <ul class=\"list-inline footer-link mb-0\">\n          <li class=\"list-inline-item\"><a href=\"https://codedthemes.com/\" target=\"_blank\">Home</a></li>\n          <li class=\"list-inline-item\">\n            <a href=\"https://codedthemes.com/privacy-policy/\" target=\"_blank\">Privacy Policy</a>\n          </li>\n          <li class=\"list-inline-item\"><a href=\"https://codedthemes.support-hub.io/\" target=\"_blank\">Contact us</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n<app-configuration />\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/theme/layout/admin/admin.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=admin.component.js.map