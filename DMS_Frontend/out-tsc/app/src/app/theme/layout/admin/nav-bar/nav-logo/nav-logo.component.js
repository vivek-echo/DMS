// Angular import
import { Component, Input, output, inject } from '@angular/core';
import { Router } from '@angular/router';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ on: a0 });
export class NavLogoComponent {
    // Constructor
    constructor() {
        this.router = inject(Router);
        this.NavCollapse = output();
        this.windowWidth = window.innerWidth;
    }
    // public method
    navCollapse() {
        if (this.windowWidth >= 1025) {
            this.navCollapsed = !this.navCollapsed;
            this.NavCollapse.emit();
        }
    }
    returnToHome() {
        this.router.navigate(['/application/dashboard']);
    }
    static { this.ɵfac = function NavLogoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavLogoComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavLogoComponent, selectors: [["app-nav-logo"]], inputs: { navCollapsed: "navCollapsed" }, outputs: { NavCollapse: "NavCollapse" }, decls: 10, vars: 3, consts: [[1, "m-header", "d-flex", "align-items-center", "justify-content-between", "px-3"], [1, "b-brand", "d-flex", "align-items-center", 3, "click"], ["src", "assets/logo1.png", "alt", "logo", 1, "nav-logo", "me-2"], [1, "text-dark", "mt-2"], [1, "d-flex", "align-items-center", "gap-3"], ["href", "javascript:", "title", "Toggle Menu", 1, "pc-head-link", "head-link-secondary", "mobile-menu", 3, "click", "ngClass"], [1, "ti", "ti-menu-2"], [1, "profile-box", "d-flex", "align-items-center"], [1, "ti", "ti-user"]], template: function NavLogoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵlistener("click", function NavLogoComponent_Template_a_click_1_listener() { return ctx.returnToHome(); });
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementStart(3, "h2", 3);
            i0.ɵɵtext(4, "DMS");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 4)(6, "a", 5);
            i0.ɵɵlistener("click", function NavLogoComponent_Template_a_click_6_listener() { return ctx.navCollapse(); });
            i0.ɵɵelement(7, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵelement(9, "i", 8);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0, ctx.navCollapsed));
        } }, dependencies: [SharedModule, i1.NgClass], styles: ["//[_ngcontent-%COMP%]   This[_ngcontent-%COMP%]   file[_ngcontent-%COMP%]   is[_ngcontent-%COMP%]   intentionally[_ngcontent-%COMP%]   left[_ngcontent-%COMP%]   empty[_ngcontent-%COMP%]   to[_ngcontent-%COMP%]   allow[_ngcontent-%COMP%]   customers[_ngcontent-%COMP%]   to[_ngcontent-%COMP%]   add[_ngcontent-%COMP%]   custom[_ngcontent-%COMP%]   CSS[_ngcontent-%COMP%]   if[_ngcontent-%COMP%]   needed.\n\n\n.m-header[_ngcontent-%COMP%] {\n    height: 60px;\n    background: rgba(255, 255, 255, 0.05);\n    backdrop-filter: blur(10px);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n\n\n.nav-logo[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 50px;\n    object-fit: contain;\n    border-radius: 10px;\n\n\n    padding: 4px;\n    background: rgba(255, 255, 255, 0.15);\n}\n\n.brand-text[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: 600;\n    font-size: 18px;\n    letter-spacing: 1px;\n}\n\n\n\n.mobile-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 22px;\n    color: #fff;\n}\n\n.mobile-menu[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n    transition: 0.2s ease;\n}\n\n\n\n.profile-box[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.15);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.profile-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 18px;\n}\n\n.profile-box[_ngcontent-%COMP%]:hover {\n    background: rgba(255, 255, 255, 0.25);\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavLogoComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-logo', imports: [SharedModule], template: "<div class=\"m-header d-flex align-items-center justify-content-between px-3\">\n\n  <!-- LOGO -->\n  <a (click)=\"returnToHome()\" class=\"b-brand d-flex align-items-center\">\n    <img src=\"assets/logo1.png\" alt=\"logo\" class=\"nav-logo me-2\" />\n    <h2 class=\"text-dark mt-2\">DMS</h2>\n  </a>\n\n  <!-- RIGHT SIDE -->\n  <div class=\"d-flex align-items-center gap-3\">\n\n    <!-- MENU TOGGLE -->\n    <a\n      href=\"javascript:\"\n      class=\"pc-head-link head-link-secondary mobile-menu\"\n      [ngClass]=\"{ on: navCollapsed }\"\n      (click)=\"navCollapse()\"\n      title=\"Toggle Menu\"\n    >\n      <i class=\"ti ti-menu-2\"></i>\n    </a>\n\n    <!-- USER PROFILE -->\n    <div class=\"profile-box d-flex align-items-center\">\n      <i class=\"ti ti-user\"></i>\n    </div>\n\n  </div>\n\n</div>", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n/* HEADER */\n.m-header {\n    height: 60px;\n    background: rgba(255, 255, 255, 0.05);\n    backdrop-filter: blur(10px);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n/* LOGO */\n.nav-logo {\n    width: 120px;\n    height: 50px;\n    object-fit: contain;\n    border-radius: 10px;\n\n\n    padding: 4px;\n    background: rgba(255, 255, 255, 0.15);\n}\n\n.brand-text {\n    color: #fff;\n    font-weight: 600;\n    font-size: 18px;\n    letter-spacing: 1px;\n}\n\n/* MENU ICON */\n.mobile-menu i {\n    font-size: 22px;\n    color: #fff;\n}\n\n.mobile-menu:hover {\n    transform: scale(1.1);\n    transition: 0.2s ease;\n}\n\n/* PROFILE ICON */\n.profile-box {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.15);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.profile-box i {\n    color: #fff;\n    font-size: 18px;\n}\n\n.profile-box:hover {\n    background: rgba(255, 255, 255, 0.25);\n}"] }]
    }], () => [], { navCollapsed: [{
            type: Input
        }], NavCollapse: [{ type: i0.Output, args: ["NavCollapse"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavLogoComponent, { className: "NavLogoComponent", filePath: "src/app/theme/layout/admin/nav-bar/nav-logo/nav-logo.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=nav-logo.component.js.map