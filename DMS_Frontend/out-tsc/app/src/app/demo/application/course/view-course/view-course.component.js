import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ViewCourseComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    i0.ɵɵelement(3, "img", 14);
    i0.ɵɵelementStart(4, "span", 15);
    i0.ɵɵelement(5, "i", 16);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 17)(8, "div", 18);
    i0.ɵɵelement(9, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h5", 20);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 21);
    i0.ɵɵtext(13, "Professional, demo-ready course card layout built with Bootstrap utilities.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 22)(15, "div")(16, "span", 23);
    i0.ɵɵtext(17, "Course Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "h4", 24);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "span", 25);
    i0.ɵɵelement(22, "i", 26);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const course_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", course_r1.banner, i0.ɵɵsanitizeUrl)("alt", course_r1.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", course_r1.type, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(course_r1.name);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(20, 6, course_r1.price, "INR", "symbol", "1.0-0"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", course_r1.type, " ");
} }
export class ViewCourseComponent {
    constructor() {
        this.courses = [
            {
                name: 'Web Development Bootcamp',
                type: 'Software',
                price: 1999,
                banner: 'https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg'
            },
            {
                name: 'Graphic Design Mastery',
                type: 'Graphic Design',
                price: 1499,
                banner: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg'
            },
            {
                name: 'Finance Basics',
                type: 'Finance',
                price: 999,
                banner: 'https://images.pexels.com/photos/6694866/pexels-photo-6694866.jpeg'
            }
        ];
    }
    static { this.ɵfac = function ViewCourseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ViewCourseComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewCourseComponent, selectors: [["app-view-course"]], decls: 16, vars: 1, consts: [[1, "row", "g-4"], [1, "col-12"], [1, "card", "border-0", "shadow-sm", "catalog-intro", "overflow-hidden"], [1, "card-body", "p-4", "p-lg-5", "d-flex", "flex-column", "flex-lg-row", "align-items-lg-center", "justify-content-between", "gap-3"], [1, "badge", "intro-badge", "mb-3"], [1, "ti", "ti-books", "me-2"], [1, "mb-2"], [1, "text-muted", "mb-0"], ["routerLink", "/application/create-course", 1, "btn", "btn-primary"], [1, "ti", "ti-plus", "me-2"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4"], [1, "card", "border-0", "shadow-sm", "h-100", "course-card"], [1, "course-banner"], [1, "card-img-top", "banner-image", 3, "src", "alt"], [1, "badge", "rounded-pill", "type-badge"], [1, "ti", "ti-category", "me-1"], [1, "card-body", "d-flex", "flex-column", "p-4"], [1, "course-icon", "mb-3"], [1, "ti", "ti-book"], [1, "card-title", "mb-2"], [1, "text-muted", "mb-4"], [1, "mt-auto", "d-flex", "align-items-end", "justify-content-between", "gap-3"], [1, "price-label"], [1, "price-value", "mb-0"], [1, "mini-chip"], [1, "ti", "ti-school", "me-1"]], template: function ViewCourseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
            i0.ɵɵelement(6, "i", 5);
            i0.ɵɵtext(7, "Course Catalog ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h3", 6);
            i0.ɵɵtext(9, "View Course Component");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 7);
            i0.ɵɵtext(11, "A responsive Bootstrap card grid using local dummy data for quick demos.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 8);
            i0.ɵɵelement(13, "i", 9);
            i0.ɵɵtext(14, "Add Course ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(15, ViewCourseComponent_div_15_Template, 24, 11, "div", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.courses);
        } }, dependencies: [CommonModule, i1.NgForOf, RouterLink, i1.CurrencyPipe], styles: [".catalog-intro[_ngcontent-%COMP%], \n.course-card[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n\n.catalog-intro[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top left, rgba(25, 135, 84, 0.16), transparent 30%),\n    linear-gradient(135deg, #ffffff, #f7fbf8);\n}\n\n.intro-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n  font-weight: 600;\n}\n\n.course-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 1.1rem 2.4rem rgba(15, 23, 42, 0.12) !important;\n}\n\n.course-banner[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n\n.type-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  bottom: 1rem;\n  padding: 0.55rem 0.85rem;\n  background: rgba(255, 255, 255, 0.92);\n  color: #212529;\n  box-shadow: 0 0.5rem 1.2rem rgba(15, 23, 42, 0.08);\n}\n\n.course-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, rgba(13, 110, 253, 0.12), rgba(25, 135, 84, 0.18));\n  color: #0d6efd;\n  font-size: 1.25rem;\n}\n\n.price-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #6c757d;\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n}\n\n.price-value[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 700;\n}\n\n.mini-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.75rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #495057;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n\n@media (max-width: 767.98px) {\n  .catalog-intro[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .course-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .banner-image[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewCourseComponent, [{
        type: Component,
        args: [{ selector: 'app-view-course', imports: [CommonModule, RouterLink], template: "<div class=\"row g-4\">\n  <div class=\"col-12\">\n    <div class=\"card border-0 shadow-sm catalog-intro overflow-hidden\">\n      <div class=\"card-body p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3\">\n        <div>\n          <span class=\"badge intro-badge mb-3\">\n            <i class=\"ti ti-books me-2\"></i>Course Catalog\n          </span>\n          <h3 class=\"mb-2\">View Course Component</h3>\n          <p class=\"text-muted mb-0\">A responsive Bootstrap card grid using local dummy data for quick demos.</p>\n        </div>\n\n        <a routerLink=\"/application/create-course\" class=\"btn btn-primary\">\n          <i class=\"ti ti-plus me-2\"></i>Add Course\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6 col-lg-4\" *ngFor=\"let course of courses\">\n    <div class=\"card border-0 shadow-sm h-100 course-card\">\n      <div class=\"course-banner\">\n        <img [src]=\"course.banner\" [alt]=\"course.name\" class=\"card-img-top banner-image\" />\n        <span class=\"badge rounded-pill type-badge\">\n          <i class=\"ti ti-category me-1\"></i>{{ course.type }}\n        </span>\n      </div>\n\n      <div class=\"card-body d-flex flex-column p-4\">\n        <div class=\"course-icon mb-3\">\n          <i class=\"ti ti-book\"></i>\n        </div>\n\n        <h5 class=\"card-title mb-2\">{{ course.name }}</h5>\n        <p class=\"text-muted mb-4\">Professional, demo-ready course card layout built with Bootstrap utilities.</p>\n\n        <div class=\"mt-auto d-flex align-items-end justify-content-between gap-3\">\n          <div>\n            <span class=\"price-label\">Course Price</span>\n            <h4 class=\"price-value mb-0\">{{ course.price | currency: 'INR' : 'symbol' : '1.0-0' }}</h4>\n          </div>\n\n          <span class=\"mini-chip\">\n            <i class=\"ti ti-school me-1\"></i>{{ course.type }}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".catalog-intro,\n.course-card {\n  border-radius: 1.25rem;\n}\n\n.catalog-intro {\n  background:\n    radial-gradient(circle at top left, rgba(25, 135, 84, 0.16), transparent 30%),\n    linear-gradient(135deg, #ffffff, #f7fbf8);\n}\n\n.intro-badge {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n  font-weight: 600;\n}\n\n.course-card {\n  overflow: hidden;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.course-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 1.1rem 2.4rem rgba(15, 23, 42, 0.12) !important;\n}\n\n.course-banner {\n  position: relative;\n}\n\n.banner-image {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n\n.type-badge {\n  position: absolute;\n  left: 1rem;\n  bottom: 1rem;\n  padding: 0.55rem 0.85rem;\n  background: rgba(255, 255, 255, 0.92);\n  color: #212529;\n  box-shadow: 0 0.5rem 1.2rem rgba(15, 23, 42, 0.08);\n}\n\n.course-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, rgba(13, 110, 253, 0.12), rgba(25, 135, 84, 0.18));\n  color: #0d6efd;\n  font-size: 1.25rem;\n}\n\n.price-label {\n  display: block;\n  color: #6c757d;\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n}\n\n.price-value {\n  color: #0d6efd;\n  font-weight: 700;\n}\n\n.mini-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.75rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #495057;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n\n@media (max-width: 767.98px) {\n  .catalog-intro .card-body,\n  .course-card .card-body {\n    padding: 1.5rem;\n  }\n\n  .banner-image {\n    height: 200px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewCourseComponent, { className: "ViewCourseComponent", filePath: "src/app/demo/application/course/view-course/view-course.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=view-course.component.js.map