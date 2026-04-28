// Angular import
import { Component, output } from '@angular/core';
import * as i0 from "@angular/core";
export class NavLeftComponent {
    constructor() {
        // public props
        this.NavCollapsedMob = output();
    }
    navCollapsedMob() {
        this.NavCollapsedMob.emit();
    }
    static { this.ɵfac = function NavLeftComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavLeftComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavLeftComponent, selectors: [["app-nav-left"]], outputs: { NavCollapsedMob: "NavCollapsedMob" }, decls: 13, vars: 0, consts: [[1, "me-auto", "pc-mob-drp"], [1, "list-unstyled"], [1, "pc-h-item", "header-mobile-collapse"], ["href", "javascript:", "id", "mobile-collapse mobile-collapse1", 1, "pc-head-link", "head-link-secondary", "ms-0", "mobile-menu", 3, "click"], [1, "ti", "ti-menu-2"], ["ngbDropdown", "", 1, "dropdown", "pc-h-item", "d-inline-flex", "d-md-none"], ["data-bs-toggle", "dropdown", "href", "javascript:", "ngbDropdownToggle", "", 1, "pc-head-link", "head-link-secondary", "dropdown-toggle", "arrow-none", "m-0"], [1, "ti", "ti-search"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "pc-h-dropdown", "drp-search"], [1, "px-3"], [1, "form-group", "mb-0", "d-flex", "align-items-center"], ["type", "search", "placeholder", "Search here. . .", 1, "form-control", "border-0", "shadow-none"]], template: function NavLeftComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
            i0.ɵɵdomListener("click", function NavLeftComponent_Template_a_click_3_listener() { return ctx.navCollapsedMob(); });
            i0.ɵɵdomElement(4, "i", 4);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(5, "li", 5)(6, "a", 6);
            i0.ɵɵdomElement(7, "i", 7);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(8, "div", 8)(9, "form", 9)(10, "div", 10);
            i0.ɵɵdomElement(11, "i", 7)(12, "input", 11);
            i0.ɵɵdomElementEnd()()()()()();
        } }, styles: [".ms-0[_ngcontent-%COMP%] {\n  margin: 0 16px 0 0 !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavLeftComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-left', template: "<div class=\"me-auto pc-mob-drp\">\n  <ul class=\"list-unstyled\">\n    <li class=\"pc-h-item header-mobile-collapse\">\n      <a\n        href=\"javascript:\"\n        class=\"pc-head-link head-link-secondary ms-0 mobile-menu\"\n        id=\"mobile-collapse mobile-collapse1\"\n        (click)=\"navCollapsedMob()\"\n      >\n        <i class=\"ti ti-menu-2\"></i>\n      </a>\n    </li>\n    <li class=\"dropdown pc-h-item d-inline-flex d-md-none\" ngbDropdown>\n      <a\n        class=\"pc-head-link head-link-secondary dropdown-toggle arrow-none m-0\"\n        data-bs-toggle=\"dropdown\"\n        href=\"javascript:\"\n        ngbDropdownToggle\n      >\n        <i class=\"ti ti-search\"></i>\n      </a>\n      <div class=\"dropdown-menu pc-h-dropdown drp-search\" ngbDropdownMenu>\n        <form class=\"px-3\">\n          <div class=\"form-group mb-0 d-flex align-items-center\">\n            <i class=\"ti ti-search\"></i>\n            <input type=\"search\" class=\"form-control border-0 shadow-none\" placeholder=\"Search here. . .\" />\n          </div>\n        </form>\n      </div>\n    </li>\n    \n  </ul>\n</div>\n", styles: [".ms-0 {\n  margin: 0 16px 0 0 !important;\n}\n"] }]
    }], null, { NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavLeftComponent, { className: "NavLeftComponent", filePath: "src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=nav-left.component.js.map