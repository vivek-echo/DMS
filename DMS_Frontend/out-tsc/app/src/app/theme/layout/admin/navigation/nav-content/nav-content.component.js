// Angular import
import { Component, output, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
//theme version
import { environment } from 'src/environments/environment';
// project import
import { NavigationItems } from '../navigation';
import { NavCollapseComponent } from './nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { NavItemComponent } from './nav-item/nav-item.component';
// NgScrollbarModule
import { SharedModule } from 'src/app/theme/shared/shared.module';
import * as i0 from "@angular/core";
import * as i1 from "ngx-scrollbar";
function NavContentComponent_For_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-group", 8);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", item_r1);
} }
function NavContentComponent_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-collapse", 8);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", item_r1);
} }
function NavContentComponent_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-item", 8);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", item_r1);
} }
function NavContentComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, NavContentComponent_For_4_Conditional_0_Template, 1, 1, "app-nav-group", 8)(1, NavContentComponent_For_4_Conditional_1_Template, 1, 1, "app-nav-collapse", 8)(2, NavContentComponent_For_4_Conditional_2_Template, 1, 1, "app-nav-item", 8);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵconditional(item_r1.type === "group" ? 0 : item_r1.type === "collapse" ? 1 : item_r1.type === "item" ? 2 : -1);
} }
export class NavContentComponent {
    // Constructor
    constructor() {
        this.location = inject(Location);
        // public props
        this.NavCollapsedMob = output();
        this.SubmenuCollapse = output();
        // version
        this.title = 'Demo application for version numbering';
        this.currentApplicationVersion = environment.appVersion;
        this.navigations = NavigationItems;
        this.windowWidth = window.innerWidth;
    }
    // Life cycle events
    ngOnInit() {
        if (this.windowWidth < 1025) {
            setTimeout(() => {
                document.querySelector('.coded-navbar').classList.add('menupos-static');
            }, 500);
        }
    }
    fireOutClick() {
        let current_url = this.location.path();
        // eslint-disable-next-line
        // @ts-ignore
        if (this.location['_baseHref']) {
            // eslint-disable-next-line
            // @ts-ignore
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent?.parentElement?.parentElement;
            const last_parent = up_parent?.parentElement;
            if (parent?.classList.contains('coded-hasmenu')) {
                parent.classList.add('coded-trigger');
                parent.classList.add('active');
            }
            else if (up_parent?.classList.contains('coded-hasmenu')) {
                up_parent.classList.add('coded-trigger');
                up_parent.classList.add('active');
            }
            else if (last_parent?.classList.contains('coded-hasmenu')) {
                last_parent.classList.add('coded-trigger');
                last_parent.classList.add('active');
            }
        }
    }
    static { this.ɵfac = function NavContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavContentComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavContentComponent, selectors: [["app-nav-content"]], outputs: { NavCollapsedMob: "NavCollapsedMob", SubmenuCollapse: "SubmenuCollapse" }, decls: 15, vars: 1, consts: [["visibility", "hover", 2, "height", "calc(100vh - 70px)"], [1, "navbar-content"], [1, "nav", "coded-inner-navbar", 3, "click", "keydown.space", "keydown.enter"], [1, "pc-navbar-card", "bg-primary", "rounded"], [1, "text-white"], ["href", "https://codedthemes.com/item/berry-angular-admin-dashboard-template/?utm_source=free_demo&utm_medium=codedthemes&utm_campaign=button_download_premium", "target", "_blank", 1, "btn", "btn-light", "text-primary"], [1, "version"], ["for", "version", "disabled", "", 1, "pe-auto"], [3, "item"]], template: function NavContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ng-scrollbar", 0)(1, "div", 1)(2, "ul", 2);
            i0.ɵɵlistener("click", function NavContentComponent_Template_ul_click_2_listener() { return ctx.fireOutClick(); })("keydown.space", function NavContentComponent_Template_ul_keydown_space_2_listener() { return ctx.fireOutClick(); })("keydown.enter", function NavContentComponent_Template_ul_keydown_enter_2_listener() { return ctx.fireOutClick(); });
            i0.ɵɵrepeaterCreate(3, NavContentComponent_For_4_Template, 3, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3)(6, "h4", 4);
            i0.ɵɵtext(7, "Berry Pro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 4);
            i0.ɵɵtext(9, "Checkout Berry Premium Features");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "a", 5);
            i0.ɵɵtext(11, " Download Premium ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 6)(13, "label", 7);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.navigations);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("v", ctx.currentApplicationVersion);
        } }, dependencies: [RouterModule, NavCollapseComponent, NavGroupComponent, NavItemComponent, SharedModule, i1.NgScrollbar], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavContentComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-content', imports: [RouterModule, NavCollapseComponent, NavGroupComponent, NavItemComponent, SharedModule], template: "<!-- Vertical layout -->\n<ng-scrollbar style=\"height: calc(100vh - 70px)\" visibility=\"hover\">\n  <div class=\"navbar-content\">\n    <ul class=\"nav coded-inner-navbar\" (click)=\"fireOutClick()\" (keydown.space)=\"fireOutClick()\" (keydown.enter)=\"fireOutClick()\">\n      @for (item of navigations; track item) {\n        @if (item.type === 'group') {\n          <app-nav-group [item]=\"item\" />\n        } @else if (item.type === 'collapse') {\n          <app-nav-collapse [item]=\"item\" />\n        } @else if (item.type === 'item') {\n          <app-nav-item [item]=\"item\" />\n        }\n      }\n    </ul>\n    <div class=\"pc-navbar-card bg-primary rounded\">\n      <h4 class=\"text-white\">Berry Pro</h4>\n      <p class=\"text-white\">Checkout Berry Premium Features</p>\n      <a\n        href=\"https://codedthemes.com/item/berry-angular-admin-dashboard-template/?utm_source=free_demo&utm_medium=codedthemes&utm_campaign=button_download_premium\"\n        target=\"_blank\"\n        class=\"btn btn-light text-primary\"\n      >\n        Download Premium\n      </a>\n    </div>\n    <div class=\"version\">\n      <label for=\"version\" disabled class=\"pe-auto\">v{{ currentApplicationVersion }}</label>\n    </div>\n  </div>\n</ng-scrollbar>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }], SubmenuCollapse: [{ type: i0.Output, args: ["SubmenuCollapse"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavContentComponent, { className: "NavContentComponent", filePath: "src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=nav-content.component.js.map