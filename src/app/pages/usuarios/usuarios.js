import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Api } from '../../services/api';
import { Navbar } from '../../components/navbar/navbar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/dialog";
import * as i3 from "primeng/table";
import * as i4 from "primeng/toast";
const _c0 = () => [10, 25, 50];
const _c1 = () => ({ width: "min(680px, calc(100vw - 32px))" });
const _c2 = () => ({ width: "min(460px, calc(100vw - 32px))" });
function Usuarios_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 54);
    i0.ɵɵtext(2, "Nombre ");
    i0.ɵɵelement(3, "p-sort-icon", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 56);
    i0.ɵɵtext(5, "Usuario ");
    i0.ɵɵelement(6, "p-sort-icon", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 58);
    i0.ɵɵtext(8, "Email ");
    i0.ɵɵelement(9, "p-sort-icon", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 60);
    i0.ɵɵtext(11, "Rol ");
    i0.ɵɵelement(12, "p-sort-icon", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 62);
    i0.ɵɵtext(14, "Estado ");
    i0.ɵɵelement(15, "p-sort-icon", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 64);
    i0.ɵɵtext(17, "Acceso ");
    i0.ɵɵelement(18, "p-sort-icon", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th", 66);
    i0.ɵɵtext(20, " Acciones ");
    i0.ɵɵelementEnd()();
} }
function Usuarios_ng_template_64_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 70);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, " Activo ");
    i0.ɵɵelementEnd();
} }
function Usuarios_ng_template_64_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, " Inactivo ");
    i0.ɵɵelementEnd();
} }
function Usuarios_ng_template_64_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 70);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, " Habilitado ");
    i0.ɵɵelementEnd();
} }
function Usuarios_ng_template_64_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, " Deshabilitado ");
    i0.ɵɵelementEnd();
} }
function Usuarios_ng_template_64_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function Usuarios_ng_template_64_Conditional_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const user_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDeactivate(user_r3)); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementEnd();
} }
function Usuarios_ng_template_64_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 78);
    i0.ɵɵlistener("click", function Usuarios_ng_template_64_Conditional_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const user_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.reactivate(user_r3)); });
    i0.ɵɵelement(1, "i", 79);
    i0.ɵɵelementEnd();
} }
function Usuarios_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 67)(3, "div", 68);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td")(12, "span", 69);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵconditionalCreate(15, Usuarios_ng_template_64_Conditional_15_Template, 3, 0, "span", 70)(16, Usuarios_ng_template_64_Conditional_16_Template, 3, 0, "span", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵconditionalCreate(18, Usuarios_ng_template_64_Conditional_18_Template, 3, 0, "span", 70)(19, Usuarios_ng_template_64_Conditional_19_Template, 3, 0, "span", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td")(21, "div", 72)(22, "button", 73);
    i0.ɵɵlistener("click", function Usuarios_ng_template_64_Template_button_click_22_listener() { const user_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(user_r3)); });
    i0.ɵɵelement(23, "i", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(24, Usuarios_ng_template_64_Conditional_24_Template, 2, 0, "button", 75)(25, Usuarios_ng_template_64_Conditional_25_Template, 2, 0, "button", 76);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (user_r3.first_name || user_r3.username).charAt(0).toUpperCase(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getDisplayName(user_r3), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", user_r3.username, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", user_r3.email || "-", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("badge-admin", user_r3.is_staff || user_r3.is_superuser);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getRole(user_r3), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(user_r3.user_active ? 15 : 16);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(user_r3.membership_active ? 18 : 19);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(user_r3.membership_active ? 24 : 25);
} }
function Usuarios_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 80)(2, "div", 81);
    i0.ɵɵelement(3, "i", 12);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, " No hay usuarios ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, " No encontramos usuarios con los filtros actuales. ");
    i0.ɵɵelementEnd()()()();
} }
function Usuarios_Conditional_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Contrase\u00F1a ");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "*");
    i0.ɵɵelementEnd();
} }
function Usuarios_Conditional_92_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Nueva contrase\u00F1a ");
} }
function Usuarios_Conditional_102_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 43)(1, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Conditional_102_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.user_active, $event) || (ctx_r3.form.user_active = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4, "Usuario activo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, " Estado global del usuario. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "label", 43)(8, "input", 83);
    i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Conditional_102_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.membership_active, $event) || (ctx_r3.form.membership_active = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(9, "span")(10, "strong");
    i0.ɵɵtext(11, "Acceso al tenant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13, " Permite ingresar a esta empresa. ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.user_active);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.membership_active);
    i0.ɵɵcontrol();
} }
function Usuarios_Conditional_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 53);
    i0.ɵɵtext(1, " Guardando... ");
} }
function Usuarios_Conditional_108_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 84);
    i0.ɵɵtext(1, " Guardar ");
} }
function Usuarios_Conditional_127_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 53);
} }
function Usuarios_Conditional_128_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
export class Usuarios {
    api = inject(Api);
    messageService = inject(MessageService);
    users = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "users" }] : /* istanbul ignore next */ []));
    tenantName = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "tenantName" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    search = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    dialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "dialogVisible" }] : /* istanbul ignore next */ []));
    confirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "confirmVisible" }] : /* istanbul ignore next */ []));
    editingId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    userToDeactivate = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "userToDeactivate" }] : /* istanbul ignore next */ []));
    form = this.createEmptyForm();
    filteredUsers = computed(() => {
        const term = this.search().trim().toLowerCase();
        if (!term) {
            return this.users();
        }
        return this.users().filter(user => {
            const values = [
                user.username,
                user.email,
                user.first_name,
                user.last_name
            ];
            return values.some(value => value?.toLowerCase().includes(term));
        });
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredUsers" }] : /* istanbul ignore next */ []));
    resetFilters() {
        this.search.set('');
    }
    activeUsers = computed(() => {
        return this.users().filter(user => user.user_active &&
            user.membership_active).length;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "activeUsers" }] : /* istanbul ignore next */ []));
    inactiveUsers = computed(() => {
        return this.users().filter(user => !user.user_active ||
            !user.membership_active).length;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "inactiveUsers" }] : /* istanbul ignore next */ []));
    admins = computed(() => {
        return this.users().filter(user => user.is_staff ||
            user.is_superuser).length;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "admins" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        void this.loadUsers();
    }
    async loadUsers() {
        this.loading.set(true);
        try {
            const response = await firstValueFrom(this.api.getUsers());
            this.users.set(response.users);
            this.tenantName.set(response.tenant.name);
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.loading.set(false);
        }
    }
    openCreate() {
        this.editingId.set(null);
        this.form = this.createEmptyForm();
        this.dialogVisible.set(true);
    }
    openEdit(user) {
        this.editingId.set(user.id);
        this.form = {
            username: user.username,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            password: '',
            is_staff: user.is_staff,
            user_active: user.user_active,
            membership_active: user.membership_active
        };
        this.dialogVisible.set(true);
    }
    closeDialog() {
        if (this.saving()) {
            return;
        }
        this.dialogVisible.set(false);
    }
    async saveUser() {
        if (!this.form.username.trim()) {
            this.showError('El username es obligatorio.');
            return;
        }
        if (this.editingId() === null &&
            this.form.password.length < 6) {
            this.showError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        this.saving.set(true);
        try {
            const userId = this.editingId();
            if (userId === null) {
                const payload = {
                    username: this.form.username.trim(),
                    email: this.form.email.trim(),
                    password: this.form.password,
                    first_name: this.form.first_name.trim(),
                    last_name: this.form.last_name.trim(),
                    is_staff: this.form.is_staff
                };
                await firstValueFrom(this.api.createUser(payload));
                this.dialogVisible.set(false);
                await this.loadUsers();
                this.showSuccess('Usuario creado correctamente.');
            }
            else {
                const payload = {
                    username: this.form.username.trim(),
                    email: this.form.email.trim(),
                    first_name: this.form.first_name.trim(),
                    last_name: this.form.last_name.trim(),
                    is_staff: this.form.is_staff,
                    user_active: this.form.user_active,
                    membership_active: this.form.membership_active
                };
                if (this.form.password) {
                    payload.password = this.form.password;
                }
                await firstValueFrom(this.api.updateUser(userId, payload));
                this.dialogVisible.set(false);
                await this.loadUsers();
                this.showSuccess('Usuario actualizado correctamente.');
            }
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    askDeactivate(user) {
        this.userToDeactivate.set(user);
        this.confirmVisible.set(true);
    }
    async deactivate() {
        const user = this.userToDeactivate();
        if (!user) {
            return;
        }
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deactivateUser(user.id));
            this.confirmVisible.set(false);
            this.userToDeactivate.set(null);
            await this.loadUsers();
            this.showSuccess('Acceso desactivado correctamente.');
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    async reactivate(user) {
        try {
            await firstValueFrom(this.api.updateUser(user.id, {
                membership_active: true
            }));
            await this.loadUsers();
            this.showSuccess('Acceso reactivado correctamente.');
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
    }
    getDisplayName(user) {
        const fullName = [
            user.first_name,
            user.last_name
        ]
            .filter(Boolean)
            .join(' ');
        return fullName || '-';
    }
    getRole(user) {
        if (user.is_superuser) {
            return 'Superusuario';
        }
        if (user.is_staff) {
            return 'Administrador';
        }
        return 'Usuario';
    }
    showSuccess(message) {
        this.messageService.add({
            severity: 'success',
            summary: 'Correcto',
            detail: message,
            life: 3000
        });
    }
    showError(message) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message,
            life: 4000
        });
    }
    createEmptyForm() {
        return {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            is_staff: false,
            user_active: true,
            membership_active: true
        };
    }
    getApiError(error) {
        if (error instanceof HttpErrorResponse) {
            if (error.status === 403) {
                return (error.error?.detail ??
                    'No tenés permisos para administrar usuarios.');
            }
            if (error.status === 409) {
                return (error.error?.detail ??
                    'El usuario ya existe.');
            }
            if (error.error?.errors) {
                const values = Object.values(error.error.errors);
                if (values.length) {
                    return String(values[0]);
                }
            }
            if (error.error?.detail) {
                return error.error.detail;
            }
        }
        return 'Ocurrió un error inesperado.';
    }
    static ɵfac = function Usuarios_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Usuarios)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Usuarios, selectors: [["app-usuarios"]], features: [i0.ɵɵProvidersFeature([
                MessageService
            ])], decls: 130, vars: 49, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right", 3, "life"], [1, "users-page"], [1, "page-header"], [1, "page-eyebrow"], ["pButton", "", "type", "button", 1, "primary-button", 3, "click"], [1, "pi", "pi-plus"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "pi", "pi-users"], [1, "stat-icon", "success"], [1, "pi", "pi-check-circle"], [1, "stat-icon", "warning"], [1, "pi", "pi-user-minus"], [1, "stat-icon", "admin"], [1, "pi", "pi-shield"], [1, "table-card"], [1, "table-toolbar"], [1, "search-wrapper"], ["aria-hidden", "true", 1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar usuario...", "aria-label", "Buscar usuario", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "severity", "secondary", "title", "Restablecer filtros", "aria-label", "Restablecer filtros", 3, "click", "text", "rounded"], [1, "pi", "pi-filter-slash"], ["styleClass", "users-table", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "scrollable"], ["styleClass", "user-dialog", 3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [1, "user-form", 3, "ngSubmit"], [1, "form-grid"], [1, "field"], ["for", "first_name"], ["pInputText", "", "id", "first_name", "name", "first_name", "autocomplete", "given-name", 3, "ngModelChange", "ngModel"], ["for", "last_name"], ["pInputText", "", "id", "last_name", "name", "last_name", "autocomplete", "family-name", 3, "ngModelChange", "ngModel"], ["for", "username"], ["pInputText", "", "id", "username", "name", "username", "autocomplete", "username", "required", "", 3, "ngModelChange", "ngModel"], ["for", "email"], ["pInputText", "", "id", "email", "name", "email", "type", "email", "autocomplete", "email", 3, "ngModelChange", "ngModel"], [1, "field", "full-width"], ["for", "password"], ["pInputText", "", "id", "password", "name", "password", "type", "password", "autocomplete", "new-password", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-options"], [1, "checkbox-option"], ["type", "checkbox", "name", "is_staff", 3, "ngModelChange", "ngModel"], [1, "dialog-actions"], ["type", "button", 1, "secondary-button", 3, "click", "disabled"], ["pButton", "", "type", "submit", 1, "primary-button", 3, "disabled"], ["header", "Desactivar acceso", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "confirm-content"], [1, "confirm-icon"], [1, "pi", "pi-exclamation-triangle"], ["type", "button", 1, "danger-button", 3, "click", "disabled"], [1, "pi", "pi-spinner", "pi-spin"], ["pSortableColumn", "first_name"], ["field", "first_name"], ["pSortableColumn", "username"], ["field", "username"], ["pSortableColumn", "email"], ["field", "email"], ["pSortableColumn", "role"], ["field", "role"], ["pSortableColumn", "is_active"], ["field", "is_active"], ["pSortableColumn", "is_staff"], ["field", "is_staff"], [1, "actions-column"], [1, "user-cell"], [1, "avatar"], [1, "badge"], [1, "status", "status-active"], [1, "status", "status-inactive"], [1, "actions"], ["type", "button", "aria-label", "Editar usuario", "title", "Editar", 1, "icon-button", 3, "click"], [1, "pi", "pi-pencil"], ["type", "button", "aria-label", "Desactivar acceso", "title", "Desactivar acceso", 1, "icon-button", "danger"], ["type", "button", "aria-label", "Reactivar acceso", "title", "Reactivar acceso", 1, "icon-button", "success"], ["type", "button", "aria-label", "Desactivar acceso", "title", "Desactivar acceso", 1, "icon-button", "danger", 3, "click"], ["type", "button", "aria-label", "Reactivar acceso", "title", "Reactivar acceso", 1, "icon-button", "success", 3, "click"], [1, "pi", "pi-user-plus"], ["colspan", "7"], [1, "empty-state"], ["type", "checkbox", "name", "user_active", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "membership_active", 3, "ngModelChange", "ngModel"], [1, "pi", "pi-check"]], template: function Usuarios_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "p-toast", 3);
            i0.ɵɵelementStart(1, "section", 4)(2, "header", 5)(3, "div")(4, "span", 6);
            i0.ɵɵtext(5, " Administraci\u00F3n ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Usuarios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, " Gestion\u00E1 los usuarios y accesos de ");
            i0.ɵɵelementStart(10, "strong");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, ". ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "button", 7);
            i0.ɵɵlistener("click", function Usuarios_Template_button_click_13_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(14, "i", 8);
            i0.ɵɵtext(15, " Nuevo usuario ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 9)(17, "article", 10)(18, "div", 11);
            i0.ɵɵelement(19, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div")(21, "span");
            i0.ɵɵtext(22, "Total");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "article", 10)(26, "div", 13);
            i0.ɵɵelement(27, "i", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div")(29, "span");
            i0.ɵɵtext(30, "Activos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "strong");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "article", 10)(34, "div", 15);
            i0.ɵɵelement(35, "i", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div")(37, "span");
            i0.ɵɵtext(38, "Inactivos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "strong");
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "article", 10)(42, "div", 17);
            i0.ɵɵelement(43, "i", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div")(45, "span");
            i0.ɵɵtext(46, "Administradores");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "strong");
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(49, "section", 19)(50, "div", 20)(51, "div")(52, "h2");
            i0.ɵɵtext(53, "Usuarios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "span");
            i0.ɵɵtext(55);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 21);
            i0.ɵɵelement(57, "i", 22);
            i0.ɵɵelementStart(58, "input", 23);
            i0.ɵɵlistener("ngModelChange", function Usuarios_Template_input_ngModelChange_58_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "button", 24);
            i0.ɵɵlistener("click", function Usuarios_Template_button_click_59_listener() { return ctx.resetFilters(); });
            i0.ɵɵelement(60, "i", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "p-table", 26);
            i0.ɵɵtemplate(62, Usuarios_ng_template_62_Template, 21, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(64, Usuarios_ng_template_64_Template, 26, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(66, Usuarios_ng_template_66_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(68, "p-dialog", 27);
            i0.ɵɵlistener("visibleChange", function Usuarios_Template_p_dialog_visibleChange_68_listener($event) { return ctx.dialogVisible.set($event); });
            i0.ɵɵelementStart(69, "form", 28);
            i0.ɵɵlistener("ngSubmit", function Usuarios_Template_form_ngSubmit_69_listener() { return ctx.saveUser(); });
            i0.ɵɵelementStart(70, "div", 29)(71, "div", 30)(72, "label", 31);
            i0.ɵɵtext(73, " Nombre ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "input", 32);
            i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Template_input_ngModelChange_74_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.first_name, $event) || (ctx.form.first_name = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "div", 30)(76, "label", 33);
            i0.ɵɵtext(77, " Apellido ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "input", 34);
            i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Template_input_ngModelChange_78_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.last_name, $event) || (ctx.form.last_name = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "div", 30)(80, "label", 35);
            i0.ɵɵtext(81, " Username ");
            i0.ɵɵelementStart(82, "span");
            i0.ɵɵtext(83, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(84, "input", 36);
            i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Template_input_ngModelChange_84_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.username, $event) || (ctx.form.username = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "div", 30)(86, "label", 37);
            i0.ɵɵtext(87, " Email ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "input", 38);
            i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Template_input_ngModelChange_88_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "div", 39)(90, "label", 40);
            i0.ɵɵconditionalCreate(91, Usuarios_Conditional_91_Template, 3, 0)(92, Usuarios_Conditional_92_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "input", 41);
            i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Template_input_ngModelChange_93_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(94, "div", 42)(95, "label", 43)(96, "input", 44);
            i0.ɵɵtwoWayListener("ngModelChange", function Usuarios_Template_input_ngModelChange_96_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.is_staff, $event) || (ctx.form.is_staff = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(97, "span")(98, "strong");
            i0.ɵɵtext(99, "Administrador");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "small");
            i0.ɵɵtext(101, " Puede administrar usuarios. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(102, Usuarios_Conditional_102_Template, 14, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "div", 45)(104, "button", 46);
            i0.ɵɵlistener("click", function Usuarios_Template_button_click_104_listener() { return ctx.closeDialog(); });
            i0.ɵɵtext(105, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "button", 47);
            i0.ɵɵconditionalCreate(107, Usuarios_Conditional_107_Template, 2, 0)(108, Usuarios_Conditional_108_Template, 2, 0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(109, "p-dialog", 48);
            i0.ɵɵlistener("visibleChange", function Usuarios_Template_p_dialog_visibleChange_109_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(110, "div", 49)(111, "div", 50);
            i0.ɵɵelement(112, "i", 51);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "div")(114, "strong");
            i0.ɵɵtext(115, " \u00BFDesactivar acceso? ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "p");
            i0.ɵɵtext(117, " El usuario ");
            i0.ɵɵelementStart(118, "strong");
            i0.ɵɵtext(119);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(120);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "p");
            i0.ɵɵtext(122, " El usuario global no ser\u00E1 eliminado. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(123, "div", 45)(124, "button", 46);
            i0.ɵɵlistener("click", function Usuarios_Template_button_click_124_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(125, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(126, "button", 52);
            i0.ɵɵlistener("click", function Usuarios_Template_button_click_126_listener() { return ctx.deactivate(); });
            i0.ɵɵconditionalCreate(127, Usuarios_Conditional_127_Template, 1, 0, "i", 53)(128, Usuarios_Conditional_128_Template, 1, 0, "i", 16);
            i0.ɵɵtext(129, " Desactivar ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("life", 3000);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.tenantName() || "la empresa");
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.users().length);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.activeUsers());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.inactiveUsers());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.admins());
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.filteredUsers().length, " resultados ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", true)("rounded", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.filteredUsers())("loading", ctx.loading())("paginator", ctx.filteredUsers().length > 10)("rows", 10)("rowsPerPageOptions", i0.ɵɵpureFunction0(46, _c0))("scrollable", true);
            i0.ɵɵadvance(7);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(47, _c1));
            i0.ɵɵproperty("visible", ctx.dialogVisible())("modal", true)("draggable", false)("resizable", false)("header", ctx.editingId() === null ? "Nuevo usuario" : "Editar usuario");
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.first_name);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.last_name);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.username);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.email);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.editingId() === null ? 91 : 92);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.password);
            i0.ɵɵproperty("placeholder", ctx.editingId() === null ? "M\u00EDnimo 6 caracteres" : "Dejar vac\u00EDo para conservarla");
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.is_staff);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.editingId() !== null ? 102 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 107 : 108);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(48, _c2));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate1(" ", ctx.userToDeactivate()?.username, " ");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" dejar\u00E1 de poder ingresar a ", ctx.tenantName(), ". ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 127 : 128);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, ButtonDirective,
            DialogModule, i2.Dialog, InputText,
            TableModule, i3.Table, i3.SortableColumn, i3.SortIcon, ToastModule, i4.Toast], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n\n\n\n.users-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n\n  padding:\n    32px\n    32px\n    48px\n    96px;\n\n  background: #f8fafc;\n}\n\n\n\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  gap: 24px;\n\n  max-width: 1500px;\n\n  margin: 0 auto 28px;\n\n  h1 {\n    margin: 4px 0 6px;\n\n    color: #18181b;\n\n    font-size: 2rem;\n    font-weight: 700;\n\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n\n    color: #71717a;\n\n    font-size: 0.925rem;\n  }\n}\n\n.page-eyebrow[_ngcontent-%COMP%] {\n  color: #9810d5;\n\n  font-size: 0.78rem;\n  font-weight: 700;\n\n  text-transform: uppercase;\n\n  letter-spacing: 0.08em;\n}\n\n\n\n\n\n\n[_nghost-%COMP%]     {\n\n  .p-toast {\n    width: min(\n      380px,\n      calc(100vw - 32px)\n    );\n  }\n\n  .p-toast-message {\n    border-radius: 12px;\n\n    box-shadow:\n      0 10px 30px\n      rgba(0, 0, 0, 0.12);\n  }\n}\n\n\n\n\n\n\n.primary-button[_ngcontent-%COMP%], \n.secondary-button[_ngcontent-%COMP%], \n.danger-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  min-height: 42px;\n\n  gap: 8px;\n\n  padding: 0 16px;\n\n  border: 0;\n  border-radius: 9px;\n\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n\n  cursor: pointer;\n\n  transition:\n    background 150ms ease,\n    color 150ms ease,\n    border-color 150ms ease,\n    box-shadow 150ms ease;\n\n  &:disabled {\n    opacity: 0.55;\n\n    cursor: not-allowed;\n  }\n}\n\n\nbutton.p-button.primary-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n\n  background:\n    linear-gradient(\n      90deg,\n      #7e22ce,\n      #b100e8\n    );\n\n  box-shadow:\n    0 4px 12px\n    rgba(126, 34, 206, 0.15);\n\n  &:hover:not(:disabled) {\n    background:\n      linear-gradient(\n        90deg,\n        #6b21a8,\n        #9900c7\n      );\n  }\n}\n\n\n.secondary-button[_ngcontent-%COMP%] {\n  color: #52525b;\n\n  background: #ffffff;\n\n  border: 1px solid #d4d4d8;\n\n  &:hover:not(:disabled) {\n    background: #f4f4f5;\n  }\n}\n\n\n.danger-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n\n  background: #dc2626;\n\n  &:hover:not(:disabled) {\n    background: #b91c1c;\n  }\n}\n\n\n\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-columns:\n    repeat(\n      4,\n      minmax(0, 1fr)\n    );\n\n  max-width: 1500px;\n\n  gap: 16px;\n\n  margin: 0 auto 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n\n  min-width: 0;\n\n  gap: 14px;\n\n  padding: 18px;\n\n  background: #ffffff;\n\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n\n  box-shadow:\n    0 1px 3px\n    rgba(0, 0, 0, 0.025);\n\n  > div:last-child {\n    display: flex;\n    flex-direction: column;\n\n    gap: 2px;\n  }\n\n  span {\n    color: #71717a;\n\n    font-size: 0.8rem;\n  }\n\n  strong {\n    color: #18181b;\n\n    font-size: 1.45rem;\n    font-weight: 700;\n  }\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 44px;\n  height: 44px;\n\n  flex: 0 0 44px;\n\n  color: #7e22ce;\n\n  background: #f5e6fb;\n\n  border-radius: 11px;\n\n  &.success {\n    color: #15803d;\n\n    background: #dcfce7;\n  }\n\n  &.warning {\n    color: #b45309;\n\n    background: #fef3c7;\n  }\n\n  &.admin {\n    color: #2563eb;\n\n    background: #dbeafe;\n  }\n}\n\n\n\n\n\n\n.table-card[_ngcontent-%COMP%] {\n  max-width: 1500px;\n\n  margin: 0 auto;\n\n  overflow: hidden;\n\n  background: #ffffff;\n\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n\n  box-shadow:\n    0 1px 4px\n    rgba(0, 0, 0, 0.025);\n}\n\n\n\n\n\n\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 20px;\n\n  padding: 20px;\n\n  border-bottom: 1px solid #e4e4e7;\n\n  h2 {\n    margin: 0 0 3px;\n\n    color: #18181b;\n\n    font-size: 1rem;\n    font-weight: 650;\n  }\n\n  > div:first-child > span {\n    color: #71717a;\n\n    font-size: 0.78rem;\n  }\n}\n\n\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n\n  width: min(\n    320px,\n    100%\n  );\n\n  > i {\n    position: absolute;\n\n    top: 50%;\n    left: 13px;\n\n    z-index: 2;\n\n    color: #a1a1aa;\n\n    font-size: 0.9rem;\n\n    transform: translateY(-50%);\n  }\n\n  input {\n    width: 100%;\n    height: 42px;\n\n    padding-left: 38px;\n\n    border-radius: 9px;\n  }\n}\n\n\n\n\n\n\n[_nghost-%COMP%]     {\n\n  .users-table .p-datatable-table {\n    min-width: 900px;\n  }\n\n  .users-table .p-datatable-thead > tr > th {\n    padding: 13px 16px;\n\n    color: #71717a;\n\n    background: #fafafa;\n\n    border-color: #e4e4e7;\n\n    font-size: 0.75rem;\n    font-weight: 650;\n\n    text-transform: uppercase;\n\n    letter-spacing: 0.035em;\n  }\n\n  .users-table .p-datatable-tbody > tr > td {\n    padding: 14px 16px;\n\n    color: #3f3f46;\n\n    border-color: #f0f0f1;\n\n    font-size: 0.85rem;\n  }\n\n  .users-table .p-datatable-tbody > tr:hover {\n    background: #fafafa;\n  }\n\n  .users-table .p-paginator {\n    border: 0;\n    border-top: 1px solid #e4e4e7;\n\n    border-radius: 0;\n  }\n}\n\n.actions-column[_ngcontent-%COMP%] {\n  width: 110px;\n\n  text-align: right;\n}\n\n\n\n\n\n\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n\n  gap: 10px;\n\n  font-weight: 600;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 34px;\n  height: 34px;\n\n  flex: 0 0 34px;\n\n  color: #7e22ce;\n\n  background: #f5e6fb;\n\n  border-radius: 50%;\n\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n\n\n\n\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n\n  padding: 5px 9px;\n\n  color: #52525b;\n\n  background: #f4f4f5;\n\n  border-radius: 999px;\n\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n\n.badge-admin[_ngcontent-%COMP%] {\n  color: #7e22ce;\n\n  background: #f5e6fb;\n}\n\n\n\n\n\n\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n\n  gap: 6px;\n\n  font-size: 0.78rem;\n  font-weight: 500;\n\n  > span {\n    width: 7px;\n    height: 7px;\n\n    border-radius: 50%;\n  }\n}\n\n.status-active[_ngcontent-%COMP%] {\n  color: #15803d;\n\n  > span {\n    background: #22c55e;\n  }\n}\n\n.status-inactive[_ngcontent-%COMP%] {\n  color: #71717a;\n\n  > span {\n    background: #a1a1aa;\n  }\n}\n\n\n\n\n\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n\n  gap: 5px;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 34px;\n  height: 34px;\n\n  padding: 0;\n\n  color: #52525b;\n\n  background: transparent;\n\n  border: 0;\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #7e22ce;\n\n    background: #f5e6fb;\n  }\n\n  &.danger:hover {\n    color: #dc2626;\n\n    background: #fef2f2;\n  }\n\n  &.success:hover {\n    color: #15803d;\n\n    background: #f0fdf4;\n  }\n}\n\n\n\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  gap: 7px;\n\n  padding: 50px 20px;\n\n  color: #71717a;\n\n  text-align: center;\n\n  > i {\n    margin-bottom: 6px;\n\n    color: #d4d4d8;\n\n    font-size: 2rem;\n  }\n\n  strong {\n    color: #3f3f46;\n  }\n\n  span {\n    font-size: 0.82rem;\n  }\n}\n\n\n\n\n\n\n.user-form[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-columns:\n    repeat(\n      2,\n      minmax(0, 1fr)\n    );\n\n  gap: 18px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n\n  gap: 7px;\n\n  label {\n    color: #3f3f46;\n\n    font-size: 0.8rem;\n    font-weight: 600;\n\n    span {\n      color: #dc2626;\n    }\n  }\n\n  input {\n    width: 100%;\n  }\n}\n\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n\n\n\n\n\n.form-options[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-columns:\n    repeat(\n      3,\n      minmax(0, 1fr)\n    );\n\n  gap: 10px;\n\n  margin-top: 22px;\n}\n\n.checkbox-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n\n  gap: 9px;\n\n  padding: 12px;\n\n  background: #fafafa;\n\n  border: 1px solid #e4e4e7;\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  input {\n    width: 17px;\n    height: 17px;\n\n    margin-top: 1px;\n\n    accent-color: #7e22ce;\n  }\n\n  > span {\n    display: flex;\n    flex-direction: column;\n\n    gap: 2px;\n  }\n\n  strong {\n    color: #3f3f46;\n\n    font-size: 0.78rem;\n  }\n\n  small {\n    color: #71717a;\n\n    font-size: 0.7rem;\n\n    line-height: 1.35;\n  }\n}\n\n\n\n\n\n\n[_nghost-%COMP%]     {\n\n  .user-dialog .p-dialog-header {\n    padding-bottom: 12px;\n  }\n\n  .user-dialog .p-dialog-content {\n    overflow: visible;\n  }\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  gap: 10px;\n\n  margin-top: 24px;\n}\n\n\n\n\n\n\n.confirm-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n\n  gap: 14px;\n\n  padding-top: 4px;\n\n  p {\n    margin: 5px 0 0;\n\n    color: #71717a;\n\n    font-size: 0.82rem;\n\n    line-height: 1.5;\n  }\n}\n\n.confirm-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 42px;\n  height: 42px;\n\n  flex: 0 0 42px;\n\n  color: #dc2626;\n\n  background: #fef2f2;\n\n  border-radius: 50%;\n}\n\n\n\n\n\n\n@media (max-width: 1000px) {\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns:\n      repeat(\n        2,\n        minmax(0, 1fr)\n      );\n  }\n}\n\n\n@media (max-width: 768px) {\n\n  .users-page[_ngcontent-%COMP%] {\n    padding:\n      22px\n      16px\n      36px\n      80px;\n  }\n\n  .page-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n\n    h1 {\n      font-size: 1.7rem;\n    }\n\n    .primary-button {\n      align-self: flex-start;\n    }\n  }\n\n  .table-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .full-width[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n\n  .form-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n@media (max-width: 520px) {\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n\n    gap: 10px;\n  }\n\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 13px;\n\n    gap: 9px;\n  }\n\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n\n    flex-basis: 36px;\n  }\n\n  .stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n\n\n@media (prefers-reduced-motion: reduce) {\n\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition: none !important;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Usuarios, [{
        type: Component,
        args: [{ selector: 'app-usuarios', imports: [
                    FormsModule,
                    ButtonDirective,
                    DialogModule,
                    InputText,
                    TableModule,
                    ToastModule,
                    Navbar
                ], providers: [
                    MessageService
                ], template: "<!-- <app-navbar></app-navbar> -->\n\n<p-toast\n  position=\"bottom-right\"\n  [life]=\"3000\"\n/>\n\n<section class=\"users-page\">\n\n  <header class=\"page-header\">\n\n    <div>\n      <span class=\"page-eyebrow\">\n        Administraci\u00F3n\n      </span>\n\n      <h1>Usuarios</h1>\n\n      <p>\n        Gestion\u00E1 los usuarios y accesos de\n        <strong>{{ tenantName() || 'la empresa' }}</strong>.\n      </p>\n    </div>\n\n    <button\n      pButton\n      type=\"button\"\n      class=\"primary-button\"\n      (click)=\"openCreate()\"\n    >\n      <i class=\"pi pi-plus\"></i>\n      Nuevo usuario\n    </button>\n\n  </header>\n\n\n  <div class=\"stats-grid\">\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon\">\n        <i class=\"pi pi-users\"></i>\n      </div>\n\n      <div>\n        <span>Total</span>\n        <strong>{{ users().length }}</strong>\n      </div>\n\n    </article>\n\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon success\">\n        <i class=\"pi pi-check-circle\"></i>\n      </div>\n\n      <div>\n        <span>Activos</span>\n        <strong>{{ activeUsers() }}</strong>\n      </div>\n\n    </article>\n\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon warning\">\n        <i class=\"pi pi-user-minus\"></i>\n      </div>\n\n      <div>\n        <span>Inactivos</span>\n        <strong>{{ inactiveUsers() }}</strong>\n      </div>\n\n    </article>\n\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon admin\">\n        <i class=\"pi pi-shield\"></i>\n      </div>\n\n      <div>\n        <span>Administradores</span>\n        <strong>{{ admins() }}</strong>\n      </div>\n\n    </article>\n\n  </div>\n\n\n  <section class=\"table-card\">\n\n    <div class=\"table-toolbar\">\n\n      <div>\n        <h2>Usuarios</h2>\n\n        <span>\n          {{ filteredUsers().length }}\n          resultados\n        </span>\n      </div>\n\n\n      <div class=\"search-wrapper\">\n\n        <i\n          class=\"pi pi-search\"\n          aria-hidden=\"true\"\n        ></i>\n\n        <input\n          pInputText\n          type=\"search\"\n          placeholder=\"Buscar usuario...\"\n          aria-label=\"Buscar usuario\"\n          [ngModel]=\"search()\"\n          (ngModelChange)=\"search.set($event)\"\n        />\n\n      </div>\n\n      <button pButton type=\"button\" [text]=\"true\" [rounded]=\"true\" severity=\"secondary\" title=\"Restablecer filtros\" aria-label=\"Restablecer filtros\" (click)=\"resetFilters()\"><i class=\"pi pi-filter-slash\"></i></button>\n\n    </div>\n\n\n    <p-table\n      [value]=\"filteredUsers()\"\n      [loading]=\"loading()\"\n      [paginator]=\"filteredUsers().length > 10\"\n      [rows]=\"10\"\n      [rowsPerPageOptions]=\"[10, 25, 50]\"\n      [scrollable]=\"true\"\n      styleClass=\"users-table\"\n    >\n\n      <ng-template #header>\n\n        <tr>\n          <th pSortableColumn=\"first_name\">Nombre <p-sort-icon field=\"first_name\" /></th>\n          <th pSortableColumn=\"username\">Usuario <p-sort-icon field=\"username\" /></th>\n          <th pSortableColumn=\"email\">Email <p-sort-icon field=\"email\" /></th>\n          <th pSortableColumn=\"role\">Rol <p-sort-icon field=\"role\" /></th>\n          <th pSortableColumn=\"is_active\">Estado <p-sort-icon field=\"is_active\" /></th>\n          <th pSortableColumn=\"is_staff\">Acceso <p-sort-icon field=\"is_staff\" /></th>\n\n          <th class=\"actions-column\">\n            Acciones\n          </th>\n        </tr>\n\n      </ng-template>\n\n\n      <ng-template\n        #body\n        let-user\n      >\n\n        <tr>\n\n          <td>\n\n            <div class=\"user-cell\">\n\n              <div class=\"avatar\">\n                {{\n                  (\n                    user.first_name ||\n                    user.username\n                  )\n                    .charAt(0)\n                    .toUpperCase()\n                }}\n              </div>\n\n              <span>\n                {{ getDisplayName(user) }}\n              </span>\n\n            </div>\n\n          </td>\n\n\n          <td>\n            {{ user.username }}\n          </td>\n\n\n          <td>\n            {{ user.email || '-' }}\n          </td>\n\n\n          <td>\n\n            <span\n              class=\"badge\"\n              [class.badge-admin]=\"\n                user.is_staff ||\n                user.is_superuser\n              \"\n            >\n              {{ getRole(user) }}\n            </span>\n\n          </td>\n\n\n          <td>\n\n            @if (user.user_active) {\n\n              <span class=\"status status-active\">\n                <span></span>\n                Activo\n              </span>\n\n            } @else {\n\n              <span class=\"status status-inactive\">\n                <span></span>\n                Inactivo\n              </span>\n\n            }\n\n          </td>\n\n\n          <td>\n\n            @if (user.membership_active) {\n\n              <span class=\"status status-active\">\n                <span></span>\n                Habilitado\n              </span>\n\n            } @else {\n\n              <span class=\"status status-inactive\">\n                <span></span>\n                Deshabilitado\n              </span>\n\n            }\n\n          </td>\n\n\n          <td>\n\n            <div class=\"actions\">\n\n              <button\n                type=\"button\"\n                class=\"icon-button\"\n                aria-label=\"Editar usuario\"\n                title=\"Editar\"\n                (click)=\"openEdit(user)\"\n              >\n                <i class=\"pi pi-pencil\"></i>\n              </button>\n\n\n              @if (user.membership_active) {\n\n                <button\n                  type=\"button\"\n                  class=\"icon-button danger\"\n                  aria-label=\"Desactivar acceso\"\n                  title=\"Desactivar acceso\"\n                  (click)=\"askDeactivate(user)\"\n                >\n                  <i class=\"pi pi-user-minus\"></i>\n                </button>\n\n              } @else {\n\n                <button\n                  type=\"button\"\n                  class=\"icon-button success\"\n                  aria-label=\"Reactivar acceso\"\n                  title=\"Reactivar acceso\"\n                  (click)=\"reactivate(user)\"\n                >\n                  <i class=\"pi pi-user-plus\"></i>\n                </button>\n\n              }\n\n            </div>\n\n          </td>\n\n        </tr>\n\n      </ng-template>\n\n\n      <ng-template #emptymessage>\n\n        <tr>\n\n          <td colspan=\"7\">\n\n            <div class=\"empty-state\">\n\n              <i class=\"pi pi-users\"></i>\n\n              <strong>\n                No hay usuarios\n              </strong>\n\n              <span>\n                No encontramos usuarios\n                con los filtros actuales.\n              </span>\n\n            </div>\n\n          </td>\n\n        </tr>\n\n      </ng-template>\n\n    </p-table>\n\n  </section>\n\n</section>\n\n\n<p-dialog\n  [visible]=\"dialogVisible()\"\n  (visibleChange)=\"dialogVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [header]=\"\n    editingId() === null\n      ? 'Nuevo usuario'\n      : 'Editar usuario'\n  \"\n  [style]=\"{\n    width: 'min(680px, calc(100vw - 32px))'\n  }\"\n  styleClass=\"user-dialog\"\n>\n\n  <form\n    class=\"user-form\"\n    (ngSubmit)=\"saveUser()\"\n  >\n\n    <div class=\"form-grid\">\n\n      <div class=\"field\">\n\n        <label for=\"first_name\">\n          Nombre\n        </label>\n\n        <input\n          pInputText\n          id=\"first_name\"\n          name=\"first_name\"\n          [(ngModel)]=\"form.first_name\"\n          autocomplete=\"given-name\"\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"last_name\">\n          Apellido\n        </label>\n\n        <input\n          pInputText\n          id=\"last_name\"\n          name=\"last_name\"\n          [(ngModel)]=\"form.last_name\"\n          autocomplete=\"family-name\"\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"username\">\n          Username\n          <span>*</span>\n        </label>\n\n        <input\n          pInputText\n          id=\"username\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          autocomplete=\"username\"\n          required\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"email\">\n          Email\n        </label>\n\n        <input\n          pInputText\n          id=\"email\"\n          name=\"email\"\n          type=\"email\"\n          [(ngModel)]=\"form.email\"\n          autocomplete=\"email\"\n        />\n\n      </div>\n\n\n      <div class=\"field full-width\">\n\n        <label for=\"password\">\n\n          @if (editingId() === null) {\n            Contrase\u00F1a\n            <span>*</span>\n          } @else {\n            Nueva contrase\u00F1a\n          }\n\n        </label>\n\n        <input\n          pInputText\n          id=\"password\"\n          name=\"password\"\n          type=\"password\"\n          [(ngModel)]=\"form.password\"\n          autocomplete=\"new-password\"\n          [placeholder]=\"\n            editingId() === null\n              ? 'M\u00EDnimo 6 caracteres'\n              : 'Dejar vac\u00EDo para conservarla'\n          \"\n        />\n\n      </div>\n\n    </div>\n\n\n    <div class=\"form-options\">\n\n      <label class=\"checkbox-option\">\n\n        <input\n          type=\"checkbox\"\n          name=\"is_staff\"\n          [(ngModel)]=\"form.is_staff\"\n        />\n\n        <span>\n          <strong>Administrador</strong>\n\n          <small>\n            Puede administrar usuarios.\n          </small>\n        </span>\n\n      </label>\n\n\n      @if (editingId() !== null) {\n\n        <label class=\"checkbox-option\">\n\n          <input\n            type=\"checkbox\"\n            name=\"user_active\"\n            [(ngModel)]=\"form.user_active\"\n          />\n\n          <span>\n            <strong>Usuario activo</strong>\n\n            <small>\n              Estado global del usuario.\n            </small>\n          </span>\n\n        </label>\n\n\n        <label class=\"checkbox-option\">\n\n          <input\n            type=\"checkbox\"\n            name=\"membership_active\"\n            [(ngModel)]=\"form.membership_active\"\n          />\n\n          <span>\n            <strong>Acceso al tenant</strong>\n\n            <small>\n              Permite ingresar a esta empresa.\n            </small>\n          </span>\n\n        </label>\n\n      }\n\n    </div>\n\n\n    <div class=\"dialog-actions\">\n\n      <button\n        type=\"button\"\n        class=\"secondary-button\"\n        (click)=\"closeDialog()\"\n        [disabled]=\"saving()\"\n      >\n        Cancelar\n      </button>\n\n\n      <button\n        pButton\n        type=\"submit\"\n        class=\"primary-button\"\n        [disabled]=\"saving()\"\n      >\n\n        @if (saving()) {\n\n          <i class=\"pi pi-spinner pi-spin\"></i>\n          Guardando...\n\n        } @else {\n\n          <i class=\"pi pi-check\"></i>\n          Guardar\n\n        }\n\n      </button>\n\n    </div>\n\n  </form>\n\n</p-dialog>\n\n\n<p-dialog\n  [visible]=\"confirmVisible()\"\n  (visibleChange)=\"confirmVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  header=\"Desactivar acceso\"\n  [style]=\"{\n    width: 'min(460px, calc(100vw - 32px))'\n  }\"\n>\n\n  <div class=\"confirm-content\">\n\n    <div class=\"confirm-icon\">\n      <i class=\"pi pi-exclamation-triangle\"></i>\n    </div>\n\n    <div>\n\n      <strong>\n        \u00BFDesactivar acceso?\n      </strong>\n\n      <p>\n        El usuario\n        <strong>\n          {{ userToDeactivate()?.username }}\n        </strong>\n        dejar\u00E1 de poder ingresar a\n        {{ tenantName() }}.\n      </p>\n\n      <p>\n        El usuario global no ser\u00E1 eliminado.\n      </p>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"dialog-actions\">\n\n    <button\n      type=\"button\"\n      class=\"secondary-button\"\n      (click)=\"confirmVisible.set(false)\"\n      [disabled]=\"saving()\"\n    >\n      Cancelar\n    </button>\n\n\n    <button\n      type=\"button\"\n      class=\"danger-button\"\n      (click)=\"deactivate()\"\n      [disabled]=\"saving()\"\n    >\n\n      @if (saving()) {\n\n        <i class=\"pi pi-spinner pi-spin\"></i>\n\n      } @else {\n\n        <i class=\"pi pi-user-minus\"></i>\n\n      }\n\n      Desactivar\n\n    </button>\n\n  </div>\n\n</p-dialog>\n", styles: [":host {\n  display: block;\n}\n\n\n/* =========================================\n   PAGE\n   ========================================= */\n\n.users-page {\n  min-height: 100vh;\n\n  padding:\n    32px\n    32px\n    48px\n    96px;\n\n  background: #f8fafc;\n}\n\n\n/* =========================================\n   HEADER\n   ========================================= */\n\n.page-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  gap: 24px;\n\n  max-width: 1500px;\n\n  margin: 0 auto 28px;\n\n  h1 {\n    margin: 4px 0 6px;\n\n    color: #18181b;\n\n    font-size: 2rem;\n    font-weight: 700;\n\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n\n    color: #71717a;\n\n    font-size: 0.925rem;\n  }\n}\n\n.page-eyebrow {\n  color: #9810d5;\n\n  font-size: 0.78rem;\n  font-weight: 700;\n\n  text-transform: uppercase;\n\n  letter-spacing: 0.08em;\n}\n\n\n/* =========================================\n   TOAST\n   ========================================= */\n\n:host ::ng-deep {\n\n  .p-toast {\n    width: min(\n      380px,\n      calc(100vw - 32px)\n    );\n  }\n\n  .p-toast-message {\n    border-radius: 12px;\n\n    box-shadow:\n      0 10px 30px\n      rgba(0, 0, 0, 0.12);\n  }\n}\n\n\n/* =========================================\n   BUTTONS\n   ========================================= */\n\n.primary-button,\n.secondary-button,\n.danger-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  min-height: 42px;\n\n  gap: 8px;\n\n  padding: 0 16px;\n\n  border: 0;\n  border-radius: 9px;\n\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n\n  cursor: pointer;\n\n  transition:\n    background 150ms ease,\n    color 150ms ease,\n    border-color 150ms ease,\n    box-shadow 150ms ease;\n\n  &:disabled {\n    opacity: 0.55;\n\n    cursor: not-allowed;\n  }\n}\n\n\nbutton.p-button.primary-button,\n.primary-button {\n  color: #ffffff;\n\n  background:\n    linear-gradient(\n      90deg,\n      #7e22ce,\n      #b100e8\n    );\n\n  box-shadow:\n    0 4px 12px\n    rgba(126, 34, 206, 0.15);\n\n  &:hover:not(:disabled) {\n    background:\n      linear-gradient(\n        90deg,\n        #6b21a8,\n        #9900c7\n      );\n  }\n}\n\n\n.secondary-button {\n  color: #52525b;\n\n  background: #ffffff;\n\n  border: 1px solid #d4d4d8;\n\n  &:hover:not(:disabled) {\n    background: #f4f4f5;\n  }\n}\n\n\n.danger-button {\n  color: #ffffff;\n\n  background: #dc2626;\n\n  &:hover:not(:disabled) {\n    background: #b91c1c;\n  }\n}\n\n\n/* =========================================\n   STATS\n   ========================================= */\n\n.stats-grid {\n  display: grid;\n\n  grid-template-columns:\n    repeat(\n      4,\n      minmax(0, 1fr)\n    );\n\n  max-width: 1500px;\n\n  gap: 16px;\n\n  margin: 0 auto 20px;\n}\n\n.stat-card {\n  display: flex;\n  align-items: center;\n\n  min-width: 0;\n\n  gap: 14px;\n\n  padding: 18px;\n\n  background: #ffffff;\n\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n\n  box-shadow:\n    0 1px 3px\n    rgba(0, 0, 0, 0.025);\n\n  > div:last-child {\n    display: flex;\n    flex-direction: column;\n\n    gap: 2px;\n  }\n\n  span {\n    color: #71717a;\n\n    font-size: 0.8rem;\n  }\n\n  strong {\n    color: #18181b;\n\n    font-size: 1.45rem;\n    font-weight: 700;\n  }\n}\n\n.stat-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 44px;\n  height: 44px;\n\n  flex: 0 0 44px;\n\n  color: #7e22ce;\n\n  background: #f5e6fb;\n\n  border-radius: 11px;\n\n  &.success {\n    color: #15803d;\n\n    background: #dcfce7;\n  }\n\n  &.warning {\n    color: #b45309;\n\n    background: #fef3c7;\n  }\n\n  &.admin {\n    color: #2563eb;\n\n    background: #dbeafe;\n  }\n}\n\n\n/* =========================================\n   TABLE CARD\n   ========================================= */\n\n.table-card {\n  max-width: 1500px;\n\n  margin: 0 auto;\n\n  overflow: hidden;\n\n  background: #ffffff;\n\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n\n  box-shadow:\n    0 1px 4px\n    rgba(0, 0, 0, 0.025);\n}\n\n\n/* =========================================\n   TOOLBAR\n   ========================================= */\n\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 20px;\n\n  padding: 20px;\n\n  border-bottom: 1px solid #e4e4e7;\n\n  h2 {\n    margin: 0 0 3px;\n\n    color: #18181b;\n\n    font-size: 1rem;\n    font-weight: 650;\n  }\n\n  > div:first-child > span {\n    color: #71717a;\n\n    font-size: 0.78rem;\n  }\n}\n\n\n.search-wrapper {\n  position: relative;\n\n  width: min(\n    320px,\n    100%\n  );\n\n  > i {\n    position: absolute;\n\n    top: 50%;\n    left: 13px;\n\n    z-index: 2;\n\n    color: #a1a1aa;\n\n    font-size: 0.9rem;\n\n    transform: translateY(-50%);\n  }\n\n  input {\n    width: 100%;\n    height: 42px;\n\n    padding-left: 38px;\n\n    border-radius: 9px;\n  }\n}\n\n\n/* =========================================\n   PRIMENG TABLE\n   ========================================= */\n\n:host ::ng-deep {\n\n  .users-table .p-datatable-table {\n    min-width: 900px;\n  }\n\n  .users-table .p-datatable-thead > tr > th {\n    padding: 13px 16px;\n\n    color: #71717a;\n\n    background: #fafafa;\n\n    border-color: #e4e4e7;\n\n    font-size: 0.75rem;\n    font-weight: 650;\n\n    text-transform: uppercase;\n\n    letter-spacing: 0.035em;\n  }\n\n  .users-table .p-datatable-tbody > tr > td {\n    padding: 14px 16px;\n\n    color: #3f3f46;\n\n    border-color: #f0f0f1;\n\n    font-size: 0.85rem;\n  }\n\n  .users-table .p-datatable-tbody > tr:hover {\n    background: #fafafa;\n  }\n\n  .users-table .p-paginator {\n    border: 0;\n    border-top: 1px solid #e4e4e7;\n\n    border-radius: 0;\n  }\n}\n\n.actions-column {\n  width: 110px;\n\n  text-align: right;\n}\n\n\n/* =========================================\n   USER\n   ========================================= */\n\n.user-cell {\n  display: flex;\n  align-items: center;\n\n  gap: 10px;\n\n  font-weight: 600;\n}\n\n.avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 34px;\n  height: 34px;\n\n  flex: 0 0 34px;\n\n  color: #7e22ce;\n\n  background: #f5e6fb;\n\n  border-radius: 50%;\n\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n\n/* =========================================\n   BADGES\n   ========================================= */\n\n.badge {\n  display: inline-flex;\n\n  padding: 5px 9px;\n\n  color: #52525b;\n\n  background: #f4f4f5;\n\n  border-radius: 999px;\n\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n\n.badge-admin {\n  color: #7e22ce;\n\n  background: #f5e6fb;\n}\n\n\n/* =========================================\n   STATUS\n   ========================================= */\n\n.status {\n  display: inline-flex;\n  align-items: center;\n\n  gap: 6px;\n\n  font-size: 0.78rem;\n  font-weight: 500;\n\n  > span {\n    width: 7px;\n    height: 7px;\n\n    border-radius: 50%;\n  }\n}\n\n.status-active {\n  color: #15803d;\n\n  > span {\n    background: #22c55e;\n  }\n}\n\n.status-inactive {\n  color: #71717a;\n\n  > span {\n    background: #a1a1aa;\n  }\n}\n\n\n/* =========================================\n   ACTIONS\n   ========================================= */\n\n.actions {\n  display: flex;\n  justify-content: flex-end;\n\n  gap: 5px;\n}\n\n.icon-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 34px;\n  height: 34px;\n\n  padding: 0;\n\n  color: #52525b;\n\n  background: transparent;\n\n  border: 0;\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #7e22ce;\n\n    background: #f5e6fb;\n  }\n\n  &.danger:hover {\n    color: #dc2626;\n\n    background: #fef2f2;\n  }\n\n  &.success:hover {\n    color: #15803d;\n\n    background: #f0fdf4;\n  }\n}\n\n\n/* =========================================\n   EMPTY\n   ========================================= */\n\n.empty-state {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  gap: 7px;\n\n  padding: 50px 20px;\n\n  color: #71717a;\n\n  text-align: center;\n\n  > i {\n    margin-bottom: 6px;\n\n    color: #d4d4d8;\n\n    font-size: 2rem;\n  }\n\n  strong {\n    color: #3f3f46;\n  }\n\n  span {\n    font-size: 0.82rem;\n  }\n}\n\n\n/* =========================================\n   FORM\n   ========================================= */\n\n.user-form {\n  padding-top: 4px;\n}\n\n.form-grid {\n  display: grid;\n\n  grid-template-columns:\n    repeat(\n      2,\n      minmax(0, 1fr)\n    );\n\n  gap: 18px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n\n  gap: 7px;\n\n  label {\n    color: #3f3f46;\n\n    font-size: 0.8rem;\n    font-weight: 600;\n\n    span {\n      color: #dc2626;\n    }\n  }\n\n  input {\n    width: 100%;\n  }\n}\n\n.full-width {\n  grid-column: 1 / -1;\n}\n\n\n/* =========================================\n   FORM OPTIONS\n   ========================================= */\n\n.form-options {\n  display: grid;\n\n  grid-template-columns:\n    repeat(\n      3,\n      minmax(0, 1fr)\n    );\n\n  gap: 10px;\n\n  margin-top: 22px;\n}\n\n.checkbox-option {\n  display: flex;\n  align-items: flex-start;\n\n  gap: 9px;\n\n  padding: 12px;\n\n  background: #fafafa;\n\n  border: 1px solid #e4e4e7;\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  input {\n    width: 17px;\n    height: 17px;\n\n    margin-top: 1px;\n\n    accent-color: #7e22ce;\n  }\n\n  > span {\n    display: flex;\n    flex-direction: column;\n\n    gap: 2px;\n  }\n\n  strong {\n    color: #3f3f46;\n\n    font-size: 0.78rem;\n  }\n\n  small {\n    color: #71717a;\n\n    font-size: 0.7rem;\n\n    line-height: 1.35;\n  }\n}\n\n\n/* =========================================\n   DIALOG\n   ========================================= */\n\n:host ::ng-deep {\n\n  .user-dialog .p-dialog-header {\n    padding-bottom: 12px;\n  }\n\n  .user-dialog .p-dialog-content {\n    overflow: visible;\n  }\n}\n\n.dialog-actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  gap: 10px;\n\n  margin-top: 24px;\n}\n\n\n/* =========================================\n   CONFIRM\n   ========================================= */\n\n.confirm-content {\n  display: flex;\n  align-items: flex-start;\n\n  gap: 14px;\n\n  padding-top: 4px;\n\n  p {\n    margin: 5px 0 0;\n\n    color: #71717a;\n\n    font-size: 0.82rem;\n\n    line-height: 1.5;\n  }\n}\n\n.confirm-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 42px;\n  height: 42px;\n\n  flex: 0 0 42px;\n\n  color: #dc2626;\n\n  background: #fef2f2;\n\n  border-radius: 50%;\n}\n\n\n/* =========================================\n   RESPONSIVE\n   ========================================= */\n\n@media (max-width: 1000px) {\n\n  .stats-grid {\n    grid-template-columns:\n      repeat(\n        2,\n        minmax(0, 1fr)\n      );\n  }\n}\n\n\n@media (max-width: 768px) {\n\n  .users-page {\n    padding:\n      22px\n      16px\n      36px\n      80px;\n  }\n\n  .page-header {\n    align-items: stretch;\n    flex-direction: column;\n\n    h1 {\n      font-size: 1.7rem;\n    }\n\n    .primary-button {\n      align-self: flex-start;\n    }\n  }\n\n  .table-toolbar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .search-wrapper {\n    width: 100%;\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .full-width {\n    grid-column: auto;\n  }\n\n  .form-options {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n@media (max-width: 520px) {\n\n  .stats-grid {\n    grid-template-columns: 1fr 1fr;\n\n    gap: 10px;\n  }\n\n  .stat-card {\n    padding: 13px;\n\n    gap: 9px;\n  }\n\n  .stat-icon {\n    width: 36px;\n    height: 36px;\n\n    flex-basis: 36px;\n  }\n\n  .stat-card strong {\n    font-size: 1.15rem;\n  }\n}\n\n\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    transition: none !important;\n  }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Usuarios, { className: "Usuarios", filePath: "src/app/pages/usuarios/usuarios.ts", lineNumber: 60 }); })();
