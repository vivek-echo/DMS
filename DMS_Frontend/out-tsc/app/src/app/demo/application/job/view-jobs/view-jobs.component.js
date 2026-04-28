import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ViewJobsComponent_div_15_span_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r1);
} }
function ViewJobsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    i0.ɵɵelement(3, "img", 14);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵelement(5, "i", 15);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 16)(8, "div", 17)(9, "div", 18);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div")(12, "p", 19);
    i0.ɵɵtext(13, "Company");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "h6", 20);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "h5", 21);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p", 22);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 23)(21, "div", 24);
    i0.ɵɵelement(22, "i", 25);
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 24);
    i0.ɵɵelement(26, "i", 26);
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 27);
    i0.ɵɵtemplate(30, ViewJobsComponent_div_15_span_30_Template, 2, 1, "span", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "button", 29);
    i0.ɵɵelement(32, "i", 30);
    i0.ɵɵtext(33, "Apply Now ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", job_r2.bannerImage, i0.ɵɵsanitizeUrl)("alt", job_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r2.getTypeClass(job_r2.type));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", job_r2.type, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", job_r2.company.charAt(0), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(job_r2.company);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(job_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(job_r2.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(job_r2.location);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(job_r2.salary);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", job_r2.skills);
} }
export class ViewJobsComponent {
    constructor() {
        this.jobs = [
            {
                title: 'Frontend Developer',
                type: 'Job',
                company: 'Tech Solutions',
                location: 'Patna',
                salary: 'INR 25,000/month',
                description: 'Looking for Angular developer',
                skills: ['Angular', 'TypeScript', 'Bootstrap'],
                bannerImage: this.createBanner('Frontend Developer', 'Tech Solutions', '#2563eb', '#0f172a')
            },
            {
                title: 'Graphic Design Intern',
                type: 'Internship',
                company: 'Creative Studio',
                location: 'Remote',
                salary: 'INR 8,000/month',
                description: 'Internship for freshers',
                skills: ['Photoshop', 'Illustrator', 'Creativity'],
                bannerImage: this.createBanner('Graphic Design Intern', 'Creative Studio', '#ec4899', '#7c3aed')
            }
        ];
    }
    getTypeClass(type) {
        return type === 'Job' ? 'type-badge badge-job' : 'type-badge badge-internship';
    }
    createBanner(title, company, startColor, endColor) {
        const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="720" height="320" viewBox="0 0 720 320" fill="none">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${startColor}" />
            <stop offset="100%" stop-color="${endColor}" />
          </linearGradient>
        </defs>
        <rect width="720" height="320" rx="32" fill="url(#bg)" />
        <circle cx="610" cy="74" r="90" fill="#ffffff" fill-opacity="0.14" />
        <circle cx="545" cy="262" r="126" fill="#ffffff" fill-opacity="0.08" />
        <path
          d="M0 250C80 228 157 218 250 234C350 251 407 300 511 302C590 304 649 276 720 222V320H0V250Z"
          fill="#ffffff"
          fill-opacity="0.15"
        />
        <rect x="42" y="38" width="138" height="36" rx="18" fill="#ffffff" fill-opacity="0.18" />
        <text x="70" y="61" fill="#ffffff" font-family="Arial, sans-serif" font-size="17" font-weight="700">
          CAREER DESK
        </text>
        <text x="42" y="188" fill="#ffffff" font-family="Arial, sans-serif" font-size="38" font-weight="700">
          ${title}
        </text>
        <text x="42" y="224" fill="#ffffff" fill-opacity="0.84" font-family="Arial, sans-serif" font-size="22">
          ${company}
        </text>
      </svg>
    `.trim();
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }
    static { this.ɵfac = function ViewJobsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ViewJobsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewJobsComponent, selectors: [["app-view-jobs"]], decls: 16, vars: 1, consts: [[1, "row", "g-4"], [1, "col-12"], [1, "card", "border-0", "shadow-sm", "catalog-intro", "overflow-hidden"], [1, "card-body", "p-4", "p-lg-5", "d-flex", "flex-column", "flex-lg-row", "align-items-lg-center", "justify-content-between", "gap-3"], [1, "badge", "intro-badge", "mb-3"], [1, "ti", "ti-briefcase-2", "me-2"], [1, "mb-2"], [1, "text-muted", "mb-0"], ["routerLink", "/application/add-job", 1, "btn", "btn-primary"], [1, "ti", "ti-plus", "me-2"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", "job-card"], [1, "job-banner"], [1, "card-img-top", "banner-image", 3, "src", "alt"], [1, "ti", "ti-briefcase", "me-1"], [1, "card-body", "d-flex", "flex-column", "p-4"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "company-avatar"], [1, "company-label", "mb-1"], [1, "mb-0"], [1, "card-title", "mb-2"], [1, "job-description", "mb-4"], [1, "detail-list", "mb-4"], [1, "detail-item"], [1, "ti", "ti-map-pin"], [1, "ti", "ti-currency-rupee"], [1, "skill-list", "mb-4"], ["class", "skill-chip", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "w-100", "mt-auto"], [1, "ti", "ti-send", "me-2"], [1, "skill-chip"]], template: function ViewJobsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
            i0.ɵɵelement(6, "i", 5);
            i0.ɵɵtext(7, "Open Roles ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h3", 6);
            i0.ɵɵtext(9, "View Jobs / Internships");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 7);
            i0.ɵɵtext(11, "Browse responsive opportunity cards built with static demo content and Bootstrap 5.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 8);
            i0.ɵɵelement(13, "i", 9);
            i0.ɵɵtext(14, "Add Job ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(15, ViewJobsComponent_div_15_Template, 34, 12, "div", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.jobs);
        } }, dependencies: [CommonModule, i1.NgForOf, RouterLink], styles: [".catalog-intro[_ngcontent-%COMP%], \n.job-card[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n\n.catalog-intro[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top left, rgba(13, 110, 253, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f8fbff);\n}\n\n.intro-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(13, 110, 253, 0.1);\n  color: #0d6efd;\n  font-weight: 600;\n}\n\n.job-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.job-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 1.1rem 2.4rem rgba(15, 23, 42, 0.12) !important;\n}\n\n.job-banner[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n\n.type-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  bottom: 1rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  box-shadow: 0 0.5rem 1.2rem rgba(15, 23, 42, 0.08);\n}\n\n.badge-job[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.94);\n  color: #0d6efd;\n}\n\n.badge-internship[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.94);\n  color: #198754;\n}\n\n.company-avatar[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, rgba(13, 110, 253, 0.12), rgba(25, 135, 84, 0.16));\n  color: #0d6efd;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.company-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.job-description[_ngcontent-%COMP%] {\n  color: #6c757d;\n  line-height: 1.6;\n}\n\n.detail-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: #495057;\n}\n\n.detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n\n.skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.skill-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.42rem 0.75rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #495057;\n  font-size: 0.82rem;\n}\n\n@media (max-width: 767.98px) {\n  .catalog-intro[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .job-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .banner-image[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewJobsComponent, [{
        type: Component,
        args: [{ selector: 'app-view-jobs', imports: [CommonModule, RouterLink], template: "<div class=\"row g-4\">\n  <div class=\"col-12\">\n    <div class=\"card border-0 shadow-sm catalog-intro overflow-hidden\">\n      <div class=\"card-body p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3\">\n        <div>\n          <span class=\"badge intro-badge mb-3\">\n            <i class=\"ti ti-briefcase-2 me-2\"></i>Open Roles\n          </span>\n          <h3 class=\"mb-2\">View Jobs / Internships</h3>\n          <p class=\"text-muted mb-0\">Browse responsive opportunity cards built with static demo content and Bootstrap 5.</p>\n        </div>\n\n        <a routerLink=\"/application/add-job\" class=\"btn btn-primary\">\n          <i class=\"ti ti-plus me-2\"></i>Add Job\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6 col-xl-4\" *ngFor=\"let job of jobs\">\n    <div class=\"card border-0 shadow-sm h-100 job-card\">\n      <div class=\"job-banner\">\n        <img [src]=\"job.bannerImage\" [alt]=\"job.title\" class=\"card-img-top banner-image\" />\n        <span [class]=\"getTypeClass(job.type)\">\n          <i class=\"ti ti-briefcase me-1\"></i>{{ job.type }}\n        </span>\n      </div>\n\n      <div class=\"card-body d-flex flex-column p-4\">\n        <div class=\"d-flex align-items-center gap-3 mb-3\">\n          <div class=\"company-avatar\">\n            {{ job.company.charAt(0) }}\n          </div>\n          <div>\n            <p class=\"company-label mb-1\">Company</p>\n            <h6 class=\"mb-0\">{{ job.company }}</h6>\n          </div>\n        </div>\n\n        <h5 class=\"card-title mb-2\">{{ job.title }}</h5>\n        <p class=\"job-description mb-4\">{{ job.description }}</p>\n\n        <div class=\"detail-list mb-4\">\n          <div class=\"detail-item\">\n            <i class=\"ti ti-map-pin\"></i>\n            <span>{{ job.location }}</span>\n          </div>\n          <div class=\"detail-item\">\n            <i class=\"ti ti-currency-rupee\"></i>\n            <span>{{ job.salary }}</span>\n          </div>\n        </div>\n\n        <div class=\"skill-list mb-4\">\n          <span class=\"skill-chip\" *ngFor=\"let skill of job.skills\">{{ skill }}</span>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-primary w-100 mt-auto\">\n          <i class=\"ti ti-send me-2\"></i>Apply Now\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".catalog-intro,\n.job-card {\n  border-radius: 1.25rem;\n}\n\n.catalog-intro {\n  background:\n    radial-gradient(circle at top left, rgba(13, 110, 253, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f8fbff);\n}\n\n.intro-badge {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(13, 110, 253, 0.1);\n  color: #0d6efd;\n  font-weight: 600;\n}\n\n.job-card {\n  overflow: hidden;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.job-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 1.1rem 2.4rem rgba(15, 23, 42, 0.12) !important;\n}\n\n.job-banner {\n  position: relative;\n}\n\n.banner-image {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n\n.type-badge {\n  position: absolute;\n  left: 1rem;\n  bottom: 1rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  box-shadow: 0 0.5rem 1.2rem rgba(15, 23, 42, 0.08);\n}\n\n.badge-job {\n  background: rgba(255, 255, 255, 0.94);\n  color: #0d6efd;\n}\n\n.badge-internship {\n  background: rgba(255, 255, 255, 0.94);\n  color: #198754;\n}\n\n.company-avatar {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, rgba(13, 110, 253, 0.12), rgba(25, 135, 84, 0.16));\n  color: #0d6efd;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.company-label {\n  color: #6c757d;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.job-description {\n  color: #6c757d;\n  line-height: 1.6;\n}\n\n.detail-list {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.detail-item {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: #495057;\n}\n\n.detail-item i {\n  color: #0d6efd;\n}\n\n.skill-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.skill-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.42rem 0.75rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #495057;\n  font-size: 0.82rem;\n}\n\n@media (max-width: 767.98px) {\n  .catalog-intro .card-body,\n  .job-card .card-body {\n    padding: 1.5rem;\n  }\n\n  .banner-image {\n    height: 200px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewJobsComponent, { className: "ViewJobsComponent", filePath: "src/app/demo/application/job/view-jobs/view-jobs.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=view-jobs.component.js.map