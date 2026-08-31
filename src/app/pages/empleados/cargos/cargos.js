import { Component, computed, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { Api } from '../../../services/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
const _c0 = () => ({ width: "min(460px, calc(100vw - 32px))" });
const _forTrack0 = ($index, $item) => $item.id;
function Cargos_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 28);
    i0.ɵɵtext(2, "Nombre ");
    i0.ɵɵelement(3, "p-sort-icon", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 30);
    i0.ɵɵtext(5, "Empleados asignados ");
    i0.ɵɵelement(6, "p-sort-icon", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 32);
    i0.ɵɵtext(8, "Acciones");
    i0.ɵɵelementEnd()();
} }
function Cargos_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td", 33)(7, "button", 34);
    i0.ɵɵlistener("click", function Cargos_ng_template_21_Template_button_click_7_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(item_r3)); });
    i0.ɵɵelement(8, "i", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 36);
    i0.ɵɵlistener("click", function Cargos_ng_template_21_Template_button_click_9_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDelete(item_r3)); });
    i0.ɵɵelement(10, "i", 37);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.nombre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.employee_count);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true);
} }
function Cargos_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 38)(2, "div", 39);
    i0.ɵɵelement(3, "i", 40);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "No hay cargos");
    i0.ɵɵelementEnd()()()();
} }
function Cargos_For_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 17)(1, "div", 41)(2, "div", 42);
    i0.ɵɵelement(3, "i", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "Cargo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 43)(10, "div")(11, "small");
    i0.ɵɵtext(12, "Empleados asignados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 44)(16, "button", 45);
    i0.ɵɵlistener("click", function Cargos_For_27_Template_button_click_16_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(item_r6)); });
    i0.ɵɵelement(17, "i", 35);
    i0.ɵɵtext(18, " Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 46);
    i0.ɵɵlistener("click", function Cargos_For_27_Template_button_click_19_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDelete(item_r6)); });
    i0.ɵɵelement(20, "i", 37);
    i0.ɵɵtext(21, " Eliminar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(item_r6.nombre);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r6.employee_count);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("outlined", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("text", true);
} }
function Cargos_ForEmpty_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "i", 40);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay cargos");
    i0.ɵɵelementEnd()();
} }
export class Cargos {
    positionsChanged = new EventEmitter();
    api = inject(Api);
    messages = inject(MessageService);
    positions = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "positions" }] : /* istanbul ignore next */ []));
    search = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    dialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "dialogVisible" }] : /* istanbul ignore next */ []));
    confirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "confirmVisible" }] : /* istanbul ignore next */ []));
    editingId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    toDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "toDelete" }] : /* istanbul ignore next */ []));
    name = '';
    filtered = computed(() => {
        const term = this.search().trim().toLowerCase();
        return this.positions().filter(item => !term || item.nombre.toLowerCase().includes(term));
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filtered" }] : /* istanbul ignore next */ []));
    ngOnInit() { void this.load(); }
    async load() {
        this.loading.set(true);
        try {
            this.positions.set((await firstValueFrom(this.api.getEmployeePositions())).positions);
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.loading.set(false);
        }
    }
    openCreate() { this.editingId.set(null); this.name = ''; this.dialogVisible.set(true); }
    openEdit(item) { this.editingId.set(item.id); this.name = item.nombre; this.dialogVisible.set(true); }
    async save() {
        const nombre = this.name.trim();
        if (!nombre) {
            this.messages.add({ severity: 'error', summary: 'Error', detail: 'El nombre es obligatorio.' });
            return;
        }
        this.saving.set(true);
        try {
            const id = this.editingId();
            if (id === null)
                await firstValueFrom(this.api.createEmployeePosition({ nombre }));
            else
                await firstValueFrom(this.api.updateEmployeePosition(id, { nombre }));
            this.dialogVisible.set(false);
            await this.load();
            this.positionsChanged.emit();
            this.messages.add({ severity: 'success', summary: 'Correcto', detail: id === null ? 'Cargo creado.' : 'Cargo actualizado.' });
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.saving.set(false);
        }
    }
    askDelete(item) { this.toDelete.set(item); this.confirmVisible.set(true); }
    async delete() {
        const item = this.toDelete();
        if (!item)
            return;
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteEmployeePosition(item.id));
            this.confirmVisible.set(false);
            await this.load();
            this.positionsChanged.emit();
            this.messages.add({ severity: 'success', summary: 'Correcto', detail: 'Cargo eliminado.' });
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.saving.set(false);
        }
    }
    error(error) {
        const detail = error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.';
        this.messages.add({ severity: 'error', summary: 'Error', detail });
    }
    static ɵfac = function Cargos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Cargos)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Cargos, selectors: [["app-cargos"]], outputs: { positionsChanged: "positionsChanged" }, features: [i0.ɵɵProvidersFeature([MessageService])], decls: 47, vars: 25, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right"], [1, "groups-card"], [1, "table-toolbar"], ["pButton", "", "type", "button", 1, "primary-button", 3, "click"], [1, "pi", "pi-plus"], ["id", "positions-filter-toggle", "type", "checkbox", 1, "filter-toggle-input"], ["for", "positions-filter-toggle", "title", "Mostrar u ocultar filtros", "aria-label", "Mostrar u ocultar filtros", 1, "filter-toggle"], [1, "pi", "pi-filter"], [1, "filters"], [1, "search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar cargo...", 3, "ngModelChange", "ngModel"], ["styleClass", "positions-table", 1, "desktop-data-table", 3, "value", "loading", "paginator", "rows"], [1, "mobile-record-list"], ["tabindex", "0", 1, "mobile-record-card"], [1, "mobile-record-empty"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [3, "ngSubmit"], ["for", "position_name"], ["pInputText", "", "id", "position_name", "name", "position_name", 3, "ngModelChange", "ngModel"], [1, "dialog-actions"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "outlined"], ["pButton", "", "type", "submit", 3, "loading"], ["header", "Eliminar cargo", 3, "visibleChange", "visible", "modal"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "loading"], ["pSortableColumn", "nombre"], ["field", "nombre"], ["pSortableColumn", "employee_count"], ["field", "employee_count"], [1, "actions-column"], [1, "row-actions"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "text", "rounded"], [1, "pi", "pi-pencil"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "text", "rounded"], [1, "pi", "pi-trash"], ["colspan", "3"], [1, "empty"], [1, "pi", "pi-briefcase"], [1, "mobile-record-header"], [1, "mobile-record-avatar"], [1, "mobile-record-grid"], [1, "mobile-record-actions"], ["pButton", "", "type", "button", "severity", "secondary", "size", "small", 3, "click", "outlined"], ["pButton", "", "type", "button", "severity", "danger", "size", "small", 3, "click", "text"]], template: function Cargos_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "p-toast", 3);
            i0.ɵɵelementStart(1, "section", 4)(2, "div", 5)(3, "div")(4, "h2");
            i0.ɵɵtext(5, "Cargos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 6);
            i0.ɵɵlistener("click", function Cargos_Template_button_click_8_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(9, "i", 7);
            i0.ɵɵtext(10, " Nuevo cargo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 8);
            i0.ɵɵelementStart(12, "label", 9);
            i0.ɵɵelement(13, "i", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 11)(15, "span", 12);
            i0.ɵɵelement(16, "i", 13);
            i0.ɵɵelementStart(17, "input", 14);
            i0.ɵɵlistener("ngModelChange", function Cargos_Template_input_ngModelChange_17_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "p-table", 15);
            i0.ɵɵtemplate(19, Cargos_ng_template_19_Template, 9, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(21, Cargos_ng_template_21_Template, 11, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(23, Cargos_ng_template_23_Template, 6, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 16);
            i0.ɵɵrepeaterCreate(26, Cargos_For_27_Template, 22, 4, "article", 17, _forTrack0, false, Cargos_ForEmpty_28_Template, 4, 0, "div", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "p-dialog", 19);
            i0.ɵɵlistener("visibleChange", function Cargos_Template_p_dialog_visibleChange_29_listener($event) { return ctx.dialogVisible.set($event); });
            i0.ɵɵelementStart(30, "form", 20);
            i0.ɵɵlistener("ngSubmit", function Cargos_Template_form_ngSubmit_30_listener() { return ctx.save(); });
            i0.ɵɵelementStart(31, "label", 21);
            i0.ɵɵtext(32, "Nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function Cargos_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(34, "div", 23)(35, "button", 24);
            i0.ɵɵlistener("click", function Cargos_Template_button_click_35_listener() { return ctx.dialogVisible.set(false); });
            i0.ɵɵtext(36, "Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "button", 25);
            i0.ɵɵtext(38, "Guardar");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(39, "p-dialog", 26);
            i0.ɵɵlistener("visibleChange", function Cargos_Template_p_dialog_visibleChange_39_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(40, "p");
            i0.ɵɵtext(41, "Los empleados asignados quedar\u00E1n sin cargo.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 23)(43, "button", 24);
            i0.ɵɵlistener("click", function Cargos_Template_button_click_43_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(44, "Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "button", 27);
            i0.ɵɵlistener("click", function Cargos_Template_button_click_45_listener() { return ctx.delete(); });
            i0.ɵɵtext(46, "Eliminar");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.filtered().length, " resultados");
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", ctx.filtered())("loading", ctx.loading())("paginator", ctx.filtered().length > 10)("rows", 10);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.filtered());
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(23, _c0));
            i0.ɵɵproperty("visible", ctx.dialogVisible())("modal", true)("draggable", false)("resizable", false)("header", ctx.editingId() === null ? "Nuevo cargo" : "Editar cargo");
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.name);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(24, _c0));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective, Dialog, InputText, TableModule, i2.Table, i2.SortableColumn, i2.SortIcon, Toast], styles: [".groups-card[_ngcontent-%COMP%] { overflow: hidden; background: #fff; border: 1px solid #e4e4e7; border-radius: 14px; }\n.toolbar[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px; border-bottom: 1px solid #e4e4e7; }\n.toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0 0 3px; font-size: 1rem; }\n.toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #71717a; font-size: .78rem; }\n.toolbar-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.search[_ngcontent-%COMP%] { position: relative; display: block; }\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { position: absolute; top: 50%; left: 12px; transform: translateY(-50%); z-index: 1; }\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 280px; padding-left: 36px; }\n.actions-column[_ngcontent-%COMP%] { width: 130px; text-align: right; }\n.row-actions[_ngcontent-%COMP%] { text-align: right; white-space: nowrap; }\n.empty[_ngcontent-%COMP%] { display: flex; align-items: center; flex-direction: column; gap: 7px; padding: 60px 20px; color: #71717a; }\nform[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; }\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: .75rem; font-weight: 600; }\n.dialog-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }\n.confirm-copy[_ngcontent-%COMP%] { display: flex; gap: 12px; align-items: flex-start; }\n.confirm-copy[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] { color: #dc2626; font-size: 1.3rem; }\n.confirm-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #71717a; font-size: .8rem; }\n@media (max-width: 700px) { .toolbar[_ngcontent-%COMP%], .toolbar-actions[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; } .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Cargos, [{
        type: Component,
        args: [{ selector: 'app-cargos', imports: [FormsModule, ButtonDirective, Dialog, InputText, TableModule, Toast], providers: [MessageService], template: "<p-toast position=\"bottom-right\" />\n<section class=\"groups-card\">\n  <div class=\"table-toolbar\">\n    <div><h2>Cargos</h2><span>{{ filtered().length }} resultados</span></div>\n    <button pButton type=\"button\" class=\"primary-button\" (click)=\"openCreate()\"><i class=\"pi pi-plus\"></i> Nuevo cargo</button>\n    <input id=\"positions-filter-toggle\" class=\"filter-toggle-input\" type=\"checkbox\" />\n    <label for=\"positions-filter-toggle\" class=\"filter-toggle\" title=\"Mostrar u ocultar filtros\" aria-label=\"Mostrar u ocultar filtros\"><i class=\"pi pi-filter\"></i></label>\n    <div class=\"filters\"><span class=\"search\"><i class=\"pi pi-search\"></i><input pInputText type=\"search\" placeholder=\"Buscar cargo...\" [ngModel]=\"search()\" (ngModelChange)=\"search.set($event)\" /></span></div>\n  </div>\n  <p-table class=\"desktop-data-table\" [value]=\"filtered()\" [loading]=\"loading()\" [paginator]=\"filtered().length > 10\" [rows]=\"10\" styleClass=\"positions-table\">\n    <ng-template #header><tr><th pSortableColumn=\"nombre\">Nombre <p-sort-icon field=\"nombre\" /></th><th pSortableColumn=\"employee_count\">Empleados asignados <p-sort-icon field=\"employee_count\" /></th><th class=\"actions-column\">Acciones</th></tr></ng-template>\n    <ng-template #body let-item><tr><td><strong>{{ item.nombre }}</strong></td><td>{{ item.employee_count }}</td><td class=\"row-actions\"><button pButton type=\"button\" severity=\"secondary\" [text]=\"true\" [rounded]=\"true\" (click)=\"openEdit(item)\"><i class=\"pi pi-pencil\"></i></button><button pButton type=\"button\" severity=\"danger\" [text]=\"true\" [rounded]=\"true\" (click)=\"askDelete(item)\"><i class=\"pi pi-trash\"></i></button></td></tr></ng-template>\n    <ng-template #emptymessage><tr><td colspan=\"3\"><div class=\"empty\"><i class=\"pi pi-briefcase\"></i><strong>No hay cargos</strong></div></td></tr></ng-template>\n  </p-table>\n  <div class=\"mobile-record-list\">\n    @for (item of filtered(); track item.id) {\n      <article class=\"mobile-record-card\" tabindex=\"0\">\n        <div class=\"mobile-record-header\"><div class=\"mobile-record-avatar\"><i class=\"pi pi-briefcase\"></i></div><div><small>Cargo</small><strong>{{ item.nombre }}</strong></div></div>\n        <div class=\"mobile-record-grid\"><div><small>Empleados asignados</small><strong>{{ item.employee_count }}</strong></div></div>\n        <div class=\"mobile-record-actions\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" size=\"small\" (click)=\"openEdit(item)\"><i class=\"pi pi-pencil\"></i> Editar</button><button pButton type=\"button\" severity=\"danger\" [text]=\"true\" size=\"small\" (click)=\"askDelete(item)\"><i class=\"pi pi-trash\"></i> Eliminar</button></div>\n      </article>\n    } @empty { <div class=\"mobile-record-empty\"><i class=\"pi pi-briefcase\"></i><strong>No hay cargos</strong></div> }\n  </div>\n</section>\n<p-dialog [visible]=\"dialogVisible()\" (visibleChange)=\"dialogVisible.set($event)\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [header]=\"editingId() === null ? 'Nuevo cargo' : 'Editar cargo'\" [style]=\"{width:'min(460px, calc(100vw - 32px))'}\"><form (ngSubmit)=\"save()\"><label for=\"position_name\">Nombre</label><input pInputText id=\"position_name\" name=\"position_name\" [(ngModel)]=\"name\" /><div class=\"dialog-actions\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"dialogVisible.set(false)\">Cancelar</button><button pButton type=\"submit\" [loading]=\"saving()\">Guardar</button></div></form></p-dialog>\n<p-dialog [visible]=\"confirmVisible()\" (visibleChange)=\"confirmVisible.set($event)\" [modal]=\"true\" header=\"Eliminar cargo\" [style]=\"{width:'min(460px, calc(100vw - 32px))'}\"><p>Los empleados asignados quedar\u00E1n sin cargo.</p><div class=\"dialog-actions\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"confirmVisible.set(false)\">Cancelar</button><button pButton type=\"button\" severity=\"danger\" [loading]=\"saving()\" (click)=\"delete()\">Eliminar</button></div></p-dialog>\n", styles: [".groups-card { overflow: hidden; background: #fff; border: 1px solid #e4e4e7; border-radius: 14px; }\n.toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px; border-bottom: 1px solid #e4e4e7; }\n.toolbar h2 { margin: 0 0 3px; font-size: 1rem; }\n.toolbar span { color: #71717a; font-size: .78rem; }\n.toolbar-actions { display: flex; align-items: center; gap: 10px; }\n.search { position: relative; display: block; }\n.search i { position: absolute; top: 50%; left: 12px; transform: translateY(-50%); z-index: 1; }\n.search input { width: 280px; padding-left: 36px; }\n.actions-column { width: 130px; text-align: right; }\n.row-actions { text-align: right; white-space: nowrap; }\n.empty { display: flex; align-items: center; flex-direction: column; gap: 7px; padding: 60px 20px; color: #71717a; }\nform { display: flex; flex-direction: column; gap: 8px; }\nform input { width: 100%; }\nform label { font-size: .75rem; font-weight: 600; }\n.dialog-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }\n.confirm-copy { display: flex; gap: 12px; align-items: flex-start; }\n.confirm-copy > i { color: #dc2626; font-size: 1.3rem; }\n.confirm-copy p { color: #71717a; font-size: .8rem; }\n@media (max-width: 700px) { .toolbar, .toolbar-actions { align-items: stretch; flex-direction: column; } .search input { width: 100%; } }\n"] }]
    }], null, { positionsChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Cargos, { className: "Cargos", filePath: "src/app/pages/empleados/cargos/cargos.ts", lineNumber: 21 }); })();
