import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../commonServices/form-validation-service";
import * as i3 from "../../commonServices/auth.service";
import * as i4 from "@angular/router";
import * as i5 from "../../commonServices/rd.service";
import * as i6 from "@angular/common";
const _c0 = () => ["/register"];
function LoginComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Email is required ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Invalid email format ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, LoginComponent_div_13_div_1_Template, 2, 0, "div", 21)(2, LoginComponent_div_13_div_2_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
} }
function LoginComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Password is required ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Minimum 6 characters required ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, LoginComponent_div_18_div_1_Template, 2, 0, "div", 21)(2, LoginComponent_div_18_div_2_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage, " ");
} }
export class LoginComponent {
    constructor(fb, formValidation, el, authService, router, rdService) {
        this.fb = fb;
        this.formValidation = formValidation;
        this.el = el;
        this.authService = authService;
        this.router = router;
        this.rdService = rdService;
        this.submitted = false;
        this.showPassword = false;
        this.isLoading = false;
        this.errorMessage = '';
        this.isDeviceReady = false;
        this.deviceStatus = 'Not Initialized';
        this.isInitializingDevice = false;
        this.isCapturingFingerprint = false;
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    async onSubmit(event) {
        event.preventDefault();
        this.submitted = true;
        this.errorMessage = '';
        // if (!this.formValidation.validateForm(this.loginForm, this.getFieldName, this.el)) {
        //   return;
        // }
        this.isLoading = true;
        try {
            const response = await lastValueFrom(this.authService.login(this.loginForm.value));
            if (response.success === true) {
                localStorage.setItem('auth_token', response.data.token);
                localStorage.setItem('auth_user', JSON.stringify(response.data.user));
                await this.router.navigate(['/application/dashboard']);
            }
            else {
                this.errorMessage = response.message || 'Login failed';
            }
        }
        catch (error) {
            console.error('Login Error:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    getFieldName(field) {
        const map = {
            email: 'Email',
            password: 'Password'
        };
        return map[field] || field;
    }
    async loginWithFingerprint() {
        try {
            const credential = await navigator.credentials.get({
                publicKey: {
                    challenge: new Uint8Array(32),
                    userVerification: 'required'
                }
            });
            console.log('Fingerprint success', credential);
        }
        catch (error) {
            console.error('Fingerprint failed', error);
        }
    }
    static { this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.FormValidationService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.RdService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 10, consts: [[1, "auth-main"], [1, "auth-container"], [1, "auth-card"], [1, "text-center", "mb-4"], ["src", "assets/logo.png", 1, "login-logo", "mb-3"], [1, "app-name"], [1, "subtitle"], [3, "ngSubmit", "formGroup"], [1, "form-group", "position-relative"], ["type", "email", "placeholder", "Email", "formControlName", "email", "name", "email", 1, "form-control", "premium-input"], [1, "fa-solid", "fa-envelope", "input-icon"], ["class", "text-danger small mt-1", 4, "ngIf"], ["placeholder", "Password", "formControlName", "password", 1, "form-control", "premium-input", 3, "type"], [1, "fa-solid", "fa-lock", "input-icon"], [1, "fa-solid", "toggle-password", 3, "click", "ngClass"], ["class", "text-danger small mt-2", 4, "ngIf"], [1, "btn", "btn-premium", "w-100", "mt-2", 3, "disabled"], [1, "fa-solid", "fa-right-to-bracket", "me-2"], [1, "text-center", "mt-4"], [1, "link", "fw-bold", 3, "routerLink"], [1, "text-danger", "small", "mt-1"], [4, "ngIf"], [1, "text-danger", "small", "mt-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementStart(5, "h5", 5);
            i0.ɵɵtext(6, "Secure File Manager");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 6);
            i0.ɵɵtext(8, "Secure Access Portal");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "form", 7);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener($event) { return ctx.onSubmit($event); });
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵelement(11, "input", 9)(12, "i", 10);
            i0.ɵɵtemplate(13, LoginComponent_div_13_Template, 3, 2, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 8);
            i0.ɵɵelement(15, "input", 12)(16, "i", 13);
            i0.ɵɵelementStart(17, "i", 14);
            i0.ɵɵlistener("click", function LoginComponent_Template_i_click_17_listener() { return ctx.showPassword = !ctx.showPassword; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(18, LoginComponent_div_18_Template, 3, 2, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, LoginComponent_div_19_Template, 2, 1, "div", 15);
            i0.ɵɵelementStart(20, "button", 16);
            i0.ɵɵelement(21, "i", 17);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 18);
            i0.ɵɵtext(24, " Don't have an account? ");
            i0.ɵɵelementStart(25, "a", 19);
            i0.ɵɵtext(26, "Register");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_4_0;
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("formGroup", ctx.loginForm);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.submitted && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.errors));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("type", ctx.showPassword ? "text" : "password");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.showPassword ? "fa-eye-slash" : "fa-eye");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.submitted && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.errors));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isLoading);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.isLoading ? "Signing In..." : "Sign In", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(9, _c0));
        } }, dependencies: [CommonModule, i6.NgClass, i6.NgIf, RouterModule, i4.RouterLink, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["\n\n.auth-main[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: linear-gradient(-45deg, #5E35B1, #673AB7, #3F51B5, #2196F3);\n  background-size: 400% 400%;\n  animation: _ngcontent-%COMP%_gradientMove 10s ease infinite;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_gradientMove {\n  0% { background-position: 0% }\n  50% { background-position: 100% }\n  100% { background-position: 0% }\n}\n\n\n\n.auth-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  padding: 45px 40px;\n  border-radius: 18px;\n\n  backdrop-filter: blur(15px);\n  background: rgba(255,255,255,0.15);\n  box-shadow: 0 12px 40px rgba(0,0,0,0.25);\n\n  color: white;\n}\n\n\n\n.login-logo[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  object-fit: contain;\n\n  \n\n  padding: 8px;\n  border-radius: 14px;\n  background: rgba(255,255,255,0.15);\n  backdrop-filter: blur(10px);\n\n  transition: 0.3s ease;\n}\n\n.login-logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.app-name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255,255,255,0.8);\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.8;\n}\n\n\n\n.premium-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 40px;\n  margin-bottom: 18px;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  background: rgba(255,255,255,0.2);\n  color: white;\n}\n\n.premium-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255,255,255,0.7);\n}\n\n.premium-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(255,255,255,0.3);\n}\n\n\n\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 12px;\n}\n\n\n\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  cursor: pointer;\n}\n\n\n\n.btn-premium[_ngcontent-%COMP%] {\n  background: white;\n  color: #5E35B1;\n  font-weight: 600;\n  border-radius: 10px;\n  padding: 12px;\n  border: none;\n}\n\n.btn-premium[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n\n\n\n.btn-bio[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.2);\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  border: none;\n}\n\n.btn-bio[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.3);\n}\n\n\n\n.divider[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 15px 0;\n  opacity: 0.7;\n}\n\n\n\n.link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n}\n\n\n\n@media (max-width: 576px) {\n  .auth-card[_ngcontent-%COMP%] {\n    max-width: 90%;\n    padding: 30px 20px;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', imports: [CommonModule, RouterModule, ReactiveFormsModule], template: "<div class=\"auth-main\">\n  <div class=\"auth-container\">\n    <div class=\"auth-card\">\n      <div class=\"text-center mb-4\">\n        <img src=\"assets/logo.png\" class=\"login-logo mb-3\" />\n        <h5 class=\"app-name\">Secure File Manager</h5>\n        <p class=\"subtitle\">Secure Access Portal</p>\n      </div>\n\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit($event)\">\n        <div class=\"form-group position-relative\">\n          <input\n            type=\"email\"\n            class=\"form-control premium-input\"\n            placeholder=\"Email\"\n            formControlName=\"email\"\n            name=\"email\"\n          />\n          <i class=\"fa-solid fa-envelope input-icon\"></i>\n\n          <div class=\"text-danger small mt-1\" *ngIf=\"submitted && loginForm.get('email')?.errors\">\n            <div *ngIf=\"loginForm.get('email')?.errors?.['required']\">\n              Email is required\n            </div>\n            <div *ngIf=\"loginForm.get('email')?.errors?.['email']\">\n              Invalid email format\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group position-relative\">\n          <input\n            [type]=\"showPassword ? 'text' : 'password'\"\n            class=\"form-control premium-input\"\n            placeholder=\"Password\"\n            formControlName=\"password\"\n          />\n\n          <i class=\"fa-solid fa-lock input-icon\"></i>\n\n          <i\n            class=\"fa-solid toggle-password\"\n            [ngClass]=\"showPassword ? 'fa-eye-slash' : 'fa-eye'\"\n            (click)=\"showPassword = !showPassword\"\n          ></i>\n\n          <div class=\"text-danger small mt-1\" *ngIf=\"submitted && loginForm.get('password')?.errors\">\n            <div *ngIf=\"loginForm.get('password')?.errors?.['required']\">\n              Password is required\n            </div>\n            <div *ngIf=\"loginForm.get('password')?.errors?.['minlength']\">\n              Minimum 6 characters required\n            </div>\n          </div>\n        </div>\n\n        <div class=\"text-danger small mt-2\" *ngIf=\"errorMessage\">\n          {{ errorMessage }}\n        </div>\n\n        <button class=\"btn btn-premium w-100 mt-2\" [disabled]=\"isLoading\">\n          <i class=\"fa-solid fa-right-to-bracket me-2\"></i> {{ isLoading ? 'Signing In...' : 'Sign In' }}\n        </button>\n      </form>\n\n     \n\n      <div class=\"text-center mt-4\">\n        Don't have an account?\n        <a [routerLink]=\"['/register']\" class=\"link fw-bold\">Register</a>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["/* BACKGROUND */\n.auth-main {\n  height: 100vh;\n  background: linear-gradient(-45deg, #5E35B1, #673AB7, #3F51B5, #2196F3);\n  background-size: 400% 400%;\n  animation: gradientMove 10s ease infinite;\n}\n\n/* ANIMATION */\n@keyframes gradientMove {\n  0% { background-position: 0% }\n  50% { background-position: 100% }\n  100% { background-position: 0% }\n}\n\n/* CENTER */\n.auth-container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* BIG PREMIUM CARD */\n.auth-card {\n  width: 100%;\n  max-width: 600px;\n  padding: 45px 40px;\n  border-radius: 18px;\n\n  backdrop-filter: blur(15px);\n  background: rgba(255,255,255,0.15);\n  box-shadow: 0 12px 40px rgba(0,0,0,0.25);\n\n  color: white;\n}\n\n/* TEXT */\n.login-logo {\n  width: 70px;\n  height: 70px;\n  object-fit: contain;\n\n  /* glass effect */\n  padding: 8px;\n  border-radius: 14px;\n  background: rgba(255,255,255,0.15);\n  backdrop-filter: blur(10px);\n\n  transition: 0.3s ease;\n}\n\n.login-logo:hover {\n  transform: scale(1.05);\n}\n\n.app-name {\n  color: #ffffff;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.subtitle {\n  font-size: 13px;\n  color: rgba(255,255,255,0.8);\n}\n\n.subtitle {\n  font-size: 14px;\n  opacity: 0.8;\n}\n\n/* INPUT */\n.premium-input {\n  width: 100%;\n  padding: 12px 40px;\n  margin-bottom: 18px;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  background: rgba(255,255,255,0.2);\n  color: white;\n}\n\n.premium-input::placeholder {\n  color: rgba(255,255,255,0.7);\n}\n\n.premium-input:focus {\n  box-shadow: 0 0 0 2px rgba(255,255,255,0.3);\n}\n\n/* ICON */\n.input-icon {\n  position: absolute;\n  left: 12px;\n  top: 12px;\n}\n\n/* PASSWORD TOGGLE */\n.toggle-password {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  cursor: pointer;\n}\n\n/* BUTTON */\n.btn-premium {\n  background: white;\n  color: #5E35B1;\n  font-weight: 600;\n  border-radius: 10px;\n  padding: 12px;\n  border: none;\n}\n\n.btn-premium:hover {\n  background: #eee;\n}\n\n/* BIOMETRIC */\n.btn-bio {\n  background: rgba(255,255,255,0.2);\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  border: none;\n}\n\n.btn-bio:hover {\n  background: rgba(255,255,255,0.3);\n}\n\n/* DIVIDER */\n.divider {\n  text-align: center;\n  margin: 15px 0;\n  opacity: 0.7;\n}\n\n/* LINKS */\n.link {\n  color: #fff;\n  text-decoration: underline;\n}\n\n/* RESPONSIVE */\n@media (max-width: 576px) {\n  .auth-card {\n    max-width: 90%;\n    padding: 30px 20px;\n  }\n}"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.FormValidationService }, { type: i0.ElementRef }, { type: i3.AuthService }, { type: i4.Router }, { type: i5.RdService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/demo/admin-panel/login/login.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=login.component.js.map