import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { InputPassword } from 'primeng/inputpassword';
import { Auth } from '../../services/auth';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function Login_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "i", 24);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error(), " ");
} }
function Login_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 25);
    i0.ɵɵtext(1, " Ingresando... ");
} }
function Login_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Ingresar ");
} }
export class Login {
    auth = inject(Auth);
    router = inject(Router);
    email = '';
    password = '';
    rememberMe = false;
    showPassword = false;
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    async onSubmit() {
        if (!this.email.trim() || !this.password) {
            this.error.set('Ingresá tu email y contraseña.');
            return;
        }
        this.loading.set(true);
        this.error.set('');
        try {
            await firstValueFrom(this.auth.login(this.email.trim(), this.password, this.rememberMe));
            const navigated = await this.router.navigateByUrl('/home');
            if (!navigated) {
                this.error.set('No se pudo acceder al inicio.');
            }
        }
        catch (error) {
            const httpError = error;
            if (httpError.status === 401) {
                this.error.set('Email o contraseña incorrectos.');
                return;
            }
            if (httpError.status === 403) {
                console.log(httpError);
                this.error.set(httpError.error.detail || 'No tenés permisos para iniciar sesión.');
                return;
            }
            if (httpError.error?.detail) {
                this.error.set(httpError.error.detail);
                return;
            }
            this.error.set('No se pudo iniciar sesión. Intentá nuevamente.');
        }
        finally {
            this.loading.set(false);
        }
    }
    static ɵfac = function Login_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Login)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Login, selectors: [["app-login"]], decls: 36, vars: 16, consts: [[1, "login-page"], [1, "login-left"], ["src", "/template.png", "alt", "", 1, "login-background"], [1, "logo-container"], ["src", "/omega_logo_2.png", "alt", "Omega SM", 1, "logo"], [1, "login-right"], [1, "login-box"], [1, "login-header"], [1, "login-form", 3, "ngSubmit"], [1, "field"], ["for", "email"], ["pInputText", "", "id", "email", "name", "email", "type", "email", "placeholder", "usuario@omegasm.com", "autocomplete", "email", 3, "ngModelChange", "ngModel", "disabled"], ["for", "password"], [1, "password-wrapper"], ["pInputPassword", "", "id", "password", "name", "password", "placeholder", "Contrase\u00F1a", "autocomplete", "current-password", 3, "ngModelChange", "ngModel", "type", "disabled"], ["type", "button", 1, "password-toggle", 3, "click", "disabled"], [1, "pi"], [1, "login-options"], [1, "remember"], ["type", "checkbox", "name", "remember", 3, "ngModelChange", "ngModel", "disabled"], [1, "custom-checkbox"], ["href", "#", 1, "forgot"], [1, "login-error"], ["pButton", "", "type", "submit", 1, "login-button", 3, "disabled"], [1, "pi", "pi-exclamation-circle"], [1, "pi", "pi-spinner", "pi-spin"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "section", 5)(6, "div", 6)(7, "header", 7)(8, "h1");
            i0.ɵɵtext(9, "Iniciar sesi\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Acced\u00E9 a tu cuenta");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "form", 8);
            i0.ɵɵlistener("ngSubmit", function Login_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(13, "div", 9)(14, "label", 10);
            i0.ɵɵtext(15, " Email ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function Login_Template_input_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 9)(18, "label", 12);
            i0.ɵɵtext(19, " Contrase\u00F1a ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 13)(21, "input", 14);
            i0.ɵɵtwoWayListener("ngModelChange", function Login_Template_input_ngModelChange_21_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(22, "button", 15);
            i0.ɵɵlistener("click", function Login_Template_button_click_22_listener() { return ctx.showPassword = !ctx.showPassword; });
            i0.ɵɵelement(23, "i", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "div", 17)(25, "label", 18)(26, "input", 19);
            i0.ɵɵtwoWayListener("ngModelChange", function Login_Template_input_ngModelChange_26_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelement(27, "span", 20);
            i0.ɵɵelementStart(28, "span");
            i0.ɵɵtext(29, " Recordarme ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "a", 21);
            i0.ɵɵtext(31, " \u00BFOlvidaste tu contrase\u00F1a? ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(32, Login_Conditional_32_Template, 4, 1, "div", 22);
            i0.ɵɵelementStart(33, "button", 23);
            i0.ɵɵconditionalCreate(34, Login_Conditional_34_Template, 2, 0)(35, Login_Conditional_35_Template, 1, 0);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(16);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵproperty("type", ctx.showPassword ? "text" : "password")("disabled", ctx.loading());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵattribute("aria-label", ctx.showPassword ? "Ocultar contrase\u00F1a" : "Mostrar contrase\u00F1a");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("pi-eye", !ctx.showPassword)("pi-eye-slash", ctx.showPassword);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.rememberMe);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.error() ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 34 : 35);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective,
            InputText,
            InputPassword], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60% 40%;\n\n  width: 100%;\n  min-height: 100vh;\n\n  overflow: hidden;\n\n  background: #ffffff;\n}\n\n\n\n\n\n.login-left[_ngcontent-%COMP%] {\n  position: relative;\n\n  width: 100%;\n  height: 100vh;\n\n  overflow: hidden;\n\n  background: #59138a;\n}\n\n.login-background[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n}\n\n\n\n\n\n.logo-container[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  pointer-events: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: block;\n\n  width: min(320px, 48%);\n  height: auto;\n\n  object-fit: contain;\n\n  filter: drop-shadow(\n    0 8px 24px rgba(0, 0, 0, 0.12)\n  );\n}\n\n\n\n\n\n.login-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  min-height: 100vh;\n\n  padding: 48px 64px;\n\n  background: #ffffff;\n}\n\n.login-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 430px;\n\n  transform: translateY(-10px);\n}\n\n\n\n\n\n.login-header[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n\n  h1 {\n    margin: 0 0 8px;\n\n    color: #18181b;\n\n    font-size: 2rem;\n    font-weight: 700;\n    line-height: 1.2;\n\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n\n    color: #71717a;\n\n    font-size: 0.95rem;\n    font-weight: 400;\n  }\n}\n\n\n\n\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n\n  gap: 22px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n\n  gap: 8px;\n\n  label {\n    color: #27272a;\n\n    font-size: 0.875rem;\n    font-weight: 600;\n  }\n}\n\n\n\n\n\n.field[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], \n.password-wrapper[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n\n  padding: 0 14px;\n\n  color: #18181b;\n\n  background: #ffffff;\n\n  border: 1px solid #d4d4d8;\n  border-radius: 9px;\n\n  outline: none;\n  box-shadow: none;\n\n  font-family: inherit;\n  font-size: 0.925rem;\n\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n\n  &::placeholder {\n    color: #a1a1aa;\n  }\n\n  &:hover {\n    border-color: #a1a1aa;\n  }\n\n  &:focus {\n    border-color: #9333ea;\n\n    box-shadow:\n      0 0 0 3px rgba(147, 51, 234, 0.1);\n  }\n}\n\n\n\n\n\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n\n  width: 100%;\n\n  input {\n    padding-right: 46px;\n  }\n}\n\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n\n  top: 50%;\n  right: 12px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 30px;\n  height: 30px;\n\n  padding: 0;\n\n  color: #71717a;\n\n  background: transparent;\n\n  border: none;\n  border-radius: 6px;\n\n  transform: translateY(-50%);\n\n  cursor: pointer;\n\n  transition:\n    color 0.15s ease,\n    background 0.15s ease;\n\n  &:hover {\n    color: #7e22ce;\n    background: #f5f3ff;\n  }\n\n  &:focus-visible {\n    outline: 2px solid rgba(147, 51, 234, 0.3);\n    outline-offset: 1px;\n  }\n\n  i {\n    font-size: 1rem;\n  }\n}\n\n\n\n\n\n.login-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 20px;\n}\n\n\n\n\n\n.remember[_ngcontent-%COMP%] {\n  position: relative;\n\n  display: inline-flex;\n  align-items: center;\n\n  gap: 9px;\n\n  color: #52525b;\n\n  font-size: 0.875rem;\n\n  cursor: pointer;\n  user-select: none;\n\n  input {\n    position: absolute;\n\n    width: 1px;\n    height: 1px;\n\n    opacity: 0;\n\n    pointer-events: none;\n  }\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 18px;\n  height: 18px;\n\n  flex: 0 0 18px;\n\n  background: #ffffff;\n\n  border: 1px solid #d4d4d8;\n  border-radius: 5px;\n\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n}\n\n.remember[_ngcontent-%COMP%]:hover   .custom-checkbox[_ngcontent-%COMP%] {\n  border-color: #a1a1aa;\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    + .custom-checkbox[_ngcontent-%COMP%] {\n  border-color: #9333ea;\n\n  box-shadow:\n    0 0 0 3px rgba(147, 51, 234, 0.12);\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .custom-checkbox[_ngcontent-%COMP%] {\n  background: #7e22ce;\n  border-color: #7e22ce;\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .custom-checkbox[_ngcontent-%COMP%]::after {\n  content: '';\n\n  width: 4px;\n  height: 8px;\n\n  margin-top: -2px;\n\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n\n  transform: rotate(45deg);\n}\n\n\n\n\n\n.forgot[_ngcontent-%COMP%] {\n  color: #8b1cc4;\n\n  font-size: 0.875rem;\n  font-weight: 600;\n\n  text-decoration: none;\n\n  transition: color 0.15s ease;\n\n  &:hover {\n    color: #62148c;\n  }\n}\n\n\n\n\n\n[_nghost-%COMP%]     .p-button.login-button {\n  width: 100%;\n  height: 50px;\n\n  margin-top: 4px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: none;\n  border-radius: 9px;\n\n  background:\n    linear-gradient(\n      90deg,\n      #7616b6 0%,\n      #b100e8 100%\n    );\n\n  color: #ffffff;\n\n  font-family: inherit;\n  font-size: 0.925rem;\n  font-weight: 600;\n\n  box-shadow:\n    0 5px 16px rgba(126, 34, 206, 0.2);\n\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.2s ease;\n\n  &:hover {\n    background:\n      linear-gradient(\n        90deg,\n        #6911a6 0%,\n        #9f00d1 100%\n      );\n\n    box-shadow:\n      0 7px 20px rgba(126, 34, 206, 0.26);\n  }\n\n  &:active {\n    transform: translateY(1px);\n  }\n}\n\n\n\n\n\n@media (max-width: 1100px) {\n  .login-page[_ngcontent-%COMP%] {\n    grid-template-columns: 55% 45%;\n  }\n\n  .login-right[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n}\n\n@media (max-width: 850px) {\n  .login-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .login-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .login-right[_ngcontent-%COMP%] {\n    min-height: 100vh;\n\n    padding: 32px 24px;\n  }\n\n  .login-box[_ngcontent-%COMP%] {\n    max-width: 440px;\n\n    transform: none;\n  }\n}\n\n@media (max-width: 480px) {\n  .login-right[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n\n  .login-header[_ngcontent-%COMP%] {\n    h1 {\n      font-size: 1.75rem;\n    }\n  }\n\n  .login-options[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n\n    gap: 14px;\n  }\n}\n\n.login-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  padding: 11px 13px;\n\n  color: #b42318;\n  background: #fef3f2;\n\n  border: 1px solid #fecdca;\n  border-radius: 8px;\n\n  font-size: 0.85rem;\n\n  i {\n    font-size: 0.9rem;\n  }\n}\n\n.login-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Login, [{
        type: Component,
        args: [{ selector: 'app-login', imports: [
                    FormsModule,
                    ButtonDirective,
                    InputText,
                    InputPassword
                ], template: "<div class=\"login-page\">\n\n  <section class=\"login-left\">\n\n    <img\n      src=\"/template.png\"\n      alt=\"\"\n      class=\"login-background\"\n    />\n\n    <div class=\"logo-container\">\n      <img\n        src=\"/omega_logo_2.png\"\n        alt=\"Omega SM\"\n        class=\"logo\"\n      />\n    </div>\n\n  </section>\n\n  <section class=\"login-right\">\n\n    <div class=\"login-box\">\n\n      <header class=\"login-header\">\n        <h1>Iniciar sesi\u00F3n</h1>\n        <p>Acced\u00E9 a tu cuenta</p>\n      </header>\n\n      <form\n        class=\"login-form\"\n        (ngSubmit)=\"onSubmit()\"\n      >\n\n        <div class=\"field\">\n\n          <label for=\"email\">\n            Email\n          </label>\n\n          <input\n            pInputText\n            id=\"email\"\n            name=\"email\"\n            type=\"email\"\n            [(ngModel)]=\"email\"\n            placeholder=\"usuario@omegasm.com\"\n            autocomplete=\"email\"\n            [disabled]=\"loading()\"\n          />\n\n        </div>\n\n        <div class=\"field\">\n\n          <label for=\"password\">\n            Contrase\u00F1a\n          </label>\n\n          <div class=\"password-wrapper\">\n\n            <input\n              pInputPassword\n              id=\"password\"\n              name=\"password\"\n              [(ngModel)]=\"password\"\n              [type]=\"showPassword ? 'text' : 'password'\"\n              placeholder=\"Contrase\u00F1a\"\n              autocomplete=\"current-password\"\n              [disabled]=\"loading()\"\n            />\n\n            <button\n              type=\"button\"\n              class=\"password-toggle\"\n              (click)=\"showPassword = !showPassword\"\n              [disabled]=\"loading()\"\n              [attr.aria-label]=\"\n                showPassword\n                  ? 'Ocultar contrase\u00F1a'\n                  : 'Mostrar contrase\u00F1a'\n              \"\n            >\n              <i\n                class=\"pi\"\n                [class.pi-eye]=\"!showPassword\"\n                [class.pi-eye-slash]=\"showPassword\"\n              ></i>\n            </button>\n\n          </div>\n\n        </div>\n\n        <div class=\"login-options\">\n\n          <label class=\"remember\">\n\n            <input\n              type=\"checkbox\"\n              name=\"remember\"\n              [(ngModel)]=\"rememberMe\"\n              [disabled]=\"loading()\"\n            />\n\n            <span class=\"custom-checkbox\"></span>\n\n            <span>\n              Recordarme\n            </span>\n\n          </label>\n\n          <a\n            href=\"#\"\n            class=\"forgot\"\n          >\n            \u00BFOlvidaste tu contrase\u00F1a?\n          </a>\n\n        </div>\n\n        @if (error()) {\n\n          <div class=\"login-error\">\n\n            <i class=\"pi pi-exclamation-circle\"></i>\n\n            <span>\n              {{ error() }}\n            </span>\n\n          </div>\n\n        }\n\n        <button\n          pButton\n          type=\"submit\"\n          class=\"login-button\"\n          [disabled]=\"loading()\"\n        >\n\n          @if (loading()) {\n\n            <i class=\"pi pi-spinner pi-spin\"></i>\n            Ingresando...\n\n          } @else {\n\n            Ingresar\n\n          }\n\n        </button>\n\n      </form>\n\n    </div>\n\n  </section>\n\n</div>", styles: [":host {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.login-page {\n  display: grid;\n  grid-template-columns: 60% 40%;\n\n  width: 100%;\n  min-height: 100vh;\n\n  overflow: hidden;\n\n  background: #ffffff;\n}\n\n/* =========================================\n   PANEL IZQUIERDO\n   ========================================= */\n\n.login-left {\n  position: relative;\n\n  width: 100%;\n  height: 100vh;\n\n  overflow: hidden;\n\n  background: #59138a;\n}\n\n.login-background {\n  position: absolute;\n  inset: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n}\n\n/* =========================================\n   LOGO\n   ========================================= */\n\n.logo-container {\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  pointer-events: none;\n}\n\n.logo {\n  display: block;\n\n  width: min(320px, 48%);\n  height: auto;\n\n  object-fit: contain;\n\n  filter: drop-shadow(\n    0 8px 24px rgba(0, 0, 0, 0.12)\n  );\n}\n\n/* =========================================\n   PANEL DERECHO\n   ========================================= */\n\n.login-right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  min-height: 100vh;\n\n  padding: 48px 64px;\n\n  background: #ffffff;\n}\n\n.login-box {\n  width: 100%;\n  max-width: 430px;\n\n  transform: translateY(-10px);\n}\n\n/* =========================================\n   HEADER\n   ========================================= */\n\n.login-header {\n  margin-bottom: 34px;\n\n  h1 {\n    margin: 0 0 8px;\n\n    color: #18181b;\n\n    font-size: 2rem;\n    font-weight: 700;\n    line-height: 1.2;\n\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n\n    color: #71717a;\n\n    font-size: 0.95rem;\n    font-weight: 400;\n  }\n}\n\n/* =========================================\n   FORMULARIO\n   ========================================= */\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n\n  gap: 22px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n\n  gap: 8px;\n\n  label {\n    color: #27272a;\n\n    font-size: 0.875rem;\n    font-weight: 600;\n  }\n}\n\n/* =========================================\n   INPUTS\n   ========================================= */\n\n.field > input,\n.password-wrapper > input {\n  width: 100%;\n  height: 48px;\n\n  padding: 0 14px;\n\n  color: #18181b;\n\n  background: #ffffff;\n\n  border: 1px solid #d4d4d8;\n  border-radius: 9px;\n\n  outline: none;\n  box-shadow: none;\n\n  font-family: inherit;\n  font-size: 0.925rem;\n\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n\n  &::placeholder {\n    color: #a1a1aa;\n  }\n\n  &:hover {\n    border-color: #a1a1aa;\n  }\n\n  &:focus {\n    border-color: #9333ea;\n\n    box-shadow:\n      0 0 0 3px rgba(147, 51, 234, 0.1);\n  }\n}\n\n/* =========================================\n   PASSWORD\n   ========================================= */\n\n.password-wrapper {\n  position: relative;\n\n  width: 100%;\n\n  input {\n    padding-right: 46px;\n  }\n}\n\n.password-toggle {\n  position: absolute;\n\n  top: 50%;\n  right: 12px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 30px;\n  height: 30px;\n\n  padding: 0;\n\n  color: #71717a;\n\n  background: transparent;\n\n  border: none;\n  border-radius: 6px;\n\n  transform: translateY(-50%);\n\n  cursor: pointer;\n\n  transition:\n    color 0.15s ease,\n    background 0.15s ease;\n\n  &:hover {\n    color: #7e22ce;\n    background: #f5f3ff;\n  }\n\n  &:focus-visible {\n    outline: 2px solid rgba(147, 51, 234, 0.3);\n    outline-offset: 1px;\n  }\n\n  i {\n    font-size: 1rem;\n  }\n}\n\n/* =========================================\n   OPCIONES\n   ========================================= */\n\n.login-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 20px;\n}\n\n/* =========================================\n   CHECKBOX\n   ========================================= */\n\n.remember {\n  position: relative;\n\n  display: inline-flex;\n  align-items: center;\n\n  gap: 9px;\n\n  color: #52525b;\n\n  font-size: 0.875rem;\n\n  cursor: pointer;\n  user-select: none;\n\n  input {\n    position: absolute;\n\n    width: 1px;\n    height: 1px;\n\n    opacity: 0;\n\n    pointer-events: none;\n  }\n}\n\n.custom-checkbox {\n  position: relative;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 18px;\n  height: 18px;\n\n  flex: 0 0 18px;\n\n  background: #ffffff;\n\n  border: 1px solid #d4d4d8;\n  border-radius: 5px;\n\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n}\n\n.remember:hover .custom-checkbox {\n  border-color: #a1a1aa;\n}\n\n.remember input:focus-visible + .custom-checkbox {\n  border-color: #9333ea;\n\n  box-shadow:\n    0 0 0 3px rgba(147, 51, 234, 0.12);\n}\n\n.remember input:checked + .custom-checkbox {\n  background: #7e22ce;\n  border-color: #7e22ce;\n}\n\n.remember input:checked + .custom-checkbox::after {\n  content: '';\n\n  width: 4px;\n  height: 8px;\n\n  margin-top: -2px;\n\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n\n  transform: rotate(45deg);\n}\n\n/* =========================================\n   OLVID\u00C9 CONTRASE\u00D1A\n   ========================================= */\n\n.forgot {\n  color: #8b1cc4;\n\n  font-size: 0.875rem;\n  font-weight: 600;\n\n  text-decoration: none;\n\n  transition: color 0.15s ease;\n\n  &:hover {\n    color: #62148c;\n  }\n}\n\n/* =========================================\n   BOT\u00D3N\n   ========================================= */\n\n:host ::ng-deep .p-button.login-button {\n  width: 100%;\n  height: 50px;\n\n  margin-top: 4px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: none;\n  border-radius: 9px;\n\n  background:\n    linear-gradient(\n      90deg,\n      #7616b6 0%,\n      #b100e8 100%\n    );\n\n  color: #ffffff;\n\n  font-family: inherit;\n  font-size: 0.925rem;\n  font-weight: 600;\n\n  box-shadow:\n    0 5px 16px rgba(126, 34, 206, 0.2);\n\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.2s ease;\n\n  &:hover {\n    background:\n      linear-gradient(\n        90deg,\n        #6911a6 0%,\n        #9f00d1 100%\n      );\n\n    box-shadow:\n      0 7px 20px rgba(126, 34, 206, 0.26);\n  }\n\n  &:active {\n    transform: translateY(1px);\n  }\n}\n\n/* =========================================\n   RESPONSIVE\n   ========================================= */\n\n@media (max-width: 1100px) {\n  .login-page {\n    grid-template-columns: 55% 45%;\n  }\n\n  .login-right {\n    padding: 40px;\n  }\n}\n\n@media (max-width: 850px) {\n  .login-page {\n    grid-template-columns: 1fr;\n  }\n\n  .login-left {\n    display: none;\n  }\n\n  .login-right {\n    min-height: 100vh;\n\n    padding: 32px 24px;\n  }\n\n  .login-box {\n    max-width: 440px;\n\n    transform: none;\n  }\n}\n\n@media (max-width: 480px) {\n  .login-right {\n    padding: 24px 20px;\n  }\n\n  .login-header {\n    h1 {\n      font-size: 1.75rem;\n    }\n  }\n\n  .login-options {\n    align-items: flex-start;\n    flex-direction: column;\n\n    gap: 14px;\n  }\n}\n\n.login-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  padding: 11px 13px;\n\n  color: #b42318;\n  background: #fef3f2;\n\n  border: 1px solid #fecdca;\n  border-radius: 8px;\n\n  font-size: 0.85rem;\n\n  i {\n    font-size: 0.9rem;\n  }\n}\n\n.login-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/login/login.ts", lineNumber: 43 }); })();
