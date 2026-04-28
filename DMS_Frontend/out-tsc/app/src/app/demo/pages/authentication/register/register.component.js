// angular import
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { email, Field, form, minLength, required } from '@angular/forms/signals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/login"];
const _forTrack0 = ($index, $item) => $item.kind;
function RegisterComponent_Conditional_30_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(error_r1.message);
} }
function RegisterComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵrepeaterCreate(1, RegisterComponent_Conditional_30_For_2_Template, 2, 1, "div", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.registerForm.firstName().errors());
} }
function RegisterComponent_Conditional_36_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(error_r3.message);
} }
function RegisterComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵrepeaterCreate(1, RegisterComponent_Conditional_36_For_2_Template, 2, 1, "div", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.registerForm.lastName().errors());
} }
function RegisterComponent_Conditional_41_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(error_r4.message);
} }
function RegisterComponent_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵrepeaterCreate(1, RegisterComponent_Conditional_41_For_2_Template, 2, 1, "div", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.registerForm.email().errors());
} }
function RegisterComponent_Conditional_46_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(error_r5.message);
} }
function RegisterComponent_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵrepeaterCreate(1, RegisterComponent_Conditional_46_For_2_Template, 2, 1, "div", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.registerForm.password().errors());
} }
export class RegisterComponent {
    constructor() {
        this.cd = inject(ChangeDetectorRef);
        this.submitted = signal(false, ...(ngDevMode ? [{ debugName: "submitted" }] : []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.showPassword = signal(false, ...(ngDevMode ? [{ debugName: "showPassword" }] : []));
        this.registerModel = signal({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }, ...(ngDevMode ? [{ debugName: "registerModel" }] : []));
        this.registerForm = form(this.registerModel, (schemaPath) => {
            required(schemaPath.email, { message: 'Email is required' });
            email(schemaPath.email, { message: 'Enter a valid email address' });
            required(schemaPath.password, { message: 'Password is required' });
            minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters' });
            required(schemaPath.firstName, { message: 'First Name is required' });
            required(schemaPath.lastName, { message: 'Last Name is required' });
        });
    }
    onSubmit(event) {
        this.submitted.set(true);
        this.error.set('');
        event.preventDefault();
        const credentials = this.registerModel();
        console.log('register user logged in with:', credentials);
        this.cd.detectChanges();
    }
    static { this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], decls: 61, vars: 22, consts: [[1, "auth-main"], [1, "auth-wrapper", "v3"], [1, "auth-form"], [1, "card", "mt-5"], [1, "card-body"], [3, "ngSubmit"], ["href", "javascript:", 1, "d-flex", "justify-content-center", "mt-3"], ["src", "assets/images/logo-dark.svg", "alt", "logo"], [1, "row"], [1, "d-flex", "justify-content-center"], [1, "auth-header"], [1, "text-secondary", "mt-5"], [1, "fs-4", "mt-2"], ["type", "button", 1, "btn", "mt-2", "btn-light-primary", "bg-light", "text-muted", 2, "width", "100%"], ["src", "assets/images/authentication/google-icon.svg", "alt", "google"], [1, "saprator", "mt-3"], [1, "my-4", "d-flex", "justify-content-center"], [1, "col-md-6"], [1, "form-floating", "mb-3"], ["type", "email", "id", "floatingInput", "placeholder", "Enter Your First Name", 1, "form-control", 3, "field"], ["for", "floatingInput"], [1, "invalid-feedback"], ["type", "email", "id", "floatingInput", "placeholder", "Enter Your Last Name", 1, "form-control", 3, "field"], ["type", "email", "id", "floatingInput", "placeholder", "Email Address", 1, "form-control", 3, "field"], ["type", "password", "id", "password", "placeholder", "Password (min. 8 characters)", 1, "form-control", 3, "field"], ["for", "password"], [1, "form-check", "mt-3s"], ["type", "checkbox", "id", "customCheckc1", "checked", "", 1, "form-check-input", "input-primary"], ["for", "customCheckc1", 1, "form-check-label"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-secondary", "p-2"], [3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener($event) { return ctx.onSubmit($event); });
            i0.ɵɵelementStart(6, "a", 6);
            i0.ɵɵelement(7, "img", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h2", 11)(12, "b");
            i0.ɵɵtext(13, "Sign up");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "p", 12);
            i0.ɵɵtext(15, "Enter your credentials to continue");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(16, "button", 13);
            i0.ɵɵelement(17, "img", 14);
            i0.ɵɵtext(18, " Sign Up With Google ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 15)(20, "span");
            i0.ɵɵtext(21, "or");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "h5", 16);
            i0.ɵɵtext(23, "Sign Up with Email address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 8)(25, "div", 17)(26, "div", 18);
            i0.ɵɵelement(27, "input", 19);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(28, "label", 20);
            i0.ɵɵtext(29, "First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(30, RegisterComponent_Conditional_30_Template, 3, 0, "div", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 17)(32, "div", 18);
            i0.ɵɵelement(33, "input", 22);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(34, "label", 20);
            i0.ɵɵtext(35, "Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(36, RegisterComponent_Conditional_36_Template, 3, 0, "div", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "div", 18);
            i0.ɵɵelement(38, "input", 23);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(39, "label", 20);
            i0.ɵɵtext(40, "Email address / Username");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(41, RegisterComponent_Conditional_41_Template, 3, 0, "div", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 18);
            i0.ɵɵelement(43, "input", 24);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(44, "label", 25);
            i0.ɵɵtext(45, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(46, RegisterComponent_Conditional_46_Template, 3, 0, "div", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "div", 26);
            i0.ɵɵelement(48, "input", 27);
            i0.ɵɵelementStart(49, "label", 28)(50, "h5");
            i0.ɵɵtext(51, " Agree with ");
            i0.ɵɵelementStart(52, "span");
            i0.ɵɵtext(53, "Terms & Condition.");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(54, "div", 29)(55, "button", 30);
            i0.ɵɵtext(56, "Sign Up");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(57, "hr");
            i0.ɵɵelementStart(58, "h5", 9)(59, "a", 31);
            i0.ɵɵtext(60, "Already have an account?");
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(27);
            i0.ɵɵcontrol(ctx.registerForm.firstName);
            i0.ɵɵclassProp("is-invalid", ctx.submitted() && ctx.registerForm.firstName().errors().length > 0);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.submitted() && ctx.registerForm.firstName().errors().length > 0 ? 30 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol(ctx.registerForm.lastName);
            i0.ɵɵclassProp("is-invalid", ctx.submitted() && ctx.registerForm.lastName().errors().length > 0);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.submitted() && ctx.registerForm.lastName().errors().length > 0 ? 36 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("is-invalid", ctx.submitted() && ctx.registerForm.email().invalid());
            i0.ɵɵcontrol(ctx.registerForm.email);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.submitted() && ctx.registerForm.email().invalid() ? 41 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵcontrol(ctx.registerForm.password);
            i0.ɵɵclassProp("is-invalid", ctx.submitted() && ctx.registerForm.password().errors().length > 0);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.submitted() && ctx.registerForm.password().errors().length > 0 ? 46 : -1);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(21, _c0));
        } }, dependencies: [CommonModule, RouterModule, i1.RouterLink, Field], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', imports: [CommonModule, RouterModule, Field], template: "<div class=\"auth-main\">\n  <div class=\"auth-wrapper v3\">\n    <div class=\"auth-form\">\n      <div class=\"card mt-5\">\n        <div class=\"card-body\">\n          <form (ngSubmit)=\"onSubmit($event)\">\n            <a href=\"javascript:\" class=\"d-flex justify-content-center mt-3\">\n              <img src=\"assets/images/logo-dark.svg\" alt=\"logo\" />\n            </a>\n            <div class=\"row\">\n              <div class=\"d-flex justify-content-center\">\n                <div class=\"auth-header\">\n                  <h2 class=\"text-secondary mt-5\"><b>Sign up</b></h2>\n                  <p class=\"fs-4 mt-2\">Enter your credentials to continue</p>\n                </div>\n              </div>\n            </div>\n            <button type=\"button\" class=\"btn mt-2 btn-light-primary bg-light text-muted\" style=\"width: 100%\">\n              <img src=\"assets/images/authentication/google-icon.svg\" alt=\"google\" />\n              Sign Up With Google\n            </button>\n            <div class=\"saprator mt-3\">\n              <span>or</span>\n            </div>\n            <h5 class=\"my-4 d-flex justify-content-center\">Sign Up with Email address</h5>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-floating mb-3\">\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"floatingInput\"\n                    placeholder=\"Enter Your First Name\"\n                    [field]=\"registerForm.firstName\"\n                    [class.is-invalid]=\"submitted() && registerForm.firstName().errors().length > 0\"\n                  />\n                  <label for=\"floatingInput\">First Name</label>\n                  @if (submitted() && registerForm.firstName().errors().length > 0) {\n                    <div class=\"invalid-feedback\">\n                      @for (error of registerForm.firstName().errors(); track error.kind) {\n                        <div>{{ error.message }}</div>\n                      }\n                    </div>\n                  }\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-floating mb-3\">\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"floatingInput\"\n                    placeholder=\"Enter Your Last Name\"\n                    [field]=\"registerForm.lastName\"\n                    [class.is-invalid]=\"submitted() && registerForm.lastName().errors().length > 0\"\n                  />\n                  <label for=\"floatingInput\">Last Name</label>\n                  @if (submitted() && registerForm.lastName().errors().length > 0) {\n                    <div class=\"invalid-feedback\">\n                      @for (error of registerForm.lastName().errors(); track error.kind) {\n                        <div>{{ error.message }}</div>\n                      }\n                    </div>\n                  }\n                </div>\n              </div>\n            </div>\n            <div class=\"form-floating mb-3\">\n              <input\n                type=\"email\"\n                class=\"form-control\"\n                id=\"floatingInput\"\n                [class.is-invalid]=\"submitted() && registerForm.email().invalid()\"\n                placeholder=\"Email Address\"\n                [field]=\"registerForm.email\"\n              />\n              <label for=\"floatingInput\">Email address / Username</label>\n              @if (submitted() && registerForm.email().invalid()) {\n                <div class=\"invalid-feedback\">\n                  @for (error of registerForm.email().errors(); track error.kind) {\n                    <div>{{ error.message }}</div>\n                  }\n                </div>\n              }\n            </div>\n            <div class=\"form-floating mb-3\">\n              <input\n                type=\"password\"\n                id=\"password\"\n                class=\"form-control\"\n                [field]=\"registerForm.password\"\n                [class.is-invalid]=\"submitted() && registerForm.password().errors().length > 0\"\n                placeholder=\"Password (min. 8 characters)\"\n              />\n              <label for=\"password\">Password</label>\n              @if (submitted() && registerForm.password().errors().length > 0) {\n                <div class=\"invalid-feedback\">\n                  @for (error of registerForm.password().errors(); track error.kind) {\n                    <div>{{ error.message }}</div>\n                  }\n                </div>\n              }\n            </div>\n            <div class=\"form-check mt-3s\">\n              <input class=\"form-check-input input-primary\" type=\"checkbox\" id=\"customCheckc1\" checked />\n              <label class=\"form-check-label\" for=\"customCheckc1\">\n                <h5>\n                  Agree with\n                  <span>Terms & Condition.</span>\n                </h5>\n              </label>\n            </div>\n            <div class=\"d-grid mt-4\">\n              <button type=\"submit\" class=\"btn btn-secondary p-2\">Sign Up</button>\n            </div>\n          </form>\n          <hr />\n          <h5 class=\"d-flex justify-content-center\">\n            <a [routerLink]=\"['/login']\">Already have an account?</a>\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/demo/pages/authentication/register/register.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=register.component.js.map