import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as i0 from "@angular/core";
export class ApplicationComponent {
    static { this.ɵfac = function ApplicationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApplicationComponent, selectors: [["app-application"]], decls: 1, vars: 0, template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [RouterOutlet], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationComponent, [{
        type: Component,
        args: [{ selector: 'app-application', imports: [RouterOutlet], template: "<router-outlet />\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApplicationComponent, { className: "ApplicationComponent", filePath: "src/app/demo/application/application.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=application.component.js.map