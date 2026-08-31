import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { InputText } from 'primeng/inputtext';
import { ButtonDirective } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Tooltip } from 'primeng/tooltip';
import { Api } from '../../services/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
import * as i3 from "primeng/toast";
const _c0 = () => [10, 25, 50];
const _forTrack0 = ($index, $item) => $item.employee.id;
function Sueldos_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 49);
    i0.ɵɵtext(2, " Empleado ");
    i0.ɵɵelement(3, "p-sort-icon", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 51);
    i0.ɵɵtext(5, "Gremio ");
    i0.ɵɵelement(6, "p-sort-icon", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 53)(8, "span", 54);
    i0.ɵɵtext(9, " Recibo ");
    i0.ɵɵelement(10, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "p-sort-icon", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 57)(13, "span", 58);
    i0.ɵɵtext(14, " Descuentos ");
    i0.ɵɵelement(15, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "p-sort-icon", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 60)(18, "span", 61);
    i0.ɵɵtext(19, " Transferencia ");
    i0.ɵɵelement(20, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "p-sort-icon", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 63)(23, "span", 64);
    i0.ɵɵtext(24, " Efectivo ");
    i0.ɵɵelement(25, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "p-sort-icon", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th", 66)(28, "span", 67);
    i0.ɵɵtext(29, " Sueldo total ");
    i0.ɵɵelement(30, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "p-sort-icon", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(32, "th");
    i0.ɵɵelementEnd();
} }
function Sueldos_ng_template_88_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Sin liquidar");
    i0.ɵɵelementEnd();
} }
function Sueldos_ng_template_88_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 73);
    i0.ɵɵtext(1, " Liquidaci\u00F3n anulada ");
    i0.ɵɵelementEnd();
} }
function Sueldos_ng_template_88_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.formatCurrency(row_r2.salary.importe_recibo), " ");
} }
function Sueldos_ng_template_88_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " - ");
} }
function Sueldos_ng_template_88_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" - ", ctx_r2.formatCurrency(row_r2.salary.descuentos_total), " ");
} }
function Sueldos_ng_template_88_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " - ");
} }
function Sueldos_ng_template_88_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.formatCurrency(row_r2.salary.transferencia_real), " ");
} }
function Sueldos_ng_template_88_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " - ");
} }
function Sueldos_ng_template_88_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.formatCurrency(row_r2.salary.ajuste_efectivo), " ");
} }
function Sueldos_ng_template_88_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " - ");
} }
function Sueldos_ng_template_88_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.formatCurrency(row_r2.salary.sueldo_total), " ");
} }
function Sueldos_ng_template_88_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " - ");
} }
function Sueldos_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 69);
    i0.ɵɵlistener("click", function Sueldos_ng_template_88_Template_tr_click_0_listener() { const row_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openEmployee(row_r2.employee.id)); })("keydown.enter", function Sueldos_ng_template_88_Template_tr_keydown_enter_0_listener() { const row_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openEmployee(row_r2.employee.id)); });
    i0.ɵɵelementStart(1, "td")(2, "div", 70)(3, "div", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 72)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, Sueldos_ng_template_88_Conditional_8_Template, 2, 0, "small");
    i0.ɵɵconditionalCreate(9, Sueldos_ng_template_88_Conditional_9_Template, 2, 0, "small", 73);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵconditionalCreate(13, Sueldos_ng_template_88_Conditional_13_Template, 1, 1)(14, Sueldos_ng_template_88_Conditional_14_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 74);
    i0.ɵɵconditionalCreate(16, Sueldos_ng_template_88_Conditional_16_Template, 1, 1)(17, Sueldos_ng_template_88_Conditional_17_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td", 75);
    i0.ɵɵconditionalCreate(19, Sueldos_ng_template_88_Conditional_19_Template, 1, 1)(20, Sueldos_ng_template_88_Conditional_20_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td", 76);
    i0.ɵɵconditionalCreate(22, Sueldos_ng_template_88_Conditional_22_Template, 1, 1)(23, Sueldos_ng_template_88_Conditional_23_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td", 77);
    i0.ɵɵconditionalCreate(25, Sueldos_ng_template_88_Conditional_25_Template, 1, 1)(26, Sueldos_ng_template_88_Conditional_26_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "td", 78);
    i0.ɵɵelement(28, "i", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", row_r2.employee.nombre.charAt(0).toUpperCase(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getFullName(row_r2), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!row_r2.salary ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(row_r2.salary?.anulado ? 9 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r2.employee.gremio || "-", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(row_r2.salary ? 13 : 14);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(row_r2.salary ? 16 : 17);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(row_r2.salary ? 19 : 20);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(row_r2.salary ? 22 : 23);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(row_r2.salary ? 25 : 26);
} }
function Sueldos_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 79)(2, "div", 80);
    i0.ɵɵelement(3, "i", 27);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, " No hay empleados ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, " No encontramos resultados para este per\u00EDodo. ");
    i0.ɵɵelementEnd()()()();
} }
function Sueldos_For_94_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 81);
    i0.ɵɵlistener("click", function Sueldos_For_94_Template_article_click_0_listener() { const row_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openEmployee(row_r5.employee.id)); })("keydown.enter", function Sueldos_For_94_Template_article_keydown_enter_0_listener() { const row_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openEmployee(row_r5.employee.id)); });
    i0.ɵɵelementStart(1, "header", 82)(2, "div", 70)(3, "div", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 72)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(10, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 83)(12, "div")(13, "small");
    i0.ɵɵtext(14, "Recibo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "small");
    i0.ɵɵtext(19, "Descuentos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "strong", 84);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "small");
    i0.ɵɵtext(24, "Transferencia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "small");
    i0.ɵɵtext(29, "Efectivo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "footer", 85)(33, "span");
    i0.ɵɵtext(34, "Sueldo total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(row_r5.employee.nombre.charAt(0).toUpperCase());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.getFullName(row_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r5.employee.gremio || "Sin gremio");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(row_r5.salary ? ctx_r2.formatCurrency(row_r5.salary.importe_recibo) : "Sin liquidar");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(row_r5.salary ? ctx_r2.formatCurrency(row_r5.salary.descuentos_total) : "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(row_r5.salary ? ctx_r2.formatCurrency(row_r5.salary.transferencia_real) : "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(row_r5.salary ? ctx_r2.formatCurrency(row_r5.salary.ajuste_efectivo) : "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(row_r5.salary ? ctx_r2.formatCurrency(row_r5.salary.sueldo_total) : "\u2014");
} }
function Sueldos_ForEmpty_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay liquidaciones");
    i0.ɵɵelementEnd()();
} }
export class Sueldos {
    api = inject(Api);
    router = inject(Router);
    route = inject(ActivatedRoute);
    messageService = inject(MessageService);
    rows = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    search = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    gremioFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "gremioFilter" }] : /* istanbul ignore next */ []));
    groupFilter = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "groupFilter" }] : /* istanbul ignore next */ []));
    statusFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "statusFilter" }] : /* istanbul ignore next */ []));
    transferFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "transferFilter" }] : /* istanbul ignore next */ []));
    cashFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "cashFilter" }] : /* istanbul ignore next */ []));
    receiptFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "receiptFilter" }] : /* istanbul ignore next */ []));
    periodo = signal(this.route.snapshot.queryParamMap.get('periodo')
        ?? this.getCurrentPeriod(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodo" }] : /* istanbul ignore next */ []));
    periodDate = computed(() => {
        const [year, month] = this.periodo().split('-').map(Number);
        return new Date(year, month - 1, 1);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodDate" }] : /* istanbul ignore next */ []));
    statusOptions = [
        { label: 'Todos los estados', value: 'TODOS' },
        { label: 'Liquidados', value: 'LIQUIDADO' },
        { label: 'Sin liquidar', value: 'PENDIENTE' },
        { label: 'Anulados', value: 'ANULADO' }
    ];
    transferOptions = [
        { label: 'Todas las transferencias', value: 'TODOS' },
        { label: 'Transferencia realizada', value: 'SI' },
        { label: 'Transferencia pendiente', value: 'NO' }
    ];
    cashOptions = [
        { label: 'Todo el efectivo', value: 'TODOS' },
        { label: 'Efectivo entregado', value: 'SI' },
        { label: 'Efectivo pendiente', value: 'NO' }
    ];
    receiptOptions = [
        { label: 'Todos los recibos', value: 'TODOS' },
        { label: 'Recibo entregado', value: 'SI' },
        { label: 'Recibo pendiente', value: 'NO' }
    ];
    filteredRows = computed(() => {
        const term = this.search().trim().toLowerCase();
        return this.rows().filter(row => {
            const employee = row.employee;
            const matchesSearch = !term || [
                employee.nombre,
                employee.apellido,
                employee.gremio
            ].some(value => value?.toLowerCase().includes(term));
            const matchesGremio = (this.gremioFilter() === 'TODOS'
                || (employee.gremio ?? '') === this.gremioFilter());
            const matchesGroup = this.groupFilter() === null
                || employee.group?.id === this.groupFilter();
            const status = !row.salary
                ? 'PENDIENTE'
                : row.salary.anulado
                    ? 'ANULADO'
                    : 'LIQUIDADO';
            const matchesStatus = (this.statusFilter() === 'TODOS'
                || status === this.statusFilter());
            const matchesTransfer = this.matchesBooleanFilter(row.salary?.transferencia_realizada, this.transferFilter(), !!row.salary);
            const matchesCash = this.matchesBooleanFilter(row.salary?.efectivo_entregado, this.cashFilter(), !!row.salary);
            const matchesReceipt = this.matchesBooleanFilter(row.salary?.recibo_entregado, this.receiptFilter(), !!row.salary);
            return (matchesSearch
                && matchesGremio
                && matchesGroup
                && matchesStatus
                && matchesTransfer
                && matchesCash
                && matchesReceipt);
        });
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredRows" }] : /* istanbul ignore next */ []));
    gremios = computed(() => {
        return [...new Set(this.rows()
                .map(row => row.employee.gremio)
                .filter((value) => !!value))].sort((a, b) => a.localeCompare(b, 'es'));
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "gremios" }] : /* istanbul ignore next */ []));
    gremioOptions = computed(() => [
        { label: 'Todos los gremios', value: 'TODOS' },
        ...this.gremios().map(gremio => ({ label: gremio, value: gremio }))
    ], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "gremioOptions" }] : /* istanbul ignore next */ []));
    groupOptions = computed(() => [
        { label: 'Todos los grupos', value: null },
        ...[...new Map(this.rows().flatMap(row => row.employee.group ? [[row.employee.group.id, row.employee.group]] : [])).values()].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
            .map(group => ({ label: group.nombre, value: group.id }))
    ], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "groupOptions" }] : /* istanbul ignore next */ []));
    liquidatedCount = computed(() => {
        return this.filteredRows().filter(row => row.salary && !row.salary.anulado).length;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "liquidatedCount" }] : /* istanbul ignore next */ []));
    totalTransfers = computed(() => {
        return this.filteredRows().reduce((total, row) => total + (row.salary && !row.salary.anulado
            ? Number(row.salary.transferencia_real)
            : 0), 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalTransfers" }] : /* istanbul ignore next */ []));
    totalCash = computed(() => {
        return this.filteredRows().reduce((total, row) => total + (row.salary && !row.salary.anulado
            ? Number(row.salary.ajuste_efectivo)
            : 0), 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalCash" }] : /* istanbul ignore next */ []));
    totalSalaries = computed(() => {
        return this.filteredRows().reduce((total, row) => total + (row.salary && !row.salary.anulado
            ? Number(row.salary.sueldo_total)
            : 0), 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "totalSalaries" }] : /* istanbul ignore next */ []));
    periodLabel = computed(() => {
        const [year, month] = this.periodo()
            .split('-')
            .map(Number);
        const date = new Date(year, month - 1, 1);
        const value = new Intl.DateTimeFormat('es-AR', {
            month: 'long',
            year: 'numeric'
        }).format(date);
        return value.charAt(0).toUpperCase() + value.slice(1);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodLabel" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        void this.loadSalaries();
    }
    async loadSalaries() {
        this.loading.set(true);
        try {
            const response = await firstValueFrom(this.api.getSalaries(this.periodo()));
            this.rows.set(response.employees);
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.loading.set(false);
        }
    }
    changePeriod(periodo) {
        if (!periodo) {
            return;
        }
        this.periodo.set(periodo);
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { periodo },
            replaceUrl: true
        });
        void this.loadSalaries();
    }
    changePeriodDate(value) {
        if (!value) {
            return;
        }
        this.changePeriod(`${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`);
    }
    movePeriod(offset) {
        const date = this.periodDate();
        const target = new Date(date.getFullYear(), date.getMonth() + offset, 1);
        this.changePeriodDate(target);
    }
    resetFilters() {
        this.search.set('');
        this.gremioFilter.set('TODOS');
        this.groupFilter.set(null);
        this.statusFilter.set('TODOS');
        this.transferFilter.set('TODOS');
        this.cashFilter.set('TODOS');
        this.receiptFilter.set('TODOS');
    }
    openEmployee(employeeId) {
        void this.router.navigate(['/sueldos', employeeId], {
            queryParams: {
                periodo: this.periodo()
            }
        });
    }
    getFullName(row) {
        return `${row.employee.apellido}, ${row.employee.nombre}`;
    }
    formatCurrency(value) {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            maximumFractionDigits: 2
        }).format(Number(value ?? 0));
    }
    getCurrentPeriod() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    }
    matchesBooleanFilter(value, filter, hasSalary) {
        if (filter === 'TODOS') {
            return true;
        }
        return hasSalary && value === (filter === 'SI');
    }
    showError(message) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message,
            life: 4000
        });
    }
    getApiError(error) {
        if (error instanceof HttpErrorResponse && error.error?.detail) {
            return error.error.detail;
        }
        return 'Ocurrió un error inesperado.';
    }
    static ɵfac = function Sueldos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Sueldos)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Sueldos, selectors: [["app-sueldos"]], features: [i0.ɵɵProvidersFeature([MessageService])], decls: 96, vars: 40, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right", 3, "life"], [1, "salaries-page"], [1, "page-header"], [1, "page-eyebrow"], [1, "period-selector"], ["for", "periodo"], [1, "period-navigation"], ["type", "button", "aria-label", "Mes anterior", 3, "click"], [1, "pi", "pi-chevron-left"], ["inputId", "periodo", "view", "month", "dateFormat", "mm/yy", 3, "ngModelChange", "showIcon", "readonlyInput", "ngModel"], ["type", "button", "aria-label", "Mes siguiente", 3, "click"], [1, "pi", "pi-chevron-right"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "pi", "pi-users"], [1, "stat-icon", "liquidated"], [1, "pi", "pi-file-check"], [1, "stat-icon", "transfer"], [1, "pi", "pi-building-columns"], [1, "stat-icon", "cash"], [1, "pi", "pi-money-bill"], [1, "stat-card", "total"], [1, "stat-icon", "total-icon"], [1, "pi", "pi-wallet"], [1, "table-card"], [1, "table-toolbar"], ["id", "salaries-filter-toggle", "type", "checkbox", 1, "filter-toggle-input"], ["for", "salaries-filter-toggle", "title", "Mostrar u ocultar filtros", "aria-label", "Mostrar u ocultar filtros", 1, "filter-toggle"], [1, "pi", "pi-filter"], [1, "toolbar-filters"], ["aria-label", "Filtrar por gremio", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "appendTo", "options", "ngModel"], ["aria-label", "Filtrar por grupo", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "appendTo", "options", "ngModel"], ["aria-label", "Filtrar por transferencia", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "appendTo", "options", "ngModel"], ["aria-label", "Filtrar por entrega de efectivo", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "appendTo", "options", "ngModel"], ["aria-label", "Filtrar por entrega de recibo", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "appendTo", "options", "ngModel"], ["aria-label", "Filtrar por estado", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "appendTo", "options", "ngModel"], [1, "search-wrapper"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar empleado...", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "severity", "secondary", "title", "Restablecer filtros", "aria-label", "Restablecer filtros", 3, "click", "text", "rounded"], [1, "pi", "pi-filter-slash"], ["styleClass", "mobile-card-table salaries-table", 1, "desktop-data-table", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "scrollable"], [1, "mobile-record-list"], ["tabindex", "0", 1, "mobile-record-card", "mobile-card-link"], [1, "mobile-cards-empty"], ["pSortableColumn", "employee.apellido"], ["field", "employee.apellido"], ["pSortableColumn", "employee.gremio"], ["field", "employee.gremio"], ["pSortableColumn", "salary.importe_recibo"], ["pTooltip", "Importe neto oficial que figura en el recibo de sueldo.", "tooltipPosition", "top", 1, "header-with-tooltip"], [1, "pi", "pi-info-circle"], ["field", "salary.importe_recibo"], ["pSortableColumn", "salary.descuentos_total"], ["pTooltip", "Suma de todos los descuentos cargados en la liquidaci\u00F3n.", "tooltipPosition", "top", 1, "header-with-tooltip"], ["field", "salary.descuentos_total"], ["pSortableColumn", "salary.transferencia_real"], ["pTooltip", "Transferencia real = recibo de sueldo menos descuentos.", "tooltipPosition", "top", 1, "header-with-tooltip"], ["field", "salary.transferencia_real"], ["pSortableColumn", "salary.ajuste_efectivo"], ["pTooltip", "Importe del ajuste adicional entregado en efectivo.", "tooltipPosition", "top", 1, "header-with-tooltip"], ["field", "salary.ajuste_efectivo"], ["pSortableColumn", "salary.sueldo_total"], ["pTooltip", "Sueldo total = transferencia real + efectivo + adicionales.", "tooltipPosition", "top", 1, "header-with-tooltip"], ["field", "salary.sueldo_total"], ["tabindex", "0", 1, "salary-row", 3, "click", "keydown.enter"], [1, "employee-cell"], [1, "avatar"], [1, "employee-info"], [1, "cancelled"], [1, "discount-value"], [1, "transfer-value"], [1, "cash-value"], [1, "total-value"], [1, "open-column"], ["colspan", "8", 1, "empty-cell"], [1, "empty-state"], ["tabindex", "0", 1, "mobile-record-card", "mobile-card-link", 3, "click", "keydown.enter"], [1, "mobile-card-header"], [1, "mobile-card-grid"], [1, "negative"], [1, "mobile-card-total"]], template: function Sueldos_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "p-toast", 3);
            i0.ɵɵelementStart(1, "section", 4)(2, "header", 5)(3, "div")(4, "span", 6);
            i0.ɵɵtext(5, " Personal ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Sueldos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, " Liquidaciones correspondientes a ");
            i0.ɵɵelementStart(10, "strong");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, ". ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 7)(14, "label", 8);
            i0.ɵɵtext(15, " Per\u00EDodo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 9)(17, "button", 10);
            i0.ɵɵlistener("click", function Sueldos_Template_button_click_17_listener() { return ctx.movePeriod(-1); });
            i0.ɵɵelement(18, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p-datepicker", 12);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_p_datepicker_ngModelChange_19_listener($event) { return ctx.changePeriodDate($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(20, "button", 13);
            i0.ɵɵlistener("click", function Sueldos_Template_button_click_20_listener() { return ctx.movePeriod(1); });
            i0.ɵɵelement(21, "i", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(22, "section", 15)(23, "article", 16)(24, "div", 17);
            i0.ɵɵelement(25, "i", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div")(27, "span");
            i0.ɵɵtext(28, "Empleados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "strong");
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "article", 16)(32, "div", 19);
            i0.ɵɵelement(33, "i", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div")(35, "span");
            i0.ɵɵtext(36, "Liquidados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "strong");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "article", 16)(40, "div", 21);
            i0.ɵɵelement(41, "i", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div")(43, "span");
            i0.ɵɵtext(44, "Transferencias");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "strong");
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(47, "article", 16)(48, "div", 23);
            i0.ɵɵelement(49, "i", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div")(51, "span");
            i0.ɵɵtext(52, "Efectivo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "strong");
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "article", 25)(56, "div", 26);
            i0.ɵɵelement(57, "i", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div")(59, "span");
            i0.ɵɵtext(60, "Total sueldos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "strong");
            i0.ɵɵtext(62);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(63, "section", 28)(64, "div", 29)(65, "div")(66, "h2");
            i0.ɵɵtext(67, "Liquidaciones");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "span");
            i0.ɵɵtext(69);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(70, "input", 30);
            i0.ɵɵelementStart(71, "label", 31);
            i0.ɵɵelement(72, "i", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "div", 33)(74, "p-select", 34);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_p_select_ngModelChange_74_listener($event) { return ctx.gremioFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(75, "p-select", 35);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_p_select_ngModelChange_75_listener($event) { return ctx.groupFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(76, "p-select", 36);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_p_select_ngModelChange_76_listener($event) { return ctx.transferFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(77, "p-select", 37);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_p_select_ngModelChange_77_listener($event) { return ctx.cashFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(78, "p-select", 38);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_p_select_ngModelChange_78_listener($event) { return ctx.receiptFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(79, "p-select", 39);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_p_select_ngModelChange_79_listener($event) { return ctx.statusFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(80, "div", 40);
            i0.ɵɵelement(81, "i", 41);
            i0.ɵɵelementStart(82, "input", 42);
            i0.ɵɵlistener("ngModelChange", function Sueldos_Template_input_ngModelChange_82_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "button", 43);
            i0.ɵɵlistener("click", function Sueldos_Template_button_click_83_listener() { return ctx.resetFilters(); });
            i0.ɵɵelement(84, "i", 44);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(85, "p-table", 45);
            i0.ɵɵtemplate(86, Sueldos_ng_template_86_Template, 33, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(88, Sueldos_ng_template_88_Template, 29, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(90, Sueldos_ng_template_90_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "div", 46);
            i0.ɵɵrepeaterCreate(93, Sueldos_For_94_Template, 37, 8, "article", 47, _forTrack0, false, Sueldos_ForEmpty_95_Template, 4, 0, "div", 48);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("life", 3000);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.periodLabel());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("showIcon", true)("readonlyInput", true)("ngModel", ctx.periodDate());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.filteredRows().length);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.liquidatedCount());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.totalTransfers()));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.totalCash()));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.totalSalaries()));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.filteredRows().length, " empleados ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("appendTo", "body")("options", ctx.gremioOptions())("ngModel", ctx.gremioFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("appendTo", "body")("options", ctx.groupOptions())("ngModel", ctx.groupFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("appendTo", "body")("options", ctx.transferOptions)("ngModel", ctx.transferFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("appendTo", "body")("options", ctx.cashOptions)("ngModel", ctx.cashFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("appendTo", "body")("options", ctx.receiptOptions)("ngModel", ctx.receiptFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("appendTo", "body")("options", ctx.statusOptions)("ngModel", ctx.statusFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", true)("rounded", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.filteredRows())("loading", ctx.loading())("paginator", ctx.filteredRows().length > 10)("rows", 10)("rowsPerPageOptions", i0.ɵɵpureFunction0(39, _c0))("scrollable", true);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.filteredRows());
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, ButtonDirective,
            DatePicker,
            InputText,
            Select,
            TableModule, i2.Table, i2.SortableColumn, i2.SortIcon, ToastModule, i3.Toast, Tooltip], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.salaries-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n}\n\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  max-width: 1500px;\n  gap: 24px;\n  margin: 0 auto 28px;\n\n  h1 {\n    margin: 4px 0 6px;\n    color: #18181b;\n    font-size: 2rem;\n    font-weight: 700;\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.925rem;\n  }\n}\n\n.page-eyebrow[_ngcontent-%COMP%] {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.period-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  label {\n    color: #52525b;\n    font-size: 0.75rem;\n    font-weight: 600;\n  }\n\n  input {\n    width: 180px;\n    height: 42px;\n  }\n}\n\n.period-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  p-datepicker {\n    display: inline-flex;\n    margin: 0 4px;\n  }\n\n  > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 38px;\n    height: 38px;\n    color: #7e22ce;\n    background: #ffffff;\n    border: 1px solid #d8b4fe;\n    border-radius: 9px;\n\n    &:hover {\n      background: #faf5ff;\n      border-color: #a855f7;\n    }\n  }\n}\n\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  max-width: 1500px;\n  gap: 14px;\n  margin: 0 auto 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  gap: 13px;\n  padding: 17px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.025);\n\n  > div:last-child {\n    display: flex;\n    min-width: 0;\n    flex-direction: column;\n    gap: 2px;\n  }\n\n  span {\n    color: #71717a;\n    font-size: 0.76rem;\n  }\n\n  strong {\n    overflow: hidden;\n    color: #18181b;\n    font-size: 1.1rem;\n    font-weight: 700;\n    text-overflow: ellipsis;\n  }\n\n  &.total {\n    background: linear-gradient(135deg, #ffffff, #faf5ff);\n    border-color: #e9d5ff;\n  }\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 11px;\n\n  &.liquidated {\n    color: #2563eb;\n    background: #dbeafe;\n  }\n\n  &.transfer {\n    color: #0369a1;\n    background: #e0f2fe;\n  }\n\n  &.cash {\n    color: #15803d;\n    background: #dcfce7;\n  }\n\n  &.total-icon {\n    color: #7e22ce;\n    background: #f3e8ff;\n  }\n}\n\n\n\n\n.table-card[_ngcontent-%COMP%] {\n  max-width: 1500px;\n  min-height: 600px;\n  margin: 0 auto;\n  overflow: visible;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.025);\n}\n\n.table-toolbar[_ngcontent-%COMP%] {\n  border-radius: 14px 14px 0 0;\n}\n\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n\n  h2 {\n    margin: 0 0 3px;\n    color: #18181b;\n    font-size: 1rem;\n    font-weight: 650;\n  }\n\n  > div:first-child > span {\n    color: #71717a;\n    font-size: 0.78rem;\n  }\n}\n\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(320px, 100%);\n\n  i {\n    position: absolute;\n    top: 50%;\n    left: 13px;\n    z-index: 2;\n    color: #a1a1aa;\n    transform: translateY(-50%);\n  }\n\n  input {\n    width: 100%;\n    height: 42px;\n    padding-left: 38px;\n  }\n}\n\n.toolbar-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  p-select {\n    min-width: 170px;\n  }\n}\n\n[_nghost-%COMP%]     {\n  .toolbar-filters .p-select {\n    min-width: 190px;\n    height: 42px;\n  }\n\n  .period-selector .p-datepicker {\n    width: 180px;\n  }\n\n  .period-selector .p-datepicker-input {\n    width: 1%;\n    min-width: 0;\n    flex: 1 1 auto;\n  }\n}\n\n.reset-filters-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  padding: 0;\n  color: #7e22ce;\n  background: #faf5ff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n  font-size: 0.9rem;\n  font-weight: 600;\n\n  &:hover {\n    background: #f3e8ff;\n    border-color: #a855f7;\n  }\n}\n\n[_nghost-%COMP%]     {\n\n  .salaries-table .p-datatable-table {\n    width: 100%;\n    min-width: 1150px;\n    table-layout: fixed;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(1),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(1) {\n    width: 20%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(2),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(2) {\n    width: 10%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(3),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(3) {\n    width: 11%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(4),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(4) {\n    width: 15%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(5),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(5) {\n    width: 17%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(6),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(6) {\n    width: 12%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(7),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(7) {\n    width: 12%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(8),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(8) {\n    width: 3%;\n  }\n\n  .salaries-table .p-datatable-wrapper {\n    border-radius: 0 0 14px 14px;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th {\n    padding: 13px 16px;\n    color: #71717a;\n    background: #fafafa;\n    border-color: #e4e4e7;\n    font-size: 0.72rem;\n    font-weight: 650;\n    text-transform: uppercase;\n    letter-spacing: 0.025em;\n  }\n\n  .salaries-table .p-datatable-tbody > tr > td {\n    padding: 14px 16px;\n    color: #3f3f46;\n    border-color: #f0f0f1;\n    font-size: 0.83rem;\n  }\n\n  .salaries-table .p-datatable-tbody > tr > td.empty-cell {\n    height: 330px;\n    padding: 0;\n    border-bottom: 0;\n  }\n\n  .salaries-table .p-paginator {\n    border: 0;\n    border-top: 1px solid #e4e4e7;\n  }\n}\n\n.salary-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 150ms ease;\n\n  &:hover {\n    background: #faf5ff !important;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #c026d3;\n    outline-offset: -2px;\n  }\n}\n\n.header-with-tooltip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: help;\n\n  i {\n    color: #a855f7;\n    font-size: 0.72rem;\n  }\n}\n\n\n\n\n.employee-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.employee-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n\n  strong {\n    color: #27272a;\n    font-size: 0.84rem;\n  }\n\n  small {\n    color: #a1a1aa;\n    font-size: 0.69rem;\n\n    &.cancelled {\n      color: #dc2626;\n    }\n  }\n}\n\n.avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 50%;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.discount-value[_ngcontent-%COMP%] {\n  color: #b91c1c !important;\n}\n\n.transfer-value[_ngcontent-%COMP%] {\n  color: #0369a1 !important;\n  font-weight: 600;\n}\n\n.cash-value[_ngcontent-%COMP%] {\n  color: #15803d !important;\n  font-weight: 600;\n}\n\n.total-value[_ngcontent-%COMP%] {\n  color: #18181b !important;\n  font-weight: 700;\n}\n\n.open-column[_ngcontent-%COMP%] {\n  width: 45px;\n  color: #a1a1aa !important;\n  text-align: right;\n}\n\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 7px;\n  width: 100%;\n  min-height: 330px;\n  padding: 40px 20px;\n  color: #71717a;\n  text-align: center;\n\n  i {\n    margin-bottom: 5px;\n    color: #d4d4d8;\n    font-size: 2rem;\n  }\n\n  strong {\n    color: #3f3f46;\n  }\n\n  span {\n    font-size: 0.82rem;\n  }\n}\n\n\n\n\n@media (max-width: 1200px) {\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n\n@media (max-width: 768px) {\n\n  .salaries-page[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n\n  .page-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .period-selector[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  [_nghost-%COMP%]     .period-selector .p-datepicker {\n    width: 100%;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .table-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .toolbar-filters[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n\n    p-select {\n      width: 100%;\n    }\n  }\n\n  [_nghost-%COMP%]     .toolbar-filters .p-select {\n    width: 100%;\n  }\n\n}\n\n\n@media (max-width: 520px) {\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Sueldos, [{
        type: Component,
        args: [{ selector: 'app-sueldos', imports: [
                    FormsModule,
                    ButtonDirective,
                    DatePicker,
                    InputText,
                    Select,
                    TableModule,
                    ToastModule,
                    Tooltip
                ], providers: [MessageService], template: "<p-toast position=\"bottom-right\" [life]=\"3000\" />\n\n<section class=\"salaries-page\">\n  <header class=\"page-header\">\n    <div>\n      <span class=\"page-eyebrow\"> Personal </span>\n\n      <h1>Sueldos</h1>\n\n      <p>\n        Liquidaciones correspondientes a\n        <strong>{{ periodLabel() }}</strong\n        >.\n      </p>\n    </div>\n\n    <div class=\"period-selector\">\n      <label for=\"periodo\"> Per\u00EDodo </label>\n\n      <div class=\"period-navigation\">\n        <button type=\"button\" aria-label=\"Mes anterior\" (click)=\"movePeriod(-1)\">\n          <i class=\"pi pi-chevron-left\"></i>\n        </button>\n\n        <p-datepicker\n          inputId=\"periodo\"\n          view=\"month\"\n          dateFormat=\"mm/yy\"\n          [showIcon]=\"true\"\n          [readonlyInput]=\"true\"\n          [ngModel]=\"periodDate()\"\n          (ngModelChange)=\"changePeriodDate($event)\"\n        />\n\n        <button type=\"button\" aria-label=\"Mes siguiente\" (click)=\"movePeriod(1)\">\n          <i class=\"pi pi-chevron-right\"></i>\n        </button>\n      </div>\n    </div>\n  </header>\n\n  <!-- ====================== STATS ====================== -->\n\n  <section class=\"stats-grid\">\n    <article class=\"stat-card\">\n      <div class=\"stat-icon\">\n        <i class=\"pi pi-users\"></i>\n      </div>\n\n      <div>\n        <span>Empleados</span>\n        <strong>{{ filteredRows().length }}</strong>\n      </div>\n    </article>\n\n    <article class=\"stat-card\">\n      <div class=\"stat-icon liquidated\">\n        <i class=\"pi pi-file-check\"></i>\n      </div>\n\n      <div>\n        <span>Liquidados</span>\n        <strong>{{ liquidatedCount() }}</strong>\n      </div>\n    </article>\n\n    <article class=\"stat-card\">\n      <div class=\"stat-icon transfer\">\n        <i class=\"pi pi-building-columns\"></i>\n      </div>\n\n      <div>\n        <span>Transferencias</span>\n        <strong>{{ formatCurrency(totalTransfers()) }}</strong>\n      </div>\n    </article>\n\n    <article class=\"stat-card\">\n      <div class=\"stat-icon cash\">\n        <i class=\"pi pi-money-bill\"></i>\n      </div>\n\n      <div>\n        <span>Efectivo</span>\n        <strong>{{ formatCurrency(totalCash()) }}</strong>\n      </div>\n    </article>\n\n    <article class=\"stat-card total\">\n      <div class=\"stat-icon total-icon\">\n        <i class=\"pi pi-wallet\"></i>\n      </div>\n\n      <div>\n        <span>Total sueldos</span>\n        <strong>{{ formatCurrency(totalSalaries()) }}</strong>\n      </div>\n    </article>\n  </section>\n\n  <!-- ====================== TABLE ====================== -->\n\n  <section class=\"table-card\">\n    <div class=\"table-toolbar\">\n      <div>\n        <h2>Liquidaciones</h2>\n\n        <span>\n          {{ filteredRows().length }}\n          empleados\n        </span>\n      </div>\n\n      <input id=\"salaries-filter-toggle\" class=\"filter-toggle-input\" type=\"checkbox\" />\n      <label for=\"salaries-filter-toggle\" class=\"filter-toggle\" title=\"Mostrar u ocultar filtros\" aria-label=\"Mostrar u ocultar filtros\"><i class=\"pi pi-filter\"></i></label>\n\n      <div class=\"toolbar-filters\">\n        <p-select\n          aria-label=\"Filtrar por gremio\"\n          [appendTo]=\"'body'\"\n          [options]=\"gremioOptions()\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"gremioFilter()\"\n          (ngModelChange)=\"gremioFilter.set($event)\"\n        />\n\n        <p-select\n          aria-label=\"Filtrar por grupo\"\n          [appendTo]=\"'body'\"\n          [options]=\"groupOptions()\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"groupFilter()\"\n          (ngModelChange)=\"groupFilter.set($event)\"\n        />\n\n        <p-select\n          aria-label=\"Filtrar por transferencia\"\n          [appendTo]=\"'body'\"\n          [options]=\"transferOptions\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"transferFilter()\"\n          (ngModelChange)=\"transferFilter.set($event)\"\n        />\n\n        <p-select\n          aria-label=\"Filtrar por entrega de efectivo\"\n          [appendTo]=\"'body'\"\n          [options]=\"cashOptions\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"cashFilter()\"\n          (ngModelChange)=\"cashFilter.set($event)\"\n        />\n\n        <p-select\n          aria-label=\"Filtrar por entrega de recibo\"\n          [appendTo]=\"'body'\"\n          [options]=\"receiptOptions\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"receiptFilter()\"\n          (ngModelChange)=\"receiptFilter.set($event)\"\n        />\n\n        <p-select\n          aria-label=\"Filtrar por estado\"\n          [appendTo]=\"'body'\"\n          [options]=\"statusOptions\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"statusFilter()\"\n          (ngModelChange)=\"statusFilter.set($event)\"\n        />\n\n        <div class=\"search-wrapper\">\n          <i class=\"pi pi-search\"></i>\n\n          <input\n            pInputText\n            type=\"search\"\n            placeholder=\"Buscar empleado...\"\n            [ngModel]=\"search()\"\n            (ngModelChange)=\"search.set($event)\"\n          />\n        </div>\n\n        <button\n          pButton\n          type=\"button\"\n          [text]=\"true\"\n          [rounded]=\"true\"\n          severity=\"secondary\"\n          title=\"Restablecer filtros\"\n          aria-label=\"Restablecer filtros\"\n          (click)=\"resetFilters()\"\n        >\n          <i class=\"pi pi-filter-slash\"></i>\n        </button>\n      </div>\n    </div>\n\n    <p-table\n      class=\"desktop-data-table\"\n      [value]=\"filteredRows()\"\n      [loading]=\"loading()\"\n      [paginator]=\"filteredRows().length > 10\"\n      [rows]=\"10\"\n      [rowsPerPageOptions]=\"[10, 25, 50]\"\n      [scrollable]=\"true\"\n      styleClass=\"mobile-card-table salaries-table\"\n    >\n      <ng-template #header>\n        <tr>\n          <th pSortableColumn=\"employee.apellido\">\n            Empleado <p-sort-icon field=\"employee.apellido\" />\n          </th>\n          <th pSortableColumn=\"employee.gremio\">Gremio <p-sort-icon field=\"employee.gremio\" /></th>\n          <th pSortableColumn=\"salary.importe_recibo\">\n            <span\n              class=\"header-with-tooltip\"\n              pTooltip=\"Importe neto oficial que figura en el recibo de sueldo.\"\n              tooltipPosition=\"top\"\n            >\n              Recibo <i class=\"pi pi-info-circle\"></i>\n            </span>\n            <p-sort-icon field=\"salary.importe_recibo\" />\n          </th>\n          <th pSortableColumn=\"salary.descuentos_total\">\n            <span\n              class=\"header-with-tooltip\"\n              pTooltip=\"Suma de todos los descuentos cargados en la liquidaci\u00F3n.\"\n              tooltipPosition=\"top\"\n            >\n              Descuentos <i class=\"pi pi-info-circle\"></i>\n            </span>\n            <p-sort-icon field=\"salary.descuentos_total\" />\n          </th>\n          <th pSortableColumn=\"salary.transferencia_real\">\n            <span\n              class=\"header-with-tooltip\"\n              pTooltip=\"Transferencia real = recibo de sueldo menos descuentos.\"\n              tooltipPosition=\"top\"\n            >\n              Transferencia <i class=\"pi pi-info-circle\"></i>\n            </span>\n            <p-sort-icon field=\"salary.transferencia_real\" />\n          </th>\n          <th pSortableColumn=\"salary.ajuste_efectivo\">\n            <span\n              class=\"header-with-tooltip\"\n              pTooltip=\"Importe del ajuste adicional entregado en efectivo.\"\n              tooltipPosition=\"top\"\n            >\n              Efectivo <i class=\"pi pi-info-circle\"></i>\n            </span>\n            <p-sort-icon field=\"salary.ajuste_efectivo\" />\n          </th>\n          <th pSortableColumn=\"salary.sueldo_total\">\n            <span\n              class=\"header-with-tooltip\"\n              pTooltip=\"Sueldo total = transferencia real + efectivo + adicionales.\"\n              tooltipPosition=\"top\"\n            >\n              Sueldo total <i class=\"pi pi-info-circle\"></i>\n            </span>\n            <p-sort-icon field=\"salary.sueldo_total\" />\n          </th>\n          <th></th>\n        </tr>\n      </ng-template>\n\n      <ng-template #body let-row>\n        <tr\n          class=\"salary-row\"\n          tabindex=\"0\"\n          (click)=\"openEmployee(row.employee.id)\"\n          (keydown.enter)=\"openEmployee(row.employee.id)\"\n        >\n          <td>\n            <div class=\"employee-cell\">\n              <div class=\"avatar\">\n                {{ row.employee.nombre.charAt(0).toUpperCase() }}\n              </div>\n\n              <div class=\"employee-info\">\n                <strong>\n                  {{ getFullName(row) }}\n                </strong>\n\n                @if (!row.salary) {\n                  <small>Sin liquidar</small>\n                }\n\n                @if (row.salary?.anulado) {\n                  <small class=\"cancelled\"> Liquidaci\u00F3n anulada </small>\n                }\n              </div>\n            </div>\n          </td>\n\n          <td>\n            {{ row.employee.gremio || '-' }}\n          </td>\n\n          <td>\n            @if (row.salary) {\n              {{ formatCurrency(row.salary.importe_recibo) }}\n            } @else {\n              -\n            }\n          </td>\n\n          <td class=\"discount-value\">\n            @if (row.salary) {\n              - {{ formatCurrency(row.salary.descuentos_total) }}\n            } @else {\n              -\n            }\n          </td>\n\n          <td class=\"transfer-value\">\n            @if (row.salary) {\n              {{ formatCurrency(row.salary.transferencia_real) }}\n            } @else {\n              -\n            }\n          </td>\n\n          <td class=\"cash-value\">\n            @if (row.salary) {\n              {{ formatCurrency(row.salary.ajuste_efectivo) }}\n            } @else {\n              -\n            }\n          </td>\n\n          <td class=\"total-value\">\n            @if (row.salary) {\n              {{ formatCurrency(row.salary.sueldo_total) }}\n            } @else {\n              -\n            }\n          </td>\n\n          <td class=\"open-column\">\n            <i class=\"pi pi-chevron-right\"></i>\n          </td>\n        </tr>\n      </ng-template>\n\n      <ng-template #emptymessage>\n        <tr>\n          <td colspan=\"8\" class=\"empty-cell\">\n            <div class=\"empty-state\">\n              <i class=\"pi pi-wallet\"></i>\n\n              <strong> No hay empleados </strong>\n\n              <span> No encontramos resultados para este per\u00EDodo. </span>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n\n    <div class=\"mobile-record-list\">\n      @for (row of filteredRows(); track row.employee.id) {\n        <article\n          class=\"mobile-record-card mobile-card-link\"\n          tabindex=\"0\"\n          (click)=\"openEmployee(row.employee.id)\"\n          (keydown.enter)=\"openEmployee(row.employee.id)\"\n        >\n          <header class=\"mobile-card-header\">\n            <div class=\"employee-cell\">\n              <div class=\"avatar\">{{ row.employee.nombre.charAt(0).toUpperCase() }}</div>\n              <div class=\"employee-info\">\n                <strong>{{ getFullName(row) }}</strong\n                ><small>{{ row.employee.gremio || 'Sin gremio' }}</small>\n              </div>\n            </div>\n            <i class=\"pi pi-chevron-right\"></i>\n          </header>\n          <div class=\"mobile-card-grid\">\n            <div>\n              <small>Recibo</small\n              ><strong>{{\n                row.salary ? formatCurrency(row.salary.importe_recibo) : 'Sin liquidar'\n              }}</strong>\n            </div>\n            <div>\n              <small>Descuentos</small\n              ><strong class=\"negative\">{{\n                row.salary ? formatCurrency(row.salary.descuentos_total) : '\u2014'\n              }}</strong>\n            </div>\n            <div>\n              <small>Transferencia</small\n              ><strong>{{\n                row.salary ? formatCurrency(row.salary.transferencia_real) : '\u2014'\n              }}</strong>\n            </div>\n            <div>\n              <small>Efectivo</small\n              ><strong>{{ row.salary ? formatCurrency(row.salary.ajuste_efectivo) : '\u2014' }}</strong>\n            </div>\n          </div>\n          <footer class=\"mobile-card-total\">\n            <span>Sueldo total</span\n            ><strong>{{ row.salary ? formatCurrency(row.salary.sueldo_total) : '\u2014' }}</strong>\n          </footer>\n        </article>\n      } @empty {\n        <div class=\"mobile-cards-empty\">\n          <i class=\"pi pi-wallet\"></i><strong>No hay liquidaciones</strong>\n        </div>\n      }\n    </div>\n  </section>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.salaries-page {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n}\n\n\n/* ====================== HEADER ====================== */\n\n.page-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  max-width: 1500px;\n  gap: 24px;\n  margin: 0 auto 28px;\n\n  h1 {\n    margin: 4px 0 6px;\n    color: #18181b;\n    font-size: 2rem;\n    font-weight: 700;\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.925rem;\n  }\n}\n\n.page-eyebrow {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.period-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  label {\n    color: #52525b;\n    font-size: 0.75rem;\n    font-weight: 600;\n  }\n\n  input {\n    width: 180px;\n    height: 42px;\n  }\n}\n\n.period-navigation {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  p-datepicker {\n    display: inline-flex;\n    margin: 0 4px;\n  }\n\n  > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 38px;\n    height: 38px;\n    color: #7e22ce;\n    background: #ffffff;\n    border: 1px solid #d8b4fe;\n    border-radius: 9px;\n\n    &:hover {\n      background: #faf5ff;\n      border-color: #a855f7;\n    }\n  }\n}\n\n\n/* ====================== STATS ====================== */\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  max-width: 1500px;\n  gap: 14px;\n  margin: 0 auto 20px;\n}\n\n.stat-card {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  gap: 13px;\n  padding: 17px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.025);\n\n  > div:last-child {\n    display: flex;\n    min-width: 0;\n    flex-direction: column;\n    gap: 2px;\n  }\n\n  span {\n    color: #71717a;\n    font-size: 0.76rem;\n  }\n\n  strong {\n    overflow: hidden;\n    color: #18181b;\n    font-size: 1.1rem;\n    font-weight: 700;\n    text-overflow: ellipsis;\n  }\n\n  &.total {\n    background: linear-gradient(135deg, #ffffff, #faf5ff);\n    border-color: #e9d5ff;\n  }\n}\n\n.stat-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 11px;\n\n  &.liquidated {\n    color: #2563eb;\n    background: #dbeafe;\n  }\n\n  &.transfer {\n    color: #0369a1;\n    background: #e0f2fe;\n  }\n\n  &.cash {\n    color: #15803d;\n    background: #dcfce7;\n  }\n\n  &.total-icon {\n    color: #7e22ce;\n    background: #f3e8ff;\n  }\n}\n\n\n/* ====================== TABLE ====================== */\n\n.table-card {\n  max-width: 1500px;\n  min-height: 600px;\n  margin: 0 auto;\n  overflow: visible;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.025);\n}\n\n.table-toolbar {\n  border-radius: 14px 14px 0 0;\n}\n\n.table-toolbar {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n\n  h2 {\n    margin: 0 0 3px;\n    color: #18181b;\n    font-size: 1rem;\n    font-weight: 650;\n  }\n\n  > div:first-child > span {\n    color: #71717a;\n    font-size: 0.78rem;\n  }\n}\n\n.search-wrapper {\n  position: relative;\n  width: min(320px, 100%);\n\n  i {\n    position: absolute;\n    top: 50%;\n    left: 13px;\n    z-index: 2;\n    color: #a1a1aa;\n    transform: translateY(-50%);\n  }\n\n  input {\n    width: 100%;\n    height: 42px;\n    padding-left: 38px;\n  }\n}\n\n.toolbar-filters {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  p-select {\n    min-width: 170px;\n  }\n}\n\n:host ::ng-deep {\n  .toolbar-filters .p-select {\n    min-width: 190px;\n    height: 42px;\n  }\n\n  .period-selector .p-datepicker {\n    width: 180px;\n  }\n\n  .period-selector .p-datepicker-input {\n    width: 1%;\n    min-width: 0;\n    flex: 1 1 auto;\n  }\n}\n\n.reset-filters-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  padding: 0;\n  color: #7e22ce;\n  background: #faf5ff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n  font-size: 0.9rem;\n  font-weight: 600;\n\n  &:hover {\n    background: #f3e8ff;\n    border-color: #a855f7;\n  }\n}\n\n:host ::ng-deep {\n\n  .salaries-table .p-datatable-table {\n    width: 100%;\n    min-width: 1150px;\n    table-layout: fixed;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(1),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(1) {\n    width: 20%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(2),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(2) {\n    width: 10%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(3),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(3) {\n    width: 11%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(4),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(4) {\n    width: 15%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(5),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(5) {\n    width: 17%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(6),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(6) {\n    width: 12%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(7),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(7) {\n    width: 12%;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th:nth-child(8),\n  .salaries-table .p-datatable-tbody > tr > td:nth-child(8) {\n    width: 3%;\n  }\n\n  .salaries-table .p-datatable-wrapper {\n    border-radius: 0 0 14px 14px;\n  }\n\n  .salaries-table .p-datatable-thead > tr > th {\n    padding: 13px 16px;\n    color: #71717a;\n    background: #fafafa;\n    border-color: #e4e4e7;\n    font-size: 0.72rem;\n    font-weight: 650;\n    text-transform: uppercase;\n    letter-spacing: 0.025em;\n  }\n\n  .salaries-table .p-datatable-tbody > tr > td {\n    padding: 14px 16px;\n    color: #3f3f46;\n    border-color: #f0f0f1;\n    font-size: 0.83rem;\n  }\n\n  .salaries-table .p-datatable-tbody > tr > td.empty-cell {\n    height: 330px;\n    padding: 0;\n    border-bottom: 0;\n  }\n\n  .salaries-table .p-paginator {\n    border: 0;\n    border-top: 1px solid #e4e4e7;\n  }\n}\n\n.salary-row {\n  cursor: pointer;\n  transition: background 150ms ease;\n\n  &:hover {\n    background: #faf5ff !important;\n  }\n\n  &:focus-visible {\n    outline: 2px solid #c026d3;\n    outline-offset: -2px;\n  }\n}\n\n.header-with-tooltip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: help;\n\n  i {\n    color: #a855f7;\n    font-size: 0.72rem;\n  }\n}\n\n\n/* ====================== EMPLOYEE ====================== */\n\n.employee-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.employee-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n\n  strong {\n    color: #27272a;\n    font-size: 0.84rem;\n  }\n\n  small {\n    color: #a1a1aa;\n    font-size: 0.69rem;\n\n    &.cancelled {\n      color: #dc2626;\n    }\n  }\n}\n\n.avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 50%;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.discount-value {\n  color: #b91c1c !important;\n}\n\n.transfer-value {\n  color: #0369a1 !important;\n  font-weight: 600;\n}\n\n.cash-value {\n  color: #15803d !important;\n  font-weight: 600;\n}\n\n.total-value {\n  color: #18181b !important;\n  font-weight: 700;\n}\n\n.open-column {\n  width: 45px;\n  color: #a1a1aa !important;\n  text-align: right;\n}\n\n\n/* ====================== EMPTY ====================== */\n\n.empty-state {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 7px;\n  width: 100%;\n  min-height: 330px;\n  padding: 40px 20px;\n  color: #71717a;\n  text-align: center;\n\n  i {\n    margin-bottom: 5px;\n    color: #d4d4d8;\n    font-size: 2rem;\n  }\n\n  strong {\n    color: #3f3f46;\n  }\n\n  span {\n    font-size: 0.82rem;\n  }\n}\n\n\n/* ====================== RESPONSIVE ====================== */\n\n@media (max-width: 1200px) {\n\n  .stats-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n\n@media (max-width: 768px) {\n\n  .salaries-page {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n\n  .page-header {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .period-selector input {\n    width: 100%;\n  }\n\n  :host ::ng-deep .period-selector .p-datepicker {\n    width: 100%;\n  }\n\n  .stats-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .table-toolbar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .search-wrapper {\n    width: 100%;\n  }\n\n  .toolbar-filters {\n    align-items: stretch;\n    flex-direction: column;\n\n    p-select {\n      width: 100%;\n    }\n  }\n\n  :host ::ng-deep .toolbar-filters .p-select {\n    width: 100%;\n  }\n\n}\n\n\n@media (max-width: 520px) {\n\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Sueldos, { className: "Sueldos", filePath: "src/app/pages/sueldos/sueldos.ts", lineNumber: 46 }); })();
