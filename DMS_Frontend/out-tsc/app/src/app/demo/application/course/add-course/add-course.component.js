import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function AddCourseComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 59);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r2);
} }
function AddCourseComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1, "Please select a course type.");
    i0.ɵɵelementEnd();
} }
function AddCourseComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1, " Please enter a valid course price. ");
    i0.ɵɵelementEnd();
} }
function AddCourseComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1, "Course name is required.");
    i0.ɵɵelementEnd();
} }
function AddCourseComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1, "Please select a banner image.");
    i0.ɵɵelementEnd();
} }
function AddCourseComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 61)(2, "div", 62)(3, "div")(4, "h6", 17);
    i0.ɵɵtext(5, "Banner Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 8);
    i0.ɵɵtext(7, "A quick look at the selected course banner.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 63);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(10, "img", 64);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r2.bannerFileName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.bannerPreview, i0.ɵɵsanitizeUrl);
} }
function AddCourseComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 65);
    i0.ɵɵelement(2, "i", 66);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.demoMessage, " ");
} }
function AddCourseComponent_ng_container_101_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 67);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.bannerPreview, i0.ɵɵsanitizeUrl);
} }
function AddCourseComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵelement(1, "i", 69);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Banner preview appears here");
    i0.ɵɵelementEnd()();
} }
export class AddCourseComponent {
    constructor(fb) {
        this.fb = fb;
        this.courseTypes = ['Chemistry', 'Graphic Design', 'Software', 'Mobile App', 'Finance', 'Art & Humanities'];
        this.submitted = false;
        this.bannerPreview = null;
        this.bannerFileName = '';
        this.demoMessage = '';
        this.courseForm = this.fb.group({
            courseType: ['', Validators.required],
            courseName: ['', Validators.required],
            coursePrice: [null, [Validators.required, Validators.min(1)]],
            courseBanner: [null, Validators.required]
        });
    }
    isInvalid(controlName) {
        const control = this.courseForm.get(controlName);
        return !!control && control.invalid && (control.touched || this.submitted);
    }
    onBannerSelected(event) {
        const input = event.target;
        const file = input.files?.[0] ?? null;
        this.courseForm.patchValue({ courseBanner: file });
        this.courseForm.get('courseBanner')?.markAsTouched();
        this.courseForm.get('courseBanner')?.updateValueAndValidity();
        this.demoMessage = '';
        if (!file) {
            this.bannerPreview = null;
            this.bannerFileName = '';
            return;
        }
        this.bannerFileName = file.name;
        if (!file.type.startsWith('image/')) {
            this.bannerPreview = null;
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.bannerPreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSubmit() {
        this.submitted = true;
        this.demoMessage = '';
        if (this.courseForm.invalid) {
            this.courseForm.markAllAsTouched();
            return;
        }
        this.demoMessage = 'Course form validated successfully. Demo mode is enabled, so no course was submitted.';
    }
    static { this.ɵfac = function AddCourseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddCourseComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddCourseComponent, selectors: [["app-add-course"]], decls: 125, vars: 28, consts: [["bannerPlaceholder", ""], [1, "row", "g-4"], [1, "col-12"], [1, "card", "border-0", "shadow-sm", "page-intro", "overflow-hidden"], [1, "card-body", "p-4", "p-lg-5", "d-flex", "flex-column", "flex-lg-row", "align-items-lg-center", "justify-content-between", "gap-3"], [1, "badge", "intro-badge", "mb-3"], [1, "ti", "ti-book-upload", "me-2"], [1, "mb-2"], [1, "text-muted", "mb-0"], ["routerLink", "/application/courses", 1, "btn", "btn-outline-primary"], [1, "ti", "ti-list-details", "me-2"], [1, "col-xl-8"], [1, "card", "border-0", "shadow-sm", "course-form-card", "h-100"], [1, "card-body", "p-4", "p-lg-5"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], [1, "section-icon"], [1, "ti", "ti-school"], [1, "mb-1"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "col-md-6"], ["for", "courseType", 1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "position-relative"], [1, "field-icon"], [1, "ti", "ti-category"], ["id", "courseType", "formControlName", "courseType", 1, "form-select", "form-select-lg", "ps-5"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "coursePrice", 1, "form-label", "fw-semibold"], [1, "ti", "ti-currency-rupee"], ["id", "coursePrice", "type", "number", "min", "1", "placeholder", "Enter course price", "formControlName", "coursePrice", 1, "form-control", "form-control-lg", "ps-5"], ["for", "courseName", 1, "form-label", "fw-semibold"], [1, "ti", "ti-book"], ["id", "courseName", "type", "text", "placeholder", "Enter course name", "formControlName", "courseName", 1, "form-control", "form-control-lg", "ps-5"], [1, "form-label", "fw-semibold"], [1, "upload-panel", "w-100"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "justify-content-between", "gap-3"], [1, "d-flex", "align-items-start", "gap-3"], [1, "upload-icon"], [1, "ti", "ti-photo-scan"], [1, "btn", "btn-outline-primary", "upload-btn"], [1, "ti", "ti-upload", "me-2"], ["class", "col-12", 4, "ngIf"], [1, "col-12", "d-flex", "flex-wrap", "gap-3", "pt-2"], ["type", "submit", 1, "btn", "btn-primary", "px-4"], [1, "ti", "ti-check", "me-2"], ["routerLink", "/application/courses", 1, "btn", "btn-light", "px-4"], [1, "col-xl-4"], [1, "card", "border-0", "shadow-sm", "course-summary-card", "h-100"], [1, "card-body", "p-4"], [1, "section-icon", "summary-icon"], [1, "ti", "ti-photo"], [1, "summary-preview", "mb-4"], [4, "ngIf", "ngIfElse"], [1, "summary-item"], [1, "summary-label"], [1, "summary-item", "border-0", "pb-0", "mb-0"], [3, "value"], [1, "invalid-feedback", "d-block"], [1, "preview-card"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "mb-3"], [1, "badge", "text-bg-light"], ["alt", "Course banner preview", 1, "img-fluid", "preview-image", 3, "src"], ["role", "alert", 1, "alert", "alert-success", "border-0", "mb-0"], [1, "ti", "ti-circle-check", "me-2"], ["alt", "Selected banner preview", 1, "img-fluid", "summary-image", 3, "src"], [1, "summary-placeholder"], [1, "ti", "ti-photo-up"]], template: function AddCourseComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div")(5, "span", 5);
            i0.ɵɵelement(6, "i", 6);
            i0.ɵɵtext(7, "Course Management ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h3", 7);
            i0.ɵɵtext(9, "Create a new course");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 8);
            i0.ɵɵtext(11, "Add a polished course profile with pricing and banner preview for demo use.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 9);
            i0.ɵɵelement(13, "i", 10);
            i0.ɵɵtext(14, "View Courses ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
            i0.ɵɵelement(20, "i", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div")(22, "h4", 17);
            i0.ɵɵtext(23, "Add Course Component");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p", 8);
            i0.ɵɵtext(25, "Fill in the required details and review the banner before submitting.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "form", 18);
            i0.ɵɵlistener("ngSubmit", function AddCourseComponent_Template_form_ngSubmit_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSubmit()); });
            i0.ɵɵelementStart(27, "div", 1)(28, "div", 19)(29, "label", 20);
            i0.ɵɵtext(30, "Course Type ");
            i0.ɵɵelementStart(31, "span", 21);
            i0.ɵɵtext(32, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 22)(34, "span", 23);
            i0.ɵɵelement(35, "i", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "select", 25)(37, "option", 26);
            i0.ɵɵtext(38, "Select course type");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(39, AddCourseComponent_option_39_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(40, AddCourseComponent_div_40_Template, 2, 0, "div", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 19)(42, "label", 29);
            i0.ɵɵtext(43, "Course Price ");
            i0.ɵɵelementStart(44, "span", 21);
            i0.ɵɵtext(45, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 22)(47, "span", 23);
            i0.ɵɵelement(48, "i", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "input", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(50, AddCourseComponent_div_50_Template, 2, 0, "div", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 2)(52, "label", 32);
            i0.ɵɵtext(53, "Course Name ");
            i0.ɵɵelementStart(54, "span", 21);
            i0.ɵɵtext(55, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 22)(57, "span", 23);
            i0.ɵɵelement(58, "i", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(59, "input", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(60, AddCourseComponent_div_60_Template, 2, 0, "div", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 2)(62, "label", 35);
            i0.ɵɵtext(63, "Course Banner ");
            i0.ɵɵelementStart(64, "span", 21);
            i0.ɵɵtext(65, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "label", 36)(67, "input", 37);
            i0.ɵɵlistener("change", function AddCourseComponent_Template_input_change_67_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onBannerSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div", 38)(69, "div", 39)(70, "div", 40);
            i0.ɵɵelement(71, "i", 41);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "div")(73, "h6", 17);
            i0.ɵɵtext(74);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "p", 8);
            i0.ɵɵtext(76, "Supported formats: JPG, PNG, WEBP. Click this panel to browse files.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(77, "span", 42);
            i0.ɵɵelement(78, "i", 43);
            i0.ɵɵtext(79, "Select Banner ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(80, AddCourseComponent_div_80_Template, 2, 0, "div", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(81, AddCourseComponent_div_81_Template, 11, 2, "div", 44)(82, AddCourseComponent_div_82_Template, 4, 1, "div", 44);
            i0.ɵɵelementStart(83, "div", 45)(84, "button", 46);
            i0.ɵɵelement(85, "i", 47);
            i0.ɵɵtext(86, "Submit ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "a", 48);
            i0.ɵɵtext(88, "Browse Course List");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(89, "div", 49)(90, "div", 50)(91, "div", 51)(92, "div", 14)(93, "div", 52);
            i0.ɵɵelement(94, "i", 53);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "div")(96, "h5", 17);
            i0.ɵɵtext(97, "Live Summary");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "p", 8);
            i0.ɵɵtext(99, "Preview how the course details are shaping up.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(100, "div", 54);
            i0.ɵɵtemplate(101, AddCourseComponent_ng_container_101_Template, 2, 1, "ng-container", 55)(102, AddCourseComponent_ng_template_102_Template, 4, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 56)(105, "span", 57);
            i0.ɵɵtext(106, "Course Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "strong");
            i0.ɵɵtext(108);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(109, "div", 56)(110, "span", 57);
            i0.ɵɵtext(111, "Course Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(112, "strong");
            i0.ɵɵtext(113);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(114, "div", 56)(115, "span", 57);
            i0.ɵɵtext(116, "Course Price");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(117, "strong");
            i0.ɵɵtext(118);
            i0.ɵɵpipe(119, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(120, "div", 58)(121, "span", 57);
            i0.ɵɵtext(122, "Banner File");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "strong");
            i0.ɵɵtext(124);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_16_0;
            let tmp_17_0;
            let tmp_18_0;
            const bannerPlaceholder_r4 = i0.ɵɵreference(103);
            i0.ɵɵadvance(26);
            i0.ɵɵproperty("formGroup", ctx.courseForm);
            i0.ɵɵadvance(10);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("courseType"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.courseTypes);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("courseType"));
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("coursePrice"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("coursePrice"));
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("courseName"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInvalid("courseName"));
            i0.ɵɵadvance(6);
            i0.ɵɵclassProp("is-invalid", ctx.isInvalid("courseBanner"));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.bannerFileName || "Choose a banner image");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.isInvalid("courseBanner"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bannerPreview);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.demoMessage);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngIf", ctx.bannerPreview)("ngIfElse", bannerPlaceholder_r4);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(((tmp_16_0 = ctx.courseForm.get("courseType")) == null ? null : tmp_16_0.value) || "Not selected yet");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(((tmp_17_0 = ctx.courseForm.get("courseName")) == null ? null : tmp_17_0.value) || "Waiting for course title");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ((tmp_18_0 = ctx.courseForm.get("coursePrice")) == null ? null : tmp_18_0.value) ? i0.ɵɵpipeBind4(119, 23, (tmp_18_0 = ctx.courseForm.get("coursePrice")) == null ? null : tmp_18_0.value, "INR", "symbol", "1.0-0") : "Set a course price", " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.bannerFileName || "No file selected");
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, RouterLink, i2.CurrencyPipe], styles: [".page-intro[_ngcontent-%COMP%], \n.course-form-card[_ngcontent-%COMP%], \n.course-summary-card[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n\n.page-intro[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(13, 110, 253, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f7faff);\n}\n\n.intro-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(13, 110, 253, 0.1);\n  color: #0d6efd;\n  font-weight: 600;\n}\n\n.section-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #0d6efd, #4f8dfd);\n  color: #fff;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #198754, #46b57d);\n}\n\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 1rem;\n  display: inline-flex;\n  align-items: center;\n  color: #6c757d;\n  z-index: 2;\n}\n\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 0.95rem;\n  border-color: #dfe5ef;\n  box-shadow: none;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: rgba(13, 110, 253, 0.45);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.12);\n}\n\n.upload-panel[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px dashed #b8c8e2;\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background: #f8fbff;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n\n.upload-panel[_ngcontent-%COMP%]:hover {\n  border-color: #0d6efd;\n  box-shadow: 0 12px 30px rgba(13, 110, 253, 0.08);\n  transform: translateY(-1px);\n}\n\n.upload-panel.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(13, 110, 253, 0.12);\n  color: #0d6efd;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.preview-card[_ngcontent-%COMP%], \n.summary-preview[_ngcontent-%COMP%] {\n  border: 1px solid #edf1f7;\n  border-radius: 1rem;\n  background: #fff;\n  padding: 1rem;\n}\n\n.preview-image[_ngcontent-%COMP%], \n.summary-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 240px;\n  object-fit: cover;\n  border-radius: 0.9rem;\n}\n\n.summary-placeholder[_ngcontent-%COMP%] {\n  min-height: 220px;\n  border-radius: 0.9rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(135deg, rgba(13, 110, 253, 0.06), rgba(25, 135, 84, 0.08)),\n    #f8faff;\n  color: #6c757d;\n  text-align: center;\n}\n\n.summary-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #0d6efd;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #edf1f7;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n@media (max-width: 767.98px) {\n  .page-intro[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .course-form-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .course-summary-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddCourseComponent, [{
        type: Component,
        args: [{ selector: 'app-add-course', imports: [CommonModule, ReactiveFormsModule, RouterLink], template: "<div class=\"row g-4\">\n  <div class=\"col-12\">\n    <div class=\"card border-0 shadow-sm page-intro overflow-hidden\">\n      <div class=\"card-body p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3\">\n        <div>\n          <span class=\"badge intro-badge mb-3\">\n            <i class=\"ti ti-book-upload me-2\"></i>Course Management\n          </span>\n          <h3 class=\"mb-2\">Create a new course</h3>\n          <p class=\"text-muted mb-0\">Add a polished course profile with pricing and banner preview for demo use.</p>\n        </div>\n\n        <a routerLink=\"/application/courses\" class=\"btn btn-outline-primary\">\n          <i class=\"ti ti-list-details me-2\"></i>View Courses\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-8\">\n    <div class=\"card border-0 shadow-sm course-form-card h-100\">\n      <div class=\"card-body p-4 p-lg-5\">\n        <div class=\"d-flex align-items-center gap-3 mb-4\">\n          <div class=\"section-icon\">\n            <i class=\"ti ti-school\"></i>\n          </div>\n          <div>\n            <h4 class=\"mb-1\">Add Course Component</h4>\n            <p class=\"text-muted mb-0\">Fill in the required details and review the banner before submitting.</p>\n          </div>\n        </div>\n\n        <form [formGroup]=\"courseForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n          <div class=\"row g-4\">\n            <div class=\"col-md-6\">\n              <label for=\"courseType\" class=\"form-label fw-semibold\">Course Type <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-category\"></i></span>\n                <select\n                  id=\"courseType\"\n                  class=\"form-select form-select-lg ps-5\"\n                  formControlName=\"courseType\"\n                  [class.is-invalid]=\"isInvalid('courseType')\"\n                >\n                  <option value=\"\" disabled>Select course type</option>\n                  <option *ngFor=\"let type of courseTypes\" [value]=\"type\">{{ type }}</option>\n                </select>\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('courseType')\">Please select a course type.</div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <label for=\"coursePrice\" class=\"form-label fw-semibold\">Course Price <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-currency-rupee\"></i></span>\n                <input\n                  id=\"coursePrice\"\n                  type=\"number\"\n                  min=\"1\"\n                  class=\"form-control form-control-lg ps-5\"\n                  placeholder=\"Enter course price\"\n                  formControlName=\"coursePrice\"\n                  [class.is-invalid]=\"isInvalid('coursePrice')\"\n                />\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('coursePrice')\">\n                Please enter a valid course price.\n              </div>\n            </div>\n\n            <div class=\"col-12\">\n              <label for=\"courseName\" class=\"form-label fw-semibold\">Course Name <span class=\"text-danger\">*</span></label>\n              <div class=\"position-relative\">\n                <span class=\"field-icon\"><i class=\"ti ti-book\"></i></span>\n                <input\n                  id=\"courseName\"\n                  type=\"text\"\n                  class=\"form-control form-control-lg ps-5\"\n                  placeholder=\"Enter course name\"\n                  formControlName=\"courseName\"\n                  [class.is-invalid]=\"isInvalid('courseName')\"\n                />\n              </div>\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('courseName')\">Course name is required.</div>\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label fw-semibold\">Course Banner <span class=\"text-danger\">*</span></label>\n\n              <label class=\"upload-panel w-100\" [class.is-invalid]=\"isInvalid('courseBanner')\">\n                <input type=\"file\" class=\"d-none\" accept=\"image/*\" (change)=\"onBannerSelected($event)\" />\n                <div class=\"d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3\">\n                  <div class=\"d-flex align-items-start gap-3\">\n                    <div class=\"upload-icon\">\n                      <i class=\"ti ti-photo-scan\"></i>\n                    </div>\n                    <div>\n                      <h6 class=\"mb-1\">{{ bannerFileName || 'Choose a banner image' }}</h6>\n                      <p class=\"text-muted mb-0\">Supported formats: JPG, PNG, WEBP. Click this panel to browse files.</p>\n                    </div>\n                  </div>\n\n                  <span class=\"btn btn-outline-primary upload-btn\">\n                    <i class=\"ti ti-upload me-2\"></i>Select Banner\n                  </span>\n                </div>\n              </label>\n\n              <div class=\"invalid-feedback d-block\" *ngIf=\"isInvalid('courseBanner')\">Please select a banner image.</div>\n            </div>\n\n            <div class=\"col-12\" *ngIf=\"bannerPreview\">\n              <div class=\"preview-card\">\n                <div class=\"d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3\">\n                  <div>\n                    <h6 class=\"mb-1\">Banner Preview</h6>\n                    <p class=\"text-muted mb-0\">A quick look at the selected course banner.</p>\n                  </div>\n                  <span class=\"badge text-bg-light\">{{ bannerFileName }}</span>\n                </div>\n\n                <img [src]=\"bannerPreview\" alt=\"Course banner preview\" class=\"img-fluid preview-image\" />\n              </div>\n            </div>\n\n            <div class=\"col-12\" *ngIf=\"demoMessage\">\n              <div class=\"alert alert-success border-0 mb-0\" role=\"alert\">\n                <i class=\"ti ti-circle-check me-2\"></i>{{ demoMessage }}\n              </div>\n            </div>\n\n            <div class=\"col-12 d-flex flex-wrap gap-3 pt-2\">\n              <button type=\"submit\" class=\"btn btn-primary px-4\">\n                <i class=\"ti ti-check me-2\"></i>Submit\n              </button>\n              <a routerLink=\"/application/courses\" class=\"btn btn-light px-4\">Browse Course List</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-xl-4\">\n    <div class=\"card border-0 shadow-sm course-summary-card h-100\">\n      <div class=\"card-body p-4\">\n        <div class=\"d-flex align-items-center gap-3 mb-4\">\n          <div class=\"section-icon summary-icon\">\n            <i class=\"ti ti-photo\"></i>\n          </div>\n          <div>\n            <h5 class=\"mb-1\">Live Summary</h5>\n            <p class=\"text-muted mb-0\">Preview how the course details are shaping up.</p>\n          </div>\n        </div>\n\n        <div class=\"summary-preview mb-4\">\n          <ng-container *ngIf=\"bannerPreview; else bannerPlaceholder\">\n            <img [src]=\"bannerPreview\" alt=\"Selected banner preview\" class=\"img-fluid summary-image\" />\n          </ng-container>\n\n          <ng-template #bannerPlaceholder>\n            <div class=\"summary-placeholder\">\n              <i class=\"ti ti-photo-up\"></i>\n              <span>Banner preview appears here</span>\n            </div>\n          </ng-template>\n        </div>\n\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Course Type</span>\n          <strong>{{ courseForm.get('courseType')?.value || 'Not selected yet' }}</strong>\n        </div>\n\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Course Name</span>\n          <strong>{{ courseForm.get('courseName')?.value || 'Waiting for course title' }}</strong>\n        </div>\n\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Course Price</span>\n          <strong>\n            {{\n              courseForm.get('coursePrice')?.value\n                ? (courseForm.get('coursePrice')?.value | currency: 'INR' : 'symbol' : '1.0-0')\n                : 'Set a course price'\n            }}\n          </strong>\n        </div>\n\n        <div class=\"summary-item border-0 pb-0 mb-0\">\n          <span class=\"summary-label\">Banner File</span>\n          <strong>{{ bannerFileName || 'No file selected' }}</strong>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page-intro,\n.course-form-card,\n.course-summary-card {\n  border-radius: 1.25rem;\n}\n\n.page-intro {\n  background:\n    radial-gradient(circle at top right, rgba(13, 110, 253, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f7faff);\n}\n\n.intro-badge {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(13, 110, 253, 0.1);\n  color: #0d6efd;\n  font-weight: 600;\n}\n\n.section-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #0d6efd, #4f8dfd);\n  color: #fff;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n\n.summary-icon {\n  background: linear-gradient(135deg, #198754, #46b57d);\n}\n\n.field-icon {\n  position: absolute;\n  inset: 0 auto 0 1rem;\n  display: inline-flex;\n  align-items: center;\n  color: #6c757d;\n  z-index: 2;\n}\n\n.form-control,\n.form-select {\n  border-radius: 0.95rem;\n  border-color: #dfe5ef;\n  box-shadow: none;\n}\n\n.form-control:focus,\n.form-select:focus {\n  border-color: rgba(13, 110, 253, 0.45);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.12);\n}\n\n.upload-panel {\n  display: block;\n  border: 1px dashed #b8c8e2;\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background: #f8fbff;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n\n.upload-panel:hover {\n  border-color: #0d6efd;\n  box-shadow: 0 12px 30px rgba(13, 110, 253, 0.08);\n  transform: translateY(-1px);\n}\n\n.upload-panel.is-invalid {\n  border-color: #dc3545;\n}\n\n.upload-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(13, 110, 253, 0.12);\n  color: #0d6efd;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n\n.upload-btn {\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.preview-card,\n.summary-preview {\n  border: 1px solid #edf1f7;\n  border-radius: 1rem;\n  background: #fff;\n  padding: 1rem;\n}\n\n.preview-image,\n.summary-image {\n  width: 100%;\n  max-height: 240px;\n  object-fit: cover;\n  border-radius: 0.9rem;\n}\n\n.summary-placeholder {\n  min-height: 220px;\n  border-radius: 0.9rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(135deg, rgba(13, 110, 253, 0.06), rgba(25, 135, 84, 0.08)),\n    #f8faff;\n  color: #6c757d;\n  text-align: center;\n}\n\n.summary-placeholder i {\n  font-size: 2rem;\n  color: #0d6efd;\n}\n\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #edf1f7;\n}\n\n.summary-label {\n  color: #6c757d;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n@media (max-width: 767.98px) {\n  .page-intro .card-body,\n  .course-form-card .card-body,\n  .course-summary-card .card-body {\n    padding: 1.5rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddCourseComponent, { className: "AddCourseComponent", filePath: "src/app/demo/application/course/add-course/add-course.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=add-course.component.js.map