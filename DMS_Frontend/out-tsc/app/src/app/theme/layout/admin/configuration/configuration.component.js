// Angular import
import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
// project import
import { BerryConfig } from 'src/app/app-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ open: a0 });
export class ConfigurationComponent {
    constructor() {
        this.renderer = inject(Renderer2);
    }
    // life cycle event
    ngOnInit() {
        this.setFontFamily = BerryConfig.font_family;
        this.fontFamily(this.setFontFamily);
    }
    // public method
    fontFamily(font) {
        this.setFontFamily = font;
        this.renderer.removeClass(document.body, 'Roboto');
        this.renderer.removeClass(document.body, 'Poppins');
        this.renderer.removeClass(document.body, 'Inter');
        this.renderer.addClass(document.body, font);
    }
    static { this.ɵfac = function ConfigurationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfigurationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 29, vars: 6, consts: [["id", "styleSelector", 1, "menu-styler", 3, "ngClass"], ["ngbTooltip", "Live Customize", 1, "pct-c-btn"], ["href", "javascript:", 3, "click"], [1, "ph-duotone", "ph-gear-six"], [1, "style-block"], [1, "customize-header"], [1, "d-inline-flex", "align-items-center", "gap-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", "ms-1", 3, "click"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "mb-1", "text-uppercase"], [1, "text-muted", "text-sm"], [1, "theme-color", "theme-font-style"], [1, "form-check"], ["type", "radio", "name", "layout_font", "id", "layoutfontRoboto", "checked", "", "ngbTooltip", "Roboto", 1, "form-check-input", 3, "click", "checked"], ["for", "layoutfontRoboto", 1, "form-check-label"], ["type", "radio", "name", "layout_font", "id", "layoutfontPoppins", "ngbTooltip", "Poppins", 1, "form-check-input", 3, "click", "checked"], ["for", "layoutfontPoppins", 1, "form-check-label"], ["type", "radio", "name", "layout_font", "id", "layoutfontInter", "ngbTooltip", "Inter", 1, "form-check-input", 3, "click", "checked"], ["for", "layoutfontInter", 1, "form-check-label"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵlistener("click", function ConfigurationComponent_Template_a_click_2_listener() { return ctx.styleSelectorToggle = !ctx.styleSelectorToggle; });
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "h5");
            i0.ɵɵtext(7, "Theme Customization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 6)(9, "button", 7);
            i0.ɵɵlistener("click", function ConfigurationComponent_Template_button_click_9_listener() { return ctx.styleSelectorToggle = !ctx.styleSelectorToggle; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "ul", 8)(11, "li", 9)(12, "h5", 10);
            i0.ɵɵtext(13, "Font Style");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p", 11);
            i0.ɵɵtext(15, "Choose theme font");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 12)(17, "div", 13)(18, "input", 14);
            i0.ɵɵlistener("click", function ConfigurationComponent_Template_input_click_18_listener() { return ctx.fontFamily("Roboto"); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "label", 15);
            i0.ɵɵtext(20, "Roboto");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 13)(22, "input", 16);
            i0.ɵɵlistener("click", function ConfigurationComponent_Template_input_click_22_listener() { return ctx.fontFamily("Poppins"); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "label", 17);
            i0.ɵɵtext(24, "Poppins");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 13)(26, "input", 18);
            i0.ɵɵlistener("click", function ConfigurationComponent_Template_input_click_26_listener() { return ctx.fontFamily("Inter"); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "label", 19);
            i0.ɵɵtext(28, "Inter");
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.styleSelectorToggle));
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("checked", ctx.setFontFamily === "Roboto");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.setFontFamily === "Poppins");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.setFontFamily === "Inter");
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigurationComponent, [{
        type: Component,
        args: [{ selector: 'app-configuration', imports: [CommonModule], template: "<div id=\"styleSelector\" class=\"menu-styler\" [ngClass]=\"{ open: styleSelectorToggle }\">\n  <div class=\"pct-c-btn\" ngbTooltip=\"Live Customize\">\n    <a href=\"javascript:\" (click)=\"styleSelectorToggle = !styleSelectorToggle\">\n      <i class=\"ph-duotone ph-gear-six\"></i>\n    </a>\n  </div>\n  <div class=\"style-block\">\n    <div class=\"customize-header\">\n      <h5>Theme Customization</h5>\n      <div class=\"d-inline-flex align-items-center gap-2\">\n        <button type=\"button\" class=\"btn-close ms-1\" aria-label=\"Close\" (click)=\"styleSelectorToggle = !styleSelectorToggle\"></button>\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        <h5 class=\"mb-1 text-uppercase\">Font Style</h5>\n        <p class=\"text-muted text-sm\">Choose theme font</p>\n        <div class=\"theme-color theme-font-style\">\n          <div class=\"form-check\">\n            <input\n              class=\"form-check-input\"\n              type=\"radio\"\n              name=\"layout_font\"\n              id=\"layoutfontRoboto\"\n              checked\n              [checked]=\"setFontFamily === 'Roboto'\"\n              (click)=\"fontFamily('Roboto')\"\n              ngbTooltip=\"Roboto\"\n            />\n            <label class=\"form-check-label\" for=\"layoutfontRoboto\">Roboto</label>\n          </div>\n          <div class=\"form-check\">\n            <input\n              class=\"form-check-input\"\n              type=\"radio\"\n              name=\"layout_font\"\n              id=\"layoutfontPoppins\"\n              [checked]=\"setFontFamily === 'Poppins'\"\n              (click)=\"fontFamily('Poppins')\"\n              ngbTooltip=\"Poppins\"\n            />\n            <label class=\"form-check-label\" for=\"layoutfontPoppins\">Poppins</label>\n          </div>\n          <div class=\"form-check\">\n            <input\n              class=\"form-check-input\"\n              type=\"radio\"\n              name=\"layout_font\"\n              id=\"layoutfontInter\"\n              [checked]=\"setFontFamily === 'Inter'\"\n              (click)=\"fontFamily('Inter')\"\n              ngbTooltip=\"Inter\"\n            />\n            <label class=\"form-check-label\" for=\"layoutfontInter\">Inter</label>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfigurationComponent, { className: "ConfigurationComponent", filePath: "src/app/theme/layout/admin/configuration/configuration.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=configuration.component.js.map