// Angular import
import { Component, inject, input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavItemComponent } from '../nav-item/nav-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = () => ["active"];
function NavCollapseComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.item().icon);
} }
function NavCollapseComponent_For_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-item", 5);
} if (rf & 2) {
    const items_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", items_r2);
} }
function NavCollapseComponent_For_7_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-collapse", 5);
} if (rf & 2) {
    const items_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", items_r2);
} }
function NavCollapseComponent_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, NavCollapseComponent_For_7_Conditional_0_Template, 1, 1, "app-nav-item", 5)(1, NavCollapseComponent_For_7_Conditional_1_Template, 1, 1, "app-nav-collapse", 5);
} if (rf & 2) {
    const items_r2 = ctx.$implicit;
    i0.ɵɵconditional(items_r2.type === "item" ? 0 : items_r2.type === "collapse" ? 1 : -1);
} }
export class NavCollapseComponent {
    constructor() {
        this.location = inject(Location);
        // public props
        this.item = input.required(...(ngDevMode ? [{ debugName: "item" }] : []));
        this.windowWidth = window.innerWidth;
        this.current_url = ''; // Add current URL property
    }
    ngOnInit() {
        this.current_url = this.location.path();
        // eslint-disable-next-line
        //@ts-ignore
        const baseHref = this.location['_baseHref'] || ''; // Use baseHref if necessary
        this.current_url = baseHref + this.current_url;
        // Timeout to allow DOM to fully render before checking for the links
        setTimeout(() => {
            const links = document.querySelectorAll('a.nav-link');
            links.forEach((link) => {
                if (link.getAttribute('href') === this.current_url) {
                    let parent = link.parentElement;
                    while (parent && parent.classList) {
                        if (parent.classList.contains('coded-hasmenu')) {
                            parent.classList.add('coded-trigger');
                            parent.classList.add('active');
                        }
                        parent = parent.parentElement;
                    }
                }
            });
        }, 0);
    }
    // Method to handle the collapse of the navigation menu
    navCollapse(e) {
        let parent = e.target;
        if (parent?.tagName === 'SPAN') {
            parent = parent.parentElement;
        }
        parent = parent.parentElement;
        const sections = document.querySelectorAll('.coded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
                sections[i].classList.remove('coded-trigger');
            }
        }
        let first_parent = parent.parentElement;
        let pre_parent = parent.parentElement.parentElement;
        if (first_parent.classList.contains('coded-hasmenu')) {
            do {
                first_parent.classList.add('coded-trigger');
                first_parent = first_parent.parentElement.parentElement;
            } while (first_parent.classList.contains('coded-hasmenu'));
        }
        else if (pre_parent.classList.contains('coded-submenu')) {
            do {
                pre_parent.parentElement?.classList.add('coded-trigger');
                pre_parent = pre_parent.parentElement.parentElement.parentElement;
            } while (pre_parent.classList.contains('coded-submenu'));
        }
        parent.classList.toggle('coded-trigger');
    }
    static { this.ɵfac = function NavCollapseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavCollapseComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavCollapseComponent, selectors: [["app-nav-collapse"]], inputs: { item: [1, "item"] }, decls: 8, vars: 9, consts: [["data-username", "Berry Dashboard", 1, "nav-item", "coded-hasmenu", 3, "routerLinkActive"], ["href", "javascript:", 1, "nav-link", 3, "click", "routerLinkActive"], [1, "coded-micon"], [1, "coded-mtext"], [1, "coded-submenu", 3, "routerLinkActive", "ngClass"], [3, "item"]], template: function NavCollapseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 0)(1, "a", 1);
            i0.ɵɵlistener("click", function NavCollapseComponent_Template_a_click_1_listener($event) { return ctx.navCollapse($event); });
            i0.ɵɵconditionalCreate(2, NavCollapseComponent_Conditional_2_Template, 2, 2, "span", 2);
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "ul", 4);
            i0.ɵɵrepeaterCreate(6, NavCollapseComponent_For_7_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("routerLinkActive", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLinkActive", i0.ɵɵpureFunction0(7, _c0));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.item().icon ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.item().title, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLinkActive", i0.ɵɵpureFunction0(8, _c0))("ngClass", ctx.item().classes);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.item().children);
        } }, dependencies: [NavCollapseComponent, CommonModule, i1.NgClass, SharedModule, RouterModule, i2.RouterLinkActive, NavItemComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavCollapseComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-collapse', imports: [CommonModule, SharedModule, RouterModule, NavItemComponent], template: "<li data-username=\"Berry Dashboard\" class=\"nav-item coded-hasmenu\" [routerLinkActive]=\"['active']\">\n  <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n    @if (item().icon) {\n      <span class=\"coded-micon\">\n        <i class=\"{{ item().icon }}\"></i>\n      </span>\n    }\n    <span class=\"coded-mtext\">\n      {{ item().title }}\n    </span>\n  </a>\n  <ul class=\"coded-submenu\" [routerLinkActive]=\"['active']\" [ngClass]=\"item().classes!\">\n    @for (items of item().children; track items) {\n      @if (items.type === 'item') {\n        <app-nav-item [item]=\"items\" />\n      } @else if (items.type === 'collapse') {\n        <app-nav-collapse [item]=\"items\" />\n      }\n    }\n  </ul>\n</li>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, { item: [{ type: i0.Input, args: [{ isSignal: true, alias: "item", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavCollapseComponent, { className: "NavCollapseComponent", filePath: "src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=nav-collapse.component.js.map