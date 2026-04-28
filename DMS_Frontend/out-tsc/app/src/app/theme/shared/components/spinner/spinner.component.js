// Angular import
import { Component, ViewEncapsulation, input, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
// project import
import { Spinkit } from './spinkits';
import * as i0 from "@angular/core";
function SpinnerComponent_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 3);
    i0.ɵɵdomElement(1, "div", 4);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("colored", !ctx_r0.backgroundColor());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", ctx_r0.backgroundColor());
} }
function SpinnerComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵconditionalCreate(2, SpinnerComponent_Conditional_0_Conditional_2_Template, 2, 4, "div", 2);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.spinner() === ctx_r0.Spinkit.skLine ? 2 : -1);
} }
export class SpinnerComponent {
    // Constructor
    constructor() {
        this.router = inject(Router);
        // public props
        this.isSpinnerVisible = true;
        this.Spinkit = Spinkit;
        this.backgroundColor = input('#2689E2', ...(ngDevMode ? [{ debugName: "backgroundColor" }] : []));
        this.spinner = input(Spinkit.skLine, ...(ngDevMode ? [{ debugName: "spinner" }] : []));
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    // life cycle event
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
    static { this.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SpinnerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: [1, "backgroundColor"], spinner: [1, "spinner"] }, decls: 1, vars: 1, consts: [["id", "http-loader"], [1, "loader-bg"], [1, "sk-line-material", 3, "colored"], [1, "sk-line-material"], [1, "sk-child", "sk-bounce1"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, SpinnerComponent_Conditional_0_Template, 3, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.isSpinnerVisible ? 0 : -1);
        } }, styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent,\n.colored > div {\n  background-color: #333;\n}\n", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent,\n.colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n"], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpinnerComponent, [{
        type: Component,
        args: [{ selector: 'app-spinner', encapsulation: ViewEncapsulation.None, template: "@if (isSpinnerVisible) {\n  <div id=\"http-loader\">\n    <div class=\"loader-bg\">\n      @if (spinner() === Spinkit.skLine) {\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor()\">\n          <div class=\"sk-child sk-bounce1\" [style.background-color]=\"backgroundColor()\"></div>\n        </div>\n      }\n    </div>\n  </div>\n}\n", styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent,\n.colored > div {\n  background-color: #333;\n}\n", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent,\n.colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n"] }]
    }], () => [], { backgroundColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "backgroundColor", required: false }] }], spinner: [{ type: i0.Input, args: [{ isSignal: true, alias: "spinner", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src/app/theme/shared/components/spinner/spinner.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=spinner.component.js.map