import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
export class HomeComponent {
    static { this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 44, vars: 0, consts: [[1, "home-wrapper"], [1, "navbar", "px-4", "py-3", "d-flex", "justify-content-between", "align-items-center"], [1, "logo", "d-flex", "align-items-center"], ["src", "assets/logo.png", 1, "logo-img", "me-2"], [1, "logo-text"], ["routerLink", "/login", 1, "btn", "btn-light", "btn-sm", "px-3"], [1, "hero", "container", "text-center"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/login", 1, "btn", "btn-primary", "me-2"], ["routerLink", "/register", 1, "btn", "btn-outline-light"], [1, "features", "container"], [1, "row", "text-center"], [1, "col-md-4", "mb-4"], [1, "feature-card"], [1, "fa-solid", "fa-lock"], [1, "fa-solid", "fa-bolt"], [1, "fa-solid", "fa-shield-halved"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "span", 4);
            i0.ɵɵtext(5, "DMS");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div")(7, "a", 5);
            i0.ɵɵtext(8, "Login");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div", 6)(10, "h1", 7);
            i0.ɵɵtext(11, " Secure File Storage ");
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, "Made Simple");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "p", 8);
            i0.ɵɵtext(15, " Store, manage and access your files with encryption and secure authentication. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 9)(17, "a", 10);
            i0.ɵɵtext(18, "Get Started");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "a", 11);
            i0.ɵɵtext(20, "Create Account");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15);
            i0.ɵɵelement(25, "i", 16);
            i0.ɵɵelementStart(26, "h5");
            i0.ɵɵtext(27, "Encrypted Storage");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵtext(29, "Your files are protected with strong encryption.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "div", 14)(31, "div", 15);
            i0.ɵɵelement(32, "i", 17);
            i0.ɵɵelementStart(33, "h5");
            i0.ɵɵtext(34, "Fast Access");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p");
            i0.ɵɵtext(36, "Access your files quickly anytime.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "div", 14)(38, "div", 15);
            i0.ɵɵelement(39, "i", 18);
            i0.ɵɵelementStart(40, "h5");
            i0.ɵɵtext(41, "Secure Login");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "p");
            i0.ɵɵtext(43, "Protected with authentication & biometrics.");
            i0.ɵɵelementEnd()()()()()();
        } }, dependencies: [CommonModule, RouterLink], styles: ["\n\r\n.home-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background: linear-gradient(135deg, #5E35B1, #3F51B5, #2196F3);\r\n  color: white;\r\n}\r\n\r\n\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n\r\n\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n  width: 36px;\r\n  height: 36px;\r\n  object-fit: contain;\r\n\r\n  \n\r\n  border-radius: 8px;\r\n  padding: 3px;\r\n  background: rgba(255,255,255,0.15);\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n\n\r\n.hero[_ngcontent-%COMP%] {\r\n  margin-top: 80px;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n  font-size: 42px;\r\n  font-weight: 700;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #FFD54F;\r\n}\r\n\r\n.hero-subtitle[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  opacity: 0.9;\r\n}\r\n\r\n\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background: white;\r\n  color: #5E35B1;\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  border: none;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background: #eee;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n}\r\n\r\n\n\r\n.features[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n  border-radius: 14px;\r\n  background: rgba(255,255,255,0.15);\r\n  backdrop-filter: blur(10px);\r\n  transition: 0.3s;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-5px);\r\n  background: rgba(255,255,255,0.25);\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\n\r\n@media (max-width: 768px) {\r\n  .hero-title[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', imports: [CommonModule, RouterLink], template: "<div class=\"home-wrapper\">\r\n\r\n  <!-- NAVBAR -->\r\n  <nav class=\"navbar px-4 py-3 d-flex justify-content-between align-items-center\">\r\n\r\n    <div class=\"logo d-flex align-items-center\">\r\n      <img src=\"assets/logo.png\" class=\"logo-img me-2\" />\r\n      <span class=\"logo-text\">DMS</span>\r\n    </div>\r\n\r\n    <div>\r\n      <a routerLink=\"/login\" class=\"btn btn-light btn-sm px-3\">Login</a>\r\n    </div>\r\n\r\n  </nav>\r\n\r\n  <!-- HERO -->\r\n  <div class=\"hero container text-center\">\r\n\r\n    <h1 class=\"hero-title\">\r\n      Secure File Storage <span>Made Simple</span>\r\n    </h1>\r\n\r\n    <p class=\"hero-subtitle\">\r\n      Store, manage and access your files with encryption and secure authentication.\r\n    </p>\r\n\r\n    <div class=\"hero-actions\">\r\n      <a routerLink=\"/login\" class=\"btn btn-primary me-2\">Get Started</a>\r\n      <a routerLink=\"/register\" class=\"btn btn-outline-light\">Create Account</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- FEATURES -->\r\n  <div class=\"features container\">\r\n\r\n    <div class=\"row text-center\">\r\n\r\n      <div class=\"col-md-4 mb-4\">\r\n        <div class=\"feature-card\">\r\n          <i class=\"fa-solid fa-lock\"></i>\r\n          <h5>Encrypted Storage</h5>\r\n          <p>Your files are protected with strong encryption.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 mb-4\">\r\n        <div class=\"feature-card\">\r\n          <i class=\"fa-solid fa-bolt\"></i>\r\n          <h5>Fast Access</h5>\r\n          <p>Access your files quickly anytime.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 mb-4\">\r\n        <div class=\"feature-card\">\r\n          <i class=\"fa-solid fa-shield-halved\"></i>\r\n          <h5>Secure Login</h5>\r\n          <p>Protected with authentication & biometrics.</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>", styles: ["/* BACKGROUND */\r\n.home-wrapper {\r\n  min-height: 100vh;\r\n  background: linear-gradient(135deg, #5E35B1, #3F51B5, #2196F3);\r\n  color: white;\r\n}\r\n\r\n/* NAVBAR */\r\n.navbar {\r\n  background: transparent;\r\n}\r\n\r\n/* LOGO */\r\n.logo-img {\r\n  width: 36px;\r\n  height: 36px;\r\n  object-fit: contain;\r\n\r\n  /* FIX WHITE BOX LOOK */\r\n  border-radius: 8px;\r\n  padding: 3px;\r\n  background: rgba(255,255,255,0.15);\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.logo-text {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n/* HERO */\r\n.hero {\r\n  margin-top: 80px;\r\n}\r\n\r\n.hero-title {\r\n  font-size: 42px;\r\n  font-weight: 700;\r\n}\r\n\r\n.hero-title span {\r\n  color: #FFD54F;\r\n}\r\n\r\n.hero-subtitle {\r\n  margin-top: 10px;\r\n  opacity: 0.9;\r\n}\r\n\r\n/* BUTTONS */\r\n.btn-primary {\r\n  background: white;\r\n  color: #5E35B1;\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  border: none;\r\n}\r\n\r\n.btn-primary:hover {\r\n  background: #eee;\r\n}\r\n\r\n.btn-outline-light {\r\n  border-radius: 10px;\r\n}\r\n\r\n/* FEATURES */\r\n.features {\r\n  margin-top: 60px;\r\n}\r\n\r\n.feature-card {\r\n  padding: 25px;\r\n  border-radius: 14px;\r\n  background: rgba(255,255,255,0.15);\r\n  backdrop-filter: blur(10px);\r\n  transition: 0.3s;\r\n}\r\n\r\n.feature-card:hover {\r\n  transform: translateY(-5px);\r\n  background: rgba(255,255,255,0.25);\r\n}\r\n\r\n.feature-card i {\r\n  font-size: 28px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* RESPONSIVE */\r\n@media (max-width: 768px) {\r\n  .hero-title {\r\n    font-size: 28px;\r\n  }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/demo/admin-panel/home/home.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=home.component.js.map