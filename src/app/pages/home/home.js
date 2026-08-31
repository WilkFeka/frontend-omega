import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import * as i0 from "@angular/core";
export class Home {
    static ɵfac = function Home_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Home)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Home, selectors: [["app-home"]], decls: 0, vars: 0, template: function Home_Template(rf, ctx) { }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Home, [{
        type: Component,
        args: [{ imports: [Navbar], selector: 'app-home', template: "" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Home, { className: "Home", filePath: "src/app/pages/home/home.ts", lineNumber: 10 }); })();
