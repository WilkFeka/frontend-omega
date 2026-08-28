import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { InputNumber } from 'primeng/inputnumber';
import { InputText } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Textarea } from 'primeng/textarea';
import { Toast } from 'primeng/toast';
import { Api } from '../../services/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
const _c0 = () => [10, 25, 50];
const _c1 = () => ({ width: "min(760px, calc(100vw - 32px))" });
const _c2 = () => ({ width: "min(980px, calc(100vw - 32px))" });
const _c3 = () => ({ width: "min(560px, calc(100vw - 32px))" });
const _c4 = () => ({ width: "min(460px, calc(100vw - 32px))" });
const _c5 = () => [];
function Prestamos_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 60);
    i0.ɵɵtext(2, "Persona ");
    i0.ɵɵelement(3, "p-sort-icon", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 62);
    i0.ɵɵtext(5, "Tipo ");
    i0.ɵɵelement(6, "p-sort-icon", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 64);
    i0.ɵɵtext(8, "Fecha ");
    i0.ɵɵelement(9, "p-sort-icon", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 66);
    i0.ɵɵtext(11, "Total ");
    i0.ɵɵelement(12, "p-sort-icon", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 68);
    i0.ɵɵtext(14, "Cobrado ");
    i0.ɵɵelement(15, "p-sort-icon", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 70);
    i0.ɵɵtext(17, "Saldo ");
    i0.ɵɵelement(18, "p-sort-icon", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Pr\u00F3xima cuota");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 72);
    i0.ɵɵtext(22, "Estado ");
    i0.ɵɵelement(23, "p-sort-icon", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "th");
    i0.ɵɵelementEnd();
} }
function Prestamos_ng_template_72_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loan_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.formatPeriod(loan_r3.next_installment.period));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(loan_r3.next_installment.expected_amount));
} }
function Prestamos_ng_template_72_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2014 ");
} }
function Prestamos_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 74);
    i0.ɵɵlistener("click", function Prestamos_ng_template_72_Template_tr_click_0_listener() { const loan_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openDetail(loan_r3)); });
    i0.ɵɵelementStart(1, "td")(2, "div", 75)(3, "span");
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
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td", 76);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵconditionalCreate(21, Prestamos_ng_template_72_Conditional_21_Template, 4, 2)(22, Prestamos_ng_template_72_Conditional_22_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "td");
    i0.ɵɵelement(24, "p-tag", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵelement(26, "i", 78);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const loan_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(loan_r3.person_name.charAt(0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(loan_r3.person_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(loan_r3.person_type === "EMPLEADO" ? "Empleado" : "Externo");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 10, loan_r3.delivery_date, "dd/MM/yyyy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(loan_r3.total_amount));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(loan_r3.paid_amount));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(loan_r3.balance));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(loan_r3.next_installment ? 21 : 22);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r3.statusLabel(loan_r3.status))("severity", ctx_r3.statusSeverity(loan_r3.status));
} }
function Prestamos_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 79)(2, "div", 80);
    i0.ɵɵelement(3, "i", 81);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "No hay pr\u00E9stamos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "No encontramos pr\u00E9stamos con los filtros seleccionados.");
    i0.ɵɵelementEnd()()()();
} }
function Prestamos_Conditional_82_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "label");
    i0.ɵɵtext(2, "Empleado *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p-select", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Conditional_82_Template_p_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.employee_id, $event) || (ctx_r3.form.employee_id = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r3.employeeOptions());
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.employee_id);
    i0.ɵɵproperty("filter", true);
    i0.ɵɵcontrol();
} }
function Prestamos_Conditional_83_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "label");
    i0.ɵɵtext(2, "Nombre completo *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 83);
    i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Conditional_83_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.external_name, $event) || (ctx_r3.form.external_name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 34)(5, "label");
    i0.ɵɵtext(6, "Documento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 84);
    i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Conditional_83_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.external_document, $event) || (ctx_r3.form.external_document = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.external_name);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.external_document);
    i0.ɵɵcontrol();
} }
function Prestamos_Conditional_117_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 90);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loan_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(loan_r8.notes);
} }
function Prestamos_Conditional_117_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 98);
    i0.ɵɵtext(2, "# ");
    i0.ɵɵelement(3, "p-sort-icon", 99);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 100);
    i0.ɵɵtext(5, "Per\u00EDodo ");
    i0.ɵɵelement(6, "p-sort-icon", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 102);
    i0.ɵɵtext(8, "Previsto ");
    i0.ɵɵelement(9, "p-sort-icon", 103);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 68);
    i0.ɵɵtext(11, "Pagado ");
    i0.ɵɵelement(12, "p-sort-icon", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 72);
    i0.ɵɵtext(14, "Estado ");
    i0.ɵɵelement(15, "p-sort-icon", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Medio");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "th");
    i0.ɵɵelementEnd();
} }
function Prestamos_Conditional_117_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵelement(10, "p-tag", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "div", 104)(15, "button", 105);
    i0.ɵɵlistener("click", function Prestamos_Conditional_117_ng_template_46_Template_button_click_15_listener() { const item_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openInstallment(item_r10)); });
    i0.ɵɵelement(16, "i", 106);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 107);
    i0.ɵɵlistener("click", function Prestamos_Conditional_117_ng_template_46_Template_button_click_17_listener() { const item_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.askDeleteInstallment(item_r10)); });
    i0.ɵɵelement(18, "i", 95);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.number);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatPeriod(item_r10.period));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(item_r10.expected_amount));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(item_r10.paid_amount));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r3.statusLabel(item_r10.status))("severity", ctx_r3.statusSeverity(item_r10.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.payment_method || "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("text", true)("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true);
} }
function Prestamos_Conditional_117_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 85)(1, "div")(2, "small");
    i0.ɵɵtext(3, "Persona");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "small");
    i0.ɵɵtext(13, "Cobrado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong", 76);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "small");
    i0.ɵɵtext(18, "Saldo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "small");
    i0.ɵɵtext(23, "Estado");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "p-tag", 77);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 86)(26, "span");
    i0.ɵɵelement(27, "i", 87);
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span");
    i0.ɵɵelement(31, "i", 88);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵelement(34, "i", 89);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(36, Prestamos_Conditional_117_Conditional_36_Template, 2, 1, "p", 90);
    i0.ɵɵelementStart(37, "div", 91)(38, "h3");
    i0.ɵɵtext(39, "Cronograma de cuotas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "button", 92);
    i0.ɵɵlistener("click", function Prestamos_Conditional_117_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openCreateInstallment()); });
    i0.ɵɵelement(41, "i", 8);
    i0.ɵɵtext(42, " Agregar cuota");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "p-table", 93);
    i0.ɵɵtemplate(44, Prestamos_Conditional_117_ng_template_44_Template, 19, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(46, Prestamos_Conditional_117_ng_template_46_Template, 19, 11, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 57)(49, "button", 94);
    i0.ɵɵlistener("click", function Prestamos_Conditional_117_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.confirmVisible.set(true)); });
    i0.ɵɵelement(50, "i", 95);
    i0.ɵɵtext(51, " Eliminar");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(52, "span", 96);
    i0.ɵɵelementStart(53, "button", 97);
    i0.ɵɵlistener("click", function Prestamos_Conditional_117_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleCancelled()); });
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "button", 7);
    i0.ɵɵlistener("click", function Prestamos_Conditional_117_Template_button_click_55_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.detailVisible.set(false)); });
    i0.ɵɵtext(56, "Cerrar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const loan_r8 = ctx;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(loan_r8.person_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(loan_r8.total_amount));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(loan_r8.paid_amount));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(loan_r8.balance));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r3.statusLabel(loan_r8.status))("severity", ctx_r3.statusSeverity(loan_r8.status));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Entregado el ", i0.ɵɵpipeBind2(29, 17, loan_r8.delivery_date, "dd/MM/yyyy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", loan_r8.delivery_method);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", loan_r8.installment_count, " cuotas");
    i0.ɵɵadvance();
    i0.ɵɵconditional(loan_r8.notes ? 36 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("outlined", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", loan_r8.installments ?? i0.ɵɵpureFunction0(20, _c5))("scrollable", true);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("text", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("outlined", true)("loading", ctx_r3.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(loan_r8.status === "ANULADO" ? "Reactivar" : "Anular");
} }
function Prestamos_Conditional_128_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "label");
    i0.ɵɵtext(2, "Importe pagado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p-inputnumber", 108);
    i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Conditional_128_Template_p_inputnumber_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.installmentForm.paid_amount, $event) || (ctx_r3.installmentForm.paid_amount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 34)(5, "label");
    i0.ɵɵtext(6, "Estado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p-select", 109);
    i0.ɵɵlistener("ngModelChange", function Prestamos_Conditional_128_Template_p_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onInstallmentStatusChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 34)(9, "label");
    i0.ɵɵtext(10, "Fecha de pago");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p-datepicker", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Conditional_128_Template_p_datepicker_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.installmentForm.payment_date, $event) || (ctx_r3.installmentForm.payment_date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 41)(13, "label");
    i0.ɵɵtext(14, "Medio de cobro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p-select", 111);
    i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Conditional_128_Template_p_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.installmentForm.payment_method, $event) || (ctx_r3.installmentForm.payment_method = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.installmentForm.paid_amount);
    i0.ɵɵproperty("min", 0);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r3.installmentStatusOptions)("ngModel", ctx_r3.installmentForm.status);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.installmentForm.payment_date);
    i0.ɵɵproperty("showIcon", true);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r3.paymentOptions);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.installmentForm.payment_method);
    i0.ɵɵcontrol();
} }
export class Prestamos {
    api = inject(Api);
    messages = inject(MessageService);
    loans = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loans" }] : /* istanbul ignore next */ []));
    employees = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "employees" }] : /* istanbul ignore next */ []));
    kpis = signal({ total_lent: '0', outstanding_balance: '0', collected_this_month: '0', overdue_installments: 0, active_loans: 0 }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "kpis" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    search = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    typeFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "typeFilter" }] : /* istanbul ignore next */ []));
    statusFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "statusFilter" }] : /* istanbul ignore next */ []));
    createVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "createVisible" }] : /* istanbul ignore next */ []));
    detailVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "detailVisible" }] : /* istanbul ignore next */ []));
    confirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "confirmVisible" }] : /* istanbul ignore next */ []));
    installmentVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "installmentVisible" }] : /* istanbul ignore next */ []));
    installmentConfirmVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "installmentConfirmVisible" }] : /* istanbul ignore next */ []));
    creatingInstallment = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "creatingInstallment" }] : /* istanbul ignore next */ []));
    selectedLoan = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedLoan" }] : /* istanbul ignore next */ []));
    selectedInstallment = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedInstallment" }] : /* istanbul ignore next */ []));
    installmentToDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "installmentToDelete" }] : /* istanbul ignore next */ []));
    form = this.emptyForm();
    installmentForm = this.emptyInstallmentForm();
    personTypeOptions = [
        { label: 'Empleado', value: 'EMPLEADO' },
        { label: 'Persona externa', value: 'EXTERNO' }
    ];
    typeFilterOptions = [{ label: 'Todas las personas', value: 'TODOS' }, ...this.personTypeOptions];
    statusOptions = [
        { label: 'Todos los estados', value: 'TODOS' },
        { label: 'Activos', value: 'ACTIVO' },
        { label: 'Pagados', value: 'PAGADO' },
        { label: 'Anulados', value: 'ANULADO' }
    ];
    deliveryOptions = [
        { label: 'Transferencia', value: 'TRANSFERENCIA' },
        { label: 'Efectivo', value: 'EFECTIVO' },
        { label: 'Otro', value: 'OTRO' }
    ];
    paymentOptions = [
        { label: 'Descuento de sueldo', value: 'DESCUENTO_SUELDO' },
        { label: 'Transferencia', value: 'TRANSFERENCIA' },
        { label: 'Efectivo', value: 'EFECTIVO' },
        { label: 'Otro', value: 'OTRO' }
    ];
    installmentStatusOptions = [
        { label: 'Pendiente', value: 'PENDIENTE' },
        { label: 'Pagada parcialmente', value: 'PARCIAL' },
        { label: 'Pagada', value: 'PAGADA' },
        { label: 'Omitida este mes', value: 'OMITIDA' }
    ];
    employeeOptions = computed(() => this.employees().map(employee => ({
        label: `${employee.apellido}, ${employee.nombre}`,
        value: employee.id
    })), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "employeeOptions" }] : /* istanbul ignore next */ []));
    filteredLoans = computed(() => {
        const term = this.search().trim().toLocaleLowerCase('es');
        return this.loans().filter(loan => (!term || `${loan.person_name} ${loan.external_document}`.toLocaleLowerCase('es').includes(term))
            && (this.typeFilter() === 'TODOS' || loan.person_type === this.typeFilter())
            && (this.statusFilter() === 'TODOS' || loan.status === this.statusFilter()));
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredLoans" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        void Promise.all([this.loadLoans(), this.loadEmployees()]);
    }
    async loadLoans() {
        this.loading.set(true);
        try {
            const response = await firstValueFrom(this.api.getLoans());
            this.loans.set(response.loans);
            this.kpis.set(response.kpis);
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
        finally {
            this.loading.set(false);
        }
    }
    async loadEmployees() {
        try {
            const response = await firstValueFrom(this.api.getEmployees());
            this.employees.set(response.employees.filter(employee => !employee.fecha_baja));
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
    }
    openCreate() {
        this.form = this.emptyForm();
        this.createVisible.set(true);
    }
    async createLoan() {
        if (!this.form.total_amount || !this.form.delivery_date || !this.form.first_installment_period || !this.form.installment_count) {
            this.showError('Completá los campos obligatorios.');
            return;
        }
        if (this.form.person_type === 'EMPLEADO' && !this.form.employee_id) {
            this.showError('Seleccioná un empleado.');
            return;
        }
        if (this.form.person_type === 'EXTERNO' && !this.form.external_name.trim()) {
            this.showError('Ingresá el nombre de la persona.');
            return;
        }
        const payload = {
            ...this.form,
            delivery_date: this.toIsoDate(this.form.delivery_date),
            first_installment_period: this.toIsoDate(this.form.first_installment_period)
        };
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.createLoan(payload));
            this.createVisible.set(false);
            await this.loadLoans();
            this.showSuccess('Préstamo creado y cuotas generadas correctamente.');
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    async openDetail(loan) {
        this.loading.set(true);
        try {
            this.selectedLoan.set(await firstValueFrom(this.api.getLoan(loan.id)));
            this.detailVisible.set(true);
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
        finally {
            this.loading.set(false);
        }
    }
    openInstallment(item) {
        this.creatingInstallment.set(false);
        this.selectedInstallment.set(item);
        this.installmentForm = {
            period: this.fromIsoDate(item.period),
            expected_amount: Number(item.expected_amount),
            paid_amount: Number(item.paid_amount),
            status: item.status,
            payment_date: item.payment_date ? this.fromIsoDate(item.payment_date) : null,
            payment_method: item.payment_method,
            notes: item.notes
        };
        this.installmentVisible.set(true);
    }
    openCreateInstallment() {
        const installments = this.selectedLoan()?.installments ?? [];
        const lastPeriod = installments.length
            ? this.fromIsoDate(installments[installments.length - 1].period)
            : new Date();
        this.creatingInstallment.set(true);
        this.selectedInstallment.set(null);
        this.installmentForm = this.emptyInstallmentForm();
        this.installmentForm.period = new Date(lastPeriod.getFullYear(), lastPeriod.getMonth() + 1, 1);
        this.installmentVisible.set(true);
    }
    onInstallmentStatusChange(status) {
        this.installmentForm.status = status;
        if (status === 'PAGADA') {
            this.installmentForm.paid_amount = this.installmentForm.expected_amount;
        }
    }
    askDeleteInstallment(item) {
        this.installmentToDelete.set(item);
        this.installmentConfirmVisible.set(true);
    }
    async deleteInstallment() {
        const loan = this.selectedLoan();
        const item = this.installmentToDelete();
        if (!loan || !item)
            return;
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteLoanInstallment(loan.id, item.id));
            this.installmentConfirmVisible.set(false);
            this.installmentToDelete.set(null);
            await this.loadLoans();
            this.selectedLoan.set(await firstValueFrom(this.api.getLoan(loan.id)));
            this.showSuccess('Cuota eliminada y préstamo actualizado.');
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    async saveInstallment() {
        const loan = this.selectedLoan();
        const item = this.selectedInstallment();
        if (!loan || !this.installmentForm.period || !this.installmentForm.expected_amount) {
            this.showError('Completá el período y el importe previsto.');
            return;
        }
        const payload = {
            ...this.installmentForm,
            period: this.toIsoDate(this.installmentForm.period),
            payment_date: this.installmentForm.payment_date ? this.toIsoDate(this.installmentForm.payment_date) : null
        };
        this.saving.set(true);
        try {
            if (this.creatingInstallment()) {
                const createPayload = {
                    period: payload.period,
                    expected_amount: payload.expected_amount,
                    notes: payload.notes
                };
                await firstValueFrom(this.api.createLoanInstallment(loan.id, createPayload));
            }
            else if (item) {
                await firstValueFrom(this.api.updateLoanInstallment(loan.id, item.id, payload));
            }
            this.installmentVisible.set(false);
            await this.loadLoans();
            this.selectedLoan.set(await firstValueFrom(this.api.getLoan(loan.id)));
            this.showSuccess(this.creatingInstallment() ? 'Cuota agregada y préstamo actualizado.' : 'Cuota actualizada correctamente.');
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    async toggleCancelled() {
        const loan = this.selectedLoan();
        if (!loan)
            return;
        this.saving.set(true);
        try {
            const next = loan.status === 'ANULADO' ? 'ACTIVO' : 'ANULADO';
            this.selectedLoan.set(await firstValueFrom(this.api.updateLoan(loan.id, { status: next })));
            await this.loadLoans();
            this.showSuccess(next === 'ANULADO' ? 'Préstamo anulado.' : 'Préstamo reactivado.');
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    async deleteLoan() {
        const loan = this.selectedLoan();
        if (!loan)
            return;
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteLoan(loan.id));
            this.confirmVisible.set(false);
            this.detailVisible.set(false);
            this.selectedLoan.set(null);
            await this.loadLoans();
            this.showSuccess('Préstamo eliminado definitivamente.');
        }
        catch (error) {
            this.showError(this.apiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    resetFilters() {
        this.search.set('');
        this.typeFilter.set('TODOS');
        this.statusFilter.set('TODOS');
    }
    formatCurrency(value) {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 2 }).format(Number(value ?? 0));
    }
    formatPeriod(value) {
        if (!value)
            return '—';
        const date = this.fromIsoDate(value);
        const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(date);
        return label.charAt(0).toUpperCase() + label.slice(1);
    }
    statusLabel(status) {
        return { ACTIVO: 'Activo', PAGADO: 'Pagado', ANULADO: 'Anulado', PENDIENTE: 'Pendiente', PARCIAL: 'Parcial', PAGADA: 'Pagada', OMITIDA: 'Omitida' }[status] ?? status;
    }
    statusSeverity(status) {
        if (status === 'PAGADO' || status === 'PAGADA')
            return 'success';
        if (status === 'ACTIVO')
            return 'info';
        if (status === 'PARCIAL' || status === 'PENDIENTE')
            return 'warn';
        if (status === 'ANULADO')
            return 'danger';
        return 'secondary';
    }
    emptyForm() {
        const now = new Date();
        return { person_type: 'EMPLEADO', employee_id: null, external_name: '', external_document: '', total_amount: 0, delivery_date: now, first_installment_period: new Date(now.getFullYear(), now.getMonth() + 1, 1), installment_count: 1, delivery_method: 'TRANSFERENCIA', notes: '' };
    }
    emptyInstallmentForm() {
        return { period: new Date(), expected_amount: 0, paid_amount: 0, status: 'PENDIENTE', payment_date: null, payment_method: '', notes: '' };
    }
    toIsoDate(value) {
        return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
    }
    fromIsoDate(value) {
        const [year, month, day] = value.split('-').map(Number);
        return new Date(year, month - 1, day);
    }
    apiError(error) {
        return error instanceof HttpErrorResponse && error.error?.detail ? error.error.detail : 'Ocurrió un error inesperado.';
    }
    showSuccess(detail) { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); }
    showError(detail) { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
    static ɵfac = function Prestamos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Prestamos)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Prestamos, selectors: [["app-prestamos"]], features: [i0.ɵɵProvidersFeature([MessageService])], decls: 164, vars: 90, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right"], [1, "loans-page"], [1, "page-header"], [1, "eyebrow"], ["pButton", "", "type", "button", 3, "click"], [1, "pi", "pi-plus"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "purple"], [1, "pi", "pi-wallet"], [1, "stat-card", "featured"], [1, "stat-icon", "violet"], [1, "pi", "pi-chart-line"], [1, "stat-icon", "green"], [1, "pi", "pi-check-circle"], [1, "stat-icon", "orange"], [1, "pi", "pi-clock"], [1, "stat-icon", "blue"], [1, "pi", "pi-users"], [1, "table-card"], [1, "table-toolbar"], [1, "filters"], ["optionLabel", "label", "optionValue", "value", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], [1, "search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar persona...", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "severity", "secondary", "title", "Restablecer filtros", "aria-label", "Restablecer filtros", 3, "click", "text", "rounded"], [1, "pi", "pi-filter-slash"], [3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "scrollable"], ["header", "Nuevo pr\u00E9stamo", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "loan-form", 3, "ngSubmit"], [1, "field"], ["optionLabel", "label", "optionValue", "value", "name", "person_type", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["name", "total_amount", "mode", "currency", "currency", "ARS", "locale", "es-AR", 3, "ngModelChange", "ngModel", "min"], ["name", "installment_count", 3, "ngModelChange", "ngModel", "min", "max", "useGrouping"], ["name", "delivery_date", "dateFormat", "dd/mm/yy", "appendTo", "body", 3, "ngModelChange", "ngModel", "showIcon"], ["name", "first_installment_period", "view", "month", "dateFormat", "mm/yy", "appendTo", "body", 3, "ngModelChange", "ngModel", "showIcon"], ["optionLabel", "label", "optionValue", "value", "name", "delivery_method", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], [1, "field", "full"], ["pTextarea", "", "name", "notes", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "form-hint", "full"], [1, "pi", "pi-info-circle"], [1, "dialog-actions", "full"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "outlined"], ["pButton", "", "type", "submit", 3, "loading"], ["header", "Detalle del pr\u00E9stamo", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [3, "visibleChange", "visible", "header", "modal", "draggable", "resizable", "focusOnShow"], [1, "installment-form", 3, "ngSubmit"], ["name", "installment_period", "view", "month", "dateFormat", "mm/yy", "appendTo", "body", 3, "ngModelChange", "ngModel", "showIcon"], ["name", "expected_amount", "mode", "currency", "currency", "ARS", "locale", "es-AR", 3, "ngModelChange", "ngModel", "min"], ["pTextarea", "", "name", "installment_notes", "rows", "3", 3, "ngModelChange", "ngModel"], ["header", "Eliminar cuota", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "confirm"], [1, "pi", "pi-exclamation-triangle"], [1, "dialog-actions"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "loading"], ["header", "Eliminar pr\u00E9stamo", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], ["pSortableColumn", "person_name"], ["field", "person_name"], ["pSortableColumn", "person_type"], ["field", "person_type"], ["pSortableColumn", "delivery_date"], ["field", "delivery_date"], ["pSortableColumn", "total_amount"], ["field", "total_amount"], ["pSortableColumn", "paid_amount"], ["field", "paid_amount"], ["pSortableColumn", "balance"], ["field", "balance"], ["pSortableColumn", "status"], ["field", "status"], [1, "clickable", 3, "click"], [1, "person"], [1, "paid"], [3, "value", "severity"], [1, "pi", "pi-chevron-right", "row-arrow"], ["colspan", "9"], [1, "empty"], [1, "pi", "pi-money-bill"], ["optionLabel", "label", "optionValue", "value", "name", "employee_id", "filterBy", "label", "placeholder", "Seleccionar empleado", "appendTo", "body", 3, "ngModelChange", "options", "ngModel", "filter"], ["pInputText", "", "name", "external_name", 3, "ngModelChange", "ngModel"], ["pInputText", "", "name", "external_document", 3, "ngModelChange", "ngModel"], [1, "detail-summary"], [1, "detail-meta"], [1, "pi", "pi-calendar"], [1, "pi", "pi-credit-card"], [1, "pi", "pi-list"], [1, "notes"], [1, "installments-heading"], ["pButton", "", "type", "button", "size", "small", 3, "click", "outlined"], ["scrollHeight", "360px", 3, "value", "scrollable"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "text"], [1, "pi", "pi-trash"], [1, "spacer"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "outlined", "loading"], ["pSortableColumn", "number"], ["field", "number"], ["pSortableColumn", "period"], ["field", "period"], ["pSortableColumn", "expected_amount"], ["field", "expected_amount"], [1, "installment-actions"], ["pButton", "", "type", "button", "title", "Editar cuota", "aria-label", "Editar cuota", 3, "click", "text", "rounded"], [1, "pi", "pi-pencil"], ["pButton", "", "type", "button", "severity", "danger", "title", "Eliminar cuota", "aria-label", "Eliminar cuota", 3, "click", "text", "rounded"], ["name", "paid_amount", "mode", "currency", "currency", "ARS", "locale", "es-AR", 3, "ngModelChange", "ngModel", "min"], ["optionLabel", "label", "optionValue", "value", "name", "status", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["name", "payment_date", "dateFormat", "dd/mm/yy", "appendTo", "body", 3, "ngModelChange", "ngModel", "showIcon"], ["optionLabel", "label", "optionValue", "value", "name", "payment_method", "placeholder", "Seleccionar", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"]], template: function Prestamos_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "p-toast", 3);
            i0.ɵɵelementStart(1, "section", 4)(2, "header", 5)(3, "div")(4, "span", 6);
            i0.ɵɵtext(5, "Finanzas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Pr\u00E9stamos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Seguimiento del dinero prestado a empleados y otras personas.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "button", 7);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_10_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(11, "i", 8);
            i0.ɵɵtext(12, " Nuevo pr\u00E9stamo");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "section", 9)(14, "article", 10)(15, "span", 11);
            i0.ɵɵelement(16, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div")(18, "small");
            i0.ɵɵtext(19, "Total prestado");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "strong");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "article", 13)(23, "span", 14);
            i0.ɵɵelement(24, "i", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div")(26, "small");
            i0.ɵɵtext(27, "Saldo pendiente");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "strong");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "article", 10)(31, "span", 16);
            i0.ɵɵelement(32, "i", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div")(34, "small");
            i0.ɵɵtext(35, "Cobrado este mes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "strong");
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "article", 10)(39, "span", 18);
            i0.ɵɵelement(40, "i", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div")(42, "small");
            i0.ɵɵtext(43, "Cuotas vencidas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "strong");
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(46, "article", 10)(47, "span", 20);
            i0.ɵɵelement(48, "i", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "div")(50, "small");
            i0.ɵɵtext(51, "Pr\u00E9stamos activos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "strong");
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(54, "section", 22)(55, "div", 23)(56, "div")(57, "h2");
            i0.ɵɵtext(58, "Pr\u00E9stamos registrados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "span");
            i0.ɵɵtext(60);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "div", 24)(62, "p-select", 25);
            i0.ɵɵlistener("ngModelChange", function Prestamos_Template_p_select_ngModelChange_62_listener($event) { return ctx.typeFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(63, "p-select", 25);
            i0.ɵɵlistener("ngModelChange", function Prestamos_Template_p_select_ngModelChange_63_listener($event) { return ctx.statusFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(64, "span", 26);
            i0.ɵɵelement(65, "i", 27);
            i0.ɵɵelementStart(66, "input", 28);
            i0.ɵɵlistener("ngModelChange", function Prestamos_Template_input_ngModelChange_66_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "button", 29);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_67_listener() { return ctx.resetFilters(); });
            i0.ɵɵelement(68, "i", 30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(69, "p-table", 31);
            i0.ɵɵtemplate(70, Prestamos_ng_template_70_Template, 25, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(72, Prestamos_ng_template_72_Template, 27, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(74, Prestamos_ng_template_74_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(76, "p-dialog", 32);
            i0.ɵɵlistener("visibleChange", function Prestamos_Template_p_dialog_visibleChange_76_listener($event) { return ctx.createVisible.set($event); });
            i0.ɵɵelementStart(77, "form", 33);
            i0.ɵɵlistener("ngSubmit", function Prestamos_Template_form_ngSubmit_77_listener() { return ctx.createLoan(); });
            i0.ɵɵelementStart(78, "div", 34)(79, "label");
            i0.ɵɵtext(80, "Tipo de persona *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "p-select", 35);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_select_ngModelChange_81_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.person_type, $event) || (ctx.form.person_type = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(82, Prestamos_Conditional_82_Template, 4, 3, "div", 34)(83, Prestamos_Conditional_83_Template, 8, 2);
            i0.ɵɵelementStart(84, "div", 34)(85, "label");
            i0.ɵɵtext(86, "Monto total *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "p-inputnumber", 36);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_inputnumber_ngModelChange_87_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.total_amount, $event) || (ctx.form.total_amount = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "div", 34)(89, "label");
            i0.ɵɵtext(90, "Cantidad de cuotas *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "p-inputnumber", 37);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_inputnumber_ngModelChange_91_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.installment_count, $event) || (ctx.form.installment_count = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "div", 34)(93, "label");
            i0.ɵɵtext(94, "Fecha de entrega *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "p-datepicker", 38);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_datepicker_ngModelChange_95_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.delivery_date, $event) || (ctx.form.delivery_date = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "div", 34)(97, "label");
            i0.ɵɵtext(98, "Primera cuota *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "p-datepicker", 39);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_datepicker_ngModelChange_99_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.first_installment_period, $event) || (ctx.form.first_installment_period = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "div", 34)(101, "label");
            i0.ɵɵtext(102, "Medio de entrega");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "p-select", 40);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_select_ngModelChange_103_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.delivery_method, $event) || (ctx.form.delivery_method = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 41)(105, "label");
            i0.ɵɵtext(106, "Observaciones");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "textarea", 42);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_textarea_ngModelChange_107_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.notes, $event) || (ctx.form.notes = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "p", 43);
            i0.ɵɵelement(109, "i", 44);
            i0.ɵɵtext(110, " Las cuotas se distribuir\u00E1n autom\u00E1ticamente y despu\u00E9s podr\u00E1n modificarse una por una.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "div", 45)(112, "button", 46);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_112_listener() { return ctx.createVisible.set(false); });
            i0.ɵɵtext(113, "Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "button", 47);
            i0.ɵɵtext(115, "Crear pr\u00E9stamo");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(116, "p-dialog", 48);
            i0.ɵɵlistener("visibleChange", function Prestamos_Template_p_dialog_visibleChange_116_listener($event) { return ctx.detailVisible.set($event); });
            i0.ɵɵconditionalCreate(117, Prestamos_Conditional_117_Template, 57, 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "p-dialog", 49);
            i0.ɵɵlistener("visibleChange", function Prestamos_Template_p_dialog_visibleChange_118_listener($event) { return ctx.installmentVisible.set($event); });
            i0.ɵɵelementStart(119, "form", 50);
            i0.ɵɵlistener("ngSubmit", function Prestamos_Template_form_ngSubmit_119_listener() { return ctx.saveInstallment(); });
            i0.ɵɵelementStart(120, "div", 34)(121, "label");
            i0.ɵɵtext(122, "Per\u00EDodo *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "p-datepicker", 51);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_datepicker_ngModelChange_123_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.installmentForm.period, $event) || (ctx.installmentForm.period = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(124, "div", 34)(125, "label");
            i0.ɵɵtext(126, "Importe previsto");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "p-inputnumber", 52);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_p_inputnumber_ngModelChange_127_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.installmentForm.expected_amount, $event) || (ctx.installmentForm.expected_amount = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(128, Prestamos_Conditional_128_Template, 16, 8);
            i0.ɵɵelementStart(129, "div", 41)(130, "label");
            i0.ɵɵtext(131, "Observaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "textarea", 53);
            i0.ɵɵtwoWayListener("ngModelChange", function Prestamos_Template_textarea_ngModelChange_132_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.installmentForm.notes, $event) || (ctx.installmentForm.notes = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(133, "div", 45)(134, "button", 46);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_134_listener() { return ctx.installmentVisible.set(false); });
            i0.ɵɵtext(135, "Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "button", 47);
            i0.ɵɵtext(137);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(138, "p-dialog", 54);
            i0.ɵɵlistener("visibleChange", function Prestamos_Template_p_dialog_visibleChange_138_listener($event) { return ctx.installmentConfirmVisible.set($event); });
            i0.ɵɵelementStart(139, "div", 55);
            i0.ɵɵelement(140, "i", 56);
            i0.ɵɵelementStart(141, "div")(142, "strong");
            i0.ɵɵtext(143);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(144, "p");
            i0.ɵɵtext(145, "Se actualizar\u00E1n autom\u00E1ticamente la cantidad de cuotas y el total del pr\u00E9stamo.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(146, "div", 57)(147, "button", 46);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_147_listener() { return ctx.installmentConfirmVisible.set(false); });
            i0.ɵɵtext(148, "Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(149, "button", 58);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_149_listener() { return ctx.deleteInstallment(); });
            i0.ɵɵtext(150, "Eliminar cuota");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(151, "p-dialog", 59);
            i0.ɵɵlistener("visibleChange", function Prestamos_Template_p_dialog_visibleChange_151_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(152, "div", 55);
            i0.ɵɵelement(153, "i", 56);
            i0.ɵɵelementStart(154, "div")(155, "strong");
            i0.ɵɵtext(156, "\u00BFEliminar definitivamente este pr\u00E9stamo?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(157, "p");
            i0.ɵɵtext(158, "Tambi\u00E9n se eliminar\u00E1n todas sus cuotas y pagos. Esta acci\u00F3n no se puede deshacer.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(159, "div", 57)(160, "button", 46);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_160_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(161, "Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(162, "button", 58);
            i0.ɵɵlistener("click", function Prestamos_Template_button_click_162_listener() { return ctx.deleteLoan(); });
            i0.ɵɵtext(163, "Eliminar");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_60_0;
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.kpis().total_lent));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.kpis().outstanding_balance));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.kpis().collected_this_month));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.kpis().overdue_installments);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.kpis().active_loans);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.filteredLoans().length, " resultados");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("options", ctx.typeFilterOptions)("ngModel", ctx.typeFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.statusOptions)("ngModel", ctx.statusFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", true)("rounded", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.filteredLoans())("loading", ctx.loading())("paginator", ctx.filteredLoans().length > 10)("rows", 10)("rowsPerPageOptions", i0.ɵɵpureFunction0(84, _c0))("scrollable", true);
            i0.ɵɵadvance(7);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(85, _c1));
            i0.ɵɵproperty("visible", ctx.createVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.personTypeOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.person_type);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.form.person_type === "EMPLEADO" ? 82 : 83);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.total_amount);
            i0.ɵɵproperty("min", 0);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.installment_count);
            i0.ɵɵproperty("min", 1)("max", 240)("useGrouping", false);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.delivery_date);
            i0.ɵɵproperty("showIcon", true);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.first_installment_period);
            i0.ɵɵproperty("showIcon", true);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("options", ctx.deliveryOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.delivery_method);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.notes);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(86, _c2));
            i0.ɵɵproperty("visible", ctx.detailVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_60_0 = ctx.selectedLoan()) ? 117 : -1, tmp_60_0);
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(87, _c3));
            i0.ɵɵproperty("visible", ctx.installmentVisible())("header", ctx.creatingInstallment() ? "Agregar cuota" : "Registrar cuota")("modal", true)("draggable", false)("resizable", false)("focusOnShow", false);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.installmentForm.period);
            i0.ɵɵproperty("showIcon", true);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.installmentForm.expected_amount);
            i0.ɵɵproperty("min", 0);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.creatingInstallment() ? 128 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.installmentForm.notes);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.creatingInstallment() ? "Agregar cuota" : "Guardar cuota");
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(88, _c4));
            i0.ɵɵproperty("visible", ctx.installmentConfirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("\u00BFEliminar la cuota ", ctx.installmentToDelete()?.number, "?");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(89, _c4));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective, DatePicker, Dialog, InputNumber, InputText, Select, TableModule, i2.Table, i2.SortableColumn, i2.SortIcon, Tag, Textarea, Toast, DatePipe], styles: ["[_nghost-%COMP%] { display: block; }\n.loans-page[_ngcontent-%COMP%] { padding: 32px 32px 48px 96px; background: #f8fafc; min-height: calc(100vh - 72px); color: #18181b; }\n.page-header[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; max-width: 1500px; margin: 0 auto 28px; }\n.eyebrow[_ngcontent-%COMP%] { color: #a000c8; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }\nh1[_ngcontent-%COMP%] { margin: 7px 0 5px; font-size: 2rem; letter-spacing: -.04em; }\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: #71717a; font-size: .9rem; }\n.stats-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; max-width: 1500px; margin: 0 auto 20px; }\n.stat-card[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 13px; min-height: 82px; padding: 16px; border: 1px solid #e4e4e7; border-radius: 14px; background: #fff; }\n.stat-card.featured[_ngcontent-%COMP%] { border-color: #e9b7f5; background: #fffaff; }\n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: #71717a; margin-bottom: 2px; font-size: .74rem; }\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; font-size: 1.02rem; }\n.stat-icon[_ngcontent-%COMP%] { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 11px; flex: 0 0 auto; }\n.stat-icon.purple[_ngcontent-%COMP%], .stat-icon.violet[_ngcontent-%COMP%] { color: #a000c8; background: #f7dcfb; }\n.stat-icon.green[_ngcontent-%COMP%] { color: #15803d; background: #dcfce7; }.stat-icon.orange[_ngcontent-%COMP%] { color: #c2410c; background: #ffedd5; }.stat-icon.blue[_ngcontent-%COMP%] { color: #2563eb; background: #dbeafe; }\n.table-card[_ngcontent-%COMP%] { overflow: hidden; min-height: 400px; max-width: 1500px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 14px; background: #fff; }\n.table-toolbar[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px; border-bottom: 1px solid #e4e4e7; }\n.table-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0 0 4px; font-size: 1rem; }.table-toolbar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { color: #71717a; font-size: .76rem; }\n.filters[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }.search[_ngcontent-%COMP%] { position: relative; }.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { position: absolute; z-index: 1; left: 12px; top: 50%; transform: translateY(-50%); color: #a1a1aa; }.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 230px; padding-left: 36px; }\n.clickable[_ngcontent-%COMP%] { cursor: pointer; }.clickable[_ngcontent-%COMP%]:hover { background: #fcf7ff; }.person[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }.person[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; color: #a000c8; background: #f7dcfb; font-size: .72rem; font-weight: 700; }.paid[_ngcontent-%COMP%] { color: #15803d; }.row-arrow[_ngcontent-%COMP%] { color: #a1a1aa; }\ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: #71717a; margin-top: 3px; }.empty[_ngcontent-%COMP%] { min-height: 250px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; color: #71717a; }.empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.7rem; color: #d4d4d8; }\n.loan-form[_ngcontent-%COMP%], .installment-form[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: .76rem; font-weight: 600; }.field.full[_ngcontent-%COMP%], .full[_ngcontent-%COMP%] { grid-column: 1 / -1; }.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   p-select[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   p-datepicker[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   p-inputnumber[_ngcontent-%COMP%] { width: 100%; }.form-hint[_ngcontent-%COMP%] { margin: 0; padding: 10px 12px; border-radius: 8px; background: #faf5ff; color: #6b21a8; font-size: .78rem; }\n.detail-summary[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.4fr repeat(4, 1fr); gap: 10px; margin-bottom: 14px; }.detail-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { padding: 12px; border: 1px solid #e4e4e7; border-radius: 10px; }.detail-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: #71717a; margin-bottom: 5px; }.detail-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 18px; color: #52525b; font-size: .8rem; }.detail-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #a000c8; margin-right: 5px; }.notes[_ngcontent-%COMP%] { padding: 12px; background: #f8fafc; border-radius: 8px; color: #52525b; font-size: .84rem; }.detail-summary[_ngcontent-%COMP%]    + .detail-meta[_ngcontent-%COMP%] { margin-bottom: 18px; }h3[_ngcontent-%COMP%] { font-size: .92rem; margin: 18px 0 10px; }\n.installments-heading[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 18px 0 10px; }.installments-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; }\n.installment-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 2px; }\n.dialog-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 20px; }.spacer[_ngcontent-%COMP%] { flex: 1; }.confirm[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 12px; }.confirm[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] { color: #dc2626; font-size: 1.3rem; }.confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #71717a; font-size: .8rem; line-height: 1.5; }\n@media (max-width: 1100px) { .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }.detail-summary[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }.table-toolbar[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; } }\n@media (max-width: 700px) { .loans-page[_ngcontent-%COMP%] { min-height: calc(100vh - 64px); padding: 22px 16px 36px 80px; }.page-header[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }.stats-grid[_ngcontent-%COMP%], .loan-form[_ngcontent-%COMP%], .installment-form[_ngcontent-%COMP%], .detail-summary[_ngcontent-%COMP%] { grid-template-columns: 1fr; }.field.full[_ngcontent-%COMP%], .full[_ngcontent-%COMP%] { grid-column: auto; }.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Prestamos, [{
        type: Component,
        args: [{ selector: 'app-prestamos', imports: [FormsModule, DatePipe, ButtonDirective, DatePicker, Dialog, InputNumber, InputText, Select, TableModule, Tag, Textarea, Toast], providers: [MessageService], template: "<p-toast position=\"bottom-right\" />\n\n<section class=\"loans-page\">\n  <header class=\"page-header\">\n    <div>\n      <span class=\"eyebrow\">Finanzas</span>\n      <h1>Pr\u00E9stamos</h1>\n      <p>Seguimiento del dinero prestado a empleados y otras personas.</p>\n    </div>\n    <button pButton type=\"button\" (click)=\"openCreate()\"><i class=\"pi pi-plus\"></i> Nuevo pr\u00E9stamo</button>\n  </header>\n\n  <section class=\"stats-grid\">\n    <article class=\"stat-card\"><span class=\"stat-icon purple\"><i class=\"pi pi-wallet\"></i></span><div><small>Total prestado</small><strong>{{ formatCurrency(kpis().total_lent) }}</strong></div></article>\n    <article class=\"stat-card featured\"><span class=\"stat-icon violet\"><i class=\"pi pi-chart-line\"></i></span><div><small>Saldo pendiente</small><strong>{{ formatCurrency(kpis().outstanding_balance) }}</strong></div></article>\n    <article class=\"stat-card\"><span class=\"stat-icon green\"><i class=\"pi pi-check-circle\"></i></span><div><small>Cobrado este mes</small><strong>{{ formatCurrency(kpis().collected_this_month) }}</strong></div></article>\n    <article class=\"stat-card\"><span class=\"stat-icon orange\"><i class=\"pi pi-clock\"></i></span><div><small>Cuotas vencidas</small><strong>{{ kpis().overdue_installments }}</strong></div></article>\n    <article class=\"stat-card\"><span class=\"stat-icon blue\"><i class=\"pi pi-users\"></i></span><div><small>Pr\u00E9stamos activos</small><strong>{{ kpis().active_loans }}</strong></div></article>\n  </section>\n\n  <section class=\"table-card\">\n    <div class=\"table-toolbar\">\n      <div><h2>Pr\u00E9stamos registrados</h2><span>{{ filteredLoans().length }} resultados</span></div>\n      <div class=\"filters\">\n        <p-select [options]=\"typeFilterOptions\" optionLabel=\"label\" optionValue=\"value\" [ngModel]=\"typeFilter()\" (ngModelChange)=\"typeFilter.set($event)\" appendTo=\"body\" />\n        <p-select [options]=\"statusOptions\" optionLabel=\"label\" optionValue=\"value\" [ngModel]=\"statusFilter()\" (ngModelChange)=\"statusFilter.set($event)\" appendTo=\"body\" />\n        <span class=\"search\"><i class=\"pi pi-search\"></i><input pInputText type=\"search\" placeholder=\"Buscar persona...\" [ngModel]=\"search()\" (ngModelChange)=\"search.set($event)\" /></span>\n        <button pButton type=\"button\" [text]=\"true\" [rounded]=\"true\" severity=\"secondary\" title=\"Restablecer filtros\" aria-label=\"Restablecer filtros\" (click)=\"resetFilters()\"><i class=\"pi pi-filter-slash\"></i></button>\n      </div>\n    </div>\n\n    <p-table [value]=\"filteredLoans()\" [loading]=\"loading()\" [paginator]=\"filteredLoans().length > 10\" [rows]=\"10\" [rowsPerPageOptions]=\"[10, 25, 50]\" [scrollable]=\"true\">\n      <ng-template #header><tr>\n        <th pSortableColumn=\"person_name\">Persona <p-sort-icon field=\"person_name\" /></th>\n        <th pSortableColumn=\"person_type\">Tipo <p-sort-icon field=\"person_type\" /></th>\n        <th pSortableColumn=\"delivery_date\">Fecha <p-sort-icon field=\"delivery_date\" /></th>\n        <th pSortableColumn=\"total_amount\">Total <p-sort-icon field=\"total_amount\" /></th>\n        <th pSortableColumn=\"paid_amount\">Cobrado <p-sort-icon field=\"paid_amount\" /></th>\n        <th pSortableColumn=\"balance\">Saldo <p-sort-icon field=\"balance\" /></th>\n        <th>Pr\u00F3xima cuota</th>\n        <th pSortableColumn=\"status\">Estado <p-sort-icon field=\"status\" /></th>\n        <th></th>\n      </tr></ng-template>\n      <ng-template #body let-loan><tr class=\"clickable\" (click)=\"openDetail(loan)\">\n        <td><div class=\"person\"><span>{{ loan.person_name.charAt(0) }}</span><strong>{{ loan.person_name }}</strong></div></td>\n        <td>{{ loan.person_type === 'EMPLEADO' ? 'Empleado' : 'Externo' }}</td>\n        <td>{{ loan.delivery_date | date:'dd/MM/yyyy' }}</td>\n        <td><strong>{{ formatCurrency(loan.total_amount) }}</strong></td>\n        <td class=\"paid\">{{ formatCurrency(loan.paid_amount) }}</td>\n        <td><strong>{{ formatCurrency(loan.balance) }}</strong></td>\n        <td>@if (loan.next_installment) { <span>{{ formatPeriod(loan.next_installment.period) }}</span><small>{{ formatCurrency(loan.next_installment.expected_amount) }}</small> } @else { \u2014 }</td>\n        <td><p-tag [value]=\"statusLabel(loan.status)\" [severity]=\"statusSeverity(loan.status)\" /></td>\n        <td><i class=\"pi pi-chevron-right row-arrow\"></i></td>\n      </tr></ng-template>\n      <ng-template #emptymessage><tr><td colspan=\"9\"><div class=\"empty\"><i class=\"pi pi-money-bill\"></i><strong>No hay pr\u00E9stamos</strong><span>No encontramos pr\u00E9stamos con los filtros seleccionados.</span></div></td></tr></ng-template>\n    </p-table>\n  </section>\n</section>\n\n<p-dialog [visible]=\"createVisible()\" (visibleChange)=\"createVisible.set($event)\" header=\"Nuevo pr\u00E9stamo\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [style]=\"{ width: 'min(760px, calc(100vw - 32px))' }\">\n  <form class=\"loan-form\" (ngSubmit)=\"createLoan()\">\n    <div class=\"field\"><label>Tipo de persona *</label><p-select [options]=\"personTypeOptions\" optionLabel=\"label\" optionValue=\"value\" [(ngModel)]=\"form.person_type\" name=\"person_type\" appendTo=\"body\" /></div>\n    @if (form.person_type === 'EMPLEADO') {\n      <div class=\"field\"><label>Empleado *</label><p-select [options]=\"employeeOptions()\" optionLabel=\"label\" optionValue=\"value\" [(ngModel)]=\"form.employee_id\" name=\"employee_id\" [filter]=\"true\" filterBy=\"label\" placeholder=\"Seleccionar empleado\" appendTo=\"body\" /></div>\n    } @else {\n      <div class=\"field\"><label>Nombre completo *</label><input pInputText [(ngModel)]=\"form.external_name\" name=\"external_name\" /></div>\n      <div class=\"field\"><label>Documento</label><input pInputText [(ngModel)]=\"form.external_document\" name=\"external_document\" /></div>\n    }\n    <div class=\"field\"><label>Monto total *</label><p-inputnumber [(ngModel)]=\"form.total_amount\" name=\"total_amount\" mode=\"currency\" currency=\"ARS\" locale=\"es-AR\" [min]=\"0\" /></div>\n    <div class=\"field\"><label>Cantidad de cuotas *</label><p-inputnumber [(ngModel)]=\"form.installment_count\" name=\"installment_count\" [min]=\"1\" [max]=\"240\" [useGrouping]=\"false\" /></div>\n    <div class=\"field\"><label>Fecha de entrega *</label><p-datepicker [(ngModel)]=\"form.delivery_date\" name=\"delivery_date\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\" appendTo=\"body\" /></div>\n    <div class=\"field\"><label>Primera cuota *</label><p-datepicker [(ngModel)]=\"form.first_installment_period\" name=\"first_installment_period\" view=\"month\" dateFormat=\"mm/yy\" [showIcon]=\"true\" appendTo=\"body\" /></div>\n    <div class=\"field\"><label>Medio de entrega</label><p-select [options]=\"deliveryOptions\" optionLabel=\"label\" optionValue=\"value\" [(ngModel)]=\"form.delivery_method\" name=\"delivery_method\" appendTo=\"body\" /></div>\n    <div class=\"field full\"><label>Observaciones</label><textarea pTextarea [(ngModel)]=\"form.notes\" name=\"notes\" rows=\"3\"></textarea></div>\n    <p class=\"form-hint full\"><i class=\"pi pi-info-circle\"></i> Las cuotas se distribuir\u00E1n autom\u00E1ticamente y despu\u00E9s podr\u00E1n modificarse una por una.</p>\n    <div class=\"dialog-actions full\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"createVisible.set(false)\">Cancelar</button><button pButton type=\"submit\" [loading]=\"saving()\">Crear pr\u00E9stamo</button></div>\n  </form>\n</p-dialog>\n\n<p-dialog [visible]=\"detailVisible()\" (visibleChange)=\"detailVisible.set($event)\" header=\"Detalle del pr\u00E9stamo\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [style]=\"{ width: 'min(980px, calc(100vw - 32px))' }\">\n  @if (selectedLoan(); as loan) {\n    <div class=\"detail-summary\">\n      <div><small>Persona</small><strong>{{ loan.person_name }}</strong></div><div><small>Total</small><strong>{{ formatCurrency(loan.total_amount) }}</strong></div><div><small>Cobrado</small><strong class=\"paid\">{{ formatCurrency(loan.paid_amount) }}</strong></div><div><small>Saldo</small><strong>{{ formatCurrency(loan.balance) }}</strong></div><div><small>Estado</small><p-tag [value]=\"statusLabel(loan.status)\" [severity]=\"statusSeverity(loan.status)\" /></div>\n    </div>\n    <div class=\"detail-meta\"><span><i class=\"pi pi-calendar\"></i> Entregado el {{ loan.delivery_date | date:'dd/MM/yyyy' }}</span><span><i class=\"pi pi-credit-card\"></i> {{ loan.delivery_method }}</span><span><i class=\"pi pi-list\"></i> {{ loan.installment_count }} cuotas</span></div>\n    @if (loan.notes) { <p class=\"notes\">{{ loan.notes }}</p> }\n    <div class=\"installments-heading\"><h3>Cronograma de cuotas</h3><button pButton type=\"button\" size=\"small\" [outlined]=\"true\" (click)=\"openCreateInstallment()\"><i class=\"pi pi-plus\"></i> Agregar cuota</button></div>\n    <p-table [value]=\"loan.installments ?? []\" [scrollable]=\"true\" scrollHeight=\"360px\">\n      <ng-template #header><tr><th pSortableColumn=\"number\"># <p-sort-icon field=\"number\" /></th><th pSortableColumn=\"period\">Per\u00EDodo <p-sort-icon field=\"period\" /></th><th pSortableColumn=\"expected_amount\">Previsto <p-sort-icon field=\"expected_amount\" /></th><th pSortableColumn=\"paid_amount\">Pagado <p-sort-icon field=\"paid_amount\" /></th><th pSortableColumn=\"status\">Estado <p-sort-icon field=\"status\" /></th><th>Medio</th><th></th></tr></ng-template>\n      <ng-template #body let-item><tr><td>{{ item.number }}</td><td>{{ formatPeriod(item.period) }}</td><td>{{ formatCurrency(item.expected_amount) }}</td><td>{{ formatCurrency(item.paid_amount) }}</td><td><p-tag [value]=\"statusLabel(item.status)\" [severity]=\"statusSeverity(item.status)\" /></td><td>{{ item.payment_method || '\u2014' }}</td><td><div class=\"installment-actions\"><button pButton type=\"button\" [text]=\"true\" [rounded]=\"true\" title=\"Editar cuota\" aria-label=\"Editar cuota\" (click)=\"openInstallment(item)\"><i class=\"pi pi-pencil\"></i></button><button pButton type=\"button\" [text]=\"true\" [rounded]=\"true\" severity=\"danger\" title=\"Eliminar cuota\" aria-label=\"Eliminar cuota\" (click)=\"askDeleteInstallment(item)\"><i class=\"pi pi-trash\"></i></button></div></td></tr></ng-template>\n    </p-table>\n    <div class=\"dialog-actions\"><button pButton type=\"button\" severity=\"danger\" [text]=\"true\" (click)=\"confirmVisible.set(true)\"><i class=\"pi pi-trash\"></i> Eliminar</button><span class=\"spacer\"></span><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" [loading]=\"saving()\" (click)=\"toggleCancelled()\">{{ loan.status === 'ANULADO' ? 'Reactivar' : 'Anular' }}</button><button pButton type=\"button\" (click)=\"detailVisible.set(false)\">Cerrar</button></div>\n  }\n</p-dialog>\n\n<p-dialog [visible]=\"installmentVisible()\" (visibleChange)=\"installmentVisible.set($event)\" [header]=\"creatingInstallment() ? 'Agregar cuota' : 'Registrar cuota'\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [focusOnShow]=\"false\" [style]=\"{ width: 'min(560px, calc(100vw - 32px))' }\">\n  <form class=\"installment-form\" (ngSubmit)=\"saveInstallment()\">\n    <div class=\"field\"><label>Per\u00EDodo *</label><p-datepicker [(ngModel)]=\"installmentForm.period\" name=\"installment_period\" view=\"month\" dateFormat=\"mm/yy\" [showIcon]=\"true\" appendTo=\"body\" /></div>\n    <div class=\"field\"><label>Importe previsto</label><p-inputnumber [(ngModel)]=\"installmentForm.expected_amount\" name=\"expected_amount\" mode=\"currency\" currency=\"ARS\" locale=\"es-AR\" [min]=\"0\" /></div>\n    @if (!creatingInstallment()) {\n      <div class=\"field\"><label>Importe pagado</label><p-inputnumber [(ngModel)]=\"installmentForm.paid_amount\" name=\"paid_amount\" mode=\"currency\" currency=\"ARS\" locale=\"es-AR\" [min]=\"0\" /></div>\n      <div class=\"field\"><label>Estado</label><p-select [options]=\"installmentStatusOptions\" optionLabel=\"label\" optionValue=\"value\" [ngModel]=\"installmentForm.status\" (ngModelChange)=\"onInstallmentStatusChange($event)\" name=\"status\" appendTo=\"body\" /></div>\n      <div class=\"field\"><label>Fecha de pago</label><p-datepicker [(ngModel)]=\"installmentForm.payment_date\" name=\"payment_date\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\" appendTo=\"body\" /></div>\n      <div class=\"field full\"><label>Medio de cobro</label><p-select [options]=\"paymentOptions\" optionLabel=\"label\" optionValue=\"value\" [(ngModel)]=\"installmentForm.payment_method\" name=\"payment_method\" placeholder=\"Seleccionar\" appendTo=\"body\" /></div>\n    }\n    <div class=\"field full\"><label>Observaci\u00F3n</label><textarea pTextarea [(ngModel)]=\"installmentForm.notes\" name=\"installment_notes\" rows=\"3\"></textarea></div>\n    <div class=\"dialog-actions full\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"installmentVisible.set(false)\">Cancelar</button><button pButton type=\"submit\" [loading]=\"saving()\">{{ creatingInstallment() ? 'Agregar cuota' : 'Guardar cuota' }}</button></div>\n  </form>\n</p-dialog>\n\n<p-dialog [visible]=\"installmentConfirmVisible()\" (visibleChange)=\"installmentConfirmVisible.set($event)\" header=\"Eliminar cuota\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [style]=\"{ width: 'min(460px, calc(100vw - 32px))' }\">\n  <div class=\"confirm\"><i class=\"pi pi-exclamation-triangle\"></i><div><strong>\u00BFEliminar la cuota {{ installmentToDelete()?.number }}?</strong><p>Se actualizar\u00E1n autom\u00E1ticamente la cantidad de cuotas y el total del pr\u00E9stamo.</p></div></div>\n  <div class=\"dialog-actions\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"installmentConfirmVisible.set(false)\">Cancelar</button><button pButton type=\"button\" severity=\"danger\" [loading]=\"saving()\" (click)=\"deleteInstallment()\">Eliminar cuota</button></div>\n</p-dialog>\n\n<p-dialog [visible]=\"confirmVisible()\" (visibleChange)=\"confirmVisible.set($event)\" header=\"Eliminar pr\u00E9stamo\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [style]=\"{ width: 'min(460px, calc(100vw - 32px))' }\">\n  <div class=\"confirm\"><i class=\"pi pi-exclamation-triangle\"></i><div><strong>\u00BFEliminar definitivamente este pr\u00E9stamo?</strong><p>Tambi\u00E9n se eliminar\u00E1n todas sus cuotas y pagos. Esta acci\u00F3n no se puede deshacer.</p></div></div>\n  <div class=\"dialog-actions\"><button pButton type=\"button\" severity=\"secondary\" [outlined]=\"true\" (click)=\"confirmVisible.set(false)\">Cancelar</button><button pButton type=\"button\" severity=\"danger\" [loading]=\"saving()\" (click)=\"deleteLoan()\">Eliminar</button></div>\n</p-dialog>\n", styles: [":host { display: block; }\n.loans-page { padding: 32px 32px 48px 96px; background: #f8fafc; min-height: calc(100vh - 72px); color: #18181b; }\n.page-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; max-width: 1500px; margin: 0 auto 28px; }\n.eyebrow { color: #a000c8; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }\nh1 { margin: 7px 0 5px; font-size: 2rem; letter-spacing: -.04em; }\n.page-header p { margin: 0; color: #71717a; font-size: .9rem; }\n.stats-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; max-width: 1500px; margin: 0 auto 20px; }\n.stat-card { display: flex; align-items: center; gap: 13px; min-height: 82px; padding: 16px; border: 1px solid #e4e4e7; border-radius: 14px; background: #fff; }\n.stat-card.featured { border-color: #e9b7f5; background: #fffaff; }\n.stat-card small { display: block; color: #71717a; margin-bottom: 2px; font-size: .74rem; }\n.stat-card strong { display: block; font-size: 1.02rem; }\n.stat-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 11px; flex: 0 0 auto; }\n.stat-icon.purple, .stat-icon.violet { color: #a000c8; background: #f7dcfb; }\n.stat-icon.green { color: #15803d; background: #dcfce7; }.stat-icon.orange { color: #c2410c; background: #ffedd5; }.stat-icon.blue { color: #2563eb; background: #dbeafe; }\n.table-card { overflow: hidden; min-height: 400px; max-width: 1500px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 14px; background: #fff; }\n.table-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px; border-bottom: 1px solid #e4e4e7; }\n.table-toolbar h2 { margin: 0 0 4px; font-size: 1rem; }.table-toolbar > div > span { color: #71717a; font-size: .76rem; }\n.filters { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }.search { position: relative; }.search i { position: absolute; z-index: 1; left: 12px; top: 50%; transform: translateY(-50%); color: #a1a1aa; }.search input { width: 230px; padding-left: 36px; }\n.clickable { cursor: pointer; }.clickable:hover { background: #fcf7ff; }.person { display: flex; align-items: center; gap: 10px; }.person > span { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; color: #a000c8; background: #f7dcfb; font-size: .72rem; font-weight: 700; }.paid { color: #15803d; }.row-arrow { color: #a1a1aa; }\ntd small { display: block; color: #71717a; margin-top: 3px; }.empty { min-height: 250px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; color: #71717a; }.empty i { font-size: 1.7rem; color: #d4d4d8; }\n.loan-form, .installment-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }.field { display: flex; flex-direction: column; gap: 6px; }.field label { font-size: .76rem; font-weight: 600; }.field.full, .full { grid-column: 1 / -1; }.field input, .field textarea, .field p-select, .field p-datepicker, .field p-inputnumber { width: 100%; }.form-hint { margin: 0; padding: 10px 12px; border-radius: 8px; background: #faf5ff; color: #6b21a8; font-size: .78rem; }\n.detail-summary { display: grid; grid-template-columns: 1.4fr repeat(4, 1fr); gap: 10px; margin-bottom: 14px; }.detail-summary > div { padding: 12px; border: 1px solid #e4e4e7; border-radius: 10px; }.detail-summary small { display: block; color: #71717a; margin-bottom: 5px; }.detail-meta { display: flex; flex-wrap: wrap; gap: 18px; color: #52525b; font-size: .8rem; }.detail-meta i { color: #a000c8; margin-right: 5px; }.notes { padding: 12px; background: #f8fafc; border-radius: 8px; color: #52525b; font-size: .84rem; }.detail-summary + .detail-meta { margin-bottom: 18px; }h3 { font-size: .92rem; margin: 18px 0 10px; }\n.installments-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 18px 0 10px; }.installments-heading h3 { margin: 0; }\n.installment-actions { display: flex; align-items: center; gap: 2px; }\n.dialog-actions { display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-top: 20px; }.spacer { flex: 1; }.confirm { display: flex; align-items: flex-start; gap: 12px; }.confirm > i { color: #dc2626; font-size: 1.3rem; }.confirm p { color: #71717a; font-size: .8rem; line-height: 1.5; }\n@media (max-width: 1100px) { .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }.detail-summary { grid-template-columns: repeat(2, 1fr); }.table-toolbar { align-items: flex-start; flex-direction: column; } }\n@media (max-width: 700px) { .loans-page { min-height: calc(100vh - 64px); padding: 22px 16px 36px 80px; }.page-header, .filters { align-items: stretch; flex-direction: column; }.stats-grid, .loan-form, .installment-form, .detail-summary { grid-template-columns: 1fr; }.field.full, .full { grid-column: auto; }.search input { width: 100%; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Prestamos, { className: "Prestamos", filePath: "src/app/pages/prestamos/prestamos.ts", lineNumber: 30 }); })();
