import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Menu } from 'primeng/menu';
import { Auth } from '../../services/auth';
import * as i0 from "@angular/core";
const _c0 = a0 => ({ exact: a0 });
const _forTrack0 = ($index, $item) => $item.routerLink;
function Navbar_For_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18)(1, "a", 19)(2, "span", 8);
    i0.ɵɵelement(3, "i", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 10);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const item_r3 = ctx_r1.$implicit;
    const $index_r4 = ctx_r1.$index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("mobile-overflow-item", $index_r4 >= 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", item_r3.routerLink)("routerLinkActiveOptions", i0.ɵɵpureFunction1(9, _c0, item_r3.routerLink === "/home"));
    i0.ɵɵattribute("aria-label", item_r3.label)("title", ctx_r4.collapsed() ? item_r3.label : null);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(item_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
function Navbar_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, Navbar_For_7_Conditional_0_Template, 6, 11, "li", 17);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵconditional(item_r3.visible !== false ? 0 : -1);
} }
function Navbar_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.logoutError(), " ");
} }
function Navbar_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} }
function Navbar_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
function Navbar_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Cerrando... ");
} }
function Navbar_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Cerrar sesi\u00F3n ");
} }
export class Navbar {
    auth = inject(Auth);
    router = inject(Router);
    collapsed = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "collapsed" }] : /* istanbul ignore next */ []));
    loggingOut = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loggingOut" }] : /* istanbul ignore next */ []));
    logoutError = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "logoutError" }] : /* istanbul ignore next */ []));
    items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            routerLink: '/home'
        },
        {
            label: 'Usuarios',
            icon: 'pi pi-users',
            routerLink: '/usuarios'
        },
        {
            label: 'Configuración',
            icon: 'pi pi-cog',
            routerLink: '/configuracion'
        },
        {
            label: 'Empleados',
            icon: 'pi pi-id-card',
            routerLink: '/empleados'
        },
        {
            label: 'Sueldos',
            icon: 'pi pi-wallet',
            routerLink: '/sueldos'
        },
        {
            label: 'Préstamos',
            icon: 'pi pi-money-bill',
            routerLink: '/prestamos'
        },
        {
            label: 'Reintegro IVA',
            icon: 'pi pi-percentage',
            routerLink: '/reintegro-iva'
        },
        {
            label: 'Gastos',
            icon: 'pi pi-credit-card',
            routerLink: '/gastos'
        }
    ];
    mobileMoreItems = [
        ...this.items.slice(4).map(item => ({
            ...item,
            command: () => {
                void this.router.navigateByUrl(String(item.routerLink));
                this.collapseNavbar();
            }
        })),
        { separator: true },
        {
            label: 'Salir',
            icon: 'pi pi-sign-out',
            styleClass: 'mobile-menu-logout',
            command: () => void this.logout()
        }
    ];
    toggleNavbar() {
        this.collapsed.update(value => !value);
    }
    collapseNavbar() {
        this.collapsed.set(true);
    }
    async logout() {
        if (this.loggingOut()) {
            return;
        }
        this.loggingOut.set(true);
        this.logoutError.set('');
        try {
            await firstValueFrom(this.auth.logout());
            await this.router.navigateByUrl('/login');
        }
        catch {
            this.logoutError.set('No se pudo cerrar la sesión.');
        }
        finally {
            this.loggingOut.set(false);
        }
    }
    static ɵfac = function Navbar_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Navbar)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Navbar, selectors: [["app-navbar"]], decls: 24, vars: 11, consts: [["mobileMenu", ""], ["aria-label", "Navegaci\u00F3n principal", 1, "sidebar", 3, "mouseleave"], [1, "sidebar-header"], ["type", "button", 1, "toggle-button", 3, "click"], ["aria-hidden", "true", 1, "pi", "pi-bars"], ["aria-label", "Men\u00FA principal", 1, "sidebar-nav"], [1, "nav-list"], ["type", "button", "aria-label", "M\u00E1s secciones", 1, "mobile-more-button", 3, "click"], [1, "nav-icon"], [1, "pi", "pi-bars"], [1, "nav-label"], ["appendTo", "body", "styleClass", "mobile-dock-menu", 3, "model", "popup"], [1, "sidebar-footer"], ["role", "alert", 1, "logout-error"], ["type", "button", "aria-label", "Cerrar sesi\u00F3n", 1, "logout-button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "pi", "pi-spinner", "pi-spin"], ["aria-hidden", "true", 1, "pi", "pi-sign-out"], [1, "nav-list-item", 3, "mobile-overflow-item"], [1, "nav-list-item"], ["routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "pi", "pi-exclamation-circle"]], template: function Navbar_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "aside", 1);
            i0.ɵɵlistener("mouseleave", function Navbar_Template_aside_mouseleave_0_listener() { return ctx.collapseNavbar(); });
            i0.ɵɵelementStart(1, "header", 2)(2, "button", 3);
            i0.ɵɵlistener("click", function Navbar_Template_button_click_2_listener() { return ctx.toggleNavbar(); });
            i0.ɵɵelement(3, "i", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "nav", 5)(5, "ul", 6);
            i0.ɵɵrepeaterCreate(6, Navbar_For_7_Template, 1, 1, null, null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 7);
            i0.ɵɵlistener("click", function Navbar_Template_button_click_8_listener($event) { i0.ɵɵrestoreView(_r1); const mobileMenu_r6 = i0.ɵɵreference(14); return i0.ɵɵresetView(mobileMenu_r6.toggle($event)); });
            i0.ɵɵelementStart(9, "span", 8);
            i0.ɵɵelement(10, "i", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 10);
            i0.ɵɵtext(12, "M\u00E1s");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(13, "p-menu", 11, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "footer", 12);
            i0.ɵɵconditionalCreate(16, Navbar_Conditional_16_Template, 4, 1, "div", 13);
            i0.ɵɵelementStart(17, "button", 14);
            i0.ɵɵlistener("click", function Navbar_Template_button_click_17_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(18, "span", 8);
            i0.ɵɵconditionalCreate(19, Navbar_Conditional_19_Template, 1, 0, "i", 15)(20, Navbar_Conditional_20_Template, 1, 0, "i", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span", 10);
            i0.ɵɵconditionalCreate(22, Navbar_Conditional_22_Template, 1, 0)(23, Navbar_Conditional_23_Template, 1, 0);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("collapsed", ctx.collapsed());
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", !ctx.collapsed())("aria-label", ctx.collapsed() ? "Expandir men\u00FA" : "Contraer men\u00FA");
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.items);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("model", ctx.mobileMoreItems)("popup", true);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.logoutError() ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loggingOut());
            i0.ɵɵattribute("title", ctx.collapsed() ? "Cerrar sesi\u00F3n" : null);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loggingOut() ? 19 : 20);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loggingOut() ? 22 : 23);
        } }, dependencies: [RouterLink,
            RouterLinkActive,
            Menu], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n\n  top: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: 1000;\n\n  display: grid;\n\n  grid-template-rows:\n    72px\n    minmax(0, 1fr)\n    auto;\n\n  width: 260px;\n  height: 100dvh;\n\n  overflow: hidden;\n\n  background: #ffffff;\n\n  border-right: 1px solid #e4e4e7;\n\n  box-shadow:\n    4px 0 20px rgba(0, 0, 0, 0.035);\n\n  transition:\n    width 220ms\n    cubic-bezier(\n      0.4,\n      0,\n      0.2,\n      1\n    );\n}\n\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n}\n\n\n\n\n\n\n.sidebar-header[_ngcontent-%COMP%] {\n  position: relative;\n\n  width: 100%;\n  height: 72px;\n}\n\n\n\n\n\n\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n\n  top: 14px;\n  left: 14px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 44px;\n  height: 44px;\n\n  padding: 0;\n\n  color: #52525b;\n\n  background: transparent;\n\n  border: 0;\n  border-radius: 11px;\n\n  outline: none;\n\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #9810d5;\n\n    background: #fae8ff;\n  }\n\n  &:active {\n    background: #f5d0fe;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #c026d3;\n    outline-offset: 2px;\n  }\n\n  i {\n    font-size: 1.05rem;\n  }\n}\n\n\n\n\n\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 0;\n\n  padding: 4px 10px 16px;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  scrollbar-width: thin;\n\n  scrollbar-color:\n    #d4d4d8\n    transparent;\n}\n\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n\n  gap: 6px;\n\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n\n  list-style: none;\n}\n\n.nav-list-item[_ngcontent-%COMP%] {\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n\n\n\n\n\n.nav-item[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-columns:\n    52px\n    minmax(0, 1fr);\n\n  align-items: center;\n\n  width: 100%;\n  height: 48px;\n\n  padding: 0;\n\n  overflow: hidden;\n\n  color: #52525b;\n\n  background: transparent;\n\n  border-radius: 11px;\n\n  text-decoration: none;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #9810d5;\n\n    background: #faf5ff;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #c026d3;\n    outline-offset: -2px;\n  }\n\n  &.active {\n    color: #9810d5;\n\n    background: #f5e6fb;\n\n    font-weight: 600;\n  }\n}\n\n\n\n\n\n\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 52px;\n  height: 48px;\n\n  flex-shrink: 0;\n\n  color: inherit;\n\n  i {\n    font-size: 1.05rem;\n\n    line-height: 1;\n  }\n}\n\n\n\n\n\n\n.nav-label[_ngcontent-%COMP%] {\n  display: block;\n\n  min-width: 0;\n\n  padding-right: 14px;\n\n  overflow: hidden;\n\n  color: inherit;\n\n  opacity: 1;\n\n  font-size: 0.9rem;\n  font-weight: 500;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  transform: translateX(0);\n\n  transition:\n    opacity 120ms ease 90ms,\n    transform 180ms ease 70ms;\n}\n\n\n\n\n\n\n.sidebar.collapsed[_ngcontent-%COMP%] {\n\n  .nav-label {\n    opacity: 0;\n\n    transform: translateX(-8px);\n\n    pointer-events: none;\n\n    transition:\n      opacity 70ms ease,\n      transform 100ms ease;\n  }\n}\n\n\n\n\n\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  width: 100%;\n\n  padding: 12px 10px 16px;\n\n  border-top: 1px solid #e4e4e7;\n\n  background: #ffffff;\n}\n\n\n\n\n\n\n.logout-button[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-columns:\n    52px\n    minmax(0, 1fr);\n\n  align-items: center;\n\n  width: 100%;\n  height: 48px;\n\n  padding: 0;\n\n  overflow: hidden;\n\n  color: #dc2626;\n\n  background: transparent;\n\n  border: 0;\n  border-radius: 11px;\n\n  outline: none;\n\n  text-align: left;\n\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover:not(:disabled) {\n    color: #b91c1c;\n\n    background: #fef2f2;\n  }\n\n  &:active:not(:disabled) {\n    background: #fee2e2;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #ef4444;\n    outline-offset: -2px;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n\n    opacity: 0.55;\n  }\n\n  .nav-label {\n    font-weight: 500;\n  }\n}\n\n\n\n\n\n\n.logout-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n\n  gap: 7px;\n\n  margin-bottom: 8px;\n  padding: 9px 10px;\n\n  color: #b42318;\n\n  background: #fef3f2;\n\n  border: 1px solid #fecdca;\n  border-radius: 9px;\n\n  font-size: 0.75rem;\n\n  line-height: 1.35;\n\n  i {\n    margin-top: 1px;\n\n    flex-shrink: 0;\n  }\n}\n\n.mobile-more-button[_ngcontent-%COMP%] { display: none; }\n\n.sidebar.collapsed[_ngcontent-%COMP%] {\n\n  .logout-error {\n    position: absolute;\n\n    width: 1px;\n    height: 1px;\n\n    padding: 0;\n    margin: -1px;\n\n    overflow: hidden;\n\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n\n    white-space: nowrap;\n\n    border: 0;\n  }\n}\n\n\n\n\n\n\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d4d4d8;\n\n  border-radius: 999px;\n}\n\n\n\n\n\n\n@media (max-width: 1024px) {\n\n  .sidebar[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 72px;\n  }\n}\n\n\n\n\n\n\n@media (max-width: 768px) {\n\n  .sidebar[_ngcontent-%COMP%] {\n    top: auto;\n    right: 10px;\n    bottom: max(8px, env(safe-area-inset-bottom));\n    left: 10px;\n    display: flex;\n    width: auto;\n    height: 72px;\n    padding: 6px;\n    overflow: visible;\n    background: rgba(255, 255, 255, 0.96);\n    border: 1px solid #e4e4e7;\n    border-radius: 18px;\n    box-shadow: 0 12px 35px rgba(24, 24, 27, 0.18);\n    backdrop-filter: blur(14px);\n  }\n\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: auto;\n    box-shadow: 0 12px 35px rgba(24, 24, 27, 0.18);\n  }\n\n  .sidebar-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .sidebar-nav[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: stretch;\n    flex: 1;\n    width: auto;\n    padding: 0;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    scrollbar-width: none;\n  }\n\n  .sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar { display: none; }\n\n  .nav-list[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 4px;\n    width: 100%;\n    height: 100%;\n  }\n\n  .nav-list-item[_ngcontent-%COMP%] { min-width: 0; width: auto; flex: 1 1 0; }\n  .nav-list-item.mobile-overflow-item[_ngcontent-%COMP%] { display: none; }\n\n  .nav-item[_ngcontent-%COMP%] {\n    display: flex;\n    min-width: 0;\n    width: 100%;\n    height: 60px;\n    padding: 4px 8px;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2px;\n    border-radius: 13px;\n  }\n\n  .nav-icon[_ngcontent-%COMP%] { width: auto; height: 25px; }\n  .nav-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.1rem; }\n\n  .nav-label[_ngcontent-%COMP%], \n   .sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 72px;\n    padding: 0;\n    overflow: hidden;\n    opacity: 1;\n    font-size: 0.62rem;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    transform: none;\n  }\n\n  .sidebar-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .logout-error[_ngcontent-%COMP%] { display: none; }\n  .logout-button[_ngcontent-%COMP%] {\n    display: flex;\n    width: 44px;\n    height: 60px;\n    padding: 0;\n    justify-content: center;\n    border-radius: 13px;\n  }\n  .logout-button[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] { width: 48px; height: 60px; }\n  .logout-button[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] { display: none; }\n\n  .nav-item.active[_ngcontent-%COMP%] {\n    color: #7e22ce;\n    background: #f5e6fb;\n  }\n\n  .mobile-more-button[_ngcontent-%COMP%] {\n    display: flex;\n    min-width: 52px;\n    height: 60px;\n    padding: 4px 5px;\n    flex: 0 0 52px;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 2px;\n    color: #52525b;\n    background: transparent;\n    border: 0;\n    border-radius: 13px;\n  }\n  .mobile-more-button[_ngcontent-%COMP%]:hover, \n   .mobile-more-button[_ngcontent-%COMP%]:focus-visible { color: #7e22ce; background: #faf5ff; }\n  .mobile-more-button[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] { display: block; }\n}\n\n\n\n\n\n\n@media (max-height: 500px) {\n\n  .sidebar[_ngcontent-%COMP%] {\n    grid-template-rows:\n      58px\n      minmax(0, 1fr)\n      auto;\n  }\n\n  .sidebar-header[_ngcontent-%COMP%] {\n    height: 58px;\n  }\n\n  .toggle-button[_ngcontent-%COMP%] {\n    top: 7px;\n  }\n\n  .nav-item[_ngcontent-%COMP%], \n   .logout-button[_ngcontent-%COMP%], \n   .nav-icon[_ngcontent-%COMP%] {\n    height: 44px;\n  }\n}\n\n\n\n\n\n\n@media (prefers-reduced-motion: reduce) {\n\n  .sidebar[_ngcontent-%COMP%], \n   .nav-item[_ngcontent-%COMP%], \n   .nav-label[_ngcontent-%COMP%], \n   .toggle-button[_ngcontent-%COMP%], \n   .logout-button[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Navbar, [{
        type: Component,
        args: [{ selector: 'app-navbar', imports: [
                    RouterLink,
                    RouterLinkActive,
                    Menu
                ], template: "<aside\n  class=\"sidebar\"\n  [class.collapsed]=\"collapsed()\"\n  (mouseleave)=\"collapseNavbar()\"\n  aria-label=\"Navegaci\u00F3n principal\"\n>\n\n  <header class=\"sidebar-header\">\n\n    <button\n      type=\"button\"\n      class=\"toggle-button\"\n      (click)=\"toggleNavbar()\"\n      [attr.aria-expanded]=\"!collapsed()\"\n      [attr.aria-label]=\"\n        collapsed()\n          ? 'Expandir men\u00FA'\n          : 'Contraer men\u00FA'\n      \"\n    >\n      <i\n        class=\"pi pi-bars\"\n        aria-hidden=\"true\"\n      ></i>\n    </button>\n\n  </header>\n\n\n  <nav\n    class=\"sidebar-nav\"\n    aria-label=\"Men\u00FA principal\"\n  >\n\n    <ul class=\"nav-list\">\n\n      @for (\n        item of items;\n        track item.routerLink\n      ) {\n\n        @if (item.visible !== false) {\n\n          <li class=\"nav-list-item\" [class.mobile-overflow-item]=\"$index >= 4\">\n\n            <a\n              class=\"nav-item\"\n              [routerLink]=\"item.routerLink\"\n              routerLinkActive=\"active\"\n              [routerLinkActiveOptions]=\"{\n                exact: item.routerLink === '/home'\n              }\"\n              ariaCurrentWhenActive=\"page\"\n              [attr.aria-label]=\"item.label\"\n              [attr.title]=\"\n                collapsed()\n                  ? item.label\n                  : null\n              \"\n            >\n\n              <span class=\"nav-icon\">\n\n                <i\n                  [class]=\"item.icon\"\n                  aria-hidden=\"true\"\n                ></i>\n\n              </span>\n\n              <span class=\"nav-label\">\n                {{ item.label }}\n              </span>\n\n            </a>\n\n          </li>\n\n        }\n\n      }\n\n    </ul>\n\n    <button type=\"button\" class=\"mobile-more-button\" aria-label=\"M\u00E1s secciones\" (click)=\"mobileMenu.toggle($event)\"><span class=\"nav-icon\"><i class=\"pi pi-bars\"></i></span><span class=\"nav-label\">M\u00E1s</span></button>\n    <p-menu #mobileMenu [model]=\"mobileMoreItems\" [popup]=\"true\" appendTo=\"body\" styleClass=\"mobile-dock-menu\" />\n\n  </nav>\n\n\n  <footer class=\"sidebar-footer\">\n\n    @if (logoutError()) {\n\n      <div\n        class=\"logout-error\"\n        role=\"alert\"\n      >\n\n        <i\n          class=\"pi pi-exclamation-circle\"\n          aria-hidden=\"true\"\n        ></i>\n\n        <span>\n          {{ logoutError() }}\n        </span>\n\n      </div>\n\n    }\n\n\n    <button\n      type=\"button\"\n      class=\"logout-button\"\n      (click)=\"logout()\"\n      [disabled]=\"loggingOut()\"\n      aria-label=\"Cerrar sesi\u00F3n\"\n      [attr.title]=\"\n        collapsed()\n          ? 'Cerrar sesi\u00F3n'\n          : null\n      \"\n    >\n\n      <span class=\"nav-icon\">\n\n        @if (loggingOut()) {\n\n          <i\n            class=\"pi pi-spinner pi-spin\"\n            aria-hidden=\"true\"\n          ></i>\n\n        } @else {\n\n          <i\n            class=\"pi pi-sign-out\"\n            aria-hidden=\"true\"\n          ></i>\n\n        }\n\n      </span>\n\n\n      <span class=\"nav-label\">\n\n        @if (loggingOut()) {\n          Cerrando...\n        } @else {\n          Cerrar sesi\u00F3n\n        }\n\n      </span>\n\n    </button>\n\n  </footer>\n\n</aside>\n", styles: [":host {\n  display: block;\n}\n\n/* =========================================\n   SIDEBAR\n   ========================================= */\n\n.sidebar {\n  position: fixed;\n\n  top: 0;\n  bottom: 0;\n  left: 0;\n\n  z-index: 1000;\n\n  display: grid;\n\n  grid-template-rows:\n    72px\n    minmax(0, 1fr)\n    auto;\n\n  width: 260px;\n  height: 100dvh;\n\n  overflow: hidden;\n\n  background: #ffffff;\n\n  border-right: 1px solid #e4e4e7;\n\n  box-shadow:\n    4px 0 20px rgba(0, 0, 0, 0.035);\n\n  transition:\n    width 220ms\n    cubic-bezier(\n      0.4,\n      0,\n      0.2,\n      1\n    );\n}\n\n.sidebar.collapsed {\n  width: 72px;\n}\n\n\n/* =========================================\n   HEADER\n   ========================================= */\n\n.sidebar-header {\n  position: relative;\n\n  width: 100%;\n  height: 72px;\n}\n\n\n/* =========================================\n   HAMBURGUESA\n   Siempre queda en la misma posici\u00F3n\n   ========================================= */\n\n.toggle-button {\n  position: absolute;\n\n  top: 14px;\n  left: 14px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 44px;\n  height: 44px;\n\n  padding: 0;\n\n  color: #52525b;\n\n  background: transparent;\n\n  border: 0;\n  border-radius: 11px;\n\n  outline: none;\n\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #9810d5;\n\n    background: #fae8ff;\n  }\n\n  &:active {\n    background: #f5d0fe;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #c026d3;\n    outline-offset: 2px;\n  }\n\n  i {\n    font-size: 1.05rem;\n  }\n}\n\n\n/* =========================================\n   NAV\n   ========================================= */\n\n.sidebar-nav {\n  width: 100%;\n  min-height: 0;\n\n  padding: 4px 10px 16px;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  scrollbar-width: thin;\n\n  scrollbar-color:\n    #d4d4d8\n    transparent;\n}\n\n.nav-list {\n  display: flex;\n  flex-direction: column;\n\n  gap: 6px;\n\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n\n  list-style: none;\n}\n\n.nav-list-item {\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n\n/* =========================================\n   ITEM\n   ========================================= */\n\n.nav-item {\n  display: grid;\n\n  grid-template-columns:\n    52px\n    minmax(0, 1fr);\n\n  align-items: center;\n\n  width: 100%;\n  height: 48px;\n\n  padding: 0;\n\n  overflow: hidden;\n\n  color: #52525b;\n\n  background: transparent;\n\n  border-radius: 11px;\n\n  text-decoration: none;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #9810d5;\n\n    background: #faf5ff;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #c026d3;\n    outline-offset: -2px;\n  }\n\n  &.active {\n    color: #9810d5;\n\n    background: #f5e6fb;\n\n    font-weight: 600;\n  }\n}\n\n\n/* =========================================\n   ICONO\n   ========================================= */\n\n.nav-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 52px;\n  height: 48px;\n\n  flex-shrink: 0;\n\n  color: inherit;\n\n  i {\n    font-size: 1.05rem;\n\n    line-height: 1;\n  }\n}\n\n\n/* =========================================\n   LABEL\n   ========================================= */\n\n.nav-label {\n  display: block;\n\n  min-width: 0;\n\n  padding-right: 14px;\n\n  overflow: hidden;\n\n  color: inherit;\n\n  opacity: 1;\n\n  font-size: 0.9rem;\n  font-weight: 500;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  transform: translateX(0);\n\n  transition:\n    opacity 120ms ease 90ms,\n    transform 180ms ease 70ms;\n}\n\n\n/* =========================================\n   COLAPSADO\n   ========================================= */\n\n.sidebar.collapsed {\n\n  .nav-label {\n    opacity: 0;\n\n    transform: translateX(-8px);\n\n    pointer-events: none;\n\n    transition:\n      opacity 70ms ease,\n      transform 100ms ease;\n  }\n}\n\n\n/* =========================================\n   FOOTER\n   ========================================= */\n\n.sidebar-footer {\n  width: 100%;\n\n  padding: 12px 10px 16px;\n\n  border-top: 1px solid #e4e4e7;\n\n  background: #ffffff;\n}\n\n\n/* =========================================\n   LOGOUT\n   ========================================= */\n\n.logout-button {\n  display: grid;\n\n  grid-template-columns:\n    52px\n    minmax(0, 1fr);\n\n  align-items: center;\n\n  width: 100%;\n  height: 48px;\n\n  padding: 0;\n\n  overflow: hidden;\n\n  color: #dc2626;\n\n  background: transparent;\n\n  border: 0;\n  border-radius: 11px;\n\n  outline: none;\n\n  text-align: left;\n\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover:not(:disabled) {\n    color: #b91c1c;\n\n    background: #fef2f2;\n  }\n\n  &:active:not(:disabled) {\n    background: #fee2e2;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #ef4444;\n    outline-offset: -2px;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n\n    opacity: 0.55;\n  }\n\n  .nav-label {\n    font-weight: 500;\n  }\n}\n\n\n/* =========================================\n   ERROR\n   ========================================= */\n\n.logout-error {\n  display: flex;\n  align-items: flex-start;\n\n  gap: 7px;\n\n  margin-bottom: 8px;\n  padding: 9px 10px;\n\n  color: #b42318;\n\n  background: #fef3f2;\n\n  border: 1px solid #fecdca;\n  border-radius: 9px;\n\n  font-size: 0.75rem;\n\n  line-height: 1.35;\n\n  i {\n    margin-top: 1px;\n\n    flex-shrink: 0;\n  }\n}\n\n.mobile-more-button { display: none; }\n\n.sidebar.collapsed {\n\n  .logout-error {\n    position: absolute;\n\n    width: 1px;\n    height: 1px;\n\n    padding: 0;\n    margin: -1px;\n\n    overflow: hidden;\n\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n\n    white-space: nowrap;\n\n    border: 0;\n  }\n}\n\n\n/* =========================================\n   SCROLLBAR\n   ========================================= */\n\n.sidebar-nav::-webkit-scrollbar {\n  width: 5px;\n}\n\n.sidebar-nav::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.sidebar-nav::-webkit-scrollbar-thumb {\n  background: #d4d4d8;\n\n  border-radius: 999px;\n}\n\n\n/* =========================================\n   TABLETS\n   ========================================= */\n\n@media (max-width: 1024px) {\n\n  .sidebar {\n    width: 240px;\n  }\n\n  .sidebar.collapsed {\n    width: 72px;\n  }\n}\n\n\n/* =========================================\n   MOBILE\n   ========================================= */\n\n@media (max-width: 768px) {\n\n  .sidebar {\n    top: auto;\n    right: 10px;\n    bottom: max(8px, env(safe-area-inset-bottom));\n    left: 10px;\n    display: flex;\n    width: auto;\n    height: 72px;\n    padding: 6px;\n    overflow: visible;\n    background: rgba(255, 255, 255, 0.96);\n    border: 1px solid #e4e4e7;\n    border-radius: 18px;\n    box-shadow: 0 12px 35px rgba(24, 24, 27, 0.18);\n    backdrop-filter: blur(14px);\n  }\n\n  .sidebar.collapsed {\n    width: auto;\n    box-shadow: 0 12px 35px rgba(24, 24, 27, 0.18);\n  }\n\n  .sidebar-header {\n    display: none;\n  }\n\n  .sidebar-nav {\n    display: flex;\n    align-items: stretch;\n    flex: 1;\n    width: auto;\n    padding: 0;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    scrollbar-width: none;\n  }\n\n  .sidebar-nav::-webkit-scrollbar { display: none; }\n\n  .nav-list {\n    flex-direction: row;\n    gap: 4px;\n    width: 100%;\n    height: 100%;\n  }\n\n  .nav-list-item { min-width: 0; width: auto; flex: 1 1 0; }\n  .nav-list-item.mobile-overflow-item { display: none; }\n\n  .nav-item {\n    display: flex;\n    min-width: 0;\n    width: 100%;\n    height: 60px;\n    padding: 4px 8px;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2px;\n    border-radius: 13px;\n  }\n\n  .nav-icon { width: auto; height: 25px; }\n  .nav-icon i { font-size: 1.1rem; }\n\n  .nav-label,\n  .sidebar.collapsed .nav-label {\n    display: block;\n    max-width: 72px;\n    padding: 0;\n    overflow: hidden;\n    opacity: 1;\n    font-size: 0.62rem;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    transform: none;\n  }\n\n  .sidebar-footer {\n    display: none;\n  }\n\n  .logout-error { display: none; }\n  .logout-button {\n    display: flex;\n    width: 44px;\n    height: 60px;\n    padding: 0;\n    justify-content: center;\n    border-radius: 13px;\n  }\n  .logout-button .nav-icon { width: 48px; height: 60px; }\n  .logout-button .nav-label { display: none; }\n\n  .nav-item.active {\n    color: #7e22ce;\n    background: #f5e6fb;\n  }\n\n  .mobile-more-button {\n    display: flex;\n    min-width: 52px;\n    height: 60px;\n    padding: 4px 5px;\n    flex: 0 0 52px;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 2px;\n    color: #52525b;\n    background: transparent;\n    border: 0;\n    border-radius: 13px;\n  }\n  .mobile-more-button:hover,\n  .mobile-more-button:focus-visible { color: #7e22ce; background: #faf5ff; }\n  .mobile-more-button .nav-label { display: block; }\n}\n\n\n/* =========================================\n   M\u00D3VILES BAJOS\n   ========================================= */\n\n@media (max-height: 500px) {\n\n  .sidebar {\n    grid-template-rows:\n      58px\n      minmax(0, 1fr)\n      auto;\n  }\n\n  .sidebar-header {\n    height: 58px;\n  }\n\n  .toggle-button {\n    top: 7px;\n  }\n\n  .nav-item,\n  .logout-button,\n  .nav-icon {\n    height: 44px;\n  }\n}\n\n\n/* =========================================\n   REDUCED MOTION\n   ========================================= */\n\n@media (prefers-reduced-motion: reduce) {\n\n  .sidebar,\n  .nav-item,\n  .nav-label,\n  .toggle-button,\n  .logout-button {\n    transition: none;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/components/navbar/navbar.ts", lineNumber: 30 }); })();
