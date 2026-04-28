import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AppliedJobsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div")(5, "p", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 21);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 22);
    i0.ɵɵtext(10, "Student applications in this stage");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 23);
    i0.ɵɵelement(12, "i");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const summary_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", summary_r1.accentClass);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getStatusCount(summary_r1.label));
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(summary_r1.icon);
} }
function AppliedJobsComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 24)(3, "h6", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 26);
    i0.ɵɵtext(6, "Application submitted through demo UI");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const job_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(job_r3.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(job_r3.company);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r1.getStatusBadgeClass(job_r3.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(job_r3.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(job_r3.date || "-");
} }
export class AppliedJobsComponent {
    constructor() {
        this.appliedJobs = [
            {
                title: 'Frontend Developer',
                company: 'Tech Solutions',
                status: 'Applied',
                date: '18 Apr 2026'
            },
            {
                title: 'Graphic Design Intern',
                company: 'Creative Studio',
                status: 'Shortlisted',
                date: '24 Apr 2026'
            }
        ];
        this.statusSummary = [
            {
                label: 'Applied',
                icon: 'ti ti-send',
                accentClass: 'status-card-applied'
            },
            {
                label: 'Shortlisted',
                icon: 'ti ti-circle-check',
                accentClass: 'status-card-shortlisted'
            },
            {
                label: 'Rejected',
                icon: 'ti ti-circle-x',
                accentClass: 'status-card-rejected'
            }
        ];
    }
    getStatusCount(status) {
        return this.appliedJobs.filter((job) => job.status === status).length;
    }
    getStatusBadgeClass(status) {
        switch (status) {
            case 'Shortlisted':
                return 'status-badge shortlisted-badge';
            case 'Rejected':
                return 'status-badge rejected-badge';
            default:
                return 'status-badge applied-badge';
        }
    }
    static { this.ɵfac = function AppliedJobsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppliedJobsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppliedJobsComponent, selectors: [["app-applied-jobs"]], decls: 33, vars: 2, consts: [[1, "row", "g-4"], [1, "col-12"], [1, "card", "border-0", "shadow-sm", "page-intro", "overflow-hidden"], [1, "card-body", "p-4", "p-lg-5", "d-flex", "flex-column", "flex-lg-row", "align-items-lg-center", "justify-content-between", "gap-3"], [1, "badge", "intro-badge", "mb-3"], [1, "ti", "ti-user-check", "me-2"], [1, "mb-2"], [1, "text-muted", "mb-0"], ["routerLink", "/application/jobs", 1, "btn", "btn-outline-primary"], [1, "ti", "ti-briefcase", "me-2"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "card", "border-0", "shadow-sm", "table-card"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0", "application-table"], [4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "border-0", "shadow-sm", "h-100", "status-card", 3, "ngClass"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-start", "justify-content-between", "gap-3"], [1, "status-label", "mb-2"], [1, "status-value", "mb-1"], [1, "status-note", "mb-0"], [1, "status-icon"], [1, "job-title-wrap"], [1, "mb-1"], [1, "text-muted", "small"]], template: function AppliedJobsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
            i0.ɵɵelement(6, "i", 5);
            i0.ɵɵtext(7, "Student Applications ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h3", 6);
            i0.ɵɵtext(9, "Student Applied Jobs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 7);
            i0.ɵɵtext(11, "Track application progress with responsive status cards and a clean Bootstrap table layout.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 8);
            i0.ɵɵelement(13, "i", 9);
            i0.ɵɵtext(14, "Browse Jobs ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(15, AppliedJobsComponent_div_15_Template, 13, 5, "div", 10);
            i0.ɵɵelementStart(16, "div", 1)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "table", 14)(21, "thead")(22, "tr")(23, "th");
            i0.ɵɵtext(24, "Job Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "th");
            i0.ɵɵtext(26, "Company");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "th");
            i0.ɵɵtext(28, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "Date");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "tbody");
            i0.ɵɵtemplate(32, AppliedJobsComponent_tr_32_Template, 14, 6, "tr", 15);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.statusSummary);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngForOf", ctx.appliedJobs);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, RouterLink], styles: [".page-intro[_ngcontent-%COMP%], \n.status-card[_ngcontent-%COMP%], \n.table-card[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n}\n\n.page-intro[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top left, rgba(25, 135, 84, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f8fbf8);\n}\n\n.intro-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n  font-weight: 600;\n}\n\n.status-card[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.status-card-applied[_ngcontent-%COMP%] {\n  border-top: 4px solid #6c757d;\n}\n\n.status-card-shortlisted[_ngcontent-%COMP%] {\n  border-top: 4px solid #198754;\n}\n\n.status-card-rejected[_ngcontent-%COMP%] {\n  border-top: 4px solid #dc3545;\n}\n\n.status-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.status-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.status-note[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  color: #495057;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n\n.table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.application-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #6c757d;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  border-bottom: 1px solid #edf1f7;\n  padding: 1rem 1.5rem;\n  white-space: nowrap;\n}\n\n.application-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  border-color: #edf1f7;\n}\n\n.job-title-wrap[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #212529;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.applied-badge[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.shortlisted-badge[_ngcontent-%COMP%] {\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n}\n\n.rejected-badge[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.12);\n  color: #dc3545;\n}\n\n@media (max-width: 767.98px) {\n  .page-intro[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .application-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .application-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppliedJobsComponent, [{
        type: Component,
        args: [{ selector: 'app-applied-jobs', imports: [CommonModule, RouterLink], template: "<div class=\"row g-4\">\n  <div class=\"col-12\">\n    <div class=\"card border-0 shadow-sm page-intro overflow-hidden\">\n      <div class=\"card-body p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3\">\n        <div>\n          <span class=\"badge intro-badge mb-3\">\n            <i class=\"ti ti-user-check me-2\"></i>Student Applications\n          </span>\n          <h3 class=\"mb-2\">Student Applied Jobs</h3>\n          <p class=\"text-muted mb-0\">Track application progress with responsive status cards and a clean Bootstrap table layout.</p>\n        </div>\n\n        <a routerLink=\"/application/jobs\" class=\"btn btn-outline-primary\">\n          <i class=\"ti ti-briefcase me-2\"></i>Browse Jobs\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\" *ngFor=\"let summary of statusSummary\">\n    <div class=\"card border-0 shadow-sm h-100 status-card\" [ngClass]=\"summary.accentClass\">\n      <div class=\"card-body p-4\">\n        <div class=\"d-flex align-items-start justify-content-between gap-3\">\n          <div>\n            <p class=\"status-label mb-2\">{{ summary.label }}</p>\n            <h3 class=\"status-value mb-1\">{{ getStatusCount(summary.label) }}</h3>\n            <p class=\"status-note mb-0\">Student applications in this stage</p>\n          </div>\n          <div class=\"status-icon\">\n            <i [class]=\"summary.icon\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-12\">\n    <div class=\"card border-0 shadow-sm table-card\">\n      <div class=\"card-body p-0\">\n        <div class=\"table-responsive\">\n          <table class=\"table align-middle mb-0 application-table\">\n            <thead>\n              <tr>\n                <th>Job Title</th>\n                <th>Company</th>\n                <th>Status</th>\n                <th>Date</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let job of appliedJobs\">\n                <td>\n                  <div class=\"job-title-wrap\">\n                    <h6 class=\"mb-1\">{{ job.title }}</h6>\n                    <span class=\"text-muted small\">Application submitted through demo UI</span>\n                  </div>\n                </td>\n                <td>{{ job.company }}</td>\n                <td>\n                  <span [class]=\"getStatusBadgeClass(job.status)\">{{ job.status }}</span>\n                </td>\n                <td>{{ job.date || '-' }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page-intro,\n.status-card,\n.table-card {\n  border-radius: 1.25rem;\n}\n\n.page-intro {\n  background:\n    radial-gradient(circle at top left, rgba(25, 135, 84, 0.14), transparent 32%),\n    linear-gradient(135deg, #ffffff, #f8fbf8);\n}\n\n.intro-badge {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.55rem 0.9rem;\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n  font-weight: 600;\n}\n\n.status-card {\n  background: #fff;\n}\n\n.status-card-applied {\n  border-top: 4px solid #6c757d;\n}\n\n.status-card-shortlisted {\n  border-top: 4px solid #198754;\n}\n\n.status-card-rejected {\n  border-top: 4px solid #dc3545;\n}\n\n.status-label {\n  color: #6c757d;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.status-value {\n  font-weight: 700;\n}\n\n.status-note {\n  color: #6c757d;\n}\n\n.status-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  color: #495057;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n\n.table-card {\n  overflow: hidden;\n}\n\n.application-table thead th {\n  background: #f8fafc;\n  color: #6c757d;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  border-bottom: 1px solid #edf1f7;\n  padding: 1rem 1.5rem;\n  white-space: nowrap;\n}\n\n.application-table tbody td {\n  padding: 1.25rem 1.5rem;\n  border-color: #edf1f7;\n}\n\n.job-title-wrap h6 {\n  color: #212529;\n}\n\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n\n.applied-badge {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.shortlisted-badge {\n  background: rgba(25, 135, 84, 0.12);\n  color: #198754;\n}\n\n.rejected-badge {\n  background: rgba(220, 53, 69, 0.12);\n  color: #dc3545;\n}\n\n@media (max-width: 767.98px) {\n  .page-intro .card-body {\n    padding: 1.5rem;\n  }\n\n  .application-table thead th,\n  .application-table tbody td {\n    padding: 1rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppliedJobsComponent, { className: "AppliedJobsComponent", filePath: "src/app/demo/application/job/applied-jobs/applied-jobs.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=applied-jobs.component.js.map