import { Component } from '@angular/core';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item.text;
const _forTrack3 = ($index, $item) => $item.title;
function DashboardComponent_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 18)(1, "div", 31)(2, "div", 32)(3, "div", 33)(4, "div")(5, "p", 34);
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "h3", 35);
    i0.ɵɵtext(8);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(9, "p", 36);
    i0.ɵɵtext(10);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(11, "div", 37);
    i0.ɵɵdomElement(12, "i");
    i0.ɵɵdomElementEnd()()()()();
} if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("--stat-accent", stat_r1.accent)("--stat-accent-soft", stat_r1.softAccent);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(stat_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r1.note);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(stat_r1.icon);
} }
function DashboardComponent_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 24)(1, "div", 38);
    i0.ɵɵdomElement(2, "img", 39);
    i0.ɵɵdomElementStart(3, "div", 40)(4, "div", 41)(5, "span", 42);
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "span", 43);
    i0.ɵɵtext(8);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(9, "h5", 44);
    i0.ɵɵtext(10);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(11, "p", 45);
    i0.ɵɵtext(12);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "div", 46)(14, "div", 47)(15, "span", 48);
    i0.ɵɵtext(16, "Progress");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(17, "span", 48);
    i0.ɵɵtext(18);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(19, "div", 49);
    i0.ɵɵdomElement(20, "div", 50);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(21, "button", 51);
    i0.ɵɵtext(22, " Continue Learning ");
    i0.ɵɵdomElement(23, "i", 52);
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const course_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("--course-accent", course_r2.accent)("--course-accent-soft", course_r2.softAccent);
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("src", course_r2.bannerImage, i0.ɵɵsanitizeUrl)("alt", course_r2.name + " banner");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", course_r2.lessonCount, " lessons");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", course_r2.progress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(course_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", course_r2.duration, " of guided content");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", course_r2.progress, "% complete");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", course_r2.progress, "%");
} }
function DashboardComponent_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 53)(1, "div", 54);
    i0.ɵɵdomElement(2, "i");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "div", 55)(4, "p", 56);
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "span", 57);
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const activity_r3 = ctx.$implicit;
    i0.ɵɵstyleProp("--activity-accent", activity_r3.accent)("--activity-accent-soft", activity_r3.softAccent);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(activity_r3.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(activity_r3.text);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r3.time);
} }
function DashboardComponent_For_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 58)(1, "div", 59);
    i0.ɵɵdomElement(2, "div", 60);
    i0.ɵɵdomElementStart(3, "div")(4, "h6", 61);
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "p", 62);
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(8, "span", 63);
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    i0.ɵɵstyleProp("--task-accent", task_r4.accent)("--task-accent-soft", task_r4.softAccent);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(task_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r4.course);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r4.timeline);
} }
export class DashboardComponent {
    constructor() {
        this.learnerName = 'Aarav';
        this.stats = [
            {
                label: 'Enrolled Courses',
                value: 5,
                note: 'Across development, design and CAD tracks',
                icon: 'fa-solid fa-book-open-reader',
                accent: '#2563eb',
                softAccent: 'rgba(37, 99, 235, 0.12)'
            },
            {
                label: 'Completed Courses',
                value: 2,
                note: 'Two programs finished successfully',
                icon: 'fa-solid fa-circle-check',
                accent: '#059669',
                softAccent: 'rgba(5, 150, 105, 0.12)'
            },
            {
                label: 'Pending Courses',
                value: 3,
                note: 'Ready to resume from your last lesson',
                icon: 'fa-solid fa-hourglass-half',
                accent: '#f59e0b',
                softAccent: 'rgba(245, 158, 11, 0.14)'
            },
            {
                label: 'Certificates Earned',
                value: 2,
                note: 'Latest certificate downloaded this week',
                icon: 'fa-solid fa-award',
                accent: '#8b5cf6',
                softAccent: 'rgba(139, 92, 246, 0.12)'
            }
        ];
        this.courses = [
            {
                id: 1,
                name: 'Web Development Bootcamp',
                progress: 60,
                lessonCount: 24,
                duration: '18 hours',
                accent: '#2563eb',
                softAccent: 'rgba(37, 99, 235, 0.12)',
                bannerImage: this.createBanner('Web Development', 'HTML / CSS / JS', '#1d4ed8', '#0f172a')
            },
            {
                id: 2,
                name: 'Graphic Design Mastery',
                progress: 30,
                lessonCount: 16,
                duration: '12 hours',
                accent: '#ec4899',
                softAccent: 'rgba(236, 72, 153, 0.14)',
                bannerImage: this.createBanner('Graphic Design', 'Branding / UI / Visuals', '#ec4899', '#7c3aed')
            },
            {
                id: 3,
                name: 'AutoCAD Training',
                progress: 80,
                lessonCount: 20,
                duration: '15 hours',
                accent: '#0f766e',
                softAccent: 'rgba(15, 118, 110, 0.12)',
                bannerImage: this.createBanner('AutoCAD Training', 'Drafting / Modeling / Plans', '#0f766e', '#164e63')
            }
        ];
        this.recentActivities = [
            {
                text: 'Completed lesson 3 in Web Development',
                time: '2 hours ago',
                icon: 'fa-solid fa-circle-check',
                accent: '#059669',
                softAccent: 'rgba(5, 150, 105, 0.12)'
            },
            {
                text: 'Enrolled in Graphic Design course',
                time: 'Yesterday',
                icon: 'fa-solid fa-user-plus',
                accent: '#2563eb',
                softAccent: 'rgba(37, 99, 235, 0.12)'
            },
            {
                text: 'Downloaded certificate',
                time: '2 days ago',
                icon: 'fa-solid fa-download',
                accent: '#8b5cf6',
                softAccent: 'rgba(139, 92, 246, 0.12)'
            }
        ];
        this.upcomingTasks = [
            {
                title: 'Complete Module 4',
                course: 'Web Development Bootcamp',
                timeline: 'Today',
                accent: '#2563eb',
                softAccent: 'rgba(37, 99, 235, 0.12)'
            },
            {
                title: 'Submit assignment',
                course: 'Graphic Design Mastery',
                timeline: 'Tomorrow',
                accent: '#f59e0b',
                softAccent: 'rgba(245, 158, 11, 0.14)'
            },
            {
                title: 'Watch pending videos',
                course: 'AutoCAD Training',
                timeline: 'This week',
                accent: '#059669',
                softAccent: 'rgba(5, 150, 105, 0.12)'
            }
        ];
    }
    createBanner(title, subtitle, startColor, endColor) {
        const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="720" height="360" viewBox="0 0 720 360" fill="none">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${startColor}" />
            <stop offset="100%" stop-color="${endColor}" />
          </linearGradient>
        </defs>
        <rect width="720" height="360" rx="32" fill="url(#bg)" />
        <circle cx="615" cy="70" r="96" fill="#ffffff" fill-opacity="0.14" />
        <circle cx="570" cy="285" r="126" fill="#ffffff" fill-opacity="0.09" />
        <path
          d="M0 292C81 258 132 250 214 262C292 274 347 318 431 324C525 331 607 283 720 220V360H0V292Z"
          fill="#ffffff"
          fill-opacity="0.16"
        />
        <g stroke="#ffffff" stroke-opacity="0.16" stroke-width="1">
          <path d="M42 54H236" />
          <path d="M42 82H312" />
          <path d="M42 110H280" />
        </g>
        <rect x="42" y="42" width="144" height="38" rx="19" fill="#ffffff" fill-opacity="0.18" />
        <text x="71" y="67" fill="#ffffff" font-family="Arial, sans-serif" font-size="18" font-weight="700">
          LIVE COURSE
        </text>
        <text x="42" y="220" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="700">
          ${title}
        </text>
        <text x="42" y="258" fill="#ffffff" fill-opacity="0.84" font-family="Arial, sans-serif" font-size="22">
          ${subtitle}
        </text>
      </svg>
    `.trim();
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }
    static { this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 67, vars: 2, consts: [[1, "student-dashboard"], [1, "card", "dashboard-hero", "border-0", "overflow-hidden"], [1, "card-body", "p-4", "p-xl-5"], [1, "row", "align-items-center", "g-4"], [1, "col-xl-7"], [1, "dashboard-badge"], [1, "hero-title", "mt-3", "mb-2"], [1, "hero-copy", "mb-4"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "hero-chip"], [1, "fa-solid", "fa-fire", "me-2"], [1, "fa-solid", "fa-bullseye", "me-2"], [1, "col-xl-5"], [1, "hero-panel"], [1, "hero-panel__label"], [1, "hero-panel__title"], [1, "hero-panel__copy", "mb-0"], [1, "row", "g-4"], [1, "col-xxl-3", "col-sm-6"], [1, "card", "section-card", "border-0"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "gap-3", "mb-4"], [1, "section-title", "mb-1"], [1, "section-subtitle", "mb-0"], [1, "section-pill"], [1, "col-xl-4", "col-md-6"], [1, "card", "section-card", "border-0", "h-100"], [1, "d-flex", "justify-content-between", "align-items-center", "gap-3", "mb-4"], [1, "activity-list"], [1, "activity-item", "d-flex", "align-items-start", "gap-3", 3, "--activity-accent", "--activity-accent-soft"], [1, "task-list"], [1, "task-item", "d-flex", "align-items-center", "justify-content-between", "gap-3", 3, "--task-accent", "--task-accent-soft"], [1, "card", "stat-card", "border-0", "h-100"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-start", "justify-content-between", "gap-3"], [1, "stat-label", "mb-2"], [1, "stat-value", "mb-2"], [1, "stat-note", "mb-0"], [1, "stat-icon"], [1, "card", "course-card", "border-0", "h-100"], [1, "course-banner", 3, "src", "alt"], [1, "card-body", "p-4", "d-flex", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-center", "gap-3", "mb-3"], [1, "course-meta"], [1, "course-progress-value"], [1, "course-title", "mb-2"], [1, "course-duration", "mb-4"], [1, "course-progress", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "course-progress-label"], [1, "progress"], ["role", "progressbar", 1, "progress-bar"], ["type", "button", 1, "btn", "course-action", "mt-auto"], [1, "fa-solid", "fa-arrow-right", "ms-2"], [1, "activity-item", "d-flex", "align-items-start", "gap-3"], [1, "activity-icon"], [1, "flex-grow-1"], [1, "activity-text", "mb-1"], [1, "activity-time"], [1, "task-item", "d-flex", "align-items-center", "justify-content-between", "gap-3"], [1, "d-flex", "align-items-start", "gap-3"], [1, "task-dot"], [1, "task-title", "mb-1"], [1, "task-course", "mb-0"], [1, "task-timeline"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
            i0.ɵɵtext(6, "Student Dashboard");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "h2", 6);
            i0.ɵɵtext(8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(9, "p", 7);
            i0.ɵɵtext(10, " Keep your momentum going with your active courses, recent milestones, and the tasks lined up for the week. ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(11, "div", 8)(12, "div", 9);
            i0.ɵɵdomElement(13, "i", 10);
            i0.ɵɵtext(14, " 7 day learning streak ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(15, "div", 9);
            i0.ɵɵdomElement(16, "i", 11);
            i0.ɵɵtext(17, " 60% average course progress ");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(18, "div", 12)(19, "div", 13)(20, "span", 14);
            i0.ɵɵtext(21, "Next milestone");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(22, "h3", 15);
            i0.ɵɵtext(23, "Earn your next certificate");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(24, "p", 16);
            i0.ɵɵtext(25, " Complete the remaining 40% of Web Development Bootcamp to unlock your next learner achievement. ");
            i0.ɵɵdomElementEnd()()()()()();
            i0.ɵɵdomElementStart(26, "div", 17);
            i0.ɵɵrepeaterCreate(27, DashboardComponent_For_28_Template, 13, 9, "div", 18, _forTrack0);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(29, "div", 19)(30, "div", 2)(31, "div", 20)(32, "div")(33, "h4", 21);
            i0.ɵɵtext(34, "My Courses");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(35, "p", 22);
            i0.ɵɵtext(36, "Pick up exactly where you left off across your enrolled programs.");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(37, "span", 23);
            i0.ɵɵtext(38);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(39, "div", 17);
            i0.ɵɵrepeaterCreate(40, DashboardComponent_For_41_Template, 24, 13, "div", 24, _forTrack1);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(42, "div", 17)(43, "div", 4)(44, "div", 25)(45, "div", 2)(46, "div", 26)(47, "div")(48, "h4", 21);
            i0.ɵɵtext(49, "Recent Activity");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(50, "p", 22);
            i0.ɵɵtext(51, "A quick look at your latest learning updates.");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(52, "div", 27);
            i0.ɵɵrepeaterCreate(53, DashboardComponent_For_54_Template, 8, 8, "div", 28, _forTrack2);
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(55, "div", 12)(56, "div", 25)(57, "div", 2)(58, "div", 26)(59, "div")(60, "h4", 21);
            i0.ɵɵtext(61, "Upcoming Tasks");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(62, "p", 22);
            i0.ɵɵtext(63, "Stay on track with the next actions in your queue.");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(64, "div", 29);
            i0.ɵɵrepeaterCreate(65, DashboardComponent_For_66_Template, 10, 7, "div", 30, _forTrack3);
            i0.ɵɵdomElementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("Welcome back, ", ctx.learnerName, ".");
            i0.ɵɵadvance(19);
            i0.ɵɵrepeater(ctx.stats);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", ctx.courses.length, " active courses");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.courses);
            i0.ɵɵadvance(13);
            i0.ɵɵrepeater(ctx.recentActivities);
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.upcomingTasks);
        } }, dependencies: [SharedModule], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.student-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.dashboard-hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(125, 211, 252, 0.28), transparent 32%),\n    linear-gradient(135deg, #0f172a 0%, #1d4ed8 52%, #38bdf8 100%);\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);\n  color: #fff;\n}\n\n.dashboard-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.95rem;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 2.6vw, 3rem);\n  font-weight: 700;\n  line-height: 1.1;\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 1rem;\n}\n\n.hero-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.8rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-weight: 600;\n}\n\n.hero-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 1.25rem;\n  background: rgba(15, 23, 42, 0.24);\n  backdrop-filter: blur(6px);\n}\n\n.hero-panel__label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-panel__title[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.hero-panel__copy[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n  line-height: 1.65;\n}\n\n.stat-card[_ngcontent-%COMP%], \n.section-card[_ngcontent-%COMP%], \n.course-card[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.07);\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease;\n}\n\n.stat-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: var(--stat-accent);\n}\n\n.stat-card[_ngcontent-%COMP%]:hover, \n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.12);\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.92rem;\n  font-weight: 600;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.55;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 1rem;\n  background: var(--stat-accent-soft);\n  color: var(--stat-accent);\n  font-size: 1.3rem;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 1.35rem;\n  font-weight: 700;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n\n.section-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.55rem 0.95rem;\n  border-radius: 999px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.course-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #fff;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease;\n}\n\n.course-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n  object-fit: cover;\n  display: block;\n}\n\n.course-meta[_ngcontent-%COMP%], \n.course-progress-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n\n.course-progress-value[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n  background: var(--course-accent-soft);\n  color: var(--course-accent);\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.course-title[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.4;\n}\n\n.course-duration[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n\n.course-progress[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 0.72rem;\n  border-radius: 999px;\n  background: var(--course-accent-soft);\n}\n\n.course-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  background: linear-gradient(90deg, var(--course-accent) 0%, var(--course-accent) 100%);\n}\n\n.course-action[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 0.95rem;\n  background: var(--course-accent);\n  color: #fff;\n  font-weight: 700;\n  padding: 0.85rem 1rem;\n  transition:\n    transform 0.2s ease,\n    opacity 0.2s ease;\n}\n\n.course-action[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  opacity: 0.94;\n  transform: translateY(-1px);\n}\n\n.activity-list[_ngcontent-%COMP%], \n.task-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.activity-item[_ngcontent-%COMP%], \n.task-item[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 1rem;\n  background: #fff;\n}\n\n.activity-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 0.9rem;\n  background: var(--activity-accent-soft);\n  color: var(--activity-accent);\n  font-size: 1rem;\n}\n\n.activity-text[_ngcontent-%COMP%], \n.task-title[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n\n.activity-time[_ngcontent-%COMP%], \n.task-course[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.92rem;\n}\n\n.task-dot[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  margin-top: 0.35rem;\n  border-radius: 50%;\n  background: var(--task-accent);\n  box-shadow: 0 0 0 0.35rem var(--task-accent-soft);\n  flex-shrink: 0;\n}\n\n.task-timeline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 5rem;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: var(--task-accent-soft);\n  color: var(--task-accent);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n@media (max-width: 767.98px) {\n  .dashboard-hero[_ngcontent-%COMP%], \n   .stat-card[_ngcontent-%COMP%], \n   .section-card[_ngcontent-%COMP%], \n   .course-card[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n  }\n\n  .hero-panel[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .task-item[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n    flex-direction: column;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', imports: [SharedModule], template: "<div class=\"student-dashboard\">\n  <div class=\"card dashboard-hero border-0 overflow-hidden\">\n    <div class=\"card-body p-4 p-xl-5\">\n      <div class=\"row align-items-center g-4\">\n        <div class=\"col-xl-7\">\n          <span class=\"dashboard-badge\">Student Dashboard</span>\n          <h2 class=\"hero-title mt-3 mb-2\">Welcome back, {{ learnerName }}.</h2>\n          <p class=\"hero-copy mb-4\">\n            Keep your momentum going with your active courses, recent milestones, and the tasks lined up for the week.\n          </p>\n\n          <div class=\"d-flex flex-wrap gap-3\">\n            <div class=\"hero-chip\">\n              <i class=\"fa-solid fa-fire me-2\"></i>\n              7 day learning streak\n            </div>\n            <div class=\"hero-chip\">\n              <i class=\"fa-solid fa-bullseye me-2\"></i>\n              60% average course progress\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xl-5\">\n          <div class=\"hero-panel\">\n            <span class=\"hero-panel__label\">Next milestone</span>\n            <h3 class=\"hero-panel__title\">Earn your next certificate</h3>\n            <p class=\"hero-panel__copy mb-0\">\n              Complete the remaining 40% of Web Development Bootcamp to unlock your next learner achievement.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row g-4\">\n    @for (stat of stats; track stat.label) {\n      <div class=\"col-xxl-3 col-sm-6\">\n        <div\n          class=\"card stat-card border-0 h-100\"\n          [style.--stat-accent]=\"stat.accent\"\n          [style.--stat-accent-soft]=\"stat.softAccent\"\n        >\n          <div class=\"card-body p-4\">\n            <div class=\"d-flex align-items-start justify-content-between gap-3\">\n              <div>\n                <p class=\"stat-label mb-2\">{{ stat.label }}</p>\n                <h3 class=\"stat-value mb-2\">{{ stat.value }}</h3>\n                <p class=\"stat-note mb-0\">{{ stat.note }}</p>\n              </div>\n              <div class=\"stat-icon\">\n                <i [class]=\"stat.icon\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  </div>\n\n  <div class=\"card section-card border-0\">\n    <div class=\"card-body p-4 p-xl-5\">\n      <div class=\"d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4\">\n        <div>\n          <h4 class=\"section-title mb-1\">My Courses</h4>\n          <p class=\"section-subtitle mb-0\">Pick up exactly where you left off across your enrolled programs.</p>\n        </div>\n\n        <span class=\"section-pill\">{{ courses.length }} active courses</span>\n      </div>\n\n      <div class=\"row g-4\">\n        @for (course of courses; track course.id) {\n          <div class=\"col-xl-4 col-md-6\">\n            <div\n              class=\"card course-card border-0 h-100\"\n              [style.--course-accent]=\"course.accent\"\n              [style.--course-accent-soft]=\"course.softAccent\"\n            >\n              <img [src]=\"course.bannerImage\" [alt]=\"course.name + ' banner'\" class=\"course-banner\" />\n\n              <div class=\"card-body p-4 d-flex flex-column\">\n                <div class=\"d-flex justify-content-between align-items-center gap-3 mb-3\">\n                  <span class=\"course-meta\">{{ course.lessonCount }} lessons</span>\n                  <span class=\"course-progress-value\">{{ course.progress }}%</span>\n                </div>\n\n                <h5 class=\"course-title mb-2\">{{ course.name }}</h5>\n                <p class=\"course-duration mb-4\">{{ course.duration }} of guided content</p>\n\n                <div class=\"course-progress mb-4\">\n                  <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                    <span class=\"course-progress-label\">Progress</span>\n                    <span class=\"course-progress-label\">{{ course.progress }}% complete</span>\n                  </div>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"course.progress\"></div>\n                  </div>\n                </div>\n\n                <button type=\"button\" class=\"btn course-action mt-auto\">\n                  Continue Learning\n                  <i class=\"fa-solid fa-arrow-right ms-2\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        }\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row g-4\">\n    <div class=\"col-xl-7\">\n      <div class=\"card section-card border-0 h-100\">\n        <div class=\"card-body p-4 p-xl-5\">\n          <div class=\"d-flex justify-content-between align-items-center gap-3 mb-4\">\n            <div>\n              <h4 class=\"section-title mb-1\">Recent Activity</h4>\n              <p class=\"section-subtitle mb-0\">A quick look at your latest learning updates.</p>\n            </div>\n          </div>\n\n          <div class=\"activity-list\">\n            @for (activity of recentActivities; track activity.text) {\n              <div\n                class=\"activity-item d-flex align-items-start gap-3\"\n                [style.--activity-accent]=\"activity.accent\"\n                [style.--activity-accent-soft]=\"activity.softAccent\"\n              >\n                <div class=\"activity-icon\">\n                  <i [class]=\"activity.icon\"></i>\n                </div>\n                <div class=\"flex-grow-1\">\n                  <p class=\"activity-text mb-1\">{{ activity.text }}</p>\n                  <span class=\"activity-time\">{{ activity.time }}</span>\n                </div>\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xl-5\">\n      <div class=\"card section-card border-0 h-100\">\n        <div class=\"card-body p-4 p-xl-5\">\n          <div class=\"d-flex justify-content-between align-items-center gap-3 mb-4\">\n            <div>\n              <h4 class=\"section-title mb-1\">Upcoming Tasks</h4>\n              <p class=\"section-subtitle mb-0\">Stay on track with the next actions in your queue.</p>\n            </div>\n          </div>\n\n          <div class=\"task-list\">\n            @for (task of upcomingTasks; track task.title) {\n              <div\n                class=\"task-item d-flex align-items-center justify-content-between gap-3\"\n                [style.--task-accent]=\"task.accent\"\n                [style.--task-accent-soft]=\"task.softAccent\"\n              >\n                <div class=\"d-flex align-items-start gap-3\">\n                  <div class=\"task-dot\"></div>\n                  <div>\n                    <h6 class=\"task-title mb-1\">{{ task.title }}</h6>\n                    <p class=\"task-course mb-0\">{{ task.course }}</p>\n                  </div>\n                </div>\n\n                <span class=\"task-timeline\">{{ task.timeline }}</span>\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [":host {\n  display: block;\n}\n\n.student-dashboard {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.dashboard-hero {\n  background:\n    radial-gradient(circle at top right, rgba(125, 211, 252, 0.28), transparent 32%),\n    linear-gradient(135deg, #0f172a 0%, #1d4ed8 52%, #38bdf8 100%);\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);\n  color: #fff;\n}\n\n.dashboard-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.95rem;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-title {\n  font-size: clamp(2rem, 2.6vw, 3rem);\n  font-weight: 700;\n  line-height: 1.1;\n}\n\n.hero-copy {\n  max-width: 42rem;\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 1rem;\n}\n\n.hero-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.8rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  font-weight: 600;\n}\n\n.hero-panel {\n  height: 100%;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 1.25rem;\n  background: rgba(15, 23, 42, 0.24);\n  backdrop-filter: blur(6px);\n}\n\n.hero-panel__label {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-panel__title {\n  margin-bottom: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.hero-panel__copy {\n  color: rgba(255, 255, 255, 0.82);\n  line-height: 1.65;\n}\n\n.stat-card,\n.section-card,\n.course-card {\n  border-radius: 1.25rem;\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.07);\n}\n\n.stat-card {\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease;\n}\n\n.stat-card::before {\n  content: '';\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: var(--stat-accent);\n}\n\n.stat-card:hover,\n.course-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.12);\n}\n\n.stat-label {\n  color: #64748b;\n  font-size: 0.92rem;\n  font-weight: 600;\n}\n\n.stat-value {\n  color: #0f172a;\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.stat-note {\n  color: #64748b;\n  line-height: 1.55;\n}\n\n.stat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 1rem;\n  background: var(--stat-accent-soft);\n  color: var(--stat-accent);\n  font-size: 1.3rem;\n}\n\n.section-card {\n  background: #fff;\n}\n\n.section-title {\n  color: #0f172a;\n  font-size: 1.35rem;\n  font-weight: 700;\n}\n\n.section-subtitle {\n  color: #64748b;\n}\n\n.section-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.55rem 0.95rem;\n  border-radius: 999px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.course-card {\n  overflow: hidden;\n  background: #fff;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease;\n}\n\n.course-banner {\n  width: 100%;\n  height: 190px;\n  object-fit: cover;\n  display: block;\n}\n\n.course-meta,\n.course-progress-label {\n  color: #64748b;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n\n.course-progress-value {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n  background: var(--course-accent-soft);\n  color: var(--course-accent);\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.course-title {\n  color: #0f172a;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.4;\n}\n\n.course-duration {\n  color: #64748b;\n}\n\n.course-progress .progress {\n  height: 0.72rem;\n  border-radius: 999px;\n  background: var(--course-accent-soft);\n}\n\n.course-progress .progress-bar {\n  border-radius: 999px;\n  background: linear-gradient(90deg, var(--course-accent) 0%, var(--course-accent) 100%);\n}\n\n.course-action {\n  border: 0;\n  border-radius: 0.95rem;\n  background: var(--course-accent);\n  color: #fff;\n  font-weight: 700;\n  padding: 0.85rem 1rem;\n  transition:\n    transform 0.2s ease,\n    opacity 0.2s ease;\n}\n\n.course-action:hover {\n  color: #fff;\n  opacity: 0.94;\n  transform: translateY(-1px);\n}\n\n.activity-list,\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.activity-item,\n.task-item {\n  padding: 1rem 1.1rem;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 1rem;\n  background: #fff;\n}\n\n.activity-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 0.9rem;\n  background: var(--activity-accent-soft);\n  color: var(--activity-accent);\n  font-size: 1rem;\n}\n\n.activity-text,\n.task-title {\n  color: #0f172a;\n  font-weight: 700;\n}\n\n.activity-time,\n.task-course {\n  color: #64748b;\n  font-size: 0.92rem;\n}\n\n.task-dot {\n  width: 0.85rem;\n  height: 0.85rem;\n  margin-top: 0.35rem;\n  border-radius: 50%;\n  background: var(--task-accent);\n  box-shadow: 0 0 0 0.35rem var(--task-accent-soft);\n  flex-shrink: 0;\n}\n\n.task-timeline {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 5rem;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: var(--task-accent-soft);\n  color: var(--task-accent);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n@media (max-width: 767.98px) {\n  .dashboard-hero,\n  .stat-card,\n  .section-card,\n  .course-card {\n    border-radius: 1rem;\n  }\n\n  .hero-panel {\n    padding: 1.25rem;\n  }\n\n  .task-item {\n    align-items: flex-start !important;\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/demo/application/dashboard/dashboard.component.ts", lineNumber: 48 }); })();
//# sourceMappingURL=dashboard.component.js.map