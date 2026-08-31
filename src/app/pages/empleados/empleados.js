import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { InputText } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Select } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { Api } from '../../services/api';
import { Grupos } from './grupos/grupos';
import { Cargos } from './cargos/cargos';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/dialog";
import * as i3 from "primeng/table";
import * as i4 from "primeng/toast";
import * as i5 from "primeng/tabs";
const _c0 = () => [10, 25, 50];
const _c1 = () => ({ width: "min(760px, calc(100vw - 32px))" });
const _c2 = () => ({ width: "min(460px, calc(100vw - 32px))" });
const _forTrack0 = ($index, $item) => $item.id;
function Empleados_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 78);
    i0.ɵɵtext(2, "Empleado ");
    i0.ɵɵelement(3, "p-sort-icon", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 80);
    i0.ɵɵtext(5, "Grupo ");
    i0.ɵɵelement(6, "p-sort-icon", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 82);
    i0.ɵɵtext(8, "Cargo ");
    i0.ɵɵelement(9, "p-sort-icon", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 84);
    i0.ɵɵtext(11, "Gremio ");
    i0.ɵɵelement(12, "p-sort-icon", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 86);
    i0.ɵɵtext(14, "Matr\u00EDcula ");
    i0.ɵɵelement(15, "p-sort-icon", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 88);
    i0.ɵɵtext(17, "Tel\u00E9fono ");
    i0.ɵɵelement(18, "p-sort-icon", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th", 90);
    i0.ɵɵtext(20, "Fecha ingreso ");
    i0.ɵɵelement(21, "p-sort-icon", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 92);
    i0.ɵɵtext(23, " Acciones ");
    i0.ɵɵelementEnd()();
} }
function Empleados_ng_template_83_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const employee_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Dado de baja el ", ctx_r3.formatDate(employee_r3.fecha_baja));
} }
function Empleados_ng_template_83_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 96);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const employee_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", employee_r3.matricula, " ");
} }
function Empleados_ng_template_83_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 97);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function Empleados_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 93)(3, "div", 94);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 95)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, Empleados_ng_template_83_Conditional_8_Template, 2, 1, "small");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵconditionalCreate(16, Empleados_ng_template_83_Conditional_16_Template, 2, 1, "span", 96)(17, Empleados_ng_template_83_Conditional_17_Template, 2, 0, "span", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td")(23, "div", 98)(24, "button", 99);
    i0.ɵɵlistener("click", function Empleados_ng_template_83_Template_button_click_24_listener() { const employee_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleEmployeeStatus(employee_r3)); });
    i0.ɵɵelement(25, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "button", 100);
    i0.ɵɵlistener("click", function Empleados_ng_template_83_Template_button_click_26_listener() { const employee_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(employee_r3)); });
    i0.ɵɵelement(27, "i", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 102);
    i0.ɵɵlistener("click", function Empleados_ng_template_83_Template_button_click_28_listener() { const employee_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDelete(employee_r3)); });
    i0.ɵɵelement(29, "i", 77);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", employee_r3.nombre.charAt(0).toUpperCase(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.getFullName(employee_r3));
    i0.ɵɵadvance();
    i0.ɵɵconditional(employee_r3.fecha_baja ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(employee_r3.group?.nombre || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(employee_r3.position?.nombre || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(employee_r3.gremio || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(employee_r3.matricula ? 16 : 17);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", employee_r3.telefono || "-", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.formatDate(employee_r3.fecha_ingreso), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("success", employee_r3.fecha_baja)("warning", !employee_r3.fecha_baja);
    i0.ɵɵproperty("title", employee_r3.fecha_baja ? "Dar de alta" : "Dar de baja");
    i0.ɵɵattribute("aria-label", employee_r3.fecha_baja ? "Dar de alta" : "Dar de baja");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(employee_r3.fecha_baja ? "pi pi-user-plus" : "pi pi-user-minus");
} }
function Empleados_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 103)(2, "div", 104);
    i0.ɵɵelement(3, "i", 17);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, " No hay empleados ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, " No encontramos empleados con los filtros actuales. ");
    i0.ɵɵelementEnd()()()();
} }
function Empleados_For_89_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Dado de baja");
    i0.ɵɵelementEnd();
} }
function Empleados_For_89_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 39)(1, "header", 105)(2, "div", 93)(3, "div", 94);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 95)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, Empleados_For_89_Conditional_8_Template, 2, 0, "small");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 106);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 107)(12, "div")(13, "small");
    i0.ɵɵtext(14, "Grupo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "small");
    i0.ɵɵtext(19, "Cargo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "small");
    i0.ɵɵtext(24, "Gremio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "small");
    i0.ɵɵtext(29, "Matr\u00EDcula");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "small");
    i0.ɵɵtext(34, "Tel\u00E9fono");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "small");
    i0.ɵɵtext(39, "Ingreso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "strong");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "footer", 108)(43, "button", 109);
    i0.ɵɵlistener("click", function Empleados_For_89_Template_button_click_43_listener() { const employee_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleEmployeeStatus(employee_r6)); });
    i0.ɵɵelement(44, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "button", 109);
    i0.ɵɵlistener("click", function Empleados_For_89_Template_button_click_45_listener() { const employee_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openEdit(employee_r6)); });
    i0.ɵɵelement(46, "i", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "button", 110);
    i0.ɵɵlistener("click", function Empleados_For_89_Template_button_click_47_listener() { const employee_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.askDelete(employee_r6)); });
    i0.ɵɵelement(48, "i", 77);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const employee_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(employee_r6.nombre.charAt(0).toUpperCase());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.getFullName(employee_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(employee_r6.fecha_baja ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("inactive", employee_r6.fecha_baja);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(employee_r6.fecha_baja ? "Inactivo" : "Activo");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(employee_r6.group?.nombre || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(employee_r6.position?.nombre || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(employee_r6.gremio || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(employee_r6.matricula || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(employee_r6.telefono || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.formatDate(employee_r6.fecha_ingreso));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("success", employee_r6.fecha_baja)("warning", !employee_r6.fecha_baja);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(employee_r6.fecha_baja ? "pi pi-user-plus" : "pi pi-user-minus");
} }
function Empleados_ForEmpty_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "i", 9);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay empleados");
    i0.ɵɵelementEnd()();
} }
function Empleados_Conditional_148_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 76);
    i0.ɵɵtext(1, " Guardando... ");
} }
function Empleados_Conditional_149_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 111);
    i0.ɵɵtext(1, " Guardar ");
} }
function Empleados_Conditional_168_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 76);
} }
function Empleados_Conditional_169_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 77);
} }
export class Empleados {
    api = inject(Api);
    messageService = inject(MessageService);
    confirmationService = inject(ConfirmationService);
    employees = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "employees" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    search = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    activeSection = signal('employees', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "activeSection" }] : /* istanbul ignore next */ []));
    groups = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    positions = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "positions" }] : /* istanbul ignore next */ []));
    groupFilter = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "groupFilter" }] : /* istanbul ignore next */ []));
    positionFilter = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "positionFilter" }] : /* istanbul ignore next */ []));
    unionFilter = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "unionFilter" }] : /* istanbul ignore next */ []));
    statusFilter = signal('ALL', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "statusFilter" }] : /* istanbul ignore next */ []));
    dialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "dialogVisible" }] : /* istanbul ignore next */ []));
    confirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "confirmVisible" }] : /* istanbul ignore next */ []));
    editingId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    employeeToDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "employeeToDelete" }] : /* istanbul ignore next */ []));
    form = this.createEmptyForm();
    filteredEmployees = computed(() => {
        const term = this.search().trim().toLowerCase();
        return this.employees().filter(employee => {
            const values = [
                employee.nombre,
                employee.apellido,
                employee.direccion,
                employee.matricula,
                employee.gremio,
                employee.group?.nombre,
                employee.telefono
            ];
            const matchesSearch = !term || values.some(value => value?.toLowerCase().includes(term));
            const matchesGroup = this.groupFilter() === null || employee.group?.id === this.groupFilter();
            const matchesPosition = this.positionFilter() === null || employee.position?.id === this.positionFilter();
            const matchesUnion = this.unionFilter() === null || employee.gremio === this.unionFilter();
            const matchesStatus = this.statusFilter() === 'ALL'
                || (this.statusFilter() === 'ACTIVE' ? !employee.fecha_baja : !!employee.fecha_baja);
            return matchesSearch && matchesGroup && matchesPosition && matchesUnion && matchesStatus;
        });
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredEmployees" }] : /* istanbul ignore next */ []));
    withMatricula = computed(() => {
        return this.employees().filter(employee => !!employee.matricula).length;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "withMatricula" }] : /* istanbul ignore next */ []));
    withPhone = computed(() => {
        return this.employees().filter(employee => !!employee.telefono).length;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "withPhone" }] : /* istanbul ignore next */ []));
    withEntryDate = computed(() => {
        return this.employees().filter(employee => !!employee.fecha_ingreso).length;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "withEntryDate" }] : /* istanbul ignore next */ []));
    activeCount = computed(() => this.employees().filter(employee => !employee.fecha_baja).length, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "activeCount" }] : /* istanbul ignore next */ []));
    inactiveCount = computed(() => this.employees().filter(employee => !!employee.fecha_baja).length, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "inactiveCount" }] : /* istanbul ignore next */ []));
    groupOptions = computed(() => [
        { label: 'Todos los grupos', value: null },
        ...this.groups().map(group => ({ label: group.nombre, value: group.id }))
    ], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "groupOptions" }] : /* istanbul ignore next */ []));
    assignmentGroupOptions = computed(() => [
        { label: 'Sin grupo', value: null },
        ...this.groups().map(group => ({ label: group.nombre, value: group.id }))
    ], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "assignmentGroupOptions" }] : /* istanbul ignore next */ []));
    positionOptions = computed(() => [
        { label: 'Todos los cargos', value: null },
        ...this.positions().map(position => ({ label: position.nombre, value: position.id }))
    ], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "positionOptions" }] : /* istanbul ignore next */ []));
    assignmentPositionOptions = computed(() => [
        { label: 'Sin cargo', value: null },
        ...this.positions().map(position => ({ label: position.nombre, value: position.id }))
    ], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "assignmentPositionOptions" }] : /* istanbul ignore next */ []));
    unionOptions = computed(() => [
        { label: 'Todos los gremios', value: null },
        ...[...new Set(this.employees().map(employee => employee.gremio).filter((value) => !!value))]
            .sort().map(value => ({ label: value, value }))
    ], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "unionOptions" }] : /* istanbul ignore next */ []));
    statusOptions = [
        { label: 'Todos los estados', value: 'ALL' },
        { label: 'Activos', value: 'ACTIVE' },
        { label: 'Dados de baja', value: 'INACTIVE' }
    ];
    ngOnInit() {
        void Promise.all([this.loadEmployees(), this.loadGroups(), this.loadPositions()]);
    }
    async loadGroups() {
        try {
            const response = await firstValueFrom(this.api.getEmployeeGroups());
            this.groups.set(response.groups);
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
    }
    async loadPositions() {
        try {
            this.positions.set((await firstValueFrom(this.api.getEmployeePositions())).positions);
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
    }
    async loadEmployees() {
        this.loading.set(true);
        try {
            const response = await firstValueFrom(this.api.getEmployees());
            this.employees.set(response.employees);
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
    openEdit(employee) {
        this.editingId.set(employee.id);
        this.form = {
            nombre: employee.nombre,
            apellido: employee.apellido,
            direccion: employee.direccion ?? '',
            matricula: employee.matricula ?? '',
            gremio: employee.gremio ?? '',
            telefono: employee.telefono ?? '',
            fecha_nacimiento: employee.fecha_nacimiento,
            fecha_ingreso: employee.fecha_ingreso ?? '',
            group_id: employee.group?.id ?? null,
            position_id: employee.position?.id ?? null
        };
        this.dialogVisible.set(true);
    }
    closeDialog() {
        if (this.saving()) {
            return;
        }
        this.dialogVisible.set(false);
    }
    async saveEmployee() {
        if (!this.form.nombre.trim()) {
            this.showError('El nombre es obligatorio.');
            return;
        }
        if (!this.form.apellido.trim()) {
            this.showError('El apellido es obligatorio.');
            return;
        }
        if (!this.form.fecha_nacimiento) {
            this.showError('La fecha de nacimiento es obligatoria.');
            return;
        }
        this.saving.set(true);
        try {
            const employeeId = this.editingId();
            if (employeeId === null) {
                const payload = {
                    nombre: this.form.nombre.trim(),
                    apellido: this.form.apellido.trim(),
                    direccion: this.form.direccion.trim() || null,
                    matricula: this.form.matricula.trim() || null,
                    gremio: this.form.gremio.trim() || null,
                    telefono: this.form.telefono.trim() || null,
                    fecha_nacimiento: this.form.fecha_nacimiento,
                    fecha_ingreso: this.form.fecha_ingreso || null,
                    group_id: this.form.group_id,
                    position_id: this.form.position_id
                };
                await firstValueFrom(this.api.createEmployee(payload));
                this.dialogVisible.set(false);
                await this.loadEmployees();
                this.showSuccess('Empleado creado correctamente.');
            }
            else {
                const payload = {
                    nombre: this.form.nombre.trim(),
                    apellido: this.form.apellido.trim(),
                    direccion: this.form.direccion.trim() || null,
                    matricula: this.form.matricula.trim() || null,
                    gremio: this.form.gremio.trim() || null,
                    telefono: this.form.telefono.trim() || null,
                    fecha_nacimiento: this.form.fecha_nacimiento,
                    fecha_ingreso: this.form.fecha_ingreso || null,
                    group_id: this.form.group_id,
                    position_id: this.form.position_id
                };
                await firstValueFrom(this.api.updateEmployee(employeeId, payload));
                this.dialogVisible.set(false);
                await this.loadEmployees();
                this.showSuccess('Empleado actualizado correctamente.');
            }
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    askDelete(employee) {
        this.employeeToDelete.set(employee);
        this.confirmVisible.set(true);
    }
    async deleteEmployee() {
        const employee = this.employeeToDelete();
        if (!employee) {
            return;
        }
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteEmployee(employee.id));
            this.confirmVisible.set(false);
            this.employeeToDelete.set(null);
            await this.loadEmployees();
            this.showSuccess('Empleado eliminado correctamente.');
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    toggleEmployeeStatus(employee) {
        const reactivating = !!employee.fecha_baja;
        this.confirmationService.confirm({
            header: reactivating ? 'Dar de alta' : 'Dar de baja',
            message: reactivating
                ? '¿Confirmás que querés volver a dar de alta a este empleado?'
                : 'El empleado dejará de aparecer en sueldos desde el mes actual.',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: reactivating ? 'Dar de alta' : 'Dar de baja',
            rejectLabel: 'Cancelar',
            rejectButtonProps: { severity: 'secondary', outlined: true },
            accept: () => void this.applyEmployeeStatus(employee)
        });
    }
    resetFilters() {
        this.search.set('');
        this.groupFilter.set(null);
        this.positionFilter.set(null);
        this.unionFilter.set(null);
        this.statusFilter.set('ALL');
    }
    async applyEmployeeStatus(employee) {
        const reactivating = !!employee.fecha_baja;
        this.saving.set(true);
        try {
            const today = new Date();
            const fechaBaja = reactivating
                ? null
                : `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            await firstValueFrom(this.api.updateEmployee(employee.id, { fecha_baja: fechaBaja }));
            await this.loadEmployees();
            this.showSuccess(reactivating
                ? 'Empleado dado de alta nuevamente.'
                : 'Empleado dado de baja correctamente.');
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    getFullName(employee) {
        return `${employee.apellido}, ${employee.nombre}`;
    }
    formatDate(date) {
        if (!date) {
            return '-';
        }
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
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
            nombre: '',
            apellido: '',
            direccion: '',
            matricula: '',
            gremio: '',
            telefono: '',
            fecha_nacimiento: '',
            fecha_ingreso: '',
            group_id: null,
            position_id: null
        };
    }
    getApiError(error) {
        if (error instanceof HttpErrorResponse) {
            if (error.status === 403) {
                return (error.error?.detail ??
                    'No tenés permisos para administrar empleados.');
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
    static ɵfac = function Empleados_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Empleados)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Empleados, selectors: [["app-empleados"]], features: [i0.ɵɵProvidersFeature([MessageService, ConfirmationService])], decls: 171, vars: 73, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right", 3, "life"], [1, "employees-page"], [1, "page-header"], [1, "page-eyebrow"], [3, "valueChange", "value", "lazy"], ["value", "employees"], [1, "pi", "pi-users"], ["value", "groups"], [1, "pi", "pi-objects-column"], ["value", "positions"], [1, "pi", "pi-briefcase"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "pi", "pi-id-card"], [1, "stat-icon", "matricula"], [1, "pi", "pi-verified"], [1, "stat-icon", "phone"], [1, "pi", "pi-user-minus"], [1, "stat-icon", "entry"], [1, "table-card"], [1, "table-toolbar"], ["id", "employees-filter-toggle", "type", "checkbox", 1, "filter-toggle-input"], ["for", "employees-filter-toggle", "title", "Mostrar u ocultar filtros", "aria-label", "Mostrar u ocultar filtros", 1, "filter-toggle"], [1, "pi", "pi-filter"], ["pButton", "", "type", "button", 1, "primary-button", 3, "click"], [1, "pi", "pi-plus"], [1, "employee-filters"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel", "appendTo"], [1, "search-wrapper"], ["aria-hidden", "true", 1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar empleado...", "aria-label", "Buscar empleado", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "severity", "secondary", "title", "Restablecer filtros", "aria-label", "Restablecer filtros", 3, "click", "text", "rounded"], [1, "pi", "pi-filter-slash"], ["styleClass", "mobile-card-table employees-table", 1, "desktop-data-table", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "scrollable"], [1, "mobile-record-list"], ["tabindex", "0", 1, "mobile-record-card"], [1, "mobile-cards-empty"], [3, "groupsChanged"], [3, "positionsChanged"], ["styleClass", "employee-dialog", 3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [1, "employee-form", 3, "ngSubmit"], [1, "form-grid"], [1, "field"], ["for", "nombre"], ["pInputText", "", "id", "nombre", "name", "nombre", "autocomplete", "given-name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "apellido"], ["pInputText", "", "id", "apellido", "name", "apellido", "autocomplete", "family-name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "matricula"], ["pInputText", "", "id", "matricula", "name", "matricula", 3, "ngModelChange", "ngModel"], ["for", "telefono"], ["pInputText", "", "id", "telefono", "name", "telefono", "type", "tel", "autocomplete", "tel", 3, "ngModelChange", "ngModel"], ["for", "gremio"], ["pInputText", "", "id", "gremio", "name", "gremio", "placeholder", "Ej: UOCRA", 3, "ngModelChange", "ngModel"], ["for", "employee_group"], ["inputId", "employee_group", "name", "employee_group", "optionLabel", "label", "optionValue", "value", "placeholder", "Seleccionar grupo", 3, "ngModelChange", "options", "ngModel", "appendTo"], ["for", "employee_position"], ["inputId", "employee_position", "name", "employee_position", "optionLabel", "label", "optionValue", "value", "placeholder", "Seleccionar cargo", 3, "ngModelChange", "options", "ngModel", "appendTo"], [1, "field", "full-width"], ["for", "direccion"], ["pInputText", "", "id", "direccion", "name", "direccion", "autocomplete", "street-address", 3, "ngModelChange", "ngModel"], ["for", "fecha_nacimiento"], ["inputId", "fecha_nacimiento", "name", "fecha_nacimiento", "dataType", "string", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "showIcon", "ngModel", "appendTo"], ["for", "fecha_ingreso"], ["inputId", "fecha_ingreso", "name", "fecha_ingreso", "dataType", "string", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "showIcon", "showClear", "ngModel", "appendTo"], [1, "dialog-actions"], ["type", "button", 1, "secondary-button", 3, "click", "disabled"], ["pButton", "", "type", "submit", 1, "primary-button", 3, "disabled"], ["header", "Eliminar empleado", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "confirm-content"], [1, "confirm-icon"], [1, "pi", "pi-exclamation-triangle"], ["type", "button", 1, "danger-button", 3, "click", "disabled"], [1, "pi", "pi-spinner", "pi-spin"], [1, "pi", "pi-trash"], ["pSortableColumn", "apellido"], ["field", "apellido"], ["pSortableColumn", "group.nombre"], ["field", "group.nombre"], ["pSortableColumn", "position.nombre"], ["field", "position.nombre"], ["pSortableColumn", "gremio"], ["field", "gremio"], ["pSortableColumn", "matricula"], ["field", "matricula"], ["pSortableColumn", "telefono"], ["field", "telefono"], ["pSortableColumn", "fecha_ingreso"], ["field", "fecha_ingreso"], [1, "actions-column"], [1, "employee-cell"], [1, "avatar"], [1, "employee-name-status"], [1, "matricula-badge"], [1, "empty-value"], [1, "actions"], ["type", "button", 1, "icon-button", 3, "click", "title"], ["type", "button", "aria-label", "Editar empleado", "title", "Editar", 1, "icon-button", 3, "click"], [1, "pi", "pi-pencil"], ["type", "button", "aria-label", "Eliminar empleado", "title", "Eliminar", 1, "icon-button", "danger", 3, "click"], ["colspan", "8"], [1, "empty-state"], [1, "mobile-card-header"], [1, "mobile-status"], [1, "mobile-card-grid"], [1, "mobile-card-actions"], ["type", "button", 1, "icon-button", 3, "click"], ["type", "button", 1, "icon-button", "danger", 3, "click"], [1, "pi", "pi-check"]], template: function Empleados_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "p-toast", 3)(1, "p-confirmdialog");
            i0.ɵɵelementStart(2, "section", 4)(3, "header", 5)(4, "div")(5, "span", 6);
            i0.ɵɵtext(6, " Personal ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h1");
            i0.ɵɵtext(8, "Empleados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, " Gestion\u00E1 el personal de la empresa. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "p-tabs", 7);
            i0.ɵɵlistener("valueChange", function Empleados_Template_p_tabs_valueChange_11_listener($event) { return ctx.activeSection.set($event); });
            i0.ɵɵelementStart(12, "p-tablist")(13, "p-tab", 8);
            i0.ɵɵelement(14, "i", 9);
            i0.ɵɵtext(15, "\u00A0 Empleados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p-tab", 10);
            i0.ɵɵelement(17, "i", 11);
            i0.ɵɵtext(18, "\u00A0 Grupos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p-tab", 12);
            i0.ɵɵelement(20, "i", 13);
            i0.ɵɵtext(21, "\u00A0 Cargos");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "p-tabpanels")(23, "p-tabpanel", 8)(24, "div", 14)(25, "article", 15)(26, "div", 16);
            i0.ɵɵelement(27, "i", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div")(29, "span");
            i0.ɵɵtext(30, "Total");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "strong");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "article", 15)(34, "div", 18);
            i0.ɵɵelement(35, "i", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div")(37, "span");
            i0.ɵɵtext(38, "Activos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "strong");
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "article", 15)(42, "div", 20);
            i0.ɵɵelement(43, "i", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div")(45, "span");
            i0.ɵɵtext(46, "Dados de baja");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "strong");
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "article", 15)(50, "div", 22);
            i0.ɵɵelement(51, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div")(53, "span");
            i0.ɵɵtext(54, "Grupos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "strong");
            i0.ɵɵtext(56);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(57, "section", 23)(58, "div", 24)(59, "div")(60, "h2");
            i0.ɵɵtext(61, "Empleados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "span");
            i0.ɵɵtext(63);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(64, "input", 25);
            i0.ɵɵelementStart(65, "label", 26);
            i0.ɵɵelement(66, "i", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "button", 28);
            i0.ɵɵlistener("click", function Empleados_Template_button_click_67_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(68, "i", 29);
            i0.ɵɵtext(69, " Nuevo empleado ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 30)(71, "p-select", 31);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_select_ngModelChange_71_listener($event) { return ctx.groupFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(72, "p-select", 31);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_select_ngModelChange_72_listener($event) { return ctx.positionFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(73, "p-select", 31);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_select_ngModelChange_73_listener($event) { return ctx.unionFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(74, "p-select", 31);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_select_ngModelChange_74_listener($event) { return ctx.statusFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(75, "div", 32);
            i0.ɵɵelement(76, "i", 33);
            i0.ɵɵelementStart(77, "input", 34);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_input_ngModelChange_77_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "button", 35);
            i0.ɵɵlistener("click", function Empleados_Template_button_click_78_listener() { return ctx.resetFilters(); });
            i0.ɵɵelement(79, "i", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(80, "p-table", 37);
            i0.ɵɵtemplate(81, Empleados_ng_template_81_Template, 24, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(83, Empleados_ng_template_83_Template, 30, 17, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(85, Empleados_ng_template_85_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "div", 38);
            i0.ɵɵrepeaterCreate(88, Empleados_For_89_Template, 49, 18, "article", 39, _forTrack0, false, Empleados_ForEmpty_90_Template, 4, 0, "div", 40);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(91, "p-tabpanel", 10)(92, "app-grupos", 41);
            i0.ɵɵlistener("groupsChanged", function Empleados_Template_app_grupos_groupsChanged_92_listener() { i0.ɵɵrestoreView(_r1); ctx.loadGroups(); return i0.ɵɵresetView(ctx.loadEmployees()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(93, "p-tabpanel", 12)(94, "app-cargos", 42);
            i0.ɵɵlistener("positionsChanged", function Empleados_Template_app_cargos_positionsChanged_94_listener() { i0.ɵɵrestoreView(_r1); ctx.loadPositions(); return i0.ɵɵresetView(ctx.loadEmployees()); });
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(95, "p-dialog", 43);
            i0.ɵɵlistener("visibleChange", function Empleados_Template_p_dialog_visibleChange_95_listener($event) { return ctx.dialogVisible.set($event); });
            i0.ɵɵelementStart(96, "form", 44);
            i0.ɵɵlistener("ngSubmit", function Empleados_Template_form_ngSubmit_96_listener() { return ctx.saveEmployee(); });
            i0.ɵɵelementStart(97, "div", 45)(98, "div", 46)(99, "label", 47);
            i0.ɵɵtext(100, " Nombre ");
            i0.ɵɵelementStart(101, "span");
            i0.ɵɵtext(102, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(103, "input", 48);
            i0.ɵɵtwoWayListener("ngModelChange", function Empleados_Template_input_ngModelChange_103_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.nombre, $event) || (ctx.form.nombre = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 46)(105, "label", 49);
            i0.ɵɵtext(106, " Apellido ");
            i0.ɵɵelementStart(107, "span");
            i0.ɵɵtext(108, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(109, "input", 50);
            i0.ɵɵtwoWayListener("ngModelChange", function Empleados_Template_input_ngModelChange_109_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.apellido, $event) || (ctx.form.apellido = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "div", 46)(111, "label", 51);
            i0.ɵɵtext(112, " Matr\u00EDcula ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "input", 52);
            i0.ɵɵtwoWayListener("ngModelChange", function Empleados_Template_input_ngModelChange_113_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.matricula, $event) || (ctx.form.matricula = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "div", 46)(115, "label", 53);
            i0.ɵɵtext(116, " Tel\u00E9fono ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(117, "input", 54);
            i0.ɵɵtwoWayListener("ngModelChange", function Empleados_Template_input_ngModelChange_117_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.telefono, $event) || (ctx.form.telefono = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "div", 46)(119, "label", 55);
            i0.ɵɵtext(120, " Gremio ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "input", 56);
            i0.ɵɵtwoWayListener("ngModelChange", function Empleados_Template_input_ngModelChange_121_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.gremio, $event) || (ctx.form.gremio = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(122, "div", 46)(123, "label", 57);
            i0.ɵɵtext(124, "Grupo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "p-select", 58);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_select_ngModelChange_125_listener($event) { return ctx.form.group_id = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(126, "div", 46)(127, "label", 59);
            i0.ɵɵtext(128, "Cargo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "p-select", 60);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_select_ngModelChange_129_listener($event) { return ctx.form.position_id = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "div", 61)(131, "label", 62);
            i0.ɵɵtext(132, " Direcci\u00F3n ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(133, "input", 63);
            i0.ɵɵtwoWayListener("ngModelChange", function Empleados_Template_input_ngModelChange_133_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.direccion, $event) || (ctx.form.direccion = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "div", 46)(135, "label", 64);
            i0.ɵɵtext(136, " Fecha de nacimiento ");
            i0.ɵɵelementStart(137, "span");
            i0.ɵɵtext(138, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(139, "p-datepicker", 65);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_datepicker_ngModelChange_139_listener($event) { return ctx.form.fecha_nacimiento = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(140, "div", 46)(141, "label", 66);
            i0.ɵɵtext(142, " Fecha de ingreso ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(143, "p-datepicker", 67);
            i0.ɵɵlistener("ngModelChange", function Empleados_Template_p_datepicker_ngModelChange_143_listener($event) { return ctx.form.fecha_ingreso = $event || ""; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(144, "div", 68)(145, "button", 69);
            i0.ɵɵlistener("click", function Empleados_Template_button_click_145_listener() { return ctx.closeDialog(); });
            i0.ɵɵtext(146, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "button", 70);
            i0.ɵɵconditionalCreate(148, Empleados_Conditional_148_Template, 2, 0)(149, Empleados_Conditional_149_Template, 2, 0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(150, "p-dialog", 71);
            i0.ɵɵlistener("visibleChange", function Empleados_Template_p_dialog_visibleChange_150_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(151, "div", 72)(152, "div", 73);
            i0.ɵɵelement(153, "i", 74);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(154, "div")(155, "strong");
            i0.ɵɵtext(156, " \u00BFEliminar empleado? ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(157, "p");
            i0.ɵɵtext(158, " Se eliminar\u00E1 a ");
            i0.ɵɵelementStart(159, "strong");
            i0.ɵɵtext(160);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(161, ". ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(162, "p");
            i0.ɵɵtext(163, " Tambi\u00E9n se eliminar\u00E1n definitivamente todas sus liquidaciones, descuentos y adicionales. Esta acci\u00F3n no se puede deshacer. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(164, "div", 68)(165, "button", 69);
            i0.ɵɵlistener("click", function Empleados_Template_button_click_165_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(166, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(167, "button", 75);
            i0.ɵɵlistener("click", function Empleados_Template_button_click_167_listener() { return ctx.deleteEmployee(); });
            i0.ɵɵconditionalCreate(168, Empleados_Conditional_168_Template, 1, 0, "i", 76)(169, Empleados_Conditional_169_Template, 1, 0, "i", 77);
            i0.ɵɵtext(170, " Eliminar ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("life", 3000);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("value", ctx.activeSection())("lazy", true);
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate(ctx.employees().length);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.activeCount());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.inactiveCount());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.groups().length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.filteredEmployees().length, " resultados ");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.groupOptions())("ngModel", ctx.groupFilter())("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.positionOptions())("ngModel", ctx.positionFilter())("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.unionOptions())("ngModel", ctx.unionFilter())("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.statusOptions)("ngModel", ctx.statusFilter())("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", true)("rounded", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.filteredEmployees())("loading", ctx.loading())("paginator", ctx.filteredEmployees().length > 10)("rows", 10)("rowsPerPageOptions", i0.ɵɵpureFunction0(70, _c0))("scrollable", true);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.filteredEmployees());
            i0.ɵɵadvance(7);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(71, _c1));
            i0.ɵɵproperty("visible", ctx.dialogVisible())("modal", true)("draggable", false)("resizable", false)("header", ctx.editingId() === null ? "Nuevo empleado" : "Editar empleado");
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.nombre);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.apellido);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.matricula);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.telefono);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.gremio);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("options", ctx.assignmentGroupOptions())("ngModel", ctx.form.group_id)("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("options", ctx.assignmentPositionOptions())("ngModel", ctx.form.position_id)("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.direccion);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("showIcon", true)("ngModel", ctx.form.fecha_nacimiento)("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("showIcon", true)("showClear", true)("ngModel", ctx.form.fecha_ingreso)("appendTo", "body");
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 148 : 149);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(72, _c2));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate2(" ", ctx.employeeToDelete()?.apellido, ", ", ctx.employeeToDelete()?.nombre, " ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 168 : 169);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, ButtonDirective,
            DialogModule, i2.Dialog, DatePicker,
            ConfirmDialog,
            InputText,
            TableModule, i3.Table, i3.SortableColumn, i3.SortIcon, ToastModule, i4.Toast, Select,
            TabsModule, i5.Tabs, i5.TabPanels, i5.TabPanel, i5.TabList, i5.Tab, Grupos,
            Cargos], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n\n\n\n.employees-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n}\n\n\n\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  max-width: 1500px;\n  margin: 0 auto 28px;\n\n  h1 {\n    margin: 4px 0 6px;\n    color: #18181b;\n    font-size: 2rem;\n    font-weight: 700;\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.925rem;\n  }\n}\n\n.page-eyebrow[_ngcontent-%COMP%] {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n\n\n\n\n\n[_nghost-%COMP%]     {\n  .p-toast {\n    width: min(380px, calc(100vw - 32px));\n  }\n\n  .p-toast-message {\n    border-radius: 12px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n  }\n}\n\n\n\n\n\n\n.primary-button[_ngcontent-%COMP%], \n.secondary-button[_ngcontent-%COMP%], \n.danger-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 42px;\n  gap: 8px;\n  padding: 0 16px;\n  border: 0;\n  border-radius: 9px;\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n\n  transition:\n    background 150ms ease,\n    color 150ms ease,\n    border-color 150ms ease,\n    box-shadow 150ms ease;\n\n  &:disabled {\n    opacity: 0.55;\n    cursor: not-allowed;\n  }\n}\n\nbutton.p-button.primary-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: linear-gradient(90deg, #7e22ce, #b100e8);\n  box-shadow: 0 4px 12px rgba(126, 34, 206, 0.15);\n\n  &:hover:not(:disabled) {\n    background: linear-gradient(90deg, #6b21a8, #9900c7);\n  }\n}\n\n.secondary-button[_ngcontent-%COMP%] {\n  color: #52525b;\n  background: #ffffff;\n  border: 1px solid #d4d4d8;\n\n  &:hover:not(:disabled) {\n    background: #f4f4f5;\n  }\n}\n\n.danger-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #dc2626;\n\n  &:hover:not(:disabled) {\n    background: #b91c1c;\n  }\n}\n\n\n\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  max-width: 1500px;\n  gap: 16px;\n  margin: 0 auto 20px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  gap: 14px;\n  padding: 18px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.025);\n\n  > div:last-child {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n\n  span {\n    color: #71717a;\n    font-size: 0.8rem;\n  }\n\n  strong {\n    color: #18181b;\n    font-size: 1.45rem;\n    font-weight: 700;\n  }\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  flex: 0 0 44px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 11px;\n\n  &.matricula {\n    color: #2563eb;\n    background: #dbeafe;\n  }\n\n  &.phone {\n    color: #15803d;\n    background: #dcfce7;\n  }\n\n  &.entry {\n    color: #b45309;\n    background: #fef3c7;\n  }\n}\n\n\n\n\n\n\n.table-card[_ngcontent-%COMP%] {\n  max-width: 1500px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.025);\n}\n\n\n\n\n\n\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n\n  h2 {\n    margin: 0 0 3px;\n    color: #18181b;\n    font-size: 1rem;\n    font-weight: 650;\n  }\n\n  > div:first-child > span {\n    color: #71717a;\n    font-size: 0.78rem;\n  }\n}\n\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(320px, 100%);\n\n  > i {\n    position: absolute;\n    top: 50%;\n    left: 13px;\n    z-index: 2;\n    color: #a1a1aa;\n    font-size: 0.9rem;\n    transform: translateY(-50%);\n  }\n\n  input {\n    width: 100%;\n    height: 42px;\n    padding-left: 38px;\n    border-radius: 9px;\n  }\n}\n\n.employee-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 9px;\n}\n\n[_nghost-%COMP%]     .employee-filters .p-select {\n  min-width: 165px;\n}\n\n\n\n\n\n\n[_nghost-%COMP%]     {\n  .employees-page > .p-tabs {\n    max-width: 1500px;\n    margin: 0 auto;\n  }\n\n  .employees-page > .p-tabs .p-tabpanels {\n    padding: 20px 0 0;\n    background: transparent;\n  }\n\n  .employees-page > .p-tabs .p-tablist-tab-list {\n    background: transparent;\n  }\n\n  .employees-table .p-datatable-table {\n    min-width: 1100px;\n  }\n\n  .employees-table .p-datatable-thead > tr > th {\n    padding: 13px 16px;\n    color: #71717a;\n    background: #fafafa;\n    border-color: #e4e4e7;\n    font-size: 0.75rem;\n    font-weight: 650;\n    text-transform: uppercase;\n    letter-spacing: 0.035em;\n  }\n\n  .employees-table .p-datatable-tbody > tr > td {\n    padding: 14px 16px;\n    color: #3f3f46;\n    border-color: #f0f0f1;\n    font-size: 0.85rem;\n  }\n\n  .employees-table .p-datatable-tbody > tr:hover {\n    background: #fafafa;\n  }\n\n  .employees-table .p-paginator {\n    border: 0;\n    border-top: 1px solid #e4e4e7;\n    border-radius: 0;\n  }\n\n}\n\n.actions-column[_ngcontent-%COMP%] {\n  width: 110px;\n  text-align: right;\n}\n\n\n\n\n\n\n.employee-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 600;\n}\n\n.employee-name-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n\n  small {\n    color: #b91c1c;\n    font-size: 0.68rem;\n    font-weight: 600;\n  }\n}\n\n.avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 50%;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.matricula-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 5px 9px;\n  color: #2563eb;\n  background: #eff6ff;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n\n.empty-value[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n}\n\n\n\n\n\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 5px;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  color: #52525b;\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #7e22ce;\n    background: #f5e6fb;\n  }\n\n  &.danger:hover {\n    color: #dc2626;\n    background: #fef2f2;\n  }\n\n  &.warning {\n    color: #b45309;\n  }\n\n  &.warning:hover {\n    color: #92400e;\n    background: #fffbeb;\n  }\n\n  &.success {\n    color: #15803d;\n  }\n\n  &.success:hover {\n    color: #166534;\n    background: #f0fdf4;\n  }\n}\n\n\n\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 7px;\n  padding: 50px 20px;\n  color: #71717a;\n  text-align: center;\n\n  > i {\n    margin-bottom: 6px;\n    color: #d4d4d8;\n    font-size: 2rem;\n  }\n\n  strong {\n    color: #3f3f46;\n  }\n\n  span {\n    font-size: 0.82rem;\n  }\n}\n\n\n\n\n\n\n.employee-form[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n\n  label {\n    color: #3f3f46;\n    font-size: 0.8rem;\n    font-weight: 600;\n\n    span {\n      color: #dc2626;\n    }\n  }\n\n  input {\n    width: 100%;\n  }\n}\n\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n\n\n\n\n\n[_nghost-%COMP%]     {\n  .employee-dialog .p-dialog-header {\n    padding-bottom: 12px;\n  }\n\n  .employee-dialog .p-dialog-content {\n    overflow: visible;\n  }\n\n  .employee-dialog .p-select {\n    width: 100%;\n  }\n\n  .employee-dialog .p-datepicker,\n  .employee-dialog .p-datepicker-input {\n    width: 100%;\n  }\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 24px;\n}\n\n\n\n\n\n\n.confirm-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding-top: 4px;\n\n  p {\n    margin: 5px 0 0;\n    color: #71717a;\n    font-size: 0.82rem;\n    line-height: 1.5;\n  }\n}\n\n.confirm-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #dc2626;\n  background: #fef2f2;\n  border-radius: 50%;\n}\n\n\n\n\n\n\n@media (max-width: 1000px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n@media (max-width: 768px) {\n  .employees-page[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n\n  .page-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n\n    h1 {\n      font-size: 1.7rem;\n    }\n\n    .primary-button {\n      align-self: flex-start;\n    }\n  }\n\n  .table-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .full-width[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n\n\n@media (max-width: 520px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 13px;\n    gap: 9px;\n  }\n\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    flex-basis: 36px;\n  }\n\n  .stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n\n\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition: none !important;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Empleados, [{
        type: Component,
        args: [{ selector: 'app-empleados', imports: [
                    FormsModule,
                    ButtonDirective,
                    DialogModule,
                    DatePicker,
                    ConfirmDialog,
                    InputText,
                    TableModule,
                    ToastModule,
                    Select,
                    TabsModule,
                    Grupos,
                    Cargos
                ], providers: [MessageService, ConfirmationService], template: "<p-toast\n  position=\"bottom-right\"\n  [life]=\"3000\"\n/>\n\n<p-confirmdialog />\n\n<section class=\"employees-page\">\n\n  <header class=\"page-header\">\n\n    <div>\n      <span class=\"page-eyebrow\">\n        Personal\n      </span>\n\n      <h1>Empleados</h1>\n\n      <p>\n        Gestion\u00E1 el personal de la empresa.\n      </p>\n    </div>\n\n\n  </header>\n\n  <p-tabs [value]=\"activeSection()\" (valueChange)=\"activeSection.set($any($event))\" [lazy]=\"true\">\n    <p-tablist>\n      <p-tab value=\"employees\"><i class=\"pi pi-users\"></i>&nbsp; Empleados</p-tab>\n      <p-tab value=\"groups\"><i class=\"pi pi-objects-column\"></i>&nbsp; Grupos</p-tab>\n      <p-tab value=\"positions\"><i class=\"pi pi-briefcase\"></i>&nbsp; Cargos</p-tab>\n    </p-tablist>\n\n    <p-tabpanels>\n      <p-tabpanel value=\"employees\">\n\n\n  <!-- ====================== STATS ====================== -->\n\n  <div class=\"stats-grid\">\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon\">\n        <i class=\"pi pi-id-card\"></i>\n      </div>\n\n      <div>\n        <span>Total</span>\n        <strong>{{ employees().length }}</strong>\n      </div>\n\n    </article>\n\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon matricula\">\n        <i class=\"pi pi-verified\"></i>\n      </div>\n\n      <div>\n        <span>Activos</span>\n        <strong>{{ activeCount() }}</strong>\n      </div>\n\n    </article>\n\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon phone\">\n        <i class=\"pi pi-user-minus\"></i>\n      </div>\n\n      <div>\n        <span>Dados de baja</span>\n        <strong>{{ inactiveCount() }}</strong>\n      </div>\n\n    </article>\n\n\n    <article class=\"stat-card\">\n\n      <div class=\"stat-icon entry\">\n        <i class=\"pi pi-objects-column\"></i>\n      </div>\n\n      <div>\n        <span>Grupos</span>\n        <strong>{{ groups().length }}</strong>\n      </div>\n\n    </article>\n\n  </div>\n\n\n  <!-- ====================== TABLE ====================== -->\n\n  <section class=\"table-card\">\n\n    <div class=\"table-toolbar\">\n\n      <div>\n        <h2>Empleados</h2>\n\n        <span>\n          {{ filteredEmployees().length }}\n          resultados\n        </span>\n      </div>\n\n      <input id=\"employees-filter-toggle\" class=\"filter-toggle-input\" type=\"checkbox\" />\n      <label for=\"employees-filter-toggle\" class=\"filter-toggle\" title=\"Mostrar u ocultar filtros\" aria-label=\"Mostrar u ocultar filtros\"><i class=\"pi pi-filter\"></i></label>\n\n      <button pButton type=\"button\" class=\"primary-button\" (click)=\"openCreate()\">\n        <i class=\"pi pi-plus\"></i>\n        Nuevo empleado\n      </button>\n\n\n      <div class=\"employee-filters\">\n        <p-select [options]=\"groupOptions()\" optionLabel=\"label\" optionValue=\"value\" [ngModel]=\"groupFilter()\" (ngModelChange)=\"groupFilter.set($event)\" [appendTo]=\"'body'\" />\n        <p-select [options]=\"positionOptions()\" optionLabel=\"label\" optionValue=\"value\" [ngModel]=\"positionFilter()\" (ngModelChange)=\"positionFilter.set($event)\" [appendTo]=\"'body'\" />\n        <p-select [options]=\"unionOptions()\" optionLabel=\"label\" optionValue=\"value\" [ngModel]=\"unionFilter()\" (ngModelChange)=\"unionFilter.set($event)\" [appendTo]=\"'body'\" />\n        <p-select [options]=\"statusOptions\" optionLabel=\"label\" optionValue=\"value\" [ngModel]=\"statusFilter()\" (ngModelChange)=\"statusFilter.set($event)\" [appendTo]=\"'body'\" />\n\n      <div class=\"search-wrapper\">\n\n        <i\n          class=\"pi pi-search\"\n          aria-hidden=\"true\"\n        ></i>\n\n        <input\n          pInputText\n          type=\"search\"\n          placeholder=\"Buscar empleado...\"\n          aria-label=\"Buscar empleado\"\n          [ngModel]=\"search()\"\n          (ngModelChange)=\"search.set($event)\"\n        />\n\n      </div>\n\n        <button pButton type=\"button\" [text]=\"true\" [rounded]=\"true\" severity=\"secondary\" title=\"Restablecer filtros\" aria-label=\"Restablecer filtros\" (click)=\"resetFilters()\"><i class=\"pi pi-filter-slash\"></i></button>\n\n      </div>\n\n    </div>\n\n\n    <p-table\n      class=\"desktop-data-table\"\n      [value]=\"filteredEmployees()\"\n      [loading]=\"loading()\"\n      [paginator]=\"filteredEmployees().length > 10\"\n      [rows]=\"10\"\n      [rowsPerPageOptions]=\"[10, 25, 50]\"\n      [scrollable]=\"true\"\n      styleClass=\"mobile-card-table employees-table\"\n    >\n\n      <ng-template #header>\n\n        <tr>\n          <th pSortableColumn=\"apellido\">Empleado <p-sort-icon field=\"apellido\" /></th>\n          <th pSortableColumn=\"group.nombre\">Grupo <p-sort-icon field=\"group.nombre\" /></th>\n          <th pSortableColumn=\"position.nombre\">Cargo <p-sort-icon field=\"position.nombre\" /></th>\n          <th pSortableColumn=\"gremio\">Gremio <p-sort-icon field=\"gremio\" /></th>\n          <th pSortableColumn=\"matricula\">Matr\u00EDcula <p-sort-icon field=\"matricula\" /></th>\n          <th pSortableColumn=\"telefono\">Tel\u00E9fono <p-sort-icon field=\"telefono\" /></th>\n          <th pSortableColumn=\"fecha_ingreso\">Fecha ingreso <p-sort-icon field=\"fecha_ingreso\" /></th>\n\n          <th class=\"actions-column\">\n            Acciones\n          </th>\n        </tr>\n\n      </ng-template>\n\n\n      <ng-template\n        #body\n        let-employee\n      >\n\n        <tr>\n\n          <td>\n\n            <div class=\"employee-cell\">\n\n              <div class=\"avatar\">\n                {{\n                  employee.nombre\n                    .charAt(0)\n                    .toUpperCase()\n                }}\n              </div>\n\n              <span class=\"employee-name-status\">\n                <strong>{{ getFullName(employee) }}</strong>\n                @if (employee.fecha_baja) {\n                  <small>Dado de baja el {{ formatDate(employee.fecha_baja) }}</small>\n                }\n              </span>\n\n            </div>\n\n          </td>\n\n          <td>{{ employee.group?.nombre || '-' }}</td>\n\n          <td>{{ employee.position?.nombre || '-' }}</td>\n\n          <td>{{ employee.gremio || '-' }}</td>\n\n\n          <td>\n\n            @if (employee.matricula) {\n\n              <span class=\"matricula-badge\">\n                {{ employee.matricula }}\n              </span>\n\n            } @else {\n              <span class=\"empty-value\">-</span>\n            }\n\n          </td>\n\n\n          <td>\n            {{ employee.telefono || '-' }}\n          </td>\n\n\n          <td>\n            {{ formatDate(employee.fecha_ingreso) }}\n          </td>\n\n\n          <td>\n\n            <div class=\"actions\">\n\n              <button\n                type=\"button\"\n                class=\"icon-button\"\n                [class.success]=\"employee.fecha_baja\"\n                [class.warning]=\"!employee.fecha_baja\"\n                [attr.aria-label]=\"employee.fecha_baja ? 'Dar de alta' : 'Dar de baja'\"\n                [title]=\"employee.fecha_baja ? 'Dar de alta' : 'Dar de baja'\"\n                (click)=\"toggleEmployeeStatus(employee)\"\n              >\n                <i [class]=\"employee.fecha_baja ? 'pi pi-user-plus' : 'pi pi-user-minus'\"></i>\n              </button>\n\n\n              <button\n                type=\"button\"\n                class=\"icon-button\"\n                aria-label=\"Editar empleado\"\n                title=\"Editar\"\n                (click)=\"openEdit(employee)\"\n              >\n                <i class=\"pi pi-pencil\"></i>\n              </button>\n\n\n              <button\n                type=\"button\"\n                class=\"icon-button danger\"\n                aria-label=\"Eliminar empleado\"\n                title=\"Eliminar\"\n                (click)=\"askDelete(employee)\"\n              >\n                <i class=\"pi pi-trash\"></i>\n              </button>\n\n            </div>\n\n          </td>\n\n        </tr>\n\n      </ng-template>\n\n\n      <ng-template #emptymessage>\n\n        <tr>\n\n          <td colspan=\"8\">\n\n            <div class=\"empty-state\">\n\n              <i class=\"pi pi-id-card\"></i>\n\n              <strong>\n                No hay empleados\n              </strong>\n\n              <span>\n                No encontramos empleados\n                con los filtros actuales.\n              </span>\n\n            </div>\n\n          </td>\n\n        </tr>\n\n      </ng-template>\n\n    </p-table>\n\n    <div class=\"mobile-record-list\">\n      @for (employee of filteredEmployees(); track employee.id) {\n        <article class=\"mobile-record-card\" tabindex=\"0\">\n          <header class=\"mobile-card-header\"><div class=\"employee-cell\"><div class=\"avatar\">{{ employee.nombre.charAt(0).toUpperCase() }}</div><span class=\"employee-name-status\"><strong>{{ getFullName(employee) }}</strong>@if (employee.fecha_baja) { <small>Dado de baja</small> }</span></div><span class=\"mobile-status\" [class.inactive]=\"employee.fecha_baja\">{{ employee.fecha_baja ? 'Inactivo' : 'Activo' }}</span></header>\n          <div class=\"mobile-card-grid\"><div><small>Grupo</small><strong>{{ employee.group?.nombre || '\u2014' }}</strong></div><div><small>Cargo</small><strong>{{ employee.position?.nombre || '\u2014' }}</strong></div><div><small>Gremio</small><strong>{{ employee.gremio || '\u2014' }}</strong></div><div><small>Matr\u00EDcula</small><strong>{{ employee.matricula || '\u2014' }}</strong></div><div><small>Tel\u00E9fono</small><strong>{{ employee.telefono || '\u2014' }}</strong></div><div><small>Ingreso</small><strong>{{ formatDate(employee.fecha_ingreso) }}</strong></div></div>\n          <footer class=\"mobile-card-actions\"><button type=\"button\" class=\"icon-button\" [class.success]=\"employee.fecha_baja\" [class.warning]=\"!employee.fecha_baja\" (click)=\"toggleEmployeeStatus(employee)\"><i [class]=\"employee.fecha_baja ? 'pi pi-user-plus' : 'pi pi-user-minus'\"></i></button><button type=\"button\" class=\"icon-button\" (click)=\"openEdit(employee)\"><i class=\"pi pi-pencil\"></i></button><button type=\"button\" class=\"icon-button danger\" (click)=\"askDelete(employee)\"><i class=\"pi pi-trash\"></i></button></footer>\n        </article>\n      } @empty { <div class=\"mobile-cards-empty\"><i class=\"pi pi-users\"></i><strong>No hay empleados</strong></div> }\n    </div>\n\n  </section>\n\n      </p-tabpanel>\n\n      <p-tabpanel value=\"groups\">\n        <app-grupos (groupsChanged)=\"loadGroups(); loadEmployees()\" />\n      </p-tabpanel>\n\n      <p-tabpanel value=\"positions\">\n        <app-cargos (positionsChanged)=\"loadPositions(); loadEmployees()\" />\n      </p-tabpanel>\n    </p-tabpanels>\n  </p-tabs>\n\n</section>\n\n\n<!-- ====================== CREAR / EDITAR ====================== -->\n\n<p-dialog\n  [visible]=\"dialogVisible()\"\n  (visibleChange)=\"dialogVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [header]=\"\n    editingId() === null\n      ? 'Nuevo empleado'\n      : 'Editar empleado'\n  \"\n  [style]=\"{\n    width: 'min(760px, calc(100vw - 32px))'\n  }\"\n  styleClass=\"employee-dialog\"\n>\n\n  <form\n    class=\"employee-form\"\n    (ngSubmit)=\"saveEmployee()\"\n  >\n\n    <div class=\"form-grid\">\n\n      <div class=\"field\">\n\n        <label for=\"nombre\">\n          Nombre\n          <span>*</span>\n        </label>\n\n        <input\n          pInputText\n          id=\"nombre\"\n          name=\"nombre\"\n          [(ngModel)]=\"form.nombre\"\n          autocomplete=\"given-name\"\n          required\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"apellido\">\n          Apellido\n          <span>*</span>\n        </label>\n\n        <input\n          pInputText\n          id=\"apellido\"\n          name=\"apellido\"\n          [(ngModel)]=\"form.apellido\"\n          autocomplete=\"family-name\"\n          required\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"matricula\">\n          Matr\u00EDcula\n        </label>\n\n        <input\n          pInputText\n          id=\"matricula\"\n          name=\"matricula\"\n          [(ngModel)]=\"form.matricula\"\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"telefono\">\n          Tel\u00E9fono\n        </label>\n\n        <input\n          pInputText\n          id=\"telefono\"\n          name=\"telefono\"\n          type=\"tel\"\n          [(ngModel)]=\"form.telefono\"\n          autocomplete=\"tel\"\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"gremio\">\n          Gremio\n        </label>\n\n        <input\n          pInputText\n          id=\"gremio\"\n          name=\"gremio\"\n          [(ngModel)]=\"form.gremio\"\n          placeholder=\"Ej: UOCRA\"\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n        <label for=\"employee_group\">Grupo</label>\n        <p-select\n          inputId=\"employee_group\"\n          name=\"employee_group\"\n          [options]=\"assignmentGroupOptions()\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"form.group_id\"\n          (ngModelChange)=\"form.group_id = $event\"\n          [appendTo]=\"'body'\"\n          placeholder=\"Seleccionar grupo\"\n        />\n      </div>\n\n      <div class=\"field\">\n        <label for=\"employee_position\">Cargo</label>\n        <p-select inputId=\"employee_position\" name=\"employee_position\"\n          [options]=\"assignmentPositionOptions()\" optionLabel=\"label\" optionValue=\"value\"\n          [ngModel]=\"form.position_id\" (ngModelChange)=\"form.position_id = $event\"\n          [appendTo]=\"'body'\" placeholder=\"Seleccionar cargo\" />\n      </div>\n\n\n      <div class=\"field full-width\">\n\n        <label for=\"direccion\">\n          Direcci\u00F3n\n        </label>\n\n        <input\n          pInputText\n          id=\"direccion\"\n          name=\"direccion\"\n          [(ngModel)]=\"form.direccion\"\n          autocomplete=\"street-address\"\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"fecha_nacimiento\">\n          Fecha de nacimiento\n          <span>*</span>\n        </label>\n\n        <p-datepicker\n          inputId=\"fecha_nacimiento\"\n          name=\"fecha_nacimiento\"\n          dataType=\"string\"\n          dateFormat=\"yy-mm-dd\"\n          [showIcon]=\"true\"\n          [ngModel]=\"form.fecha_nacimiento\"\n          (ngModelChange)=\"form.fecha_nacimiento = $event\"\n          [appendTo]=\"'body'\"\n        />\n\n      </div>\n\n\n      <div class=\"field\">\n\n        <label for=\"fecha_ingreso\">\n          Fecha de ingreso\n        </label>\n\n        <p-datepicker\n          inputId=\"fecha_ingreso\"\n          name=\"fecha_ingreso\"\n          dataType=\"string\"\n          dateFormat=\"yy-mm-dd\"\n          [showIcon]=\"true\"\n          [showClear]=\"true\"\n          [ngModel]=\"form.fecha_ingreso\"\n          (ngModelChange)=\"form.fecha_ingreso = $event || ''\"\n          [appendTo]=\"'body'\"\n        />\n\n      </div>\n\n    </div>\n\n\n    <div class=\"dialog-actions\">\n\n      <button\n        type=\"button\"\n        class=\"secondary-button\"\n        (click)=\"closeDialog()\"\n        [disabled]=\"saving()\"\n      >\n        Cancelar\n      </button>\n\n\n      <button\n        pButton\n        type=\"submit\"\n        class=\"primary-button\"\n        [disabled]=\"saving()\"\n      >\n\n        @if (saving()) {\n\n          <i class=\"pi pi-spinner pi-spin\"></i>\n          Guardando...\n\n        } @else {\n\n          <i class=\"pi pi-check\"></i>\n          Guardar\n\n        }\n\n      </button>\n\n    </div>\n\n  </form>\n\n</p-dialog>\n\n\n<!-- ====================== ELIMINAR ====================== -->\n\n<p-dialog\n  [visible]=\"confirmVisible()\"\n  (visibleChange)=\"confirmVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  header=\"Eliminar empleado\"\n  [style]=\"{\n    width: 'min(460px, calc(100vw - 32px))'\n  }\"\n>\n\n  <div class=\"confirm-content\">\n\n    <div class=\"confirm-icon\">\n      <i class=\"pi pi-exclamation-triangle\"></i>\n    </div>\n\n    <div>\n\n      <strong>\n        \u00BFEliminar empleado?\n      </strong>\n\n      <p>\n        Se eliminar\u00E1 a\n        <strong>\n          {{ employeeToDelete()?.apellido }},\n          {{ employeeToDelete()?.nombre }}\n        </strong>.\n      </p>\n\n      <p>\n        Tambi\u00E9n se eliminar\u00E1n definitivamente todas sus liquidaciones,\n        descuentos y adicionales. Esta acci\u00F3n no se puede deshacer.\n      </p>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"dialog-actions\">\n\n    <button\n      type=\"button\"\n      class=\"secondary-button\"\n      (click)=\"confirmVisible.set(false)\"\n      [disabled]=\"saving()\"\n    >\n      Cancelar\n    </button>\n\n\n    <button\n      type=\"button\"\n      class=\"danger-button\"\n      (click)=\"deleteEmployee()\"\n      [disabled]=\"saving()\"\n    >\n\n      @if (saving()) {\n\n        <i class=\"pi pi-spinner pi-spin\"></i>\n\n      } @else {\n\n        <i class=\"pi pi-trash\"></i>\n\n      }\n\n      Eliminar\n\n    </button>\n\n  </div>\n\n</p-dialog>\n", styles: [":host {\n  display: block;\n}\n\n\n/* =========================================\n   PAGE\n   ========================================= */\n\n.employees-page {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n}\n\n\n/* =========================================\n   HEADER\n   ========================================= */\n\n.page-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  max-width: 1500px;\n  margin: 0 auto 28px;\n\n  h1 {\n    margin: 4px 0 6px;\n    color: #18181b;\n    font-size: 2rem;\n    font-weight: 700;\n    letter-spacing: -0.035em;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.925rem;\n  }\n}\n\n.page-eyebrow {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n\n/* =========================================\n   TOAST\n   ========================================= */\n\n:host ::ng-deep {\n  .p-toast {\n    width: min(380px, calc(100vw - 32px));\n  }\n\n  .p-toast-message {\n    border-radius: 12px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n  }\n}\n\n\n/* =========================================\n   BUTTONS\n   ========================================= */\n\n.primary-button,\n.secondary-button,\n.danger-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 42px;\n  gap: 8px;\n  padding: 0 16px;\n  border: 0;\n  border-radius: 9px;\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n\n  transition:\n    background 150ms ease,\n    color 150ms ease,\n    border-color 150ms ease,\n    box-shadow 150ms ease;\n\n  &:disabled {\n    opacity: 0.55;\n    cursor: not-allowed;\n  }\n}\n\nbutton.p-button.primary-button,\n.primary-button {\n  color: #ffffff;\n  background: linear-gradient(90deg, #7e22ce, #b100e8);\n  box-shadow: 0 4px 12px rgba(126, 34, 206, 0.15);\n\n  &:hover:not(:disabled) {\n    background: linear-gradient(90deg, #6b21a8, #9900c7);\n  }\n}\n\n.secondary-button {\n  color: #52525b;\n  background: #ffffff;\n  border: 1px solid #d4d4d8;\n\n  &:hover:not(:disabled) {\n    background: #f4f4f5;\n  }\n}\n\n.danger-button {\n  color: #ffffff;\n  background: #dc2626;\n\n  &:hover:not(:disabled) {\n    background: #b91c1c;\n  }\n}\n\n\n/* =========================================\n   STATS\n   ========================================= */\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  max-width: 1500px;\n  gap: 16px;\n  margin: 0 auto 20px;\n}\n\n.stat-card {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  gap: 14px;\n  padding: 18px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.025);\n\n  > div:last-child {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n\n  span {\n    color: #71717a;\n    font-size: 0.8rem;\n  }\n\n  strong {\n    color: #18181b;\n    font-size: 1.45rem;\n    font-weight: 700;\n  }\n}\n\n.stat-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  flex: 0 0 44px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 11px;\n\n  &.matricula {\n    color: #2563eb;\n    background: #dbeafe;\n  }\n\n  &.phone {\n    color: #15803d;\n    background: #dcfce7;\n  }\n\n  &.entry {\n    color: #b45309;\n    background: #fef3c7;\n  }\n}\n\n\n/* =========================================\n   TABLE CARD\n   ========================================= */\n\n.table-card {\n  max-width: 1500px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.025);\n}\n\n\n/* =========================================\n   TOOLBAR\n   ========================================= */\n\n.table-toolbar {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n\n  h2 {\n    margin: 0 0 3px;\n    color: #18181b;\n    font-size: 1rem;\n    font-weight: 650;\n  }\n\n  > div:first-child > span {\n    color: #71717a;\n    font-size: 0.78rem;\n  }\n}\n\n.search-wrapper {\n  position: relative;\n  width: min(320px, 100%);\n\n  > i {\n    position: absolute;\n    top: 50%;\n    left: 13px;\n    z-index: 2;\n    color: #a1a1aa;\n    font-size: 0.9rem;\n    transform: translateY(-50%);\n  }\n\n  input {\n    width: 100%;\n    height: 42px;\n    padding-left: 38px;\n    border-radius: 9px;\n  }\n}\n\n.employee-filters {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 9px;\n}\n\n:host ::ng-deep .employee-filters .p-select {\n  min-width: 165px;\n}\n\n\n/* =========================================\n   TABLE\n   ========================================= */\n\n:host ::ng-deep {\n  .employees-page > .p-tabs {\n    max-width: 1500px;\n    margin: 0 auto;\n  }\n\n  .employees-page > .p-tabs .p-tabpanels {\n    padding: 20px 0 0;\n    background: transparent;\n  }\n\n  .employees-page > .p-tabs .p-tablist-tab-list {\n    background: transparent;\n  }\n\n  .employees-table .p-datatable-table {\n    min-width: 1100px;\n  }\n\n  .employees-table .p-datatable-thead > tr > th {\n    padding: 13px 16px;\n    color: #71717a;\n    background: #fafafa;\n    border-color: #e4e4e7;\n    font-size: 0.75rem;\n    font-weight: 650;\n    text-transform: uppercase;\n    letter-spacing: 0.035em;\n  }\n\n  .employees-table .p-datatable-tbody > tr > td {\n    padding: 14px 16px;\n    color: #3f3f46;\n    border-color: #f0f0f1;\n    font-size: 0.85rem;\n  }\n\n  .employees-table .p-datatable-tbody > tr:hover {\n    background: #fafafa;\n  }\n\n  .employees-table .p-paginator {\n    border: 0;\n    border-top: 1px solid #e4e4e7;\n    border-radius: 0;\n  }\n\n}\n\n.actions-column {\n  width: 110px;\n  text-align: right;\n}\n\n\n/* =========================================\n   EMPLOYEE\n   ========================================= */\n\n.employee-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 600;\n}\n\n.employee-name-status {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n\n  small {\n    color: #b91c1c;\n    font-size: 0.68rem;\n    font-weight: 600;\n  }\n}\n\n.avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  color: #7e22ce;\n  background: #f5e6fb;\n  border-radius: 50%;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.matricula-badge {\n  display: inline-flex;\n  padding: 5px 9px;\n  color: #2563eb;\n  background: #eff6ff;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n\n.empty-value {\n  color: #a1a1aa;\n}\n\n\n/* =========================================\n   ACTIONS\n   ========================================= */\n\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 5px;\n}\n\n.icon-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  color: #52525b;\n  background: transparent;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n\n  transition:\n    color 150ms ease,\n    background 150ms ease;\n\n  &:hover {\n    color: #7e22ce;\n    background: #f5e6fb;\n  }\n\n  &.danger:hover {\n    color: #dc2626;\n    background: #fef2f2;\n  }\n\n  &.warning {\n    color: #b45309;\n  }\n\n  &.warning:hover {\n    color: #92400e;\n    background: #fffbeb;\n  }\n\n  &.success {\n    color: #15803d;\n  }\n\n  &.success:hover {\n    color: #166534;\n    background: #f0fdf4;\n  }\n}\n\n\n/* =========================================\n   EMPTY\n   ========================================= */\n\n.empty-state {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 7px;\n  padding: 50px 20px;\n  color: #71717a;\n  text-align: center;\n\n  > i {\n    margin-bottom: 6px;\n    color: #d4d4d8;\n    font-size: 2rem;\n  }\n\n  strong {\n    color: #3f3f46;\n  }\n\n  span {\n    font-size: 0.82rem;\n  }\n}\n\n\n/* =========================================\n   FORM\n   ========================================= */\n\n.employee-form {\n  padding-top: 4px;\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n\n  label {\n    color: #3f3f46;\n    font-size: 0.8rem;\n    font-weight: 600;\n\n    span {\n      color: #dc2626;\n    }\n  }\n\n  input {\n    width: 100%;\n  }\n}\n\n.full-width {\n  grid-column: 1 / -1;\n}\n\n\n/* =========================================\n   DIALOG\n   ========================================= */\n\n:host ::ng-deep {\n  .employee-dialog .p-dialog-header {\n    padding-bottom: 12px;\n  }\n\n  .employee-dialog .p-dialog-content {\n    overflow: visible;\n  }\n\n  .employee-dialog .p-select {\n    width: 100%;\n  }\n\n  .employee-dialog .p-datepicker,\n  .employee-dialog .p-datepicker-input {\n    width: 100%;\n  }\n}\n\n.dialog-actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 24px;\n}\n\n\n/* =========================================\n   CONFIRM\n   ========================================= */\n\n.confirm-content {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding-top: 4px;\n\n  p {\n    margin: 5px 0 0;\n    color: #71717a;\n    font-size: 0.82rem;\n    line-height: 1.5;\n  }\n}\n\n.confirm-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #dc2626;\n  background: #fef2f2;\n  border-radius: 50%;\n}\n\n\n/* =========================================\n   RESPONSIVE\n   ========================================= */\n\n@media (max-width: 1000px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n@media (max-width: 768px) {\n  .employees-page {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n\n  .page-header {\n    align-items: stretch;\n    flex-direction: column;\n\n    h1 {\n      font-size: 1.7rem;\n    }\n\n    .primary-button {\n      align-self: flex-start;\n    }\n  }\n\n  .table-toolbar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .search-wrapper {\n    width: 100%;\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .full-width {\n    grid-column: auto;\n  }\n}\n\n\n@media (max-width: 520px) {\n  .stats-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  .stat-card {\n    padding: 13px;\n    gap: 9px;\n  }\n\n  .stat-icon {\n    width: 36px;\n    height: 36px;\n    flex-basis: 36px;\n  }\n\n  .stat-card strong {\n    font-size: 1.15rem;\n  }\n}\n\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition: none !important;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Empleados, { className: "Empleados", filePath: "src/app/pages/empleados/empleados.ts", lineNumber: 64 }); })();
