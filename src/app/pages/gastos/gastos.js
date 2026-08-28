import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Textarea } from 'primeng/textarea';
import { Toast } from 'primeng/toast';
import { Api } from '../../services/api';
import { formatMoneyInput, normalizeMoneyInput } from '../../utils/money-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
const _c0 = () => ({ width: "min(700px, calc(100vw - 32px))" });
const _c1 = () => ({ width: "min(580px, calc(100vw - 32px))" });
const _c2 = () => ({ width: "min(450px, calc(100vw - 32px))" });
const _forTrack0 = ($index, $item) => $item.id;
function Gastos_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 62);
    i0.ɵɵtext(2, "Descripci\u00F3n ");
    i0.ɵɵelement(3, "p-sort-icon", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 64);
    i0.ɵɵtext(5, "Categor\u00EDa ");
    i0.ɵɵelement(6, "p-sort-icon", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Observaci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th", 66);
    i0.ɵɵtext(12, "Importe ");
    i0.ɵɵelement(13, "p-sort-icon", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "th");
    i0.ɵɵelementEnd();
} }
function Gastos_ng_template_80_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.formatCurrency(item_r3.amount), " ");
} }
function Gastos_ng_template_80_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 70);
    i0.ɵɵtext(1, "Sin cargar");
    i0.ɵɵelementEnd();
} }
function Gastos_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "span", 68);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 69);
    i0.ɵɵconditionalCreate(12, Gastos_ng_template_80_Conditional_12_Template, 1, 1)(13, Gastos_ng_template_80_Conditional_13_Template, 2, 0, "span", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "div", 71)(16, "button", 72);
    i0.ɵɵlistener("click", function Gastos_ng_template_80_Template_button_click_16_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(item_r3)); });
    i0.ɵɵelement(17, "i", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 74);
    i0.ɵɵlistener("click", function Gastos_ng_template_80_Template_button_click_18_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDelete(item_r3)); });
    i0.ɵɵelement(19, "i", 75);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.description);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-category", item_r3.category);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.categoryLabel(item_r3.category));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.periodLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.observation || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r3.amount !== null ? 12 : 13);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("text", true)("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true);
} }
function Gastos_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 76)(2, "div", 77);
    i0.ɵɵelement(3, "i", 30);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "No hay gastos en este per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Agreg\u00E1 el primero para comenzar.");
    i0.ɵɵelementEnd()()()();
} }
function Gastos_Conditional_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelement(1, "i", 78);
    i0.ɵɵtext(2, " Cargando gastos...");
    i0.ɵɵelementEnd();
} }
function Gastos_Conditional_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelement(1, "i", 79);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay gastos en el per\u00EDodo anterior");
    i0.ɵɵelementEnd()();
} }
function Gastos_Conditional_92_For_8_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.observation);
} }
function Gastos_Conditional_92_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 82)(1, "input", 81);
    i0.ɵɵlistener("change", function Gastos_Conditional_92_For_8_Template_input_change_1_listener($event) { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.toggleCopy(item_r7.id, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, Gastos_Conditional_92_For_8_Conditional_5_Template, 2, 1, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 68);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r3.selectedCopyIds().includes(item_r7.id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r7.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r7.observation ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-category", item_r7.category);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.categoryLabel(item_r7.category));
} }
function Gastos_Conditional_92_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44)(1, "label", 80)(2, "input", 81);
    i0.ɵɵlistener("change", function Gastos_Conditional_92_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleAllPrevious($event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Seleccionar todos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(7, Gastos_Conditional_92_For_8_Template, 8, 5, "label", 82, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r3.allPreviousSelected());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r3.previousRows().length, " gastos");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3.previousRows());
} }
export class Gastos {
    api = inject(Api);
    messages = inject(MessageService);
    rows = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    search = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    categoryFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "categoryFilter" }] : /* istanbul ignore next */ []));
    total = signal('0', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    totals = signal({ IMPUESTOS: '0', SERVICIOS: '0', VARIOS: '0' }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totals" }] : /* istanbul ignore next */ []));
    periodDate = signal(new Date(new Date().getFullYear(), new Date().getMonth(), 1), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodDate" }] : /* istanbul ignore next */ []));
    dialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "dialogVisible" }] : /* istanbul ignore next */ []));
    confirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "confirmVisible" }] : /* istanbul ignore next */ []));
    editing = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editing" }] : /* istanbul ignore next */ []));
    toDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "toDelete" }] : /* istanbul ignore next */ []));
    copyVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "copyVisible" }] : /* istanbul ignore next */ []));
    previousRows = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "previousRows" }] : /* istanbul ignore next */ []));
    selectedCopyIds = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedCopyIds" }] : /* istanbul ignore next */ []));
    loadingPrevious = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loadingPrevious" }] : /* istanbul ignore next */ []));
    form = this.emptyForm();
    categoryOptions = [{ label: 'Impuestos', value: 'IMPUESTOS' }, { label: 'Servicios', value: 'SERVICIOS' }, { label: 'Varios', value: 'VARIOS' }];
    filterOptions = [{ label: 'Todas las categorías', value: 'TODOS' }, ...this.categoryOptions];
    filteredRows = computed(() => { const term = this.search().trim().toLocaleLowerCase('es'); return this.rows().filter(item => (this.categoryFilter() === 'TODOS' || item.category === this.categoryFilter()) && (!term || `${item.description} ${item.observation}`.toLocaleLowerCase('es').includes(term))); }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredRows" }] : /* istanbul ignore next */ []));
    filteredTotals = computed(() => { const rows = this.filteredRows(); const by = (category) => rows.filter(item => item.category === category).reduce((sum, item) => sum + Number(item.amount ?? 0), 0); const impuestos = by('IMPUESTOS'), servicios = by('SERVICIOS'), varios = by('VARIOS'); return { impuestos, servicios, varios, total: impuestos + servicios + varios }; }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredTotals" }] : /* istanbul ignore next */ []));
    allPreviousSelected = computed(() => this.previousRows().length > 0 && this.selectedCopyIds().length === this.previousRows().length, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "allPreviousSelected" }] : /* istanbul ignore next */ []));
    ngOnInit() { void this.load(); }
    async load() { this.loading.set(true); try {
        const response = await firstValueFrom(this.api.getExpenses(this.period()));
        this.rows.set(response.expenses);
        this.total.set(response.total);
        this.totals.set(response.totals);
    }
    catch (e) {
        this.error(e);
    }
    finally {
        this.loading.set(false);
    } }
    changePeriod(value) { if (!value)
        return; this.periodDate.set(new Date(value.getFullYear(), value.getMonth(), 1)); void this.load(); }
    movePeriod(offset) { const v = this.periodDate(); this.changePeriod(new Date(v.getFullYear(), v.getMonth() + offset, 1)); }
    openCreate() { this.editing.set(null); this.form = this.emptyForm(); this.dialogVisible.set(true); }
    openEdit(item) { this.editing.set(item); this.form = { category: item.category, description: item.description, amount: item.amount ?? '', observation: item.observation }; this.dialogVisible.set(true); }
    async openCopyPrevious() { this.copyVisible.set(true); this.loadingPrevious.set(true); this.selectedCopyIds.set([]); try {
        const response = await firstValueFrom(this.api.getPreviousExpenses(this.period()));
        this.previousRows.set(response.expenses);
    }
    catch (e) {
        this.error(e);
        this.copyVisible.set(false);
    }
    finally {
        this.loadingPrevious.set(false);
    } }
    toggleCopy(id, checked) { this.selectedCopyIds.update(ids => checked ? [...ids, id] : ids.filter(value => value !== id)); }
    toggleAllPrevious(checked) { this.selectedCopyIds.set(checked ? this.previousRows().map(item => item.id) : []); }
    async copySelected() { const ids = this.selectedCopyIds(); if (!ids.length) {
        this.showError('Seleccioná al menos un gasto.');
        return;
    } this.saving.set(true); try {
        const result = await firstValueFrom(this.api.copyPreviousExpenses(`${this.period()}-01`, ids));
        this.copyVisible.set(false);
        await this.load();
        this.success(result.skipped ? `${result.created} gastos copiados; ${result.skipped} ya existían.` : `${result.created} gastos copiados sin importe.`);
    }
    catch (e) {
        this.error(e);
    }
    finally {
        this.saving.set(false);
    } }
    async save() { if (!this.form.description.trim() || Number(this.form.amount) <= 0) {
        this.showError('Ingresá una descripción y un importe mayor a cero.');
        return;
    } const payload = { period: `${this.period()}-01`, category: this.form.category, description: this.form.description.trim(), amount: Number(this.form.amount), observation: this.form.observation.trim() }; this.saving.set(true); try {
        const item = this.editing();
        if (item)
            await firstValueFrom(this.api.updateExpense(item.id, payload));
        else
            await firstValueFrom(this.api.createExpense(payload));
        this.dialogVisible.set(false);
        await this.load();
        this.success(item ? 'Gasto actualizado.' : 'Gasto agregado.');
    }
    catch (e) {
        this.error(e);
    }
    finally {
        this.saving.set(false);
    } }
    askDelete(item) { this.toDelete.set(item); this.confirmVisible.set(true); }
    async delete() { const item = this.toDelete(); if (!item)
        return; this.saving.set(true); try {
        await firstValueFrom(this.api.deleteExpense(item.id));
        this.confirmVisible.set(false);
        this.toDelete.set(null);
        await this.load();
        this.success('Gasto eliminado.');
    }
    catch (e) {
        this.error(e);
    }
    finally {
        this.saving.set(false);
    } }
    resetFilters() { this.search.set(''); this.categoryFilter.set('TODOS'); }
    formatCurrency(value) { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value ?? 0)); }
    formatMoneyInput(value) { return formatMoneyInput(value); }
    updateAmount(value) { const normalized = normalizeMoneyInput(value); if (normalized !== null)
        this.form.amount = normalized; }
    categoryLabel(value) { return ({ IMPUESTOS: 'Impuestos', SERVICIOS: 'Servicios', VARIOS: 'Varios' })[value]; }
    periodLabel() { const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(this.periodDate()); return label[0].toUpperCase() + label.slice(1); }
    previousPeriodLabel() { const value = this.periodDate(); const previous = new Date(value.getFullYear(), value.getMonth() - 1, 1); const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(previous); return label[0].toUpperCase() + label.slice(1); }
    period() { const v = this.periodDate(); return `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(2, '0')}`; }
    emptyForm() { return { category: 'IMPUESTOS', description: '', amount: '', observation: '' }; }
    error(e) { this.showError(e instanceof HttpErrorResponse && e.error?.detail ? e.error.detail : 'Ocurrió un error inesperado.'); }
    success(detail) { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); }
    showError(detail) { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
    static ɵfac = function Gastos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Gastos)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Gastos, selectors: [["app-gastos"]], features: [i0.ɵɵProvidersFeature([MessageService])], decls: 137, vars: 59, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right"], [1, "expenses-page"], [1, "page-header"], [1, "eyebrow"], [1, "header-actions"], [1, "period-selector"], ["for", "expense_period"], [1, "period-navigation"], ["type", "button", "aria-label", "Mes anterior", 3, "click"], [1, "pi", "pi-chevron-left"], ["inputId", "expense_period", "view", "month", "dateFormat", "mm/yy", 3, "ngModelChange", "showIcon", "readonlyInput", "ngModel"], ["type", "button", "aria-label", "Mes siguiente", 3, "click"], [1, "pi", "pi-chevron-right"], [1, "header-buttons"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-copy"], ["pButton", "", "type", "button", 3, "click"], [1, "pi", "pi-plus"], [1, "stats-grid"], [1, "stat-card", "taxes"], [1, "stat-icon"], [1, "pi", "pi-file"], [1, "stat-card", "services"], [1, "pi", "pi-bolt"], [1, "stat-card", "misc"], [1, "pi", "pi-box"], [1, "stat-card", "total"], [1, "pi", "pi-wallet"], [1, "table-card"], [1, "table-toolbar"], [1, "filters"], ["optionLabel", "label", "optionValue", "value", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], [1, "search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar gasto...", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "severity", "secondary", "title", "Restablecer filtros", 3, "click", "text", "rounded"], [1, "pi", "pi-filter-slash"], [3, "value", "loading", "paginator", "rows"], ["header", "Copiar gastos del mes anterior", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "copy-description"], [1, "copy-empty"], [1, "copy-list"], [1, "dialog-actions"], ["pButton", "", "type", "button", 3, "click", "loading", "disabled"], [3, "visibleChange", "visible", "header", "modal", "draggable", "resizable"], [1, "form", 3, "ngSubmit"], [1, "field"], ["name", "category", "optionLabel", "label", "optionValue", "value", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["pInputText", "", "name", "description", 3, "ngModelChange", "ngModel"], [1, "field", "full"], [1, "money-input"], ["pInputText", "", "name", "amount", "type", "text", "inputmode", "decimal", 3, "ngModelChange", "ngModel"], ["pTextarea", "", "name", "observation", "rows", "3", "placeholder", "Opcional", 3, "ngModelChange", "ngModel"], [1, "dialog-actions", "full"], ["pButton", "", "type", "submit", 3, "loading"], ["header", "Eliminar gasto", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "confirm"], [1, "pi", "pi-exclamation-triangle"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "loading"], ["pSortableColumn", "description"], ["field", "description"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "amount"], ["field", "amount"], [1, "category"], [1, "amount"], [1, "pending-amount"], [1, "actions"], ["pButton", "", "type", "button", "title", "Editar", 3, "click", "text", "rounded"], [1, "pi", "pi-pencil"], ["pButton", "", "type", "button", "severity", "danger", "title", "Eliminar", 3, "click", "text", "rounded"], [1, "pi", "pi-trash"], ["colspan", "6"], [1, "empty"], [1, "pi", "pi-spinner", "pi-spin"], [1, "pi", "pi-inbox"], [1, "copy-row", "copy-all"], ["type", "checkbox", 3, "change", "checked"], [1, "copy-row"]], template: function Gastos_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "p-toast", 3);
            i0.ɵɵelementStart(1, "section", 4)(2, "header", 5)(3, "div")(4, "span", 6);
            i0.ɵɵtext(5, "Finanzas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Gastos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, " Gastos correspondientes a ");
            i0.ɵɵelementStart(10, "strong");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, ". ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 7)(14, "div", 8)(15, "label", 9);
            i0.ɵɵtext(16, "Per\u00EDodo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 10)(18, "button", 11);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_18_listener() { return ctx.movePeriod(-1); });
            i0.ɵɵelement(19, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p-datepicker", 13);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_p_datepicker_ngModelChange_20_listener($event) { return ctx.changePeriod($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(21, "button", 14);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_21_listener() { return ctx.movePeriod(1); });
            i0.ɵɵelement(22, "i", 15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "div", 16)(24, "button", 17);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_24_listener() { return ctx.openCopyPrevious(); });
            i0.ɵɵelement(25, "i", 18);
            i0.ɵɵtext(26, " Copiar mes anterior");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 19);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_27_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(28, "i", 20);
            i0.ɵɵtext(29, " Nuevo gasto");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(30, "section", 21)(31, "article", 22)(32, "span", 23);
            i0.ɵɵelement(33, "i", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div")(35, "small");
            i0.ɵɵtext(36, "Impuestos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "strong");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "article", 25)(40, "span", 23);
            i0.ɵɵelement(41, "i", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div")(43, "small");
            i0.ɵɵtext(44, "Servicios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "strong");
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(47, "article", 27)(48, "span", 23);
            i0.ɵɵelement(49, "i", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div")(51, "small");
            i0.ɵɵtext(52, "Varios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "strong");
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "article", 29)(56, "span", 23);
            i0.ɵɵelement(57, "i", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div")(59, "small");
            i0.ɵɵtext(60, "Total gastos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "strong");
            i0.ɵɵtext(62);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(63, "section", 31)(64, "div", 32)(65, "div")(66, "h2");
            i0.ɵɵtext(67, "Gastos registrados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "span");
            i0.ɵɵtext(69);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(70, "div", 33)(71, "p-select", 34);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_p_select_ngModelChange_71_listener($event) { return ctx.categoryFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(72, "span", 35);
            i0.ɵɵelement(73, "i", 36);
            i0.ɵɵelementStart(74, "input", 37);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_input_ngModelChange_74_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "button", 38);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_75_listener() { return ctx.resetFilters(); });
            i0.ɵɵelement(76, "i", 39);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(77, "p-table", 40);
            i0.ɵɵtemplate(78, Gastos_ng_template_78_Template, 15, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(80, Gastos_ng_template_80_Template, 20, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(82, Gastos_ng_template_82_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(84, "p-dialog", 41);
            i0.ɵɵlistener("visibleChange", function Gastos_Template_p_dialog_visibleChange_84_listener($event) { return ctx.copyVisible.set($event); });
            i0.ɵɵelementStart(85, "p", 42);
            i0.ɵɵtext(86, "Seleccion\u00E1 los gastos de ");
            i0.ɵɵelementStart(87, "strong");
            i0.ɵɵtext(88);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(89);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(90, Gastos_Conditional_90_Template, 3, 0, "div", 43)(91, Gastos_Conditional_91_Template, 4, 0, "div", 43)(92, Gastos_Conditional_92_Template, 9, 2, "div", 44);
            i0.ɵɵelementStart(93, "div", 45)(94, "button", 17);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_94_listener() { return ctx.copyVisible.set(false); });
            i0.ɵɵtext(95, "Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "button", 46);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_96_listener() { return ctx.copySelected(); });
            i0.ɵɵtext(97);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(98, "p-dialog", 47);
            i0.ɵɵlistener("visibleChange", function Gastos_Template_p_dialog_visibleChange_98_listener($event) { return ctx.dialogVisible.set($event); });
            i0.ɵɵelementStart(99, "form", 48);
            i0.ɵɵlistener("ngSubmit", function Gastos_Template_form_ngSubmit_99_listener() { return ctx.save(); });
            i0.ɵɵelementStart(100, "div", 49)(101, "label");
            i0.ɵɵtext(102, "Categor\u00EDa *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "p-select", 50);
            i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Template_p_select_ngModelChange_103_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.category, $event) || (ctx.form.category = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 49)(105, "label");
            i0.ɵɵtext(106, "Descripci\u00F3n *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "input", 51);
            i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Template_input_ngModelChange_107_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.description, $event) || (ctx.form.description = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "div", 52)(109, "label");
            i0.ɵɵtext(110, "Importe *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "div", 53)(112, "span");
            i0.ɵɵtext(113, "$");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "input", 54);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_input_ngModelChange_114_listener($event) { return ctx.updateAmount($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(115, "div", 52)(116, "label");
            i0.ɵɵtext(117, "Observaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "textarea", 55);
            i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Template_textarea_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.observation, $event) || (ctx.form.observation = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "div", 56)(120, "button", 17);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_120_listener() { return ctx.dialogVisible.set(false); });
            i0.ɵɵtext(121, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(122, "button", 57);
            i0.ɵɵtext(123, "Guardar");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(124, "p-dialog", 58);
            i0.ɵɵlistener("visibleChange", function Gastos_Template_p_dialog_visibleChange_124_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(125, "div", 59);
            i0.ɵɵelement(126, "i", 60);
            i0.ɵɵelementStart(127, "div")(128, "strong");
            i0.ɵɵtext(129);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "p");
            i0.ɵɵtext(131);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(132, "div", 45)(133, "button", 17);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_133_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(134, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(135, "button", 61);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_135_listener() { return ctx.delete(); });
            i0.ɵɵtext(136, " Eliminar ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.periodLabel());
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("showIcon", true)("readonlyInput", true)("ngModel", ctx.periodDate());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.filteredTotals().impuestos));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.filteredTotals().servicios));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.filteredTotals().varios));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.filteredTotals().total));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.filteredRows().length, " resultados");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("options", ctx.filterOptions)("ngModel", ctx.categoryFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", true)("rounded", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.filteredRows())("loading", ctx.loading())("paginator", ctx.filteredRows().length > 10)("rows", 10);
            i0.ɵɵadvance(7);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(56, _c0));
            i0.ɵɵproperty("visible", ctx.copyVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.previousPeriodLabel());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" que quer\u00E9s crear en ", ctx.periodLabel(), ". Los importes no se copiar\u00E1n.");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loadingPrevious() ? 90 : !ctx.previousRows().length ? 91 : 92);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving())("disabled", !ctx.selectedCopyIds().length);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("Copiar seleccionados (", ctx.selectedCopyIds().length, ")");
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(57, _c1));
            i0.ɵɵproperty("visible", ctx.dialogVisible())("header", ctx.editing() ? "Editar gasto" : "Nuevo gasto")("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.categoryOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.category);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.description);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(7);
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
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(58, _c2));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("\u00BFEliminar ", ctx.toDelete()?.description, "?");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.formatCurrency(ctx.toDelete()?.amount), " dejar\u00E1 de formar parte del total mensual.");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective, DatePicker, Dialog, InputText, Select, TableModule, i2.Table, i2.SortableColumn, i2.SortIcon, Textarea, Toast], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.expenses-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n  color: #18181b;\n}\n.page-header[_ngcontent-%COMP%], \n.stats-grid[_ngcontent-%COMP%], \n.table-card[_ngcontent-%COMP%] {\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 4px 0 6px;\n  font-size: 2rem;\n  letter-spacing: -0.035em;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #71717a;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n}\n.header-buttons[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.period-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #52525b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.period-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-navigation[_ngcontent-%COMP%]   p-datepicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 180px;\n  margin: 0 4px;\n}\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  color: #7e22ce;\n  background: #fff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n}\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background: #faf5ff;\n  border-color: #a855f7;\n}\n[_nghost-%COMP%]     .period-selector .p-datepicker {\n  width: 180px;\n}\n[_nghost-%COMP%]     .period-selector .p-datepicker-input {\n  width: 1%;\n  min-width: 0;\n  flex: 1;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #71717a;\n  margin-bottom: 3px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n}\n.taxes[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.services[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.misc[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #52525b;\n  background: #f4f4f5;\n}\n.total[_ngcontent-%COMP%] {\n  border-color: #e9b7f5;\n  background: #fffaff;\n}\n.total[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #9810d5;\n  background: #f7dcfb;\n}\n.table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.table-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.table-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.76rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%);\n  color: #a1a1aa;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 240px;\n  padding-left: 36px;\n}\n.amount[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 700;\n}\n.pending-amount[_ngcontent-%COMP%] { color: #a16207; font-size: 0.75rem; font-weight: 700; }\n.category[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 5px 9px;\n  border-radius: 999px;\n  background: #f4f4f5;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.category[data-category='IMPUESTOS'][_ngcontent-%COMP%] {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.category[data-category='SERVICIOS'][_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 6px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   p-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.money-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.money-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  z-index: 2;\n  color: #71717a;\n  transform: translateY(-50%);\n}\n.money-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.confirm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirm[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.3rem;\n}\n.confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.82rem;\n}\n.copy-description[_ngcontent-%COMP%] { margin: 0 0 16px; color: #52525b; font-size: 0.84rem; line-height: 1.5; }\n.copy-list[_ngcontent-%COMP%] { overflow: hidden; border: 1px solid #e4e4e7; border-radius: 12px; }\n.copy-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 20px minmax(0, 1fr) auto; align-items: center; gap: 12px; min-height: 56px; padding: 10px 14px; border-bottom: 1px solid #f4f4f5; cursor: pointer; }\n.copy-row[_ngcontent-%COMP%]:last-child { border-bottom: 0; }.copy-row[_ngcontent-%COMP%]:hover { background: #faf5ff; }.copy-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 17px; height: 17px; accent-color: #9810d5; }.copy-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) { display: flex; min-width: 0; flex-direction: column; gap: 2px; }.copy-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #71717a; font-size: 0.72rem; }.copy-all[_ngcontent-%COMP%] { min-height: 48px; background: #fafafa; font-weight: 700; }.copy-empty[_ngcontent-%COMP%] { display: flex; min-height: 150px; align-items: center; justify-content: center; flex-direction: column; gap: 8px; color: #71717a; }\n@media (max-width: 1000px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .expenses-page[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n  .page-header[_ngcontent-%COMP%], \n   .table-toolbar[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .stats-grid[_ngcontent-%COMP%], \n   .form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .full[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Gastos, [{
        type: Component,
        args: [{ selector: 'app-gastos', imports: [FormsModule, ButtonDirective, DatePicker, Dialog, InputText, Select, TableModule, Textarea, Toast], providers: [MessageService], template: "<p-toast position=\"bottom-right\" />\n<section class=\"expenses-page\">\n  <header class=\"page-header\">\n    <div>\n      <span class=\"eyebrow\">Finanzas</span>\n      <h1>Gastos</h1>\n      <p>\n        Gastos correspondientes a <strong>{{ periodLabel() }}</strong\n        >.\n      </p>\n    </div>\n    <div class=\"header-actions\">\n      <div class=\"period-selector\">\n        <label for=\"expense_period\">Per\u00EDodo</label>\n        <div class=\"period-navigation\">\n          <button type=\"button\" aria-label=\"Mes anterior\" (click)=\"movePeriod(-1)\">\n            <i class=\"pi pi-chevron-left\"></i></button\n          ><p-datepicker\n            inputId=\"expense_period\"\n            view=\"month\"\n            dateFormat=\"mm/yy\"\n            [showIcon]=\"true\"\n            [readonlyInput]=\"true\"\n            [ngModel]=\"periodDate()\"\n            (ngModelChange)=\"changePeriod($event)\"\n          /><button type=\"button\" aria-label=\"Mes siguiente\" (click)=\"movePeriod(1)\">\n            <i class=\"pi pi-chevron-right\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"header-buttons\">\n        <button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"openCopyPrevious()\"><i class=\"pi pi-copy\"></i> Copiar mes anterior</button>\n        <button pButton type=\"button\" (click)=\"openCreate()\"><i class=\"pi pi-plus\"></i> Nuevo gasto</button>\n      </div>\n    </div>\n  </header>\n  <section class=\"stats-grid\">\n    <article class=\"stat-card taxes\">\n      <span class=\"stat-icon\"><i class=\"pi pi-file\"></i></span>\n      <div>\n        <small>Impuestos</small><strong>{{ formatCurrency(filteredTotals().impuestos) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card services\">\n      <span class=\"stat-icon\"><i class=\"pi pi-bolt\"></i></span>\n      <div>\n        <small>Servicios</small><strong>{{ formatCurrency(filteredTotals().servicios) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card misc\">\n      <span class=\"stat-icon\"><i class=\"pi pi-box\"></i></span>\n      <div>\n        <small>Varios</small><strong>{{ formatCurrency(filteredTotals().varios) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card total\">\n      <span class=\"stat-icon\"><i class=\"pi pi-wallet\"></i></span>\n      <div>\n        <small>Total gastos</small><strong>{{ formatCurrency(filteredTotals().total) }}</strong>\n      </div>\n    </article>\n  </section>\n  <section class=\"table-card\">\n    <div class=\"table-toolbar\">\n      <div>\n        <h2>Gastos registrados</h2>\n        <span>{{ filteredRows().length }} resultados</span>\n      </div>\n      <div class=\"filters\">\n        <p-select\n          [options]=\"filterOptions\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"categoryFilter()\"\n          (ngModelChange)=\"categoryFilter.set($event)\"\n          appendTo=\"body\"\n        /><span class=\"search\"\n          ><i class=\"pi pi-search\"></i\n          ><input\n            pInputText\n            type=\"search\"\n            placeholder=\"Buscar gasto...\"\n            [ngModel]=\"search()\"\n            (ngModelChange)=\"search.set($event)\" /></span\n        ><button\n          pButton\n          type=\"button\"\n          [text]=\"true\"\n          [rounded]=\"true\"\n          severity=\"secondary\"\n          title=\"Restablecer filtros\"\n          (click)=\"resetFilters()\"\n        >\n          <i class=\"pi pi-filter-slash\"></i>\n        </button>\n      </div>\n    </div>\n    <p-table\n      [value]=\"filteredRows()\"\n      [loading]=\"loading()\"\n      [paginator]=\"filteredRows().length > 10\"\n      [rows]=\"10\"\n      ><ng-template #header\n        ><tr>\n          <th pSortableColumn=\"description\">Descripci\u00F3n <p-sort-icon field=\"description\" /></th>\n          <th pSortableColumn=\"category\">Categor\u00EDa <p-sort-icon field=\"category\" /></th>\n          <th>Per\u00EDodo</th>\n          <th>Observaci\u00F3n</th>\n          <th pSortableColumn=\"amount\">Importe <p-sort-icon field=\"amount\" /></th>\n          <th></th></tr></ng-template\n      ><ng-template #body let-item\n        ><tr>\n          <td>\n            <strong>{{ item.description }}</strong>\n          </td>\n          <td>\n            <span class=\"category\" [attr.data-category]=\"item.category\">{{\n              categoryLabel(item.category)\n            }}</span>\n          </td>\n          <td>{{ periodLabel() }}</td>\n          <td>{{ item.observation || '\u2014' }}</td>\n          <td class=\"amount\">@if (item.amount !== null) { {{ formatCurrency(item.amount) }} } @else { <span class=\"pending-amount\">Sin cargar</span> }</td>\n          <td>\n            <div class=\"actions\">\n              <button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                title=\"Editar\"\n                (click)=\"openEdit(item)\"\n              >\n                <i class=\"pi pi-pencil\"></i></button\n              ><button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                severity=\"danger\"\n                title=\"Eliminar\"\n                (click)=\"askDelete(item)\"\n              >\n                <i class=\"pi pi-trash\"></i>\n              </button>\n            </div>\n          </td></tr></ng-template\n      ><ng-template #emptymessage\n        ><tr>\n          <td colspan=\"6\">\n            <div class=\"empty\">\n              <i class=\"pi pi-wallet\"></i><strong>No hay gastos en este per\u00EDodo</strong\n              ><span>Agreg\u00E1 el primero para comenzar.</span>\n            </div>\n          </td>\n        </tr></ng-template\n      ></p-table\n    >\n  </section>\n</section>\n<p-dialog [visible]=\"copyVisible()\" (visibleChange)=\"copyVisible.set($event)\" header=\"Copiar gastos del mes anterior\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [style]=\"{width:'min(700px, calc(100vw - 32px))'}\">\n  <p class=\"copy-description\">Seleccion\u00E1 los gastos de <strong>{{ previousPeriodLabel() }}</strong> que quer\u00E9s crear en {{ periodLabel() }}. Los importes no se copiar\u00E1n.</p>\n  @if (loadingPrevious()) { <div class=\"copy-empty\"><i class=\"pi pi-spinner pi-spin\"></i> Cargando gastos...</div> }\n  @else if (!previousRows().length) { <div class=\"copy-empty\"><i class=\"pi pi-inbox\"></i><strong>No hay gastos en el per\u00EDodo anterior</strong></div> }\n  @else { <div class=\"copy-list\"><label class=\"copy-row copy-all\"><input type=\"checkbox\" [checked]=\"allPreviousSelected()\" (change)=\"toggleAllPrevious($any($event.target).checked)\" /><span>Seleccionar todos</span><small>{{ previousRows().length }} gastos</small></label>@for (item of previousRows(); track item.id) { <label class=\"copy-row\"><input type=\"checkbox\" [checked]=\"selectedCopyIds().includes(item.id)\" (change)=\"toggleCopy(item.id, $any($event.target).checked)\" /><span><strong>{{ item.description }}</strong>@if (item.observation) { <small>{{ item.observation }}</small> }</span><span class=\"category\" [attr.data-category]=\"item.category\">{{ categoryLabel(item.category) }}</span></label> }</div> }\n  <div class=\"dialog-actions\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"copyVisible.set(false)\">Cancelar</button><button pButton type=\"button\" [loading]=\"saving()\" [disabled]=\"!selectedCopyIds().length\" (click)=\"copySelected()\">Copiar seleccionados ({{ selectedCopyIds().length }})</button></div>\n</p-dialog>\n<p-dialog\n  [visible]=\"dialogVisible()\"\n  (visibleChange)=\"dialogVisible.set($event)\"\n  [header]=\"editing() ? 'Editar gasto' : 'Nuevo gasto'\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(580px, calc(100vw - 32px))' }\"\n  ><form class=\"form\" (ngSubmit)=\"save()\">\n    <div class=\"field\">\n      <label>Categor\u00EDa *</label\n      ><p-select\n        name=\"category\"\n        [options]=\"categoryOptions\"\n        optionLabel=\"label\"\n        optionValue=\"value\"\n        [(ngModel)]=\"form.category\"\n        appendTo=\"body\"\n      />\n    </div>\n    <div class=\"field\">\n      <label>Descripci\u00F3n *</label\n      ><input pInputText name=\"description\" [(ngModel)]=\"form.description\" />\n    </div>\n    <div class=\"field full\">\n      <label>Importe *</label>\n      <div class=\"money-input\">\n        <span>$</span\n        ><input\n          pInputText\n          name=\"amount\"\n          type=\"text\"\n          inputmode=\"decimal\"\n          [ngModel]=\"formatMoneyInput(form.amount)\"\n          (ngModelChange)=\"updateAmount($event)\"\n        />\n      </div>\n    </div>\n    <div class=\"field full\">\n      <label>Observaci\u00F3n</label\n      ><textarea\n        pTextarea\n        name=\"observation\"\n        [(ngModel)]=\"form.observation\"\n        rows=\"3\"\n        placeholder=\"Opcional\"\n      ></textarea>\n    </div>\n    <div class=\"dialog-actions full\">\n      <button\n        pButton\n        type=\"button\"\n        severity=\"secondary\"\n        [outlined]=\"true\"\n        (click)=\"dialogVisible.set(false)\"\n      >\n        Cancelar</button\n      ><button pButton type=\"submit\" [loading]=\"saving()\">Guardar</button>\n    </div>\n  </form></p-dialog\n>\n<p-dialog\n  [visible]=\"confirmVisible()\"\n  (visibleChange)=\"confirmVisible.set($event)\"\n  header=\"Eliminar gasto\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(450px, calc(100vw - 32px))' }\"\n  ><div class=\"confirm\">\n    <i class=\"pi pi-exclamation-triangle\"></i>\n    <div>\n      <strong>\u00BFEliminar {{ toDelete()?.description }}?</strong>\n      <p>{{ formatCurrency(toDelete()?.amount) }} dejar\u00E1 de formar parte del total mensual.</p>\n    </div>\n  </div>\n  <div class=\"dialog-actions\">\n    <button\n      pButton\n      type=\"button\"\n      severity=\"secondary\"\n      [outlined]=\"true\"\n      (click)=\"confirmVisible.set(false)\"\n    >\n      Cancelar</button\n    ><button pButton type=\"button\" severity=\"danger\" [loading]=\"saving()\" (click)=\"delete()\">\n      Eliminar\n    </button>\n  </div></p-dialog\n>\n", styles: [":host {\n  display: block;\n}\n.expenses-page {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n  color: #18181b;\n}\n.page-header,\n.stats-grid,\n.table-card {\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.eyebrow {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\nh1 {\n  margin: 4px 0 6px;\n  font-size: 2rem;\n  letter-spacing: -0.035em;\n}\n.page-header p {\n  margin: 0;\n  color: #71717a;\n}\n.header-actions {\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n}\n.header-buttons { display: flex; align-items: center; gap: 10px; }\n.period-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.period-selector label {\n  color: #52525b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.period-navigation {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-navigation p-datepicker {\n  display: inline-flex;\n  width: 180px;\n  margin: 0 4px;\n}\n.period-navigation > button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  color: #7e22ce;\n  background: #fff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n}\n.period-navigation > button:hover {\n  background: #faf5ff;\n  border-color: #a855f7;\n}\n:host ::ng-deep .period-selector .p-datepicker {\n  width: 180px;\n}\n:host ::ng-deep .period-selector .p-datepicker-input {\n  width: 1%;\n  min-width: 0;\n  flex: 1;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.stat-card small {\n  display: block;\n  color: #71717a;\n  margin-bottom: 3px;\n}\n.stat-icon {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n}\n.taxes .stat-icon {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.services .stat-icon {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.misc .stat-icon {\n  color: #52525b;\n  background: #f4f4f5;\n}\n.total {\n  border-color: #e9b7f5;\n  background: #fffaff;\n}\n.total .stat-icon {\n  color: #9810d5;\n  background: #f7dcfb;\n}\n.table-card {\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.table-toolbar h2 {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.table-toolbar span {\n  color: #71717a;\n  font-size: 0.76rem;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.search {\n  position: relative;\n}\n.search i {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%);\n  color: #a1a1aa;\n}\n.search input {\n  width: 240px;\n  padding-left: 36px;\n}\n.amount {\n  color: #b91c1c;\n  font-weight: 700;\n}\n.pending-amount { color: #a16207; font-size: 0.75rem; font-weight: 700; }\n.category {\n  display: inline-flex;\n  padding: 5px 9px;\n  border-radius: 999px;\n  background: #f4f4f5;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.category[data-category='IMPUESTOS'] {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.category[data-category='SERVICIOS'] {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.empty {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.field {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 6px;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.field input,\n.field textarea,\n.field p-select {\n  width: 100%;\n}\n.full {\n  grid-column: 1/-1;\n}\n.money-input {\n  position: relative;\n}\n.money-input span {\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  z-index: 2;\n  color: #71717a;\n  transform: translateY(-50%);\n}\n.money-input input {\n  padding-left: 28px;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.confirm {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirm > i {\n  color: #dc2626;\n  font-size: 1.3rem;\n}\n.confirm p {\n  color: #71717a;\n  font-size: 0.82rem;\n}\n.copy-description { margin: 0 0 16px; color: #52525b; font-size: 0.84rem; line-height: 1.5; }\n.copy-list { overflow: hidden; border: 1px solid #e4e4e7; border-radius: 12px; }\n.copy-row { display: grid; grid-template-columns: 20px minmax(0, 1fr) auto; align-items: center; gap: 12px; min-height: 56px; padding: 10px 14px; border-bottom: 1px solid #f4f4f5; cursor: pointer; }\n.copy-row:last-child { border-bottom: 0; }.copy-row:hover { background: #faf5ff; }.copy-row input { width: 17px; height: 17px; accent-color: #9810d5; }.copy-row > span:nth-child(2) { display: flex; min-width: 0; flex-direction: column; gap: 2px; }.copy-row small { color: #71717a; font-size: 0.72rem; }.copy-all { min-height: 48px; background: #fafafa; font-weight: 700; }.copy-empty { display: flex; min-height: 150px; align-items: center; justify-content: center; flex-direction: column; gap: 8px; color: #71717a; }\n@media (max-width: 1000px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .header-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .expenses-page {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n  .page-header,\n  .table-toolbar,\n  .filters {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .stats-grid,\n  .form {\n    grid-template-columns: 1fr;\n  }\n  .full {\n    grid-column: auto;\n  }\n  .search input {\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Gastos, { className: "Gastos", filePath: "src/app/pages/gastos/gastos.ts", lineNumber: 19 }); })();
