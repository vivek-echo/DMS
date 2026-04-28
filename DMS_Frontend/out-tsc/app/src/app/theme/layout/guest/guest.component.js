// Angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class GuestComponent {
    static { this.ɵfac = function GuestComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GuestComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GuestComponent, selectors: [["app-guest"]], decls: 1, vars: 0, template: function GuestComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [RouterModule, i1.RouterOutlet], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuestComponent, [{
        type: Component,
        args: [{ selector: 'app-guest', imports: [RouterModule], template: "<router-outlet />\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GuestComponent, { className: "GuestComponent", filePath: "src/app/theme/layout/guest/guest.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=guest.component.js.map