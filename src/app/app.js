import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import * as i0 from "@angular/core";
function App_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-navbar")(1, "app-header");
} }
export class App {
    title = signal('frontend-omega', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    router = inject(Router);
    showLayout = signal(!this.router.url.startsWith('/login'), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showLayout" }] : /* istanbul ignore next */ []));
    constructor() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
            this.showLayout.set(!event.urlAfterRedirects.startsWith('/login'));
        });
    }
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 2, vars: 1, template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, App_Conditional_0_Template, 2, 0);
            i0.ɵɵelement(1, "router-outlet");
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showLayout() ? 0 : -1);
        } }, dependencies: [RouterOutlet,
            Navbar,
            Header], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [
                    RouterOutlet,
                    Navbar,
                    Header
                ], template: "@if (showLayout()) {\n  <app-navbar></app-navbar>\n  <app-header></app-header>\n}\n\n<router-outlet></router-outlet>", styles: [":host {\n  display: block;\n  min-height: 100vh;\n}"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 28 }); })();
