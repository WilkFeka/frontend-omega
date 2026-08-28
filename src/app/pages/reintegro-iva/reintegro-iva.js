import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { Api } from '../../services/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
const _c0 = () => ({ width: "min(500px, calc(100vw - 32px))" });
const _c1 = () => ({ width: "min(460px, calc(100vw - 32px))" });
function ReintegroIva_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 51);
    i0.ɵɵtext(2, "Beneficiario ");
    i0.ɵɵelement(3, "p-sort-icon", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th");
    i0.ɵɵtext(5, "Per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 53);
    i0.ɵɵtext(7, "Entrega ");
    i0.ɵɵelement(8, "p-sort-icon", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th", 55);
    i0.ɵɵtext(10, "Detalles ");
    i0.ɵɵelement(11, "p-sort-icon", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 57);
    i0.ɵɵtext(13, "Total ");
    i0.ɵɵelement(14, "p-sort-icon", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "th");
    i0.ɵɵelementEnd();
} }
function ReintegroIva_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 59);
    i0.ɵɵlistener("click", function ReintegroIva_ng_template_67_Template_tr_click_0_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openDetail(item_r3)); });
    i0.ɵɵelementStart(1, "td")(2, "div", 60)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 61);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td")(16, "div", 62)(17, "button", 63);
    i0.ɵɵlistener("click", function ReintegroIva_ng_template_67_Template_button_click_17_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(item_r3, $event)); });
    i0.ɵɵelement(18, "i", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 65);
    i0.ɵɵlistener("click", function ReintegroIva_ng_template_67_Template_button_click_19_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDelete(item_r3, $event)); });
    i0.ɵɵelement(20, "i", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "i", 15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", item_r3.nombre.charAt(0), "", item_r3.apellido.charAt(0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r3.apellido, ", ", item_r3.nombre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatPeriod());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.deliveryLabel(item_r3.delivery_method));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.detail_count);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(item_r3.total));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("text", true)("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true);
} }
function ReintegroIva_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 67)(2, "div", 68);
    i0.ɵɵelement(3, "i", 69);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "No hay beneficiarios");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Cre\u00E1 el primero para comenzar.");
    i0.ɵɵelementEnd()()()();
} }
export class ReintegroIva {
    api = inject(Api);
    router = inject(Router);
    route = inject(ActivatedRoute);
    messages = inject(MessageService);
    rows = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []));
    total = signal('0', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    cashTotal = signal('0', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "cashTotal" }] : /* istanbul ignore next */ []));
    transferTotal = signal('0', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "transferTotal" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    search = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    periodDate = signal(this.initialPeriod(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodDate" }] : /* istanbul ignore next */ []));
    dialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "dialogVisible" }] : /* istanbul ignore next */ []));
    confirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "confirmVisible" }] : /* istanbul ignore next */ []));
    editing = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editing" }] : /* istanbul ignore next */ []));
    toDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "toDelete" }] : /* istanbul ignore next */ []));
    form = { nombre: '', apellido: '', delivery_method: 'TRANSFERENCIA' };
    deliveryOptions = [
        { label: 'Transferencia', value: 'TRANSFERENCIA' },
        { label: 'Efectivo', value: 'EFECTIVO' }
    ];
    filteredRows = computed(() => {
        const term = this.search().trim().toLocaleLowerCase('es');
        return this.rows().filter(item => !term || `${item.apellido} ${item.nombre}`.toLocaleLowerCase('es').includes(term));
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredRows" }] : /* istanbul ignore next */ []));
    ngOnInit() { void this.load(); }
    async load() {
        this.loading.set(true);
        try {
            const response = await firstValueFrom(this.api.getVatBeneficiaries(this.period()));
            this.rows.set(response.beneficiaries);
            this.total.set(response.total);
            this.cashTotal.set(response.cash_total);
            this.transferTotal.set(response.transfer_total);
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.loading.set(false);
        }
    }
    changePeriod(value) {
        if (!value)
            return;
        this.periodDate.set(new Date(value.getFullYear(), value.getMonth(), 1));
        void this.load();
    }
    movePeriod(offset) {
        const value = this.periodDate();
        this.changePeriod(new Date(value.getFullYear(), value.getMonth() + offset, 1));
    }
    openCreate() { this.editing.set(null); this.form = { nombre: '', apellido: '', delivery_method: 'TRANSFERENCIA' }; this.dialogVisible.set(true); }
    openEdit(item, event) { event.stopPropagation(); this.editing.set(item); this.form = { nombre: item.nombre, apellido: item.apellido, delivery_method: item.delivery_method }; this.dialogVisible.set(true); }
    async save() {
        if (!this.form.nombre.trim() || !this.form.apellido.trim() || !this.form.delivery_method) {
            this.showError('Completá el nombre, el apellido y el medio de entrega.');
            return;
        }
        this.saving.set(true);
        try {
            const item = this.editing();
            if (item)
                await firstValueFrom(this.api.updateVatBeneficiary(item.id, this.form));
            else
                await firstValueFrom(this.api.createVatBeneficiary(this.form));
            this.dialogVisible.set(false);
            await this.load();
            this.success(item ? 'Beneficiario actualizado.' : 'Beneficiario creado.');
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.saving.set(false);
        }
    }
    askDelete(item, event) { event.stopPropagation(); this.toDelete.set(item); this.confirmVisible.set(true); }
    async delete() {
        const item = this.toDelete();
        if (!item)
            return;
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteVatBeneficiary(item.id));
            this.confirmVisible.set(false);
            this.toDelete.set(null);
            await this.load();
            this.success('Beneficiario eliminado.');
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.saving.set(false);
        }
    }
    openDetail(item) { void this.router.navigate(['/reintegro-iva', item.id], { queryParams: { periodo: this.period() } }); }
    resetFilters() { this.search.set(''); }
    formatCurrency(value) { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value ?? 0)); }
    deliveryLabel(value) { return value === 'EFECTIVO' ? 'Efectivo' : 'Transferencia'; }
    formatPeriod() { const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(this.periodDate()); return label[0].toUpperCase() + label.slice(1); }
    period() { const value = this.periodDate(); return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`; }
    initialPeriod() { const value = this.route.snapshot.queryParamMap.get('periodo'); if (value && /^\d{4}-\d{2}$/.test(value)) {
        const [year, month] = value.split('-').map(Number);
        return new Date(year, month - 1, 1);
    } const now = new Date(); return new Date(now.getFullYear(), now.getMonth(), 1); }
    error(error) { this.showError(error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.'); }
    success(detail) { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); }
    showError(detail) { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
    static ɵfac = function ReintegroIva_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReintegroIva)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReintegroIva, selectors: [["app-reintegro-iva"]], features: [i0.ɵɵProvidersFeature([MessageService])], decls: 103, vars: 41, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right"], [1, "vat-page"], [1, "page-header"], [1, "eyebrow"], [1, "header-actions"], [1, "period-selector"], ["for", "vat_period"], [1, "period-navigation"], ["type", "button", "aria-label", "Mes anterior", 3, "click"], [1, "pi", "pi-chevron-left"], ["inputId", "vat_period", "view", "month", "dateFormat", "mm/yy", 3, "ngModelChange", "showIcon", "readonlyInput", "ngModel"], ["type", "button", "aria-label", "Mes siguiente", 3, "click"], [1, "pi", "pi-chevron-right"], ["pButton", "", "type", "button", 3, "click"], [1, "pi", "pi-plus"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "cash"], [1, "pi", "pi-money-bill"], [1, "stat-icon", "transfer"], [1, "pi", "pi-building-columns"], [1, "stat-card", "featured"], [1, "stat-icon", "purple"], [1, "pi", "pi-wallet"], [1, "table-card"], [1, "table-toolbar"], [1, "filters"], [1, "search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar beneficiario...", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "severity", "secondary", "title", "Restablecer filtros", 3, "click", "text", "rounded"], [1, "pi", "pi-filter-slash"], [3, "value", "loading", "paginator", "rows", "scrollable"], [3, "visibleChange", "visible", "header", "modal", "draggable", "resizable"], [1, "form", 3, "ngSubmit"], [1, "field"], ["pInputText", "", "name", "nombre", 3, "ngModelChange", "ngModel"], ["pInputText", "", "name", "apellido", 3, "ngModelChange", "ngModel"], [1, "field", "full"], ["name", "delivery_method", "optionLabel", "label", "optionValue", "value", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], [1, "dialog-actions", "full"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "outlined"], ["pButton", "", "type", "submit", 3, "loading"], ["header", "Eliminar beneficiario", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "confirm"], [1, "pi", "pi-exclamation-triangle"], [1, "dialog-actions"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "loading"], ["pSortableColumn", "apellido"], ["field", "apellido"], ["pSortableColumn", "delivery_method"], ["field", "delivery_method"], ["pSortableColumn", "detail_count"], ["field", "detail_count"], ["pSortableColumn", "total"], ["field", "total"], [1, "clickable", 3, "click"], [1, "person"], [1, "amount"], [1, "actions"], ["pButton", "", "type", "button", "title", "Editar", 3, "click", "text", "rounded"], [1, "pi", "pi-pencil"], ["pButton", "", "type", "button", "severity", "danger", "title", "Eliminar", 3, "click", "text", "rounded"], [1, "pi", "pi-trash"], ["colspan", "6"], [1, "empty"], [1, "pi", "pi-users"]], template: function ReintegroIva_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "p-toast", 3);
            i0.ɵɵelementStart(1, "section", 4)(2, "header", 5)(3, "div")(4, "span", 6);
            i0.ɵɵtext(5, "Finanzas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Reintegro IVA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, " Beneficiarios e importes correspondientes a ");
            i0.ɵɵelementStart(10, "strong");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, ". ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 7)(14, "div", 8)(15, "label", 9);
            i0.ɵɵtext(16, "Per\u00EDodo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 10)(18, "button", 11);
            i0.ɵɵlistener("click", function ReintegroIva_Template_button_click_18_listener() { return ctx.movePeriod(-1); });
            i0.ɵɵelement(19, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p-datepicker", 13);
            i0.ɵɵlistener("ngModelChange", function ReintegroIva_Template_p_datepicker_ngModelChange_20_listener($event) { return ctx.changePeriod($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(21, "button", 14);
            i0.ɵɵlistener("click", function ReintegroIva_Template_button_click_21_listener() { return ctx.movePeriod(1); });
            i0.ɵɵelement(22, "i", 15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "button", 16);
            i0.ɵɵlistener("click", function ReintegroIva_Template_button_click_23_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(24, "i", 17);
            i0.ɵɵtext(25, " Nuevo beneficiario ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "section", 18)(27, "article", 19)(28, "span", 20);
            i0.ɵɵelement(29, "i", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div")(31, "small");
            i0.ɵɵtext(32, "Total en efectivo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "strong");
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "article", 19)(36, "span", 22);
            i0.ɵɵelement(37, "i", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div")(39, "small");
            i0.ɵɵtext(40, "Total en transferencia");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "strong");
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "article", 24)(44, "span", 25);
            i0.ɵɵelement(45, "i", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div")(47, "small");
            i0.ɵɵtext(48, "Total del per\u00EDodo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "strong");
            i0.ɵɵtext(50);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(51, "section", 27)(52, "div", 28)(53, "div")(54, "h2");
            i0.ɵɵtext(55, "Beneficiarios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "span");
            i0.ɵɵtext(57);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "div", 29)(59, "span", 30);
            i0.ɵɵelement(60, "i", 31);
            i0.ɵɵelementStart(61, "input", 32);
            i0.ɵɵlistener("ngModelChange", function ReintegroIva_Template_input_ngModelChange_61_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "button", 33);
            i0.ɵɵlistener("click", function ReintegroIva_Template_button_click_62_listener() { return ctx.resetFilters(); });
            i0.ɵɵelement(63, "i", 34);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(64, "p-table", 35);
            i0.ɵɵtemplate(65, ReintegroIva_ng_template_65_Template, 16, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(67, ReintegroIva_ng_template_67_Template, 22, 12, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(69, ReintegroIva_ng_template_69_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(71, "p-dialog", 36);
            i0.ɵɵlistener("visibleChange", function ReintegroIva_Template_p_dialog_visibleChange_71_listener($event) { return ctx.dialogVisible.set($event); });
            i0.ɵɵelementStart(72, "form", 37);
            i0.ɵɵlistener("ngSubmit", function ReintegroIva_Template_form_ngSubmit_72_listener() { return ctx.save(); });
            i0.ɵɵelementStart(73, "div", 38)(74, "label");
            i0.ɵɵtext(75, "Nombre *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "input", 39);
            i0.ɵɵtwoWayListener("ngModelChange", function ReintegroIva_Template_input_ngModelChange_76_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.nombre, $event) || (ctx.form.nombre = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "div", 38)(78, "label");
            i0.ɵɵtext(79, "Apellido *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "input", 40);
            i0.ɵɵtwoWayListener("ngModelChange", function ReintegroIva_Template_input_ngModelChange_80_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.apellido, $event) || (ctx.form.apellido = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 41)(82, "label");
            i0.ɵɵtext(83, "Medio de entrega *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "p-select", 42);
            i0.ɵɵtwoWayListener("ngModelChange", function ReintegroIva_Template_p_select_ngModelChange_84_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.delivery_method, $event) || (ctx.form.delivery_method = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "div", 43)(86, "button", 44);
            i0.ɵɵlistener("click", function ReintegroIva_Template_button_click_86_listener() { return ctx.dialogVisible.set(false); });
            i0.ɵɵtext(87, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "button", 45);
            i0.ɵɵtext(89, "Guardar");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(90, "p-dialog", 46);
            i0.ɵɵlistener("visibleChange", function ReintegroIva_Template_p_dialog_visibleChange_90_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(91, "div", 47);
            i0.ɵɵelement(92, "i", 48);
            i0.ɵɵelementStart(93, "div")(94, "strong");
            i0.ɵɵtext(95);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "p");
            i0.ɵɵtext(97, "Tambi\u00E9n se eliminar\u00E1n todos sus reintegros de todos los per\u00EDodos.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(98, "div", 49)(99, "button", 44);
            i0.ɵɵlistener("click", function ReintegroIva_Template_button_click_99_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(100, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "button", 50);
            i0.ɵɵlistener("click", function ReintegroIva_Template_button_click_101_listener() { return ctx.delete(); });
            i0.ɵɵtext(102, " Eliminar ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.formatPeriod());
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("showIcon", true)("readonlyInput", true)("ngModel", ctx.periodDate());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.cashTotal()));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.transferTotal()));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.total()));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.filteredRows().length, " resultados");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", true)("rounded", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.filteredRows())("loading", ctx.loading())("paginator", ctx.filteredRows().length > 10)("rows", 10)("scrollable", true);
            i0.ɵɵadvance(7);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(39, _c0));
            i0.ɵɵproperty("visible", ctx.dialogVisible())("header", ctx.editing() ? "Editar beneficiario" : "Nuevo beneficiario")("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.nombre);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.apellido);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("options", ctx.deliveryOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.delivery_method);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(40, _c1));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("\u00BFEliminar a ", ctx.toDelete()?.apellido, ", ", ctx.toDelete()?.nombre, "?");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective, DatePicker, Dialog, InputText, Select, TableModule, i2.Table, i2.SortableColumn, i2.SortIcon, Toast], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.vat-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n  color: #18181b;\n}\n.page-header[_ngcontent-%COMP%], \n.stats-grid[_ngcontent-%COMP%], \n.table-card[_ngcontent-%COMP%] {\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 4px 0 6px;\n  font-size: 2rem;\n  letter-spacing: -0.035em;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #71717a;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n}\n.period-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #52525b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.period-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-navigation[_ngcontent-%COMP%]   p-datepicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 180px;\n  margin: 0 4px;\n}\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  color: #7e22ce;\n  background: #fff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n}\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background: #faf5ff;\n  border-color: #a855f7;\n}\n[_nghost-%COMP%]     .period-selector .p-datepicker {\n  width: 180px;\n}\n[_nghost-%COMP%]     .period-selector .p-datepicker-input {\n  width: 1%;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.stat-card.featured[_ngcontent-%COMP%] {\n  border-color: #e9b7f5;\n  background: #fffaff;\n}\n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #71717a;\n  margin-bottom: 3px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  color: #2563eb;\n  background: #dbeafe;\n  border-radius: 11px;\n}\n.stat-icon.cash[_ngcontent-%COMP%] {\n  color: #15803d;\n  background: #dcfce7;\n}\n.stat-icon.transfer[_ngcontent-%COMP%] {\n  color: #0369a1;\n  background: #e0f2fe;\n}\n.stat-icon.purple[_ngcontent-%COMP%] {\n  color: #9810d5;\n  background: #f7dcfb;\n}\n.table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.table-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.table-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.76rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%);\n  color: #a1a1aa;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 260px;\n  padding-left: 36px;\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable[_ngcontent-%COMP%]:hover {\n  background: #fcf7ff;\n}\n.person[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.person[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  color: #9810d5;\n  background: #f7dcfb;\n  border-radius: 50%;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.amount[_ngcontent-%COMP%] {\n  color: #15803d;\n  font-weight: 700;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.actions[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n  margin-left: 4px;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  width: 100%;\n  min-width: 0;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 6px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   p-select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.confirm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirm[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.3rem;\n}\n.confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.82rem;\n  line-height: 1.5;\n}\n[_nghost-%COMP%]     .p-dialog-content {\n  overflow-x: hidden;\n}\n@media (max-width: 900px) {\n  .header-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .vat-page[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n  .page-header[_ngcontent-%COMP%], \n   .table-toolbar[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .full[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReintegroIva, [{
        type: Component,
        args: [{ selector: 'app-reintegro-iva', imports: [FormsModule, ButtonDirective, DatePicker, Dialog, InputText, Select, TableModule, Toast], providers: [MessageService], template: "<p-toast position=\"bottom-right\" />\n<section class=\"vat-page\">\n  <header class=\"page-header\">\n    <div>\n      <span class=\"eyebrow\">Finanzas</span>\n      <h1>Reintegro IVA</h1>\n      <p>\n        Beneficiarios e importes correspondientes a <strong>{{ formatPeriod() }}</strong\n        >.\n      </p>\n    </div>\n    <div class=\"header-actions\">\n      <div class=\"period-selector\">\n        <label for=\"vat_period\">Per\u00EDodo</label>\n        <div class=\"period-navigation\">\n          <button type=\"button\" aria-label=\"Mes anterior\" (click)=\"movePeriod(-1)\">\n            <i class=\"pi pi-chevron-left\"></i></button\n          ><p-datepicker\n            inputId=\"vat_period\"\n            view=\"month\"\n            dateFormat=\"mm/yy\"\n            [showIcon]=\"true\"\n            [readonlyInput]=\"true\"\n            [ngModel]=\"periodDate()\"\n            (ngModelChange)=\"changePeriod($event)\"\n          /><button type=\"button\" aria-label=\"Mes siguiente\" (click)=\"movePeriod(1)\">\n            <i class=\"pi pi-chevron-right\"></i>\n          </button>\n        </div>\n      </div>\n      <button pButton type=\"button\" (click)=\"openCreate()\">\n        <i class=\"pi pi-plus\"></i> Nuevo beneficiario\n      </button>\n    </div>\n  </header>\n\n  <section class=\"stats-grid\">\n    <article class=\"stat-card\">\n      <span class=\"stat-icon cash\"><i class=\"pi pi-money-bill\"></i></span>\n      <div>\n        <small>Total en efectivo</small><strong>{{ formatCurrency(cashTotal()) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card\">\n      <span class=\"stat-icon transfer\"><i class=\"pi pi-building-columns\"></i></span>\n      <div>\n        <small>Total en transferencia</small><strong>{{ formatCurrency(transferTotal()) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card featured\">\n      <span class=\"stat-icon purple\"><i class=\"pi pi-wallet\"></i></span>\n      <div>\n        <small>Total del per\u00EDodo</small><strong>{{ formatCurrency(total()) }}</strong>\n      </div>\n    </article>\n  </section>\n\n  <section class=\"table-card\">\n    <div class=\"table-toolbar\">\n      <div>\n        <h2>Beneficiarios</h2>\n        <span>{{ filteredRows().length }} resultados</span>\n      </div>\n      <div class=\"filters\">\n        <span class=\"search\"\n          ><i class=\"pi pi-search\"></i\n          ><input\n            pInputText\n            type=\"search\"\n            placeholder=\"Buscar beneficiario...\"\n            [ngModel]=\"search()\"\n            (ngModelChange)=\"search.set($event)\" /></span\n        ><button\n          pButton\n          type=\"button\"\n          [text]=\"true\"\n          [rounded]=\"true\"\n          severity=\"secondary\"\n          title=\"Restablecer filtros\"\n          (click)=\"resetFilters()\"\n        >\n          <i class=\"pi pi-filter-slash\"></i>\n        </button>\n      </div>\n    </div>\n    <p-table\n      [value]=\"filteredRows()\"\n      [loading]=\"loading()\"\n      [paginator]=\"filteredRows().length > 10\"\n      [rows]=\"10\"\n      [scrollable]=\"true\"\n    >\n      <ng-template #header\n        ><tr>\n          <th pSortableColumn=\"apellido\">Beneficiario <p-sort-icon field=\"apellido\" /></th>\n          <th>Per\u00EDodo</th>\n          <th pSortableColumn=\"delivery_method\">Entrega <p-sort-icon field=\"delivery_method\" /></th>\n          <th pSortableColumn=\"detail_count\">Detalles <p-sort-icon field=\"detail_count\" /></th>\n          <th pSortableColumn=\"total\">Total <p-sort-icon field=\"total\" /></th>\n          <th></th></tr\n      ></ng-template>\n      <ng-template #body let-item\n        ><tr class=\"clickable\" (click)=\"openDetail(item)\">\n          <td>\n            <div class=\"person\">\n              <span>{{ item.nombre.charAt(0) }}{{ item.apellido.charAt(0) }}</span\n              ><strong>{{ item.apellido }}, {{ item.nombre }}</strong>\n            </div>\n          </td>\n          <td>{{ formatPeriod() }}</td>\n          <td>{{ deliveryLabel(item.delivery_method) }}</td>\n          <td>{{ item.detail_count }}</td>\n          <td class=\"amount\">{{ formatCurrency(item.total) }}</td>\n          <td>\n            <div class=\"actions\">\n              <button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                title=\"Editar\"\n                (click)=\"openEdit(item, $event)\"\n              >\n                <i class=\"pi pi-pencil\"></i></button\n              ><button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                severity=\"danger\"\n                title=\"Eliminar\"\n                (click)=\"askDelete(item, $event)\"\n              >\n                <i class=\"pi pi-trash\"></i></button\n              ><i class=\"pi pi-chevron-right\"></i>\n            </div>\n          </td></tr\n      ></ng-template>\n      <ng-template #emptymessage\n        ><tr>\n          <td colspan=\"6\">\n            <div class=\"empty\">\n              <i class=\"pi pi-users\"></i><strong>No hay beneficiarios</strong\n              ><span>Cre\u00E1 el primero para comenzar.</span>\n            </div>\n          </td>\n        </tr></ng-template\n      >\n    </p-table>\n  </section>\n</section>\n\n<p-dialog\n  [visible]=\"dialogVisible()\"\n  (visibleChange)=\"dialogVisible.set($event)\"\n  [header]=\"editing() ? 'Editar beneficiario' : 'Nuevo beneficiario'\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(500px, calc(100vw - 32px))' }\"\n  ><form class=\"form\" (ngSubmit)=\"save()\">\n    <div class=\"field\">\n      <label>Nombre *</label><input pInputText name=\"nombre\" [(ngModel)]=\"form.nombre\" />\n    </div>\n    <div class=\"field\">\n      <label>Apellido *</label><input pInputText name=\"apellido\" [(ngModel)]=\"form.apellido\" />\n    </div>\n    <div class=\"field full\">\n      <label>Medio de entrega *</label>\n      <p-select\n        name=\"delivery_method\"\n        [options]=\"deliveryOptions\"\n        optionLabel=\"label\"\n        optionValue=\"value\"\n        [(ngModel)]=\"form.delivery_method\"\n        appendTo=\"body\"\n      />\n    </div>\n    <div class=\"dialog-actions full\">\n      <button\n        pButton\n        type=\"button\"\n        severity=\"secondary\"\n        [outlined]=\"true\"\n        (click)=\"dialogVisible.set(false)\"\n      >\n        Cancelar</button\n      ><button pButton type=\"submit\" [loading]=\"saving()\">Guardar</button>\n    </div>\n  </form></p-dialog\n>\n<p-dialog\n  [visible]=\"confirmVisible()\"\n  (visibleChange)=\"confirmVisible.set($event)\"\n  header=\"Eliminar beneficiario\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(460px, calc(100vw - 32px))' }\"\n  ><div class=\"confirm\">\n    <i class=\"pi pi-exclamation-triangle\"></i>\n    <div>\n      <strong>\u00BFEliminar a {{ toDelete()?.apellido }}, {{ toDelete()?.nombre }}?</strong>\n      <p>Tambi\u00E9n se eliminar\u00E1n todos sus reintegros de todos los per\u00EDodos.</p>\n    </div>\n  </div>\n  <div class=\"dialog-actions\">\n    <button\n      pButton\n      type=\"button\"\n      severity=\"secondary\"\n      [outlined]=\"true\"\n      (click)=\"confirmVisible.set(false)\"\n    >\n      Cancelar</button\n    ><button pButton type=\"button\" severity=\"danger\" [loading]=\"saving()\" (click)=\"delete()\">\n      Eliminar\n    </button>\n  </div></p-dialog\n>\n", styles: [":host {\n  display: block;\n}\n.vat-page {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n  color: #18181b;\n}\n.page-header,\n.stats-grid,\n.table-card {\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.eyebrow {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\nh1 {\n  margin: 4px 0 6px;\n  font-size: 2rem;\n  letter-spacing: -0.035em;\n}\n.page-header p {\n  margin: 0;\n  color: #71717a;\n}\n.header-actions {\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n}\n.period-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.period-selector label {\n  color: #52525b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.period-navigation {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-navigation p-datepicker {\n  display: inline-flex;\n  width: 180px;\n  margin: 0 4px;\n}\n.period-navigation > button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  color: #7e22ce;\n  background: #fff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n}\n.period-navigation > button:hover {\n  background: #faf5ff;\n  border-color: #a855f7;\n}\n:host ::ng-deep .period-selector .p-datepicker {\n  width: 180px;\n}\n:host ::ng-deep .period-selector .p-datepicker-input {\n  width: 1%;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.stat-card.featured {\n  border-color: #e9b7f5;\n  background: #fffaff;\n}\n.stat-card small {\n  display: block;\n  color: #71717a;\n  margin-bottom: 3px;\n}\n.stat-icon {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  color: #2563eb;\n  background: #dbeafe;\n  border-radius: 11px;\n}\n.stat-icon.cash {\n  color: #15803d;\n  background: #dcfce7;\n}\n.stat-icon.transfer {\n  color: #0369a1;\n  background: #e0f2fe;\n}\n.stat-icon.purple {\n  color: #9810d5;\n  background: #f7dcfb;\n}\n.table-card {\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.table-toolbar h2 {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.table-toolbar span {\n  color: #71717a;\n  font-size: 0.76rem;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.search {\n  position: relative;\n}\n.search i {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%);\n  color: #a1a1aa;\n}\n.search input {\n  width: 260px;\n  padding-left: 36px;\n}\n.clickable {\n  cursor: pointer;\n}\n.clickable:hover {\n  background: #fcf7ff;\n}\n.person {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.person span {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  color: #9810d5;\n  background: #f7dcfb;\n  border-radius: 50%;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.amount {\n  color: #15803d;\n  font-weight: 700;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.actions > i {\n  color: #a1a1aa;\n  margin-left: 4px;\n}\n.empty {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  width: 100%;\n  min-width: 0;\n  gap: 16px;\n}\n.field {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 6px;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.field input,\n.field p-select {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n.full {\n  grid-column: 1/-1;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.confirm {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirm > i {\n  color: #dc2626;\n  font-size: 1.3rem;\n}\n.confirm p {\n  color: #71717a;\n  font-size: 0.82rem;\n  line-height: 1.5;\n}\n:host ::ng-deep .p-dialog-content {\n  overflow-x: hidden;\n}\n@media (max-width: 900px) {\n  .header-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .vat-page {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n  .page-header,\n  .table-toolbar,\n  .filters {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .search input {\n    width: 100%;\n  }\n  .form {\n    grid-template-columns: 1fr;\n  }\n  .full {\n    grid-column: auto;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReintegroIva, { className: "ReintegroIva", filePath: "src/app/pages/reintegro-iva/reintegro-iva.ts", lineNumber: 25 }); })();
