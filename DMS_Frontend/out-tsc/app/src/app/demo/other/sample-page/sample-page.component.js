// angular import
import { Component } from '@angular/core';
// project import
import { CardComponent } from '../../../theme/shared/components/card/card.component';
import * as i0 from "@angular/core";
export class SamplePageComponent {
    static { this.ɵfac = function SamplePageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SamplePageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SamplePageComponent, selectors: [["app-sample-page"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Hello Card"]], template: function SamplePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "app-card", 2)(3, "p");
            i0.ɵɵtext(4, " \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\" ");
            i0.ɵɵelementEnd()()()();
        } }, dependencies: [CardComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SamplePageComponent, [{
        type: Component,
        args: [{ selector: 'app-sample-page', imports: [CardComponent], template: "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Hello Card\">\n      <p>\n        \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt\n        in culpa qui officia deserunt mollit anim id est laborum.\"\n      </p>\n    </app-card>\n  </div>\n</div>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SamplePageComponent, { className: "SamplePageComponent", filePath: "src/app/demo/other/sample-page/sample-page.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=sample-page.component.js.map