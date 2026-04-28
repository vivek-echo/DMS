import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function AddJobComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "Job title is required.");
    i0.ɵɵelementEnd();
} }
function AddJobComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r2);
} }
function AddJobComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "Please select a type.");
    i0.ɵɵelementEnd();
} }
function AddJobComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "Company name is required.");
    i0.ɵɵelementEnd();
} }
function AddJobComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "Location is required.");
    i0.ɵɵelementEnd();
} }
function AddJobComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "Salary or stipend is required.");
    i0.ɵɵelementEnd();
} }
function AddJobComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "Please enter required skills.");
    i0.ɵɵelementEnd();
} }
function AddJobComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "Description is required.");
    i0.ɵɵelementEnd();
} }
function AddJobComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 70);
    i0.ɵɵelement(2, "i", 71);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.demoMessage, " ");
} }
function AddJobComponent_div_130_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r4);
} }
function AddJobComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵtemplate(1, AddJobComponent_div_130_span_1_Template, 2, 1, "span", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.skillPreview);
} }
function AddJobComponent_ng_template_131_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵtext(1, "Add comma-separated skills to preview them here.");
    i0.ɵɵelementEnd();
} }
export class AddJobComponent {
    constructor(fb) {
        this.fb = fb;
        this.jobTypes = ['Job', 'Internship'];
        this.submitted = false;
        this.demoMessage = '';
        this.jobForm = this.fb.group({
            title: ['', Validators.required],
            type: ['', Validators.required],
            companyName: ['', Validators.required],
            location: ['', Validators.required],
            salary: ['', Validators.required],
            skillsRequired: ['', Validators.required],
            description: ['', Validators.required]
        });
    }
    isInvalid(controlName) {
        const control = this.jobForm.get(controlName);
        return !!control && control.invalid && (control.touched || this.submitted);
    }
    get skillPreview() {
        const value = this.jobForm.get('skillsRequired')?.value ?? '';
        return value
            .split(',')
            .map((skill) => skill.trim())
            .filter(Boolean)
            .slice(0, 6);
    }
    get selectedTypeClass() {
        if (this.jobForm.get('type')?.value === 'Internship') {
            return 'preview-badge internship-badge';
        }
        if (this.jobForm.get('type')?.value === 'Job') {
            return 'preview-badge job-badge';
        }
        return 'preview-badge neutral-badge';
    }
    onSubmit() {
        this.submitted = true;
        this.demoMessage = '';
        if (this.jobForm.invalid) {
            this.jobForm.markAllAsTouched();
            return;
        }
        this.demoMessage = 'Job form validated successfully. Demo mode is active, so no posting was submitted.';
    }
    static { this.ɵfac = function AddJobComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddJobComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddJobComponent, selectors: [["app-add-job"]], decls: 150, vars: 37, consts: [["skillsPlaceholder", ""], [1, "row", "g-4"], [1, "col-12"], [1, "card", "border-0", "shadow-sm", "page-intro", "overflow-hidden"], [1, "card-body", "p-4", "p-lg-5", "d-flex", "flex-column", "flex-lg-row", "align-items-lg-center", "justify-content-between", "gap-3"], [1, "badge", "intro-badge", "mb-3"], [1, "ti", "ti-briefcase", "me-2"], [1, "mb-2"], [1, "text-muted", "mb-0"], ["routerLink", "/application/jobs", 1, "btn", "btn-outline-primary"], [1, "ti", "ti-list-details", "me-2"], [1, "col-xl-8"], [1, "card", "border-0", "shadow-sm", "job-form-card", "h-100"], [1, "card-body", "p-4", "p-lg-5"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], [1, "section-icon"], [1, "ti", "ti-file-plus"], [1, "mb-1"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "col-md-6"], ["for", "title", 1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "position-relative"], [1, "field-icon"], [1, "ti", "ti-briefcase"], ["id", "title", "type", "text", "placeholder", "Enter opening title", "formControlName", "title", 1, "form-control", "form-control-lg", "ps-5"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "type", 1, "form-label", "fw-semibold"], [1, "ti", "ti-category"], ["id", "type", "formControlName", "type", 1, "form-select", "form-select-lg", "ps-5"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "companyName", 1, "form-label", "fw-semibold"], [1, "ti", "ti-building"], ["id", "companyName", "type", "text", "placeholder", "Enter company name", "formControlName", "companyName", 1, "form-control", "form-control-lg", "ps-5"], ["for", "location", 1, "form-label", "fw-semibold"], [1, "ti", "ti-map-pin"], ["id", "location", "type", "text", "placeholder", "Enter location", "formControlName", "location", 1, "form-control", "form-control-lg", "ps-5"], ["for", "salary", 1, "form-label", "fw-semibold"], [1, "ti", "ti-currency-rupee"], ["id", "salary", "type", "text", "placeholder", "Enter salary or stipend", "formControlName", "salary", 1, "form-control", "form-control-lg", "ps-5"], ["for", "skillsRequired", 1, "form-label", "fw-semibold"], [1, "ti", "ti-sparkles"], ["id", "skillsRequired", "type", "text", "placeholder", "Angular, Bootstrap, Communication", "formControlName", "skillsRequired", 1, "form-control", "form-control-lg", "ps-5"], ["for", "description", 1, "form-label", "fw-semibold"], ["id", "description", "rows", "5", "placeholder", "Describe the role, work mode, and ideal candidate profile", "formControlName", "description", 1, "form-control", "form-control-lg"], ["class", "col-12", 4, "ngIf"], [1, "col-12", "d-flex", "flex-wrap", "gap-3", "pt-2"], ["type", "submit", 1, "btn", "btn-primary", "px-4"], [1, "ti", "ti-send", "me-2"], ["routerLink", "/application/jobs", 1, "btn", "btn-light", "px-4"], [1, "col-xl-4"], [1, "card", "border-0", "shadow-sm", "job-summary-card", "h-100"], [1, "card-body", "p-4"], [1, "section-icon", "summary-icon"], [1, "ti", "ti-eye"], [1, "preview-panel", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "mb-3"], [1, "mini-chip"], [1, "ti", "ti-map-pin", "me-1"], [1, "text-muted", "mb-3"], [1, "salary-pill", "mb-3"], [1, "ti", "ti-currency-rupee", "me-2"], ["class", "skill-list mb-3", 4, "ngIf", "ngIfElse"], [1, "description-preview"], [1, "summary-item"], [1, "summary-label"], [1, "summary-item", "border-0", "pb-0", "mb-0"], [1, "invalid-feedback", "d-block"], [3, "value"], ["role", "alert", 1, "alert", "alert-success", "border-0", "mb-0"], [1, "ti", "ti-circle-check", "me-2"], [1, "skill-list", "mb-3"], ["class", "skill-chip", 4, "ngFor", "ngForOf"], [1, "skill-chip"], [1, "text-muted", "small", "mb-3"]], template: function AddJobComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div")(5, "span", 5);
            i0.ɵɵelement(6, "i", 6);
            i0.ɵɵtext(7, "Career Opportunities ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h3", 7);
            i0.ɵɵtext(9, "Add Job / Internship");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 8);
            i0.ɵɵtext(11, " Create a polished opportunity listing with validation and a live preview using static demo data only. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 9);
            i0.ɵɵelement(13, "i", 10);
            i0.ɵɵtext(14, "View Openings ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
            i0.ɵɵelement(20, "i", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div")(22, "h4", 17);
            i0.ɵɵtext(23, "Opportunity Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p", 8);
            i0.ɵɵtext(25, "Fill out the fields below to prepare a job or internship post for demo presentation.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "form", 18);
            i0.ɵɵlistener("ngSubmit", function AddJobComponent_Template_form_ngSubmit_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSubmit()); });
            i0.ɵɵelementStart(27, "div", 1)(28, "div", 19)(29, "label", 20);
            i0.ɵɵtext(30, "Title ");
            i0.ɵɵelementStart(31, "span", 21);
            i0.ɵɵtext(32, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 22)(34, "span", 23);
            i0.ɵɵelement(35, "i", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(36, "input", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(37, AddJobComponent_div_37_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 19)(39, "label", 27);
            i0.ɵɵtext(40, "Type ");
            i0.ɵɵelementStart(41, "span", 21);
            i0.ɵɵtext(42, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "div", 22)(44, "span", 23);
            i0.ɵɵelement(45, "i", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "select", 29)(47, "option", 30);
            i0.ɵɵtext(48, "Select opportunity type");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(49, AddJobComponent_option_49_Template, 2, 2, "option", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(50, AddJobComponent_div_50_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 19)(52, "label", 32);
            i0.ɵɵtext(53, "Company Name ");
            i0.ɵɵelementStart(54, "span", 21);
            i0.ɵɵtext(55, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 22)(57, "span", 23);
            i0.ɵɵelement(58, "i", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(59, "input", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(60, AddJobComponent_div_60_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 19)(62, "label", 35);
            i0.ɵɵtext(63, "Location ");
            i0.ɵɵelementStart(64, "span", 21);
            i0.ɵɵtext(65, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "div", 22)(67, "span", 23);
            i0.ɵɵelement(68, "i", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(69, "input", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(70, AddJobComponent_div_70_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "div", 19)(72, "label", 38);
            i0.ɵɵtext(73, "Salary / Stipend ");
            i0.ɵɵelementStart(74, "span", 21);
            i0.ɵɵtext(75, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 22)(77, "span", 23);
            i0.ɵɵelement(78, "i", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(79, "input", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(80, AddJobComponent_div_80_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 19)(82, "label", 41);
            i0.ɵɵtext(83, "Skills Required ");
            i0.ɵɵelementStart(84, "span", 21);
            i0.ɵɵtext(85, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(86, "div", 22)(87, "span", 23);
            i0.ɵɵelement(88, "i", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(89, "input", 43);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(90, AddJobComponent_div_90_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "div", 2)(92, "label", 44);
            i0.ɵɵtext(93, "Description ");
            i0.ɵɵelementStart(94, "span", 21);
            i0.ɵɵtext(95, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(96, "textarea", 45);
            i0.ɵɵtemplate(97, AddJobComponent_div_97_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(98, AddJobComponent_div_98_Template, 4, 1, "div", 46);
            i0.ɵɵelementStart(99, "div", 47)(100, "button", 48);
            i0.ɵɵelement(101, "i", 49);
            i0.ɵɵtext(102, "Submit ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "a", 50);
            i0.ɵɵtext(104, "Browse Listings");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(105, "div", 51)(106, "div", 52)(107, "div", 53)(108, "div", 14)(109, "div", 54);
            i0.ɵɵelement(110, "i", 55);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "div")(112, "h5", 17);
            i0.ɵɵtext(113, "Live Preview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "p", 8);
            i0.ɵɵtext(115, "A realistic summary of how this opening looks in demo mode.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(116, "div", 56)(117, "div", 57)(118, "span");
            i0.ɵɵtext(119);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "span", 58);
            i0.ɵɵelement(121, "i", 59);
            i0.ɵɵtext(122);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(123, "h5", 7);
            i0.ɵɵtext(124);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "p", 60);
            i0.ɵɵtext(126);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "div", 61);
            i0.ɵɵelement(128, "i", 62);
            i0.ɵɵtext(129);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(130, AddJobComponent_div_130_Template, 2, 1, "div", 63)(131, AddJobComponent_ng_template_131_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(133, "div", 64);
            i0.ɵɵtext(134);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(135, "div", 65)(136, "span", 66);
            i0.ɵɵtext(137, "Company");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "strong");
            i0.ɵɵtext(139);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(140, "div", 65)(141, "span", 66);
            i0.ɵɵtext(142, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(143, "strong");
            i0.ɵɵtext(144);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(145, "div", 67)(146, "span", 66);
            i0.ɵɵtext(147, "Skills Count");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(148, "strong");
            i0.ɵɵtext(149);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_19_0;
            let tmp_20_0;
            let tmp_21_0;
            let tmp_22_0;
            let tmp_23_0;
            let tmp_26_0;
            let tmp_27_0;
            let tmp_28_0;
            const skillsPlaceholder_r5 = i0.ɵɵreference(132);
            i0.ɵɵadvance(26);
            i0.ɵɵproperty("formGroup", ctx.jobForm);
            i0.ɵɵadvance(10);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("title"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("title"));
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("type"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.jobTypes);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("type"));
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("companyName"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("companyName"));
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("location"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("location"));
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("salary"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("salary"));
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("skillsRequired"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("skillsRequired"));
            i0.ɵɵadvance(6);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("description"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("description"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.demoMessage);
            i0.ɵɵadvance(20);
            i0.ɵɵclassMap(ctx.selectedTypeClass);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(((tmp_19_0 = ctx.jobForm.get("type")) == null ? null : tmp_19_0.value) || "Select type");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ((tmp_20_0 = ctx.jobForm.get("location")) == null ? null : tmp_20_0.value) || "Location pending", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(((tmp_21_0 = ctx.jobForm.get("title")) == null ? null : tmp_21_0.value) || "Opening title will appear here");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(((tmp_22_0 = ctx.jobForm.get("companyName")) == null ? null : tmp_22_0.value) || "Company name will appear here");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ((tmp_23_0 = ctx.jobForm.get("salary")) == null ? null : tmp_23_0.value) || "Salary / stipend pending", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.skillPreview.length)("ngIfElse", skillsPlaceholder_r5);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ((tmp_26_0 = ctx.jobForm.get("description")) == null ? null : tmp_26_0.value) || "The role description, responsibilities, and candidate expectations will appear in this section.", " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(((tmp_27_0 = ctx.jobForm.get("companyName")) == null ? null : tmp_27_0.value) || "Waiting for employer name");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(((tmp_28_0 = ctx.jobForm.get("type")) == null ? null : tmp_28_0.value) || "Not selected yet");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.skillPreview.length || 0, " skills highlighted");
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink], styles: [".page-intro[_ngcontent-%COMP%], \n.job-form-card[_ngcontent-%COMP%], \n.job-summary-card[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n\n.page-intro[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(13, 110, 253, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f7faff);\n}\n\n.intro-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(13, 110, 253, 0.1);\n  color: #0d6efd;\n  font-weight: 600;\n}\n\n.section-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #0d6efd, #4f8dfd);\n  color: #fff;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #198754, #46b57d);\n}\n\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 1rem;\n  display: inline-flex;\n  align-items: center;\n  color: #6c757d;\n  z-index: 2;\n}\n\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 0.95rem;\n  border-color: #dfe5ef;\n  box-shadow: none;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(13, 110, 253, 0.45);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.12);\n}\n\n.preview-panel[_ngcontent-%COMP%] {\n  border: 1px solid #edf1f7;\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background:\n    linear-gradient(180deg, rgba(13, 110, 253, 0.04), rgba(13, 110, 253, 0)),\n    #fff;\n}\n\n.preview-badge[_ngcontent-%COMP%], \n.mini-chip[_ngcontent-%COMP%], \n.skill-chip[_ngcontent-%COMP%], \n.salary-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n}\n\n.preview-badge[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.job-badge[_ngcontent-%COMP%] {\n  background: rgba(13, 110, 253, 0.12);\n  color: #0d6efd;\n}\n\n.internship-badge[_ngcontent-%COMP%] {\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n}\n\n.neutral-badge[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.mini-chip[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n  background: #f1f5f9;\n  color: #495057;\n  font-size: 0.82rem;\n}\n\n.salary-pill[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.95rem;\n  background: #f8f9fa;\n  color: #212529;\n  font-weight: 600;\n}\n\n.skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.skill-chip[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.75rem;\n  background: rgba(13, 110, 253, 0.08);\n  color: #0d6efd;\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n\n.description-preview[_ngcontent-%COMP%] {\n  border: 1px solid #edf1f7;\n  border-radius: 1rem;\n  padding: 1rem;\n  background: #fbfcfe;\n  color: #495057;\n  line-height: 1.6;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #edf1f7;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n@media (max-width: 767.98px) {\n  .page-intro[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .job-form-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .job-summary-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddJobComponent, [{
        type: Component,
        args: [{ selector: 'app-add-job', imports: [CommonModule, ReactiveFormsModule, RouterLink], template: "<div class=\"row g-4\">\n  <div class=\"col-12\">\n    <div class=\"card border-0 shadow-sm page-intro overflow-hidden\">\n      <div class=\"card-body p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3\">\n        <div>\n          <span class=\"badge intro-badge mb-3\">\n            <i class=\"ti ti-briefcase me-2\"></i>Career Opportunities\n          </span>\n          <h3 class=\"mb-2\">Add Job / Internship</h3>\n          <p class=\"text-muted mb-0\">\n            Create a polished opportunity listing with validation and a live preview using static demo data only.\n          </p>\n        </div>\n\n        <a routerLink=\"/application/jobs\" class=\"btn btn-outline-primary\">\n          <i class=\"ti ti-list-details me-2\"></i>View Openings\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-8\">\n    <div class=\"card border-0 shadow-sm job-form-card h-100\">\n      <div class=\"card-body p-4 p-lg-5\">\n        <div class=\"d-flex align-items-center gap-3 mb-4\">\n          <div class=\"section-icon\">\n            <i class=\"ti ti-file-plus\"></i>\n          </div>\n          <div>\n            <h4 class=\"mb-1\">Opportunity Details</h4>\n            <p class=\"text-muted mb-0\">Fill out the fields below to prepare a job or internship post for demo presentation.</p>\n          </div>\n        </div>\n\n        <form [formGroup]=\"jobForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n          <div class=\"row g-4\">\n            <div class=\"col-md-6\">\n              <label for=\"title\" class=\"form-label fw-semibold\">Title <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-briefcase\"></i></span>\n                <input\n                  id=\"title\"\n                  type=\"text\"\n                  class=\"form-control form-control-lg ps-5\"\n                  placeholder=\"Enter opening title\"\n                  formControlName=\"title\"\n                  [class.is-invalid]=\"isInvalid('title')\"\n                />\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('title')\">Job title is required.</div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <label for=\"type\" class=\"form-label fw-semibold\">Type <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-category\"></i></span>\n                <select\n                  id=\"type\"\n                  class=\"form-select form-select-lg ps-5\"\n                  formControlName=\"type\"\n                  [class.is-invalid]=\"isInvalid('type')\"\n                >\n                  <option value=\"\" disabled>Select opportunity type</option>\n                  <option *ngFor=\"let type of jobTypes\" [value]=\"type\">{{ type }}</option>\n                </select>\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('type')\">Please select a type.</div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <label for=\"companyName\" class=\"form-label fw-semibold\">Company Name <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-building\"></i></span>\n                <input\n                  id=\"companyName\"\n                  type=\"text\"\n                  class=\"form-control form-control-lg ps-5\"\n                  placeholder=\"Enter company name\"\n                  formControlName=\"companyName\"\n                  [class.is-invalid]=\"isInvalid('companyName')\"\n                />\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('companyName')\">Company name is required.</div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <label for=\"location\" class=\"form-label fw-semibold\">Location <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-map-pin\"></i></span>\n                <input\n                  id=\"location\"\n                  type=\"text\"\n                  class=\"form-control form-control-lg ps-5\"\n                  placeholder=\"Enter location\"\n                  formControlName=\"location\"\n                  [class.is-invalid]=\"isInvalid('location')\"\n                />\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('location')\">Location is required.</div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <label for=\"salary\" class=\"form-label fw-semibold\">Salary / Stipend <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-currency-rupee\"></i></span>\n                <input\n                  id=\"salary\"\n                  type=\"text\"\n                  class=\"form-control form-control-lg ps-5\"\n                  placeholder=\"Enter salary or stipend\"\n                  formControlName=\"salary\"\n                  [class.is-invalid]=\"isInvalid('salary')\"\n                />\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('salary')\">Salary or stipend is required.</div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <label for=\"skillsRequired\" class=\"form-label fw-semibold\">Skills Required <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-sparkles\"></i></span>\n                <input\n                  id=\"skillsRequired\"\n                  type=\"text\"\n                  class=\"form-control form-control-lg ps-5\"\n                  placeholder=\"Angular, Bootstrap, Communication\"\n                  formControlName=\"skillsRequired\"\n                  [class.is-invalid]=\"isInvalid('skillsRequired')\"\n                />\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('skillsRequired')\">Please enter required skills.</div>\n            </div>\n\n            <div class=\"col-12\">\n              <label for=\"description\" class=\"form-label fw-semibold\">Description <span class=\"text-danger\">*</span></label>\n              <textarea\n                id=\"description\"\n                rows=\"5\"\n                class=\"form-control form-control-lg\"\n                placeholder=\"Describe the role, work mode, and ideal candidate profile\"\n                formControlName=\"description\"\n                [class.is-invalid]=\"isInvalid('description')\"\n              ></textarea>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('description')\">Description is required.</div>\n            </div>\n\n            <div class=\"col-12\" *ngIf=\"demoMessage\">\n              <div class=\"alert alert-success border-0 mb-0\" role=\"alert\">\n                <i class=\"ti ti-circle-check me-2\"></i>{{ demoMessage }}\n              </div>\n            </div>\n\n            <div class=\"col-12 d-flex flex-wrap gap-3 pt-2\">\n              <button type=\"submit\" class=\"btn btn-primary px-4\">\n                <i class=\"ti ti-send me-2\"></i>Submit\n              </button>\n              <a routerLink=\"/application/jobs\" class=\"btn btn-light px-4\">Browse Listings</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-4\">\n    <div class=\"card border-0 shadow-sm job-summary-card h-100\">\n      <div class=\"card-body p-4\">\n        <div class=\"d-flex align-items-center gap-3 mb-4\">\n          <div class=\"section-icon summary-icon\">\n            <i class=\"ti ti-eye\"></i>\n          </div>\n          <div>\n            <h5 class=\"mb-1\">Live Preview</h5>\n            <p class=\"text-muted mb-0\">A realistic summary of how this opening looks in demo mode.</p>\n          </div>\n        </div>\n\n        <div class=\"preview-panel mb-4\">\n          <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n            <span [class]=\"selectedTypeClass\">{{ jobForm.get('type')?.value || 'Select type' }}</span>\n            <span class=\"mini-chip\">\n              <i class=\"ti ti-map-pin me-1\"></i>{{ jobForm.get('location')?.value || 'Location pending' }}\n            </span>\n          </div>\n\n          <h5 class=\"mb-2\">{{ jobForm.get('title')?.value || 'Opening title will appear here' }}</h5>\n          <p class=\"text-muted mb-3\">{{ jobForm.get('companyName')?.value || 'Company name will appear here' }}</p>\n\n          <div class=\"salary-pill mb-3\">\n            <i class=\"ti ti-currency-rupee me-2\"></i>{{ jobForm.get('salary')?.value || 'Salary / stipend pending' }}\n          </div>\n\n          <div class=\"skill-list mb-3\" *ngIf=\"skillPreview.length; else skillsPlaceholder\">\n            <span class=\"skill-chip\" *ngFor=\"let skill of skillPreview\">{{ skill }}</span>\n          </div>\n\n          <ng-template #skillsPlaceholder>\n            <p class=\"text-muted small mb-3\">Add comma-separated skills to preview them here.</p>\n          </ng-template>\n\n          <div class=\"description-preview\">\n            {{\n              jobForm.get('description')?.value ||\n                'The role description, responsibilities, and candidate expectations will appear in this section.'\n            }}\n          </div>\n        </div>\n\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Company</span>\n          <strong>{{ jobForm.get('companyName')?.value || 'Waiting for employer name' }}</strong>\n        </div>\n\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Type</span>\n          <strong>{{ jobForm.get('type')?.value || 'Not selected yet' }}</strong>\n        </div>\n\n        <div class=\"summary-item border-0 pb-0 mb-0\">\n          <span class=\"summary-label\">Skills Count</span>\n          <strong>{{ skillPreview.length || 0 }} skills highlighted</strong>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page-intro,\n.job-form-card,\n.job-summary-card {\n  border-radius: 1.25rem;\n}\n\n.page-intro {\n  background:\n    radial-gradient(circle at top right, rgba(13, 110, 253, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f7faff);\n}\n\n.intro-badge {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(13, 110, 253, 0.1);\n  color: #0d6efd;\n  font-weight: 600;\n}\n\n.section-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #0d6efd, #4f8dfd);\n  color: #fff;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n\n.summary-icon {\n  background: linear-gradient(135deg, #198754, #46b57d);\n}\n\n.field-icon {\n  position: absolute;\n  inset: 0 auto 0 1rem;\n  display: inline-flex;\n  align-items: center;\n  color: #6c757d;\n  z-index: 2;\n}\n\n.form-control,\n.form-select {\n  border-radius: 0.95rem;\n  border-color: #dfe5ef;\n  box-shadow: none;\n}\n\n.form-control:focus,\n.form-select:focus {\n  border-color: rgba(13, 110, 253, 0.45);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.12);\n}\n\n.preview-panel {\n  border: 1px solid #edf1f7;\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background:\n    linear-gradient(180deg, rgba(13, 110, 253, 0.04), rgba(13, 110, 253, 0)),\n    #fff;\n}\n\n.preview-badge,\n.mini-chip,\n.skill-chip,\n.salary-pill {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n}\n\n.preview-badge {\n  padding: 0.45rem 0.8rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.job-badge {\n  background: rgba(13, 110, 253, 0.12);\n  color: #0d6efd;\n}\n\n.internship-badge {\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n}\n\n.neutral-badge {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.mini-chip {\n  padding: 0.45rem 0.8rem;\n  background: #f1f5f9;\n  color: #495057;\n  font-size: 0.82rem;\n}\n\n.salary-pill {\n  padding: 0.65rem 0.95rem;\n  background: #f8f9fa;\n  color: #212529;\n  font-weight: 600;\n}\n\n.skill-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.skill-chip {\n  padding: 0.45rem 0.75rem;\n  background: rgba(13, 110, 253, 0.08);\n  color: #0d6efd;\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n\n.description-preview {\n  border: 1px solid #edf1f7;\n  border-radius: 1rem;\n  padding: 1rem;\n  background: #fbfcfe;\n  color: #495057;\n  line-height: 1.6;\n}\n\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #edf1f7;\n}\n\n.summary-label {\n  color: #6c757d;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n@media (max-width: 767.98px) {\n  .page-intro .card-body,\n  .job-form-card .card-body,\n  .job-summary-card .card-body {\n    padding: 1.5rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddJobComponent, { className: "AddJobComponent", filePath: "src/app/demo/application/job/add-job/add-job.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=add-job.component.js.map