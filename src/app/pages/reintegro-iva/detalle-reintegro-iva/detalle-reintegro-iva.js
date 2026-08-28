import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Textarea } from 'primeng/textarea';
import { Toast } from 'primeng/toast';
import { Api } from '../../../services/api';
import { formatMoneyInput, normalizeMoneyInput } from '../../../utils/money-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
const _c0 = () => ({ width: "min(540px, calc(100vw - 32px))" });
const _c1 = () => ({ width: "min(450px, calc(100vw - 32px))" });
function DetalleReintegroIva_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵtext(4, "Per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th", 39);
    i0.ɵɵtext(6, "Observaci\u00F3n ");
    i0.ɵɵelement(7, "p-sort-icon", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 41);
    i0.ɵɵtext(9, "Importe ");
    i0.ɵɵelement(10, "p-sort-icon", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "th");
    i0.ɵɵelementEnd();
} }
function DetalleReintegroIva_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 43);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "div", 44)(11, "button", 45);
    i0.ɵɵlistener("click", function DetalleReintegroIva_ng_template_51_Template_button_click_11_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(item_r3)); });
    i0.ɵɵelement(12, "i", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 47);
    i0.ɵɵlistener("click", function DetalleReintegroIva_ng_template_51_Template_button_click_13_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDelete(item_r3)); });
    i0.ɵɵelement(14, "i", 48);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r5 = ctx.rowIndex;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(index_r5 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatPeriod());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.observation || "Sin observaci\u00F3n");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(item_r3.amount));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("text", true)("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true);
} }
function DetalleReintegroIva_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 49)(2, "div", 50);
    i0.ɵɵelement(3, "i", 51);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "No hay detalles en este per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Agreg\u00E1 un importe para comenzar.");
    i0.ɵɵelementEnd()()()();
} }
function DetalleReintegroIva_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 52)(1, "td", 53);
    i0.ɵɵtext(2, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(ctx_r3.total()));
} }
export class DetalleReintegroIva {
    api = inject(Api);
    route = inject(ActivatedRoute);
    router = inject(Router);
    messages = inject(MessageService);
    beneficiary = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "beneficiary" }] : /* istanbul ignore next */ []));
    details = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "details" }] : /* istanbul ignore next */ []));
    total = signal('0', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    dialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "dialogVisible" }] : /* istanbul ignore next */ []));
    confirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "confirmVisible" }] : /* istanbul ignore next */ []));
    editing = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editing" }] : /* istanbul ignore next */ []));
    toDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "toDelete" }] : /* istanbul ignore next */ []));
    beneficiaryId = Number(this.route.snapshot.paramMap.get('beneficiaryId'));
    periodDate = signal(this.initialPeriod(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodDate" }] : /* istanbul ignore next */ []));
    form = { amount: '', observation: '' };
    ngOnInit() { if (!this.beneficiaryId)
        void this.back();
    else
        void this.load(); }
    async load() {
        this.loading.set(true);
        try {
            const response = await firstValueFrom(this.api.getVatRefundDetails(this.beneficiaryId, this.period()));
            this.beneficiary.set(response.beneficiary);
            this.details.set(response.details);
            this.total.set(response.total);
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.loading.set(false);
        }
    }
    openCreate() { this.editing.set(null); this.form = { amount: '', observation: '' }; this.dialogVisible.set(true); }
    openEdit(item) { this.editing.set(item); this.form = { amount: item.amount, observation: item.observation }; this.dialogVisible.set(true); }
    async save() {
        if (Number(this.form.amount) <= 0) {
            this.showError('Ingresá un importe mayor a cero.');
            return;
        }
        const payload = { period: `${this.period()}-01`, amount: Number(this.form.amount), observation: this.form.observation.trim() };
        this.saving.set(true);
        try {
            const item = this.editing();
            if (item)
                await firstValueFrom(this.api.updateVatRefundDetail(this.beneficiaryId, item.id, payload));
            else
                await firstValueFrom(this.api.createVatRefundDetail(this.beneficiaryId, payload));
            this.dialogVisible.set(false);
            await this.load();
            this.success(item ? 'Detalle actualizado.' : 'Detalle agregado.');
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
            await firstValueFrom(this.api.deleteVatRefundDetail(this.beneficiaryId, item.id));
            this.confirmVisible.set(false);
            this.toDelete.set(null);
            await this.load();
            this.success('Detalle eliminado.');
        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.saving.set(false);
        }
    }
    changePeriodDate(value) { if (!value)
        return; this.periodDate.set(new Date(value.getFullYear(), value.getMonth(), 1)); void this.router.navigate([], { relativeTo: this.route, queryParams: { periodo: this.period() }, replaceUrl: true }); void this.load(); }
    movePeriod(offset) { const value = this.periodDate(); this.changePeriodDate(new Date(value.getFullYear(), value.getMonth() + offset, 1)); }
    back() { return this.router.navigate(['/reintegro-iva'], { queryParams: { periodo: this.period() } }); }
    formatCurrency(value) { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value ?? 0)); }
    formatMoneyInput(value) { return formatMoneyInput(value); }
    updateAmount(value) { const normalized = normalizeMoneyInput(value); if (normalized !== null)
        this.form.amount = normalized; }
    formatPeriod() { const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(this.periodDate()); return label[0].toUpperCase() + label.slice(1); }
    period() { const value = this.periodDate(); return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`; }
    initialPeriod() { const value = this.route.snapshot.queryParamMap.get('periodo'); if (value && /^\d{4}-\d{2}$/.test(value)) {
        const [year, month] = value.split('-').map(Number);
        return new Date(year, month - 1, 1);
    } const now = new Date(); return new Date(now.getFullYear(), now.getMonth(), 1); }
    error(error) { this.showError(error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.'); }
    success(detail) { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); }
    showError(detail) { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
    static ɵfac = function DetalleReintegroIva_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DetalleReintegroIva)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetalleReintegroIva, selectors: [["app-detalle-reintegro-iva"]], features: [i0.ɵɵProvidersFeature([MessageService])], decls: 88, vars: 35, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], ["position", "bottom-right"], [1, "detail-page"], [1, "detail-header"], [1, "header-left"], ["type", "button", "aria-label", "Volver", 1, "back-button", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "eyebrow"], [1, "period-selector"], ["for", "vat_detail_period"], [1, "period-navigation"], ["type", "button", "aria-label", "Mes anterior", 3, "click"], [1, "pi", "pi-chevron-left"], ["inputId", "vat_detail_period", "view", "month", "dateFormat", "mm/yy", 3, "ngModelChange", "showIcon", "readonlyInput", "ngModel"], ["type", "button", "aria-label", "Mes siguiente", 3, "click"], [1, "pi", "pi-chevron-right"], [1, "summary"], [1, "total"], [1, "table-card"], [1, "table-toolbar"], ["pButton", "", "type", "button", 3, "click"], [1, "pi", "pi-plus"], [3, "value", "loading", "paginator", "rows"], [3, "visibleChange", "visible", "header", "modal", "draggable", "resizable"], [1, "form", 3, "ngSubmit"], [1, "field"], [1, "money-input"], ["pInputText", "", "name", "amount", "type", "text", "inputmode", "decimal", 3, "ngModelChange", "ngModel"], ["pTextarea", "", "name", "observation", "rows", "3", "placeholder", "Opcional", 3, "ngModelChange", "ngModel"], [1, "dialog-actions"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "outlined"], ["pButton", "", "type", "submit", 3, "loading"], ["header", "Eliminar detalle", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "confirm"], [1, "pi", "pi-exclamation-triangle"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "loading"], ["pSortableColumn", "observation"], ["field", "observation"], ["pSortableColumn", "amount"], ["field", "amount"], [1, "amount"], [1, "actions"], ["pButton", "", "type", "button", "title", "Editar", 3, "click", "text", "rounded"], [1, "pi", "pi-pencil"], ["pButton", "", "type", "button", "severity", "danger", "title", "Eliminar", 3, "click", "text", "rounded"], [1, "pi", "pi-trash"], ["colspan", "5"], [1, "empty"], [1, "pi", "pi-receipt"], [1, "total-row"], ["colspan", "3"]], template: function DetalleReintegroIva_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "p-toast", 4);
            i0.ɵɵelementStart(1, "section", 5)(2, "header", 6)(3, "div", 7)(4, "button", 8);
            i0.ɵɵlistener("click", function DetalleReintegroIva_Template_button_click_4_listener() { return ctx.back(); });
            i0.ɵɵelement(5, "i", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div")(7, "span", 10);
            i0.ɵɵtext(8, "Reintegro IVA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h1");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "Detalles que componen el total del per\u00EDodo.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "div", 11)(14, "label", 12);
            i0.ɵɵtext(15, "Per\u00EDodo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 13)(17, "button", 14);
            i0.ɵɵlistener("click", function DetalleReintegroIva_Template_button_click_17_listener() { return ctx.movePeriod(-1); });
            i0.ɵɵelement(18, "i", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p-datepicker", 16);
            i0.ɵɵlistener("ngModelChange", function DetalleReintegroIva_Template_p_datepicker_ngModelChange_19_listener($event) { return ctx.changePeriodDate($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(20, "button", 17);
            i0.ɵɵlistener("click", function DetalleReintegroIva_Template_button_click_20_listener() { return ctx.movePeriod(1); });
            i0.ɵɵelement(21, "i", 18);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(22, "section", 19)(23, "div")(24, "small");
            i0.ɵɵtext(25, "Per\u00EDodo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "strong");
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div")(29, "small");
            i0.ɵɵtext(30, "Cantidad de detalles");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "strong");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 20)(34, "small");
            i0.ɵɵtext(35, "Total reintegro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "strong");
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "section", 21)(39, "div", 22)(40, "div")(41, "h2");
            i0.ɵɵtext(42, "Composici\u00F3n del reintegro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "span");
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "button", 23);
            i0.ɵɵlistener("click", function DetalleReintegroIva_Template_button_click_45_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(46, "i", 24);
            i0.ɵɵtext(47, " Agregar importe");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "p-table", 25);
            i0.ɵɵtemplate(49, DetalleReintegroIva_ng_template_49_Template, 12, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(51, DetalleReintegroIva_ng_template_51_Template, 15, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(53, DetalleReintegroIva_ng_template_53_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(55, DetalleReintegroIva_ng_template_55_Template, 6, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(57, "p-dialog", 26);
            i0.ɵɵlistener("visibleChange", function DetalleReintegroIva_Template_p_dialog_visibleChange_57_listener($event) { return ctx.dialogVisible.set($event); });
            i0.ɵɵelementStart(58, "form", 27);
            i0.ɵɵlistener("ngSubmit", function DetalleReintegroIva_Template_form_ngSubmit_58_listener() { return ctx.save(); });
            i0.ɵɵelementStart(59, "div", 28)(60, "label");
            i0.ɵɵtext(61, "Importe *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "div", 29)(63, "span");
            i0.ɵɵtext(64, "$");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "input", 30);
            i0.ɵɵlistener("ngModelChange", function DetalleReintegroIva_Template_input_ngModelChange_65_listener($event) { return ctx.updateAmount($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "div", 28)(67, "label");
            i0.ɵɵtext(68, "Observaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "textarea", 31);
            i0.ɵɵtwoWayListener("ngModelChange", function DetalleReintegroIva_Template_textarea_ngModelChange_69_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.observation, $event) || (ctx.form.observation = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 32)(71, "button", 33);
            i0.ɵɵlistener("click", function DetalleReintegroIva_Template_button_click_71_listener() { return ctx.dialogVisible.set(false); });
            i0.ɵɵtext(72, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "button", 34);
            i0.ɵɵtext(74, "Guardar");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(75, "p-dialog", 35);
            i0.ɵɵlistener("visibleChange", function DetalleReintegroIva_Template_p_dialog_visibleChange_75_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(76, "div", 36);
            i0.ɵɵelement(77, "i", 37);
            i0.ɵɵelementStart(78, "div")(79, "strong");
            i0.ɵɵtext(80, "\u00BFEliminar este importe?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "p");
            i0.ɵɵtext(82);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(83, "div", 32)(84, "button", 33);
            i0.ɵɵlistener("click", function DetalleReintegroIva_Template_button_click_84_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(85, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "button", 38);
            i0.ɵɵlistener("click", function DetalleReintegroIva_Template_button_click_86_listener() { return ctx.delete(); });
            i0.ɵɵtext(87, " Eliminar ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate2("", ctx.beneficiary()?.apellido, ", ", ctx.beneficiary()?.nombre);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("showIcon", true)("readonlyInput", true)("ngModel", ctx.periodDate());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatPeriod());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.details().length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.total()));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.details().length, " detalles");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", ctx.details())("loading", ctx.loading())("paginator", ctx.details().length > 10)("rows", 10);
            i0.ɵɵadvance(9);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(33, _c0));
            i0.ɵɵproperty("visible", ctx.dialogVisible())("header", ctx.editing() ? "Editar importe" : "Agregar importe")("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngModel", ctx.formatMoneyInput(ctx.form.amount));
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.observation);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(34, _c1));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.formatCurrency(ctx.toDelete()?.amount), " dejar\u00E1 de formar parte del total mensual.");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective, DatePicker, Dialog, InputText, TableModule, i2.Table, i2.SortableColumn, i2.SortIcon, Textarea, Toast], styles: ["[_nghost-%COMP%] { display: block; }\n.detail-page[_ngcontent-%COMP%] { min-height: calc(100vh - 72px); padding: 32px 32px 48px 96px; background: #f8fafc; color: #18181b; }\n.detail-header[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%], .table-card[_ngcontent-%COMP%] { max-width: 1500px; margin-left: auto; margin-right: auto; }\n.detail-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 24px; }\n.header-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; }\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 3px 0 4px; font-size: 1.8rem; letter-spacing: -.035em; }\n.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: #71717a; font-size: .8rem; }\n.eyebrow[_ngcontent-%COMP%] { display: block; color: #9810d5; font-size: .75rem; font-weight: 700; text-transform: uppercase; }\n.back-button[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: center; width: 42px; height: 42px; flex: 0 0 42px; padding: 0; color: #52525b; background: #fff; border: 1px solid #e4e4e7; border-radius: 10px; cursor: pointer; }\n.back-button[_ngcontent-%COMP%]:hover { color: #9810d5; background: #faf5ff; }\n.period-selector[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 5px; }\n.period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color: #52525b; font-size: .72rem; font-weight: 600; }\n.period-navigation[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.period-navigation[_ngcontent-%COMP%]   p-datepicker[_ngcontent-%COMP%] { display: inline-flex; width: 180px; margin: 0 4px; }\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; color: #7e22ce; background: #fff; border: 1px solid #d8b4fe; border-radius: 9px; }\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover { background: #faf5ff; border-color: #a855f7; }\n[_nghost-%COMP%]     .period-selector .p-datepicker { width: 180px; }\n[_nghost-%COMP%]     .period-selector .p-datepicker-input { width: 1%; min-width: 0; flex: 1 1 auto; }\n.summary[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px; }\n.summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { padding: 18px; background: #fff; border: 1px solid #e4e4e7; border-radius: 14px; }\n.summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: #71717a; margin-bottom: 5px; }\n.summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 1.05rem; }\n.summary[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] { border-color: #bbf7d0; background: #f0fdf4; }\n.summary[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #15803d; font-size: 1.2rem; }\n.table-card[_ngcontent-%COMP%] { overflow: hidden; background: #fff; border: 1px solid #e4e4e7; border-radius: 14px; }\n.table-toolbar[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px; border-bottom: 1px solid #e4e4e7; }\n.table-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0 0 4px; font-size: 1rem; }\n.table-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #71717a; font-size: .76rem; }\n.amount[_ngcontent-%COMP%] { color: #15803d; font-weight: 700; }\n.actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 2px; }\n.empty[_ngcontent-%COMP%] { display: flex; min-height: 240px; align-items: center; justify-content: center; flex-direction: column; gap: 7px; color: #71717a; }\n.total-row[_ngcontent-%COMP%] { font-weight: 700; }\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) { color: #15803d; }\n.form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 16px; }\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: .78rem; font-weight: 600; }\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { width: 100%; }\n.money-input[_ngcontent-%COMP%] { position: relative; width: 100%; }\n.money-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { position: absolute; top: 50%; left: 12px; z-index: 2; color: #71717a; transform: translateY(-50%); }\n.money-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; padding-left: 28px; }\n.dialog-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }\n.confirm[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 12px; }\n.confirm[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] { color: #dc2626; font-size: 1.3rem; }\n.confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #71717a; font-size: .82rem; }\n@media (max-width: 768px) { .detail-page[_ngcontent-%COMP%] { min-height: calc(100vh - 64px); padding: 22px 16px 36px 80px; } .detail-header[_ngcontent-%COMP%], .table-toolbar[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; } .header-left[_ngcontent-%COMP%] { align-items: flex-start; } .summary[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetalleReintegroIva, [{
        type: Component,
        args: [{ selector: 'app-detalle-reintegro-iva', imports: [FormsModule, ButtonDirective, DatePicker, Dialog, InputText, TableModule, Textarea, Toast], providers: [MessageService], template: "<p-toast position=\"bottom-right\" />\n<section class=\"detail-page\">\n  <header class=\"detail-header\">\n    <div class=\"header-left\">\n      <button type=\"button\" class=\"back-button\" aria-label=\"Volver\" (click)=\"back()\">\n        <i class=\"pi pi-arrow-left\"></i>\n      </button>\n      <div>\n        <span class=\"eyebrow\">Reintegro IVA</span>\n        <h1>{{ beneficiary()?.apellido }}, {{ beneficiary()?.nombre }}</h1>\n        <p>Detalles que componen el total del per\u00EDodo.</p>\n      </div>\n    </div>\n    <div class=\"period-selector\">\n      <label for=\"vat_detail_period\">Per\u00EDodo</label>\n      <div class=\"period-navigation\">\n        <button type=\"button\" aria-label=\"Mes anterior\" (click)=\"movePeriod(-1)\">\n          <i class=\"pi pi-chevron-left\"></i></button\n        ><p-datepicker\n          inputId=\"vat_detail_period\"\n          view=\"month\"\n          dateFormat=\"mm/yy\"\n          [showIcon]=\"true\"\n          [readonlyInput]=\"true\"\n          [ngModel]=\"periodDate()\"\n          (ngModelChange)=\"changePeriodDate($event)\"\n        /><button type=\"button\" aria-label=\"Mes siguiente\" (click)=\"movePeriod(1)\">\n          <i class=\"pi pi-chevron-right\"></i>\n        </button>\n      </div>\n    </div>\n  </header>\n  <section class=\"summary\">\n    <div>\n      <small>Per\u00EDodo</small><strong>{{ formatPeriod() }}</strong>\n    </div>\n    <div>\n      <small>Cantidad de detalles</small><strong>{{ details().length }}</strong>\n    </div>\n    <div class=\"total\">\n      <small>Total reintegro</small><strong>{{ formatCurrency(total()) }}</strong>\n    </div>\n  </section>\n  <section class=\"table-card\">\n    <div class=\"table-toolbar\">\n      <div>\n        <h2>Composici\u00F3n del reintegro</h2>\n        <span>{{ details().length }} detalles</span>\n      </div>\n      <button pButton type=\"button\" (click)=\"openCreate()\"><i class=\"pi pi-plus\"></i> Agregar importe</button>\n    </div>\n    <p-table\n      [value]=\"details()\"\n      [loading]=\"loading()\"\n      [paginator]=\"details().length > 10\"\n      [rows]=\"10\"\n      ><ng-template #header\n        ><tr>\n          <th>#</th>\n          <th>Per\u00EDodo</th>\n          <th pSortableColumn=\"observation\">Observaci\u00F3n <p-sort-icon field=\"observation\" /></th>\n          <th pSortableColumn=\"amount\">Importe <p-sort-icon field=\"amount\" /></th>\n          <th></th></tr></ng-template\n      ><ng-template #body let-item let-index=\"rowIndex\"\n        ><tr>\n          <td>{{ index + 1 }}</td>\n          <td>{{ formatPeriod() }}</td>\n          <td>{{ item.observation || 'Sin observaci\u00F3n' }}</td>\n          <td class=\"amount\">{{ formatCurrency(item.amount) }}</td>\n          <td>\n            <div class=\"actions\">\n              <button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                title=\"Editar\"\n                (click)=\"openEdit(item)\"\n              >\n                <i class=\"pi pi-pencil\"></i></button\n              ><button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                severity=\"danger\"\n                title=\"Eliminar\"\n                (click)=\"askDelete(item)\"\n              >\n                <i class=\"pi pi-trash\"></i>\n              </button>\n            </div>\n          </td></tr></ng-template\n      ><ng-template #emptymessage\n        ><tr>\n          <td colspan=\"5\">\n            <div class=\"empty\">\n              <i class=\"pi pi-receipt\"></i><strong>No hay detalles en este per\u00EDodo</strong\n              ><span>Agreg\u00E1 un importe para comenzar.</span>\n            </div>\n          </td>\n        </tr></ng-template\n      ><ng-template #footer\n        ><tr class=\"total-row\">\n          <td colspan=\"3\">Total</td>\n          <td>{{ formatCurrency(total()) }}</td>\n          <td></td></tr></ng-template\n    ></p-table>\n  </section>\n</section>\n<p-dialog\n  [visible]=\"dialogVisible()\"\n  (visibleChange)=\"dialogVisible.set($event)\"\n  [header]=\"editing() ? 'Editar importe' : 'Agregar importe'\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(540px, calc(100vw - 32px))' }\"\n  ><form class=\"form\" (ngSubmit)=\"save()\">\n    <div class=\"field\">\n      <label>Importe *</label\n      ><div class=\"money-input\"><span>$</span><input pInputText name=\"amount\" type=\"text\" inputmode=\"decimal\" [ngModel]=\"formatMoneyInput(form.amount)\" (ngModelChange)=\"updateAmount($event)\" /></div>\n    </div>\n    <div class=\"field\">\n      <label>Observaci\u00F3n</label\n      ><textarea\n        pTextarea\n        name=\"observation\"\n        [(ngModel)]=\"form.observation\"\n        rows=\"3\"\n        placeholder=\"Opcional\"\n      ></textarea>\n    </div>\n    <div class=\"dialog-actions\">\n      <button\n        pButton\n        type=\"button\"\n        severity=\"secondary\"\n        [outlined]=\"true\"\n        (click)=\"dialogVisible.set(false)\"\n      >\n        Cancelar</button\n      ><button pButton type=\"submit\" [loading]=\"saving()\">Guardar</button>\n    </div>\n  </form></p-dialog\n>\n<p-dialog\n  [visible]=\"confirmVisible()\"\n  (visibleChange)=\"confirmVisible.set($event)\"\n  header=\"Eliminar detalle\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(450px, calc(100vw - 32px))' }\"\n  ><div class=\"confirm\">\n    <i class=\"pi pi-exclamation-triangle\"></i>\n    <div>\n      <strong>\u00BFEliminar este importe?</strong>\n      <p>{{ formatCurrency(toDelete()?.amount) }} dejar\u00E1 de formar parte del total mensual.</p>\n    </div>\n  </div>\n  <div class=\"dialog-actions\">\n    <button\n      pButton\n      type=\"button\"\n      severity=\"secondary\"\n      [outlined]=\"true\"\n      (click)=\"confirmVisible.set(false)\"\n    >\n      Cancelar</button\n    ><button pButton type=\"button\" severity=\"danger\" [loading]=\"saving()\" (click)=\"delete()\">\n      Eliminar\n    </button>\n  </div></p-dialog\n>\n", styles: [":host { display: block; }\n.detail-page { min-height: calc(100vh - 72px); padding: 32px 32px 48px 96px; background: #f8fafc; color: #18181b; }\n.detail-header, .summary, .table-card { max-width: 1500px; margin-left: auto; margin-right: auto; }\n.detail-header { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 24px; }\n.header-left { display: flex; align-items: center; gap: 14px; }\n.header-left h1 { margin: 3px 0 4px; font-size: 1.8rem; letter-spacing: -.035em; }\n.header-left p { margin: 0; color: #71717a; font-size: .8rem; }\n.eyebrow { display: block; color: #9810d5; font-size: .75rem; font-weight: 700; text-transform: uppercase; }\n.back-button { display: flex; align-items: center; justify-content: center; width: 42px; height: 42px; flex: 0 0 42px; padding: 0; color: #52525b; background: #fff; border: 1px solid #e4e4e7; border-radius: 10px; cursor: pointer; }\n.back-button:hover { color: #9810d5; background: #faf5ff; }\n.period-selector { display: flex; flex-direction: column; gap: 5px; }\n.period-selector label { color: #52525b; font-size: .72rem; font-weight: 600; }\n.period-navigation { display: flex; align-items: center; gap: 8px; }\n.period-navigation p-datepicker { display: inline-flex; width: 180px; margin: 0 4px; }\n.period-navigation > button { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; color: #7e22ce; background: #fff; border: 1px solid #d8b4fe; border-radius: 9px; }\n.period-navigation > button:hover { background: #faf5ff; border-color: #a855f7; }\n:host ::ng-deep .period-selector .p-datepicker { width: 180px; }\n:host ::ng-deep .period-selector .p-datepicker-input { width: 1%; min-width: 0; flex: 1 1 auto; }\n.summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px; }\n.summary > div { padding: 18px; background: #fff; border: 1px solid #e4e4e7; border-radius: 14px; }\n.summary small { display: block; color: #71717a; margin-bottom: 5px; }\n.summary strong { font-size: 1.05rem; }\n.summary .total { border-color: #bbf7d0; background: #f0fdf4; }\n.summary .total strong { color: #15803d; font-size: 1.2rem; }\n.table-card { overflow: hidden; background: #fff; border: 1px solid #e4e4e7; border-radius: 14px; }\n.table-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px; border-bottom: 1px solid #e4e4e7; }\n.table-toolbar h2 { margin: 0 0 4px; font-size: 1rem; }\n.table-toolbar span { color: #71717a; font-size: .76rem; }\n.amount { color: #15803d; font-weight: 700; }\n.actions { display: flex; justify-content: flex-end; gap: 2px; }\n.empty { display: flex; min-height: 240px; align-items: center; justify-content: center; flex-direction: column; gap: 7px; color: #71717a; }\n.total-row { font-weight: 700; }\n.total-row td:nth-child(2) { color: #15803d; }\n.form { display: flex; flex-direction: column; gap: 16px; }\n.field { display: flex; flex-direction: column; gap: 6px; }\n.field label { font-size: .78rem; font-weight: 600; }\n.field textarea { width: 100%; }\n.money-input { position: relative; width: 100%; }\n.money-input span { position: absolute; top: 50%; left: 12px; z-index: 2; color: #71717a; transform: translateY(-50%); }\n.money-input input { width: 100%; padding-left: 28px; }\n.dialog-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }\n.confirm { display: flex; align-items: flex-start; gap: 12px; }\n.confirm > i { color: #dc2626; font-size: 1.3rem; }\n.confirm p { color: #71717a; font-size: .82rem; }\n@media (max-width: 768px) { .detail-page { min-height: calc(100vh - 64px); padding: 22px 16px 36px 80px; } .detail-header, .table-toolbar { align-items: stretch; flex-direction: column; } .header-left { align-items: flex-start; } .summary { grid-template-columns: 1fr; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetalleReintegroIva, { className: "DetalleReintegroIva", filePath: "src/app/pages/reintegro-iva/detalle-reintegro-iva/detalle-reintegro-iva.ts", lineNumber: 26 }); })();
