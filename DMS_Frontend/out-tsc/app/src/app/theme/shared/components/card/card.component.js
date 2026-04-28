import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function CardComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "h5");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cardTitle);
} }
export class CardComponent {
    static { this.ɵfac = function CardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["app-card"]], inputs: { cardTitle: "cardTitle", customHeader: "customHeader" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-block"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, CardComponent_Conditional_2_Template, 2, 1, "h5");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(3, "div", 2);
            i0.ɵɵprojection(4);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.customHeader ? 2 : -1);
        } }, styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{ selector: 'app-card', imports: [], template: "<div class=\"card\">\n  <div class=\"card-header\">\n    @if (!customHeader) {\n      <h5>{{ cardTitle }}</h5>\n    }\n  </div>\n  <div class=\"card-block\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, { cardTitle: [{
            type: Input
        }], customHeader: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/theme/shared/components/card/card.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=card.component.js.map