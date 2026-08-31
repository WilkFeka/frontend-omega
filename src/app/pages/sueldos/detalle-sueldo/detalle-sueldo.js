import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ButtonDirective } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { DatePicker } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Api } from '../../../services/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/dialog";
import * as i3 from "primeng/table";
import * as i4 from "primeng/toast";
const _c0 = () => ({ width: "min(520px, calc(100vw - 32px))" });
const _c1 = () => ({ width: "min(430px, calc(100vw - 32px))" });
const _forTrack0 = ($index, $item) => $item.id;
function DetalleSueldo_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate2(" ", ctx_r0.employee().apellido, ", ", ctx_r0.employee().nombre, " ");
} }
function DetalleSueldo_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Empleado ");
} }
function DetalleSueldo_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 19);
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵtext(2, " Cargando liquidaci\u00F3n... ");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_46_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 104);
    i0.ɵɵtext(1, " Reactivar ");
} }
function DetalleSueldo_Conditional_25_Conditional_46_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 105);
    i0.ɵɵtext(1, " Anular ");
} }
function DetalleSueldo_Conditional_25_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "button", 103);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_46_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleCancelled()); });
    i0.ɵɵconditionalCreate(2, DetalleSueldo_Conditional_25_Conditional_46_Conditional_2_Template, 2, 0)(3, DetalleSueldo_Conditional_25_Conditional_46_Conditional_3_Template, 2, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 41);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_46_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteSalaryDialogVisible.set(true)); });
    i0.ɵɵelement(5, "i", 42);
    i0.ɵɵtext(6, " Eliminar ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.salary().anulado ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
} }
function DetalleSueldo_Conditional_25_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵelement(1, "i", 40);
    i0.ɵɵtext(2, " Esta liquidaci\u00F3n se encuentra anulada. ");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_161_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
    i0.ɵɵtext(1, " Guardando... ");
} }
function DetalleSueldo_Conditional_25_Conditional_162_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Guardar cambios ");
} }
function DetalleSueldo_Conditional_25_Conditional_162_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Crear liquidaci\u00F3n ");
} }
function DetalleSueldo_Conditional_25_Conditional_162_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 32);
    i0.ɵɵconditionalCreate(1, DetalleSueldo_Conditional_25_Conditional_162_Conditional_1_Template, 1, 0)(2, DetalleSueldo_Conditional_25_Conditional_162_Conditional_2_Template, 1, 0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.salary() ? 1 : 2);
} }
function DetalleSueldo_Conditional_25_Conditional_180_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.transferReceipt().name);
} }
function DetalleSueldo_Conditional_25_Conditional_181_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1, "Seleccionar archivo");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_191_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.selectedFiles().length, " archivo(s) seleccionado(s)");
} }
function DetalleSueldo_Conditional_25_Conditional_192_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1, "Seleccionar archivos");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_206_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵelement(1, "i", 99);
    i0.ɵɵtext(2, " Primero cre\u00E1 la liquidaci\u00F3n para poder agregar descuentos. ");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_207_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 110);
    i0.ɵɵtext(2, "Descripci\u00F3n ");
    i0.ɵɵelement(3, "p-sort-icon", 111);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 112);
    i0.ɵɵtext(5, "Importe ");
    i0.ɵɵelement(6, "p-sort-icon", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "th");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_207_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 114);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "div", 115)(7, "button", 116);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_207_ng_template_3_Template_button_click_7_listener() { const discount_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openDiscountEdit(discount_r5)); });
    i0.ɵɵelement(8, "i", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 118);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_207_ng_template_3_Template_button_click_9_listener() { const discount_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.askDeleteDiscount(discount_r5)); });
    i0.ɵɵelement(10, "i", 42);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const discount_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", discount_r5.descripcion, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" - ", ctx_r0.formatCurrency(discount_r5.importe), " ");
} }
function DetalleSueldo_Conditional_25_Conditional_207_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 119)(2, "div", 120);
    i0.ɵɵelement(3, "i", 121);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, " No hay descuentos cargados. ");
    i0.ɵɵelementEnd()()()();
} }
function DetalleSueldo_Conditional_25_Conditional_207_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 122)(1, "td");
    i0.ɵɵtext(2, " Total descuentos ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" - ", ctx_r0.formatCurrency(ctx_r0.previewDiscounts()), " ");
} }
function DetalleSueldo_Conditional_25_Conditional_207_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 108)(1, "div", 123)(2, "div", 124);
    i0.ɵɵelement(3, "i", 125);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "Descuento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 126)(10, "span");
    i0.ɵɵtext(11, "Importe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong", 127);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 128)(15, "button", 129);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_207_For_11_Template_button_click_15_listener() { const discount_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openDiscountEdit(discount_r7)); });
    i0.ɵɵelement(16, "i", 117);
    i0.ɵɵtext(17, " Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 130);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_207_For_11_Template_button_click_18_listener() { const discount_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.askDeleteDiscount(discount_r7)); });
    i0.ɵɵelement(19, "i", 42);
    i0.ɵɵtext(20, " Eliminar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(discount_r7.descripcion);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("- ", ctx_r0.formatCurrency(discount_r7.importe));
} }
function DetalleSueldo_Conditional_25_Conditional_207_ForEmpty_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 109);
    i0.ɵɵelement(1, "i", 125);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay descuentos cargados");
    i0.ɵɵelementEnd()();
} }
function DetalleSueldo_Conditional_25_Conditional_207_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p-table", 106);
    i0.ɵɵtemplate(1, DetalleSueldo_Conditional_25_Conditional_207_ng_template_1_Template, 8, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, DetalleSueldo_Conditional_25_Conditional_207_ng_template_3_Template, 11, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, DetalleSueldo_Conditional_25_Conditional_207_ng_template_5_Template, 6, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, DetalleSueldo_Conditional_25_Conditional_207_ng_template_7_Template, 6, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 107);
    i0.ɵɵrepeaterCreate(10, DetalleSueldo_Conditional_25_Conditional_207_For_11_Template, 21, 2, "article", 108, _forTrack0, false, DetalleSueldo_Conditional_25_Conditional_207_ForEmpty_12_Template, 4, 0, "div", 109);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r0.discounts());
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r0.discounts());
} }
function DetalleSueldo_Conditional_25_Conditional_218_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵelement(1, "i", 99);
    i0.ɵɵtext(2, " Primero cre\u00E1 la liquidaci\u00F3n para poder agregar adicionales. ");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_219_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 110);
    i0.ɵɵtext(2, "Descripci\u00F3n ");
    i0.ɵɵelement(3, "p-sort-icon", 111);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 112);
    i0.ɵɵtext(5, "Importe ");
    i0.ɵɵelement(6, "p-sort-icon", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "th");
    i0.ɵɵelementEnd();
} }
function DetalleSueldo_Conditional_25_Conditional_219_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 131);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "div", 115)(7, "button", 116);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_219_ng_template_3_Template_button_click_7_listener() { const additional_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openAdditionalEdit(additional_r9)); });
    i0.ɵɵelement(8, "i", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 118);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_219_ng_template_3_Template_button_click_9_listener() { const additional_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.askDeleteAdditional(additional_r9)); });
    i0.ɵɵelement(10, "i", 42);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const additional_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(additional_r9.descripcion);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+ ", ctx_r0.formatCurrency(additional_r9.importe));
} }
function DetalleSueldo_Conditional_25_Conditional_219_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 119)(2, "div", 120);
    i0.ɵɵelement(3, "i", 132);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "No hay adicionales cargados.");
    i0.ɵɵelementEnd()()()();
} }
function DetalleSueldo_Conditional_25_Conditional_219_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 133)(1, "td");
    i0.ɵɵtext(2, "Total adicionales");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "td");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("+ ", ctx_r0.formatCurrency(ctx_r0.previewAdditionals()));
} }
function DetalleSueldo_Conditional_25_Conditional_219_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 108)(1, "div", 123)(2, "div", 124);
    i0.ɵɵelement(3, "i", 132);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "Adicional");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 126)(10, "span");
    i0.ɵɵtext(11, "Importe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong", 134);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 128)(15, "button", 129);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_219_For_11_Template_button_click_15_listener() { const additional_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openAdditionalEdit(additional_r11)); });
    i0.ɵɵelement(16, "i", 117);
    i0.ɵɵtext(17, " Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 130);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Conditional_219_For_11_Template_button_click_18_listener() { const additional_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.askDeleteAdditional(additional_r11)); });
    i0.ɵɵelement(19, "i", 42);
    i0.ɵɵtext(20, " Eliminar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const additional_r11 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(additional_r11.descripcion);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("+ ", ctx_r0.formatCurrency(additional_r11.importe));
} }
function DetalleSueldo_Conditional_25_Conditional_219_ForEmpty_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 109);
    i0.ɵɵelement(1, "i", 132);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay adicionales cargados");
    i0.ɵɵelementEnd()();
} }
function DetalleSueldo_Conditional_25_Conditional_219_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p-table", 106);
    i0.ɵɵtemplate(1, DetalleSueldo_Conditional_25_Conditional_219_ng_template_1_Template, 8, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, DetalleSueldo_Conditional_25_Conditional_219_ng_template_3_Template, 11, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, DetalleSueldo_Conditional_25_Conditional_219_ng_template_5_Template, 6, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, DetalleSueldo_Conditional_25_Conditional_219_ng_template_7_Template, 6, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 107);
    i0.ɵɵrepeaterCreate(10, DetalleSueldo_Conditional_25_Conditional_219_For_11_Template, 21, 2, "article", 108, _forTrack0, false, DetalleSueldo_Conditional_25_Conditional_219_ForEmpty_12_Template, 4, 0, "div", 109);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r0.additionals());
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r0.additionals());
} }
function DetalleSueldo_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 45)(1, "article", 46)(2, "span");
    i0.ɵɵtext(3, "Recibo de sueldo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "article", 47)(7, "span");
    i0.ɵɵtext(8, "Descuentos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "article", 48)(12, "span");
    i0.ɵɵtext(13, "Transferencia real");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, " Recibo menos descuentos ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "article", 49)(19, "span");
    i0.ɵɵtext(20, "Efectivo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small");
    i0.ɵɵtext(24, " Ajuste en efectivo ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "article", 49)(26, "span");
    i0.ɵɵtext(27, "Adicionales");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "small");
    i0.ɵɵtext(31, " Bonos y otros conceptos ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "article", 50)(33, "span");
    i0.ɵɵtext(34, "Sueldo total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "small");
    i0.ɵɵtext(38, " Transferencia + efectivo + adicionales ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "section", 51)(40, "div", 52)(41, "div")(42, "h2");
    i0.ɵɵtext(43, " Liquidaci\u00F3n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45, " Carg\u00E1 el recibo y el ajuste correspondiente al per\u00EDodo. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(46, DetalleSueldo_Conditional_25_Conditional_46_Template, 7, 3, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(47, DetalleSueldo_Conditional_25_Conditional_47_Template, 3, 0, "div", 54);
    i0.ɵɵelementStart(48, "form", 55);
    i0.ɵɵlistener("ngSubmit", function DetalleSueldo_Conditional_25_Template_form_ngSubmit_48_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.saveSalary()); });
    i0.ɵɵelementStart(49, "div", 56)(50, "div", 22)(51, "label", 57);
    i0.ɵɵtext(52, " Recibo de sueldo ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "div", 26)(54, "span");
    i0.ɵɵtext(55, "$");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "input", 58);
    i0.ɵɵlistener("ngModelChange", function DetalleSueldo_Conditional_25_Template_input_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateMoneyField("importe_recibo", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "small");
    i0.ɵɵtext(58, " Neto oficial que figura en el recibo. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div", 22)(60, "label", 59);
    i0.ɵɵtext(61, " Ajuste en efectivo ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 26)(63, "span");
    i0.ɵɵtext(64, "$");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "input", 60);
    i0.ɵɵlistener("ngModelChange", function DetalleSueldo_Conditional_25_Template_input_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateMoneyField("ajuste_efectivo", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "small");
    i0.ɵɵtext(67, " Importe adicional entregado en efectivo. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "div", 22)(69, "label", 61);
    i0.ɵɵtext(70, " Fecha prevista de pago ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "p-datepicker", 62);
    i0.ɵɵlistener("ngModelChange", function DetalleSueldo_Conditional_25_Template_p_datepicker_ngModelChange_71_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.salaryForm.fecha_pago_prevista = $event || ""); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "div", 22)(73, "label", 63);
    i0.ɵɵtext(74, " Moneda ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "p-select", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Conditional_25_Template_p_select_ngModelChange_75_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.salaryForm.moneda, $event) || (ctx_r0.salaryForm.moneda = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(76, "div", 65)(77, "div", 66)(78, "span");
    i0.ɵɵtext(79, " Recibo ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "strong");
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(82, "div", 67)(83, "span");
    i0.ɵɵtext(84, " Descuentos ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "strong");
    i0.ɵɵtext(86);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(87, "div", 68)(88, "span");
    i0.ɵɵtext(89, " Transferencia real ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "strong");
    i0.ɵɵtext(91);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(92, "div", 69);
    i0.ɵɵelementStart(93, "div", 66)(94, "span");
    i0.ɵɵtext(95, " Transferencia ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "strong");
    i0.ɵɵtext(97);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(98, "div", 66)(99, "span");
    i0.ɵɵtext(100, " Ajuste en efectivo ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "strong");
    i0.ɵɵtext(102);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(103, "div", 66)(104, "span");
    i0.ɵɵtext(105, " Adicionales ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "strong");
    i0.ɵɵtext(107);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(108, "div", 70)(109, "span");
    i0.ɵɵtext(110, " Sueldo total ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(111, "strong");
    i0.ɵɵtext(112);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(113, "div", 71)(114, "h3");
    i0.ɵɵtext(115, "Estado del pago");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(116, "div", 72)(117, "label", 73)(118, "input", 74);
    i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Conditional_25_Template_input_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.salaryForm.transferencia_realizada, $event) || (ctx_r0.salaryForm.transferencia_realizada = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(119, "span", 75);
    i0.ɵɵelement(120, "i", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(121, "span", 77)(122, "strong");
    i0.ɵɵtext(123, "Transferencia realizada");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(124, "small");
    i0.ɵɵtext(125, "Importe esperado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(126, "b");
    i0.ɵɵtext(127);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(128, "label", 73)(129, "input", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Conditional_25_Template_input_ngModelChange_129_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.salaryForm.efectivo_entregado, $event) || (ctx_r0.salaryForm.efectivo_entregado = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(130, "span", 79);
    i0.ɵɵelement(131, "i", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(132, "span", 77)(133, "strong");
    i0.ɵɵtext(134, "Efectivo entregado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(135, "small");
    i0.ɵɵtext(136, "Importe esperado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(137, "b");
    i0.ɵɵtext(138);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(139, "div", 81)(140, "h3");
    i0.ɵɵtext(141, " Recibo ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(142, "div", 82)(143, "label", 83)(144, "input", 84);
    i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Conditional_25_Template_input_ngModelChange_144_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.salaryForm.recibo_entregado, $event) || (ctx_r0.salaryForm.recibo_entregado = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(145, "span");
    i0.ɵɵtext(146, " Recibo entregado ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(147, "label", 83)(148, "input", 85);
    i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Conditional_25_Template_input_ngModelChange_148_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.salaryForm.recibo_firmado, $event) || (ctx_r0.salaryForm.recibo_firmado = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(149, "span");
    i0.ɵɵtext(150, " Recibo firmado ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(151, "div", 22)(152, "label", 86);
    i0.ɵɵtext(153, " Fecha de entrega ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(154, "p-datepicker", 87);
    i0.ɵɵlistener("ngModelChange", function DetalleSueldo_Conditional_25_Template_p_datepicker_ngModelChange_154_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.salaryForm.fecha_entrega_recibo = $event || ""); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(155, "div", 22)(156, "label", 88);
    i0.ɵɵtext(157, " Observaciones ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(158, "textarea", 89);
    i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Conditional_25_Template_textarea_ngModelChange_158_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.salaryForm.observaciones, $event) || (ctx_r0.salaryForm.observaciones = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(159, "div", 90)(160, "button", 30);
    i0.ɵɵconditionalCreate(161, DetalleSueldo_Conditional_25_Conditional_161_Template, 2, 0)(162, DetalleSueldo_Conditional_25_Conditional_162_Template, 3, 1);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(163, "section", 51)(164, "div", 52)(165, "div")(166, "h2");
    i0.ɵɵtext(167, "Archivos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(168, "p");
    i0.ɵɵtext(169, "Adjunt\u00E1 comprobantes y documentaci\u00F3n relacionada con la liquidaci\u00F3n.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(170, "div", 91)(171, "label", 92)(172, "input", 93);
    i0.ɵɵlistener("change", function DetalleSueldo_Conditional_25_Template_input_change_172_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectTransferReceipt($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(173, "span", 94);
    i0.ɵɵelement(174, "i", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(175, "span")(176, "strong");
    i0.ɵɵtext(177, "Comprobante de transferencia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(178, "small");
    i0.ɵɵtext(179, "Archivo PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(180, DetalleSueldo_Conditional_25_Conditional_180_Template, 2, 1, "b")(181, DetalleSueldo_Conditional_25_Conditional_181_Template, 2, 0, "b");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(182, "label", 92)(183, "input", 96);
    i0.ɵɵlistener("change", function DetalleSueldo_Conditional_25_Template_input_change_183_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectFiles($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(184, "span", 94);
    i0.ɵɵelement(185, "i", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(186, "span")(187, "strong");
    i0.ɵɵtext(188, "Otros archivos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(189, "small");
    i0.ɵɵtext(190, "Recibos y documentaci\u00F3n adicional");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(191, DetalleSueldo_Conditional_25_Conditional_191_Template, 2, 1, "b")(192, DetalleSueldo_Conditional_25_Conditional_192_Template, 2, 0, "b");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(193, "div", 98);
    i0.ɵɵelement(194, "i", 99);
    i0.ɵɵtext(195, " Los archivos seleccionados todav\u00EDa no se guardan en el servidor. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(196, "section", 51)(197, "div", 52)(198, "div")(199, "h2");
    i0.ɵɵtext(200, " Descuentos ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(201, "p");
    i0.ɵɵtext(202, " Los descuentos se restan del recibo para obtener la transferencia real. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(203, "button", 100);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Template_button_click_203_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openDiscountCreate()); });
    i0.ɵɵelement(204, "i", 101);
    i0.ɵɵtext(205, " Agregar descuento ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(206, DetalleSueldo_Conditional_25_Conditional_206_Template, 3, 0, "div", 102)(207, DetalleSueldo_Conditional_25_Conditional_207_Template, 13, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(208, "section", 51)(209, "div", 52)(210, "div")(211, "h2");
    i0.ɵɵtext(212, "Adicionales");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(213, "p");
    i0.ɵɵtext(214, "Los bonos y otros adicionales se suman al sueldo total.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(215, "button", 100);
    i0.ɵɵlistener("click", function DetalleSueldo_Conditional_25_Template_button_click_215_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openAdditionalCreate()); });
    i0.ɵɵelement(216, "i", 101);
    i0.ɵɵtext(217, " Agregar adicional ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(218, DetalleSueldo_Conditional_25_Conditional_218_Template, 3, 0, "div", 102)(219, DetalleSueldo_Conditional_25_Conditional_219_Template, 13, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewReceipt()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" - ", ctx_r0.formatCurrency(ctx_r0.previewDiscounts()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewTransfer()), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewCash()), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" + ", ctx_r0.formatCurrency(ctx_r0.previewAdditionals()), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewTotal()), " ");
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(ctx_r0.salary() ? 46 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.salary()?.anulado ? 47 : -1);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r0.formatMoneyInput(ctx_r0.salaryForm.importe_recibo));
    i0.ɵɵcontrol();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r0.formatMoneyInput(ctx_r0.salaryForm.ajuste_efectivo));
    i0.ɵɵcontrol();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("showIcon", true)("showClear", true)("ngModel", ctx_r0.salaryForm.fecha_pago_prevista)("appendTo", "body");
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.currencyOptions);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.salaryForm.moneda);
    i0.ɵɵproperty("appendTo", "body");
    i0.ɵɵcontrol();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewReceipt()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" - ", ctx_r0.formatCurrency(ctx_r0.previewDiscounts()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewTransfer()), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewTransfer()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewCash()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" + ", ctx_r0.formatCurrency(ctx_r0.previewAdditionals()), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.previewTotal()), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.salaryForm.transferencia_realizada);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.formatCurrency(ctx_r0.previewTransfer()));
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.salaryForm.efectivo_entregado);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.formatCurrency(ctx_r0.previewCash()));
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.salaryForm.recibo_entregado);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.salaryForm.recibo_firmado);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("showIcon", true)("showClear", true)("ngModel", ctx_r0.salaryForm.fecha_entrega_recibo)("appendTo", "body");
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.salaryForm.observaciones);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving() || !ctx_r0.hasUnsavedChanges());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.saving() ? 161 : 162);
    i0.ɵɵadvance(19);
    i0.ɵɵconditional(ctx_r0.transferReceipt() ? 180 : 181);
    i0.ɵɵadvance(11);
    i0.ɵɵconditional(ctx_r0.selectedFiles().length ? 191 : 192);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("disabled", !ctx_r0.salary());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r0.salary() ? 206 : 207);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("disabled", !ctx_r0.salary());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r0.salary() ? 218 : 219);
} }
function DetalleSueldo_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function DetalleSueldo_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 32);
} }
function DetalleSueldo_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function DetalleSueldo_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 32);
} }
function DetalleSueldo_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function DetalleSueldo_Conditional_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function DetalleSueldo_Conditional_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function DetalleSueldo_Conditional_98_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function DetalleSueldo_Conditional_115_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function DetalleSueldo_Conditional_116_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
export class DetalleSueldo {
    api = inject(Api);
    route = inject(ActivatedRoute);
    router = inject(Router);
    messageService = inject(MessageService);
    confirmationService = inject(ConfirmationService);
    employee = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "employee" }] : /* istanbul ignore next */ []));
    salary = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "salary" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    periodo = signal(this.route.snapshot.queryParamMap.get('periodo')
        ?? this.getCurrentPeriod(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodo" }] : /* istanbul ignore next */ []));
    periodDate = computed(() => {
        const [year, month] = this.periodo().split('-').map(Number);
        return new Date(year, month - 1, 1);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "periodDate" }] : /* istanbul ignore next */ []));
    discountDialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "discountDialogVisible" }] : /* istanbul ignore next */ []));
    deleteDialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "deleteDialogVisible" }] : /* istanbul ignore next */ []));
    deleteSalaryDialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "deleteSalaryDialogVisible" }] : /* istanbul ignore next */ []));
    additionalDialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "additionalDialogVisible" }] : /* istanbul ignore next */ []));
    deleteAdditionalDialogVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "deleteAdditionalDialogVisible" }] : /* istanbul ignore next */ []));
    editingDiscountId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editingDiscountId" }] : /* istanbul ignore next */ []));
    discountToDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "discountToDelete" }] : /* istanbul ignore next */ []));
    editingAdditionalId = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "editingAdditionalId" }] : /* istanbul ignore next */ []));
    additionalToDelete = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "additionalToDelete" }] : /* istanbul ignore next */ []));
    formRevision = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "formRevision" }] : /* istanbul ignore next */ []));
    selectedFiles = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedFiles" }] : /* istanbul ignore next */ []));
    transferReceipt = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "transferReceipt" }] : /* istanbul ignore next */ []));
    employeeId = this.getEmployeeId();
    currencyOptions = [
        { label: 'ARS', value: 'ARS' },
        { label: 'USD', value: 'USD' }
    ];
    salaryForm = this.createSalaryForm();
    discountForm = this.createDiscountForm();
    additionalForm = this.createDiscountForm();
    savedFormSnapshot = JSON.stringify(this.salaryForm);
    skipNextGuard = false;
    discounts = computed(() => {
        return this.salary()?.discounts ?? [];
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "discounts" }] : /* istanbul ignore next */ []));
    additionals = computed(() => {
        return this.salary()?.additionals ?? [];
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "additionals" }] : /* istanbul ignore next */ []));
    previewReceipt = computed(() => {
        this.formRevision();
        return Number(this.salaryForm.importe_recibo || 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "previewReceipt" }] : /* istanbul ignore next */ []));
    previewDiscounts = computed(() => {
        return Number(this.salary()?.descuentos_total ?? 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "previewDiscounts" }] : /* istanbul ignore next */ []));
    previewTransfer = computed(() => {
        return Math.max(this.previewReceipt() - this.previewDiscounts(), 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "previewTransfer" }] : /* istanbul ignore next */ []));
    previewCash = computed(() => {
        this.formRevision();
        return Number(this.salaryForm.ajuste_efectivo || 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "previewCash" }] : /* istanbul ignore next */ []));
    previewAdditionals = computed(() => {
        return Number(this.salary()?.adicionales_total ?? 0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "previewAdditionals" }] : /* istanbul ignore next */ []));
    previewTotal = computed(() => {
        return (this.previewTransfer()
            + this.previewCash()
            + this.previewAdditionals());
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "previewTotal" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        void this.loadDetail();
    }
    async loadDetail() {
        this.loading.set(true);
        try {
            const response = await firstValueFrom(this.api.getEmployeeSalary(this.employeeId, this.periodo()));
            if (response.salary) {
                this.salaryForm = {
                    importe_recibo: response.salary.importe_recibo,
                    ajuste_efectivo: response.salary.ajuste_efectivo,
                    fecha_pago_prevista: response.salary.fecha_pago_prevista ?? '',
                    moneda: response.salary.moneda,
                    recibo_entregado: response.salary.recibo_entregado,
                    fecha_entrega_recibo: response.salary.fecha_entrega_recibo ?? '',
                    recibo_firmado: response.salary.recibo_firmado,
                    transferencia_realizada: response.salary.transferencia_realizada,
                    efectivo_entregado: response.salary.efectivo_entregado,
                    observaciones: response.salary.observaciones
                };
            }
            else {
                this.salaryForm = this.createSalaryForm();
            }
            this.employee.set(response.employee);
            this.salary.set(response.salary);
            this.selectedFiles.set([]);
            this.transferReceipt.set(null);
            this.formRevision.update(value => value + 1);
            this.savedFormSnapshot = JSON.stringify(this.salaryForm);
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.loading.set(false);
        }
    }
    updateMoneyField(field, displayValue) {
        const normalized = displayValue.replace(/,/g, '');
        if (!/^\d*(?:\.\d{0,2})?$/.test(normalized)) {
            return;
        }
        this.salaryForm[field] = normalized;
        this.formRevision.update(value => value + 1);
    }
    formatMoneyInput(value) {
        if (!value) {
            return '';
        }
        const [integerPart, decimalPart] = value.split('.');
        const grouped = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return decimalPart === undefined
            ? grouped
            : `${grouped}.${decimalPart}`;
    }
    async changePeriod(periodo) {
        if (!periodo) {
            return;
        }
        if (this.hasUnsavedChanges()) {
            const confirmed = await this.confirmDiscardChanges('¿Querés descartar los cambios y cambiar de período?');
            if (!confirmed) {
                return;
            }
            this.skipNextGuard = true;
        }
        this.periodo.set(periodo);
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { periodo },
            replaceUrl: true
        });
        void this.loadDetail();
    }
    changePeriodDate(value) {
        if (!value) {
            return;
        }
        void this.changePeriod(`${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`);
    }
    movePeriod(offset) {
        const date = this.periodDate();
        const target = new Date(date.getFullYear(), date.getMonth() + offset, 1);
        this.changePeriodDate(target);
    }
    back() {
        void this.router.navigate(['/sueldos'], {
            queryParams: {
                periodo: this.periodo()
            }
        });
    }
    hasUnsavedChanges() {
        return JSON.stringify(this.salaryForm) !== this.savedFormSnapshot;
    }
    canDeactivate() {
        if (this.skipNextGuard) {
            this.skipNextGuard = false;
            return true;
        }
        if (!this.hasUnsavedChanges()) {
            return true;
        }
        return this.confirmDiscardChanges('¿Confirmás que querés salir y descartar los cambios sin guardar?');
    }
    confirmDiscardChanges(message) {
        return new Promise(resolve => {
            this.confirmationService.confirm({
                header: 'Cambios sin guardar',
                message,
                icon: 'pi pi-exclamation-triangle',
                acceptLabel: 'Descartar cambios',
                rejectLabel: 'Continuar editando',
                acceptButtonProps: { severity: 'danger' },
                rejectButtonProps: { severity: 'secondary', outlined: true },
                accept: () => resolve(true),
                reject: () => resolve(false)
            });
        });
    }
    warnBeforeUnload(event) {
        if (!this.hasUnsavedChanges()) {
            return;
        }
        event.preventDefault();
        event.returnValue = '';
    }
    async saveSalary() {
        const importeRecibo = Number(this.salaryForm.importe_recibo || 0);
        const ajusteEfectivo = Number(this.salaryForm.ajuste_efectivo || 0);
        if (importeRecibo < 0) {
            this.showError('El importe del recibo no puede ser negativo.');
            return;
        }
        if (ajusteEfectivo < 0) {
            this.showError('El ajuste en efectivo no puede ser negativo.');
            return;
        }
        if (this.previewDiscounts() > importeRecibo) {
            this.showError('El recibo no puede ser menor al total de descuentos.');
            return;
        }
        this.saving.set(true);
        try {
            const current = this.salary();
            if (!current) {
                await firstValueFrom(this.api.createSalary({
                    employee_id: this.employeeId,
                    periodo: this.periodo(),
                    importe_recibo: this.salaryForm.importe_recibo || '0',
                    ajuste_efectivo: this.salaryForm.ajuste_efectivo || '0',
                    fecha_pago_prevista: this.salaryForm.fecha_pago_prevista || null,
                    moneda: this.salaryForm.moneda,
                    recibo_entregado: this.salaryForm.recibo_entregado,
                    fecha_entrega_recibo: this.salaryForm.fecha_entrega_recibo || null,
                    recibo_firmado: this.salaryForm.recibo_firmado,
                    transferencia_realizada: this.salaryForm.transferencia_realizada,
                    efectivo_entregado: this.salaryForm.efectivo_entregado,
                    observaciones: this.salaryForm.observaciones.trim()
                }));
                this.showSuccess('Liquidación creada correctamente.');
            }
            else {
                await firstValueFrom(this.api.updateSalary(current.id, {
                    importe_recibo: this.salaryForm.importe_recibo || '0',
                    ajuste_efectivo: this.salaryForm.ajuste_efectivo || '0',
                    fecha_pago_prevista: this.salaryForm.fecha_pago_prevista || null,
                    moneda: this.salaryForm.moneda,
                    recibo_entregado: this.salaryForm.recibo_entregado,
                    fecha_entrega_recibo: this.salaryForm.fecha_entrega_recibo || null,
                    recibo_firmado: this.salaryForm.recibo_firmado,
                    transferencia_realizada: this.salaryForm.transferencia_realizada,
                    efectivo_entregado: this.salaryForm.efectivo_entregado,
                    observaciones: this.salaryForm.observaciones.trim()
                }));
                this.showSuccess('Liquidación actualizada correctamente.');
            }
            await this.loadDetail();
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    async toggleCancelled() {
        const salary = this.salary();
        if (!salary) {
            return;
        }
        this.saving.set(true);
        try {
            if (salary.anulado) {
                await firstValueFrom(this.api.updateSalary(salary.id, { anulado: false }));
                this.showSuccess('Liquidación reactivada correctamente.');
            }
            else {
                await firstValueFrom(this.api.updateSalary(salary.id, { anulado: true }));
                this.showSuccess('Liquidación anulada correctamente.');
            }
            await this.loadDetail();
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    async deleteSalary() {
        const salary = this.salary();
        if (!salary) {
            return;
        }
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteSalary(salary.id));
            this.deleteSalaryDialogVisible.set(false);
            this.salaryForm = this.createSalaryForm();
            this.salary.set(null);
            this.formRevision.update(value => value + 1);
            this.savedFormSnapshot = JSON.stringify(this.salaryForm);
            this.showSuccess('Liquidación eliminada correctamente.');
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    // *====================== DISCOUNTS ======================*
    openDiscountCreate() {
        if (!this.salary()) {
            this.showError('Primero tenés que crear la liquidación.');
            return;
        }
        this.editingDiscountId.set(null);
        this.discountForm = this.createDiscountForm();
        this.discountDialogVisible.set(true);
    }
    openDiscountEdit(discount) {
        this.editingDiscountId.set(discount.id);
        this.discountForm = {
            descripcion: discount.descripcion,
            importe: discount.importe
        };
        this.discountDialogVisible.set(true);
    }
    updateDiscountAmount(displayValue) {
        const normalized = displayValue.replace(/,/g, '');
        if (/^\d*(?:\.\d{0,2})?$/.test(normalized)) {
            this.discountForm.importe = normalized;
        }
    }
    async saveDiscount() {
        const salary = this.salary();
        if (!salary) {
            return;
        }
        const descripcion = this.discountForm.descripcion.trim();
        if (!descripcion) {
            this.showError('La descripción es obligatoria.');
            return;
        }
        if (Number(this.discountForm.importe) <= 0) {
            this.showError('El importe debe ser mayor a cero.');
            return;
        }
        this.saving.set(true);
        try {
            const data = {
                descripcion,
                importe: this.discountForm.importe
            };
            const discountId = this.editingDiscountId();
            if (discountId === null) {
                await firstValueFrom(this.api.createSalaryDiscount(salary.id, data));
                this.showSuccess('Descuento agregado correctamente.');
            }
            else {
                await firstValueFrom(this.api.updateSalaryDiscount(salary.id, discountId, data));
                this.showSuccess('Descuento actualizado correctamente.');
            }
            this.discountDialogVisible.set(false);
            await this.loadDetail();
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    askDeleteDiscount(discount) {
        this.discountToDelete.set(discount);
        this.deleteDialogVisible.set(true);
    }
    async deleteDiscount() {
        const salary = this.salary();
        const discount = this.discountToDelete();
        if (!salary || !discount) {
            return;
        }
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteSalaryDiscount(salary.id, discount.id));
            this.deleteDialogVisible.set(false);
            this.discountToDelete.set(null);
            await this.loadDetail();
            this.showSuccess('Descuento eliminado correctamente.');
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    // *====================== ADDITIONALS ======================*
    openAdditionalCreate() {
        if (!this.salary()) {
            this.showError('Primero tenés que crear la liquidación.');
            return;
        }
        this.editingAdditionalId.set(null);
        this.additionalForm = this.createDiscountForm();
        this.additionalDialogVisible.set(true);
    }
    openAdditionalEdit(additional) {
        this.editingAdditionalId.set(additional.id);
        this.additionalForm = {
            descripcion: additional.descripcion,
            importe: additional.importe
        };
        this.additionalDialogVisible.set(true);
    }
    updateAdditionalAmount(displayValue) {
        const normalized = displayValue.replace(/,/g, '');
        if (/^\d*(?:\.\d{0,2})?$/.test(normalized)) {
            this.additionalForm.importe = normalized;
        }
    }
    async saveAdditional() {
        const salary = this.salary();
        const additionalId = this.editingAdditionalId();
        const descripcion = this.additionalForm.descripcion.trim();
        const importe = Number(this.additionalForm.importe);
        if (!salary || !descripcion || importe <= 0) {
            this.showError('Ingresá una descripción y un importe mayor a cero.');
            return;
        }
        this.saving.set(true);
        try {
            const data = {
                descripcion,
                importe: this.additionalForm.importe
            };
            if (additionalId === null) {
                await firstValueFrom(this.api.createSalaryAdditional(salary.id, data));
                this.showSuccess('Adicional agregado correctamente.');
            }
            else {
                await firstValueFrom(this.api.updateSalaryAdditional(salary.id, additionalId, data));
                this.showSuccess('Adicional actualizado correctamente.');
            }
            this.additionalDialogVisible.set(false);
            await this.loadDetail();
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    askDeleteAdditional(additional) {
        this.additionalToDelete.set(additional);
        this.deleteAdditionalDialogVisible.set(true);
    }
    async deleteAdditional() {
        const salary = this.salary();
        const additional = this.additionalToDelete();
        if (!salary || !additional) {
            return;
        }
        this.saving.set(true);
        try {
            await firstValueFrom(this.api.deleteSalaryAdditional(salary.id, additional.id));
            this.deleteAdditionalDialogVisible.set(false);
            this.additionalToDelete.set(null);
            await this.loadDetail();
            this.showSuccess('Adicional eliminado correctamente.');
        }
        catch (error) {
            this.showError(this.getApiError(error));
        }
        finally {
            this.saving.set(false);
        }
    }
    formatCurrency(value) {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            maximumFractionDigits: 2
        }).format(Number(value ?? 0));
    }
    formatDate(value) {
        if (!value) {
            return '-';
        }
        const [year, month, day] = value.split('-');
        return `${day}/${month}/${year}`;
    }
    selectFiles(event) {
        const input = event.target;
        this.selectedFiles.set(Array.from(input.files ?? []));
    }
    selectTransferReceipt(event) {
        const input = event.target;
        this.transferReceipt.set(input.files?.[0] ?? null);
    }
    getEmployeeId() {
        const value = this.route.snapshot.paramMap.get('employeeId');
        if (!value) {
            throw new Error('No se encontró employeeId en la ruta.');
        }
        const employeeId = Number(value);
        if (!Number.isInteger(employeeId) || employeeId <= 0) {
            throw new Error('El employeeId de la ruta es inválido.');
        }
        return employeeId;
    }
    createSalaryForm() {
        return {
            importe_recibo: '',
            ajuste_efectivo: '',
            fecha_pago_prevista: '',
            moneda: 'ARS',
            recibo_entregado: false,
            fecha_entrega_recibo: '',
            recibo_firmado: false,
            transferencia_realizada: false,
            efectivo_entregado: false,
            observaciones: ''
        };
    }
    createDiscountForm() {
        return {
            descripcion: '',
            importe: ''
        };
    }
    getCurrentPeriod() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
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
    getApiError(error) {
        if (error instanceof HttpErrorResponse && error.error?.detail) {
            return error.error.detail;
        }
        return 'Ocurrió un error inesperado.';
    }
    static ɵfac = function DetalleSueldo_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DetalleSueldo)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetalleSueldo, selectors: [["app-detalle-sueldo"]], hostBindings: function DetalleSueldo_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("beforeunload", function DetalleSueldo_beforeunload_HostBindingHandler($event) { return ctx.warnBeforeUnload($event); }, i0.ɵɵresolveWindow);
        } }, features: [i0.ɵɵProvidersFeature([MessageService, ConfirmationService])], decls: 118, vars: 67, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], ["position", "bottom-right", 3, "life"], [1, "salary-detail-page"], [1, "detail-header"], [1, "header-left"], ["type", "button", 1, "back-button", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "page-eyebrow"], [1, "period-selector"], ["for", "periodo"], [1, "period-navigation"], ["type", "button", "aria-label", "Mes anterior", 3, "click"], [1, "pi", "pi-chevron-left"], ["inputId", "periodo", "view", "month", "dateFormat", "mm/yy", 3, "ngModelChange", "showIcon", "readonlyInput", "ngModel"], ["type", "button", "aria-label", "Mes siguiente", 3, "click"], [1, "pi", "pi-chevron-right"], [1, "loading-card"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [1, "dialog-form", 3, "ngSubmit"], [1, "field"], ["for", "discount_description"], ["pInputText", "", "id", "discount_description", "name", "discount_description", "placeholder", "Ej: Adelanto, pr\u00E9stamo, herramientas...", 3, "ngModelChange", "ngModel"], ["for", "discount_amount"], [1, "money-input"], ["pInputText", "", "id", "discount_amount", "name", "discount_amount", "type", "text", "inputmode", "decimal", 3, "ngModelChange", "ngModel"], [1, "dialog-actions"], ["type", "button", 1, "secondary-button", 3, "click", "disabled"], ["pButton", "", "type", "submit", 1, "primary-button", 3, "disabled"], [1, "pi", "pi-spinner", "pi-spin"], [1, "pi", "pi-check"], ["for", "additional_description"], ["pInputText", "", "id", "additional_description", "name", "additional_description", "placeholder", "Ej: Bono por productividad...", 3, "ngModelChange", "ngModel"], ["for", "additional_amount"], ["pInputText", "", "id", "additional_amount", "name", "additional_amount", "type", "text", "inputmode", "decimal", 3, "ngModelChange", "ngModel"], ["header", "Eliminar adicional", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "delete-confirm"], [1, "delete-icon"], [1, "pi", "pi-exclamation-triangle"], ["type", "button", 1, "danger-button", 3, "click", "disabled"], [1, "pi", "pi-trash"], ["header", "Eliminar liquidaci\u00F3n", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], ["header", "Eliminar descuento", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "summary-grid"], [1, "summary-card", "receipt"], [1, "summary-card", "discount"], [1, "summary-card", "transfer"], [1, "summary-card", "cash"], [1, "summary-card", "total"], [1, "detail-card"], [1, "section-header"], [1, "salary-actions"], [1, "cancelled-alert"], [1, "salary-form", 3, "ngSubmit"], [1, "form-grid"], ["for", "importe_recibo"], ["pInputText", "", "id", "importe_recibo", "name", "importe_recibo", "type", "text", "inputmode", "decimal", 3, "ngModelChange", "ngModel"], ["for", "ajuste_efectivo"], ["pInputText", "", "id", "ajuste_efectivo", "name", "ajuste_efectivo", "type", "text", "inputmode", "decimal", 3, "ngModelChange", "ngModel"], ["for", "fecha_pago_prevista"], ["inputId", "fecha_pago_prevista", "name", "fecha_pago_prevista", "dataType", "string", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "showIcon", "showClear", "ngModel", "appendTo"], ["for", "moneda"], ["inputId", "moneda", "name", "moneda", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel", "appendTo"], [1, "calculation"], [1, "calculation-row"], [1, "calculation-row", "negative"], [1, "calculation-row", "result"], [1, "calculation-divider"], [1, "calculation-row", "grand-total"], [1, "payment-status-section"], [1, "payment-status-grid"], [1, "payment-status-card"], ["type", "checkbox", "name", "transferencia_realizada", 3, "ngModelChange", "ngModel"], [1, "status-icon", "transfer"], [1, "pi", "pi-building-columns"], [1, "status-copy"], ["type", "checkbox", "name", "efectivo_entregado", 3, "ngModelChange", "ngModel"], [1, "status-icon", "cash"], [1, "pi", "pi-money-bill"], [1, "receipt-section"], [1, "receipt-options"], [1, "checkbox-option"], ["type", "checkbox", "name", "recibo_entregado", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "recibo_firmado", 3, "ngModelChange", "ngModel"], ["for", "fecha_entrega_recibo"], ["inputId", "fecha_entrega_recibo", "name", "fecha_entrega_recibo", "dataType", "string", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "showIcon", "showClear", "ngModel", "appendTo"], ["for", "observaciones"], ["id", "observaciones", "name", "observaciones", "rows", "4", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "files-grid"], [1, "upload-card"], ["type", "file", "accept", "application/pdf", 3, "change"], [1, "upload-icon"], [1, "pi", "pi-receipt"], ["type", "file", "multiple", "", 3, "change"], [1, "pi", "pi-paperclip"], [1, "files-notice"], [1, "pi", "pi-info-circle"], ["pButton", "", "type", "button", 1, "primary-button", 3, "click", "disabled"], [1, "pi", "pi-plus"], [1, "discount-disabled"], ["type", "button", 1, "cancel-button", 3, "click", "disabled"], [1, "pi", "pi-refresh"], [1, "pi", "pi-ban"], ["styleClass", "discount-table concept-table", 1, "desktop-data-table", 3, "value"], [1, "mobile-record-list"], ["tabindex", "0", 1, "mobile-record-card"], [1, "mobile-record-empty"], ["pSortableColumn", "descripcion"], ["field", "descripcion"], ["pSortableColumn", "importe"], ["field", "importe"], [1, "discount-amount"], [1, "row-actions"], ["type", "button", "title", "Editar", 3, "click"], [1, "pi", "pi-pencil"], ["type", "button", "title", "Eliminar", 1, "danger", 3, "click"], ["colspan", "3"], [1, "table-empty"], [1, "pi", "pi-percentage"], [1, "discount-footer"], [1, "mobile-record-header"], [1, "mobile-record-avatar"], [1, "pi", "pi-minus-circle"], [1, "mobile-record-total"], [1, "mobile-record-negative"], [1, "mobile-record-actions"], ["type", "button", 3, "click"], ["type", "button", 1, "danger", 3, "click"], [1, "cash-value"], [1, "pi", "pi-plus-circle"], [1, "discount-footer", "additional-footer"], [1, "mobile-record-positive"]], template: function DetalleSueldo_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "p-toast", 4)(1, "p-confirmdialog");
            i0.ɵɵelementStart(2, "section", 5)(3, "header", 6)(4, "div", 7)(5, "button", 8);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_5_listener() { return ctx.back(); });
            i0.ɵɵelement(6, "i", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div")(8, "span", 10);
            i0.ɵɵtext(9, " Sueldo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "h1");
            i0.ɵɵconditionalCreate(11, DetalleSueldo_Conditional_11_Template, 1, 2)(12, DetalleSueldo_Conditional_12_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 11)(16, "label", 12);
            i0.ɵɵtext(17, " Per\u00EDodo ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 13)(19, "button", 14);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_19_listener() { return ctx.movePeriod(-1); });
            i0.ɵɵelement(20, "i", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p-datepicker", 16);
            i0.ɵɵlistener("ngModelChange", function DetalleSueldo_Template_p_datepicker_ngModelChange_21_listener($event) { return ctx.changePeriodDate($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(22, "button", 17);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_22_listener() { return ctx.movePeriod(1); });
            i0.ɵɵelement(23, "i", 18);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(24, DetalleSueldo_Conditional_24_Template, 3, 0, "section", 19)(25, DetalleSueldo_Conditional_25_Template, 220, 43);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "p-dialog", 20);
            i0.ɵɵlistener("visibleChange", function DetalleSueldo_Template_p_dialog_visibleChange_26_listener($event) { return ctx.discountDialogVisible.set($event); });
            i0.ɵɵelementStart(27, "form", 21);
            i0.ɵɵlistener("ngSubmit", function DetalleSueldo_Template_form_ngSubmit_27_listener() { return ctx.saveDiscount(); });
            i0.ɵɵelementStart(28, "div", 22)(29, "label", 23);
            i0.ɵɵtext(30, " Descripci\u00F3n ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "input", 24);
            i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Template_input_ngModelChange_31_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.discountForm.descripcion, $event) || (ctx.discountForm.descripcion = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 22)(33, "label", 25);
            i0.ɵɵtext(34, " Importe ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 26)(36, "span");
            i0.ɵɵtext(37, "$");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "input", 27);
            i0.ɵɵlistener("ngModelChange", function DetalleSueldo_Template_input_ngModelChange_38_listener($event) { return ctx.updateDiscountAmount($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 28)(40, "button", 29);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_40_listener() { return ctx.discountDialogVisible.set(false); });
            i0.ɵɵtext(41, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "button", 30);
            i0.ɵɵconditionalCreate(43, DetalleSueldo_Conditional_43_Template, 1, 0, "i", 31)(44, DetalleSueldo_Conditional_44_Template, 1, 0, "i", 32);
            i0.ɵɵtext(45, " Guardar ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(46, "p-dialog", 20);
            i0.ɵɵlistener("visibleChange", function DetalleSueldo_Template_p_dialog_visibleChange_46_listener($event) { return ctx.additionalDialogVisible.set($event); });
            i0.ɵɵelementStart(47, "form", 21);
            i0.ɵɵlistener("ngSubmit", function DetalleSueldo_Template_form_ngSubmit_47_listener() { return ctx.saveAdditional(); });
            i0.ɵɵelementStart(48, "div", 22)(49, "label", 33);
            i0.ɵɵtext(50, "Descripci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "input", 34);
            i0.ɵɵtwoWayListener("ngModelChange", function DetalleSueldo_Template_input_ngModelChange_51_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.additionalForm.descripcion, $event) || (ctx.additionalForm.descripcion = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 22)(53, "label", 35);
            i0.ɵɵtext(54, "Importe");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 26)(56, "span");
            i0.ɵɵtext(57, "$");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "input", 36);
            i0.ɵɵlistener("ngModelChange", function DetalleSueldo_Template_input_ngModelChange_58_listener($event) { return ctx.updateAdditionalAmount($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "div", 28)(60, "button", 29);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_60_listener() { return ctx.additionalDialogVisible.set(false); });
            i0.ɵɵtext(61, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "button", 30);
            i0.ɵɵconditionalCreate(63, DetalleSueldo_Conditional_63_Template, 1, 0, "i", 31)(64, DetalleSueldo_Conditional_64_Template, 1, 0, "i", 32);
            i0.ɵɵtext(65, " Guardar ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(66, "p-dialog", 37);
            i0.ɵɵlistener("visibleChange", function DetalleSueldo_Template_p_dialog_visibleChange_66_listener($event) { return ctx.deleteAdditionalDialogVisible.set($event); });
            i0.ɵɵelementStart(67, "div", 38)(68, "div", 39);
            i0.ɵɵelement(69, "i", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div")(71, "strong");
            i0.ɵɵtext(72, "\u00BFEliminar este adicional?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "p");
            i0.ɵɵtext(74);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "p");
            i0.ɵɵtext(76, "El sueldo total se recalcular\u00E1 autom\u00E1ticamente.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(77, "div", 28)(78, "button", 29);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_78_listener() { return ctx.deleteAdditionalDialogVisible.set(false); });
            i0.ɵɵtext(79, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "button", 41);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_80_listener() { return ctx.deleteAdditional(); });
            i0.ɵɵconditionalCreate(81, DetalleSueldo_Conditional_81_Template, 1, 0, "i", 31)(82, DetalleSueldo_Conditional_82_Template, 1, 0, "i", 42);
            i0.ɵɵtext(83, " Eliminar ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(84, "p-dialog", 43);
            i0.ɵɵlistener("visibleChange", function DetalleSueldo_Template_p_dialog_visibleChange_84_listener($event) { return ctx.deleteSalaryDialogVisible.set($event); });
            i0.ɵɵelementStart(85, "div", 38)(86, "div", 39);
            i0.ɵɵelement(87, "i", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "div")(89, "strong");
            i0.ɵɵtext(90, "\u00BFEliminar esta liquidaci\u00F3n?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "p");
            i0.ɵɵtext(92, " Se eliminar\u00E1n tambi\u00E9n todos sus descuentos y adicionales. Esta acci\u00F3n no se puede deshacer. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(93, "div", 28)(94, "button", 29);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_94_listener() { return ctx.deleteSalaryDialogVisible.set(false); });
            i0.ɵɵtext(95, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "button", 41);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_96_listener() { return ctx.deleteSalary(); });
            i0.ɵɵconditionalCreate(97, DetalleSueldo_Conditional_97_Template, 1, 0, "i", 31)(98, DetalleSueldo_Conditional_98_Template, 1, 0, "i", 42);
            i0.ɵɵtext(99, " Eliminar ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(100, "p-dialog", 44);
            i0.ɵɵlistener("visibleChange", function DetalleSueldo_Template_p_dialog_visibleChange_100_listener($event) { return ctx.deleteDialogVisible.set($event); });
            i0.ɵɵelementStart(101, "div", 38)(102, "div", 39);
            i0.ɵɵelement(103, "i", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div")(105, "strong");
            i0.ɵɵtext(106, " \u00BFEliminar este descuento? ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "p");
            i0.ɵɵtext(108);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "p");
            i0.ɵɵtext(110, " La transferencia y el sueldo total se recalcular\u00E1n autom\u00E1ticamente. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(111, "div", 28)(112, "button", 29);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_112_listener() { return ctx.deleteDialogVisible.set(false); });
            i0.ɵɵtext(113, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "button", 41);
            i0.ɵɵlistener("click", function DetalleSueldo_Template_button_click_114_listener() { return ctx.deleteDiscount(); });
            i0.ɵɵconditionalCreate(115, DetalleSueldo_Conditional_115_Template, 1, 0, "i", 31)(116, DetalleSueldo_Conditional_116_Template, 1, 0, "i", 42);
            i0.ɵɵtext(117, " Eliminar ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("life", 3000);
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(ctx.employee() ? 11 : 12);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Matr\u00EDcula: ", ctx.employee()?.matricula || "-", " ");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("showIcon", true)("readonlyInput", true)("ngModel", ctx.periodDate());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loading() ? 24 : 25);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(62, _c0));
            i0.ɵɵproperty("visible", ctx.discountDialogVisible())("modal", true)("draggable", false)("resizable", false)("header", ctx.editingDiscountId() === null ? "Agregar descuento" : "Editar descuento");
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.discountForm.descripcion);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.formatMoneyInput(ctx.discountForm.importe));
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 43 : 44);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(63, _c0));
            i0.ɵɵproperty("visible", ctx.additionalDialogVisible())("modal", true)("draggable", false)("resizable", false)("header", ctx.editingAdditionalId() === null ? "Agregar adicional" : "Editar adicional");
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.additionalForm.descripcion);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.formatMoneyInput(ctx.additionalForm.importe));
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 63 : 64);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(64, _c1));
            i0.ɵɵproperty("visible", ctx.deleteAdditionalDialogVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate2(" ", ctx.additionalToDelete()?.descripcion, " - ", ctx.formatCurrency(ctx.additionalToDelete()?.importe), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 81 : 82);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(65, _c1));
            i0.ɵɵproperty("visible", ctx.deleteSalaryDialogVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 97 : 98);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(66, _c1));
            i0.ɵɵproperty("visible", ctx.deleteDialogVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate2(" ", ctx.discountToDelete()?.descripcion, " - ", ctx.formatCurrency(ctx.discountToDelete()?.importe), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 115 : 116);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective,
            DatePicker,
            DialogModule, i2.Dialog, ConfirmDialog,
            InputText,
            Select,
            TableModule, i3.Table, i3.SortableColumn, i3.SortIcon, ToastModule, i4.Toast], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.salary-detail-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n}\n\n\n\n\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1500px;\n  gap: 20px;\n  margin: 0 auto 24px;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  h1 {\n    margin: 3px 0 4px;\n    color: #18181b;\n    font-size: 1.8rem;\n    font-weight: 700;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.8rem;\n  }\n}\n\n.page-eyebrow[_ngcontent-%COMP%] {\n  color: #9810d5;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  padding: 0;\n  color: #52525b;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 10px;\n  cursor: pointer;\n\n  &:hover {\n    color: #9810d5;\n    background: #faf5ff;\n  }\n}\n\n.period-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  label {\n    color: #52525b;\n    font-size: 0.72rem;\n    font-weight: 600;\n  }\n\n  p-datepicker {\n    width: 180px;\n  }\n}\n\n.period-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  p-datepicker {\n    display: inline-flex;\n    margin: 0 4px;\n  }\n\n  > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 38px;\n    height: 38px;\n    color: #7e22ce;\n    background: #ffffff;\n    border: 1px solid #d8b4fe;\n    border-radius: 9px;\n\n    &:hover {\n      background: #faf5ff;\n      border-color: #a855f7;\n    }\n  }\n}\n\n.payment-status-section[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  padding-top: 22px;\n  border-top: 1px solid #e4e4e7;\n\n  h3 {\n    margin: 0 0 14px;\n    font-size: 0.9rem;\n  }\n}\n\n.payment-status-grid[_ngcontent-%COMP%], \n.files-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.payment-status-card[_ngcontent-%COMP%], \n.upload-card[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 11px;\n  cursor: pointer;\n  transition: 150ms ease;\n\n  &:hover {\n    background: #faf5ff;\n    border-color: #d8b4fe;\n  }\n}\n\n.payment-status-card[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #7e22ce;\n}\n\n.status-icon[_ngcontent-%COMP%], \n.upload-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #7e22ce;\n  background: #f3e8ff;\n  border-radius: 10px;\n}\n\n.status-copy[_ngcontent-%COMP%], \n.upload-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 3px;\n\n  strong { font-size: 0.82rem; }\n  small { color: #71717a; font-size: 0.7rem; }\n  b { color: #7e22ce; font-size: 0.82rem; overflow-wrap: anywhere; }\n}\n\n.upload-card[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n\n.files-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  color: #71717a;\n  font-size: 0.72rem;\n}\n\n[_nghost-%COMP%]     {\n  .period-selector .p-datepicker {\n    width: 180px;\n  }\n\n  .period-selector .p-datepicker-input {\n    width: 1%;\n    min-width: 0;\n    flex: 1 1 auto;\n  }\n\n  .salary-form .p-select {\n    width: 100%;\n  }\n\n  .salary-form .p-datepicker {\n    width: min(100%, 240px);\n  }\n\n  .salary-form .p-datepicker-input {\n    width: 100%;\n    min-width: 0;\n  }\n}\n\n\n\n\n.loading-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 1500px;\n  min-height: 200px;\n  gap: 10px;\n  margin: 0 auto;\n  color: #71717a;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n\n\n\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  max-width: 1500px;\n  gap: 14px;\n  margin: 0 auto 20px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 5px;\n  padding: 18px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n\n  > span {\n    color: #71717a;\n    font-size: 0.75rem;\n  }\n\n  strong {\n    color: #18181b;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n\n  small {\n    color: #a1a1aa;\n    font-size: 0.69rem;\n  }\n\n  &.discount {\n    border-color: #fecaca;\n\n    strong {\n      color: #b91c1c;\n    }\n  }\n\n  &.transfer {\n    border-color: #bae6fd;\n\n    strong {\n      color: #0369a1;\n    }\n  }\n\n  &.cash {\n    border-color: #bbf7d0;\n\n    strong {\n      color: #15803d;\n    }\n  }\n\n  &.total {\n    background: linear-gradient(135deg, #ffffff, #faf5ff);\n    border-color: #e9d5ff;\n\n    strong {\n      color: #7e22ce;\n      font-size: 1.35rem;\n    }\n  }\n}\n\n\n\n\n.detail-card[_ngcontent-%COMP%] {\n  max-width: 1500px;\n  margin: 0 auto 20px;\n  padding: 22px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 20px;\n\n  h2 {\n    margin: 0 0 4px;\n    color: #18181b;\n    font-size: 1rem;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.78rem;\n  }\n}\n\n\n\n\n.salary-form[_ngcontent-%COMP%], \n.dialog-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  label {\n    color: #3f3f46;\n    font-size: 0.78rem;\n    font-weight: 600;\n  }\n\n  > small {\n    color: #a1a1aa;\n    font-size: 0.68rem;\n  }\n\n  input,\n  select,\n  textarea {\n    width: 100%;\n  }\n\n  select,\n  textarea {\n    padding: 10px 12px;\n    color: #18181b;\n    background: #ffffff;\n    border: 1px solid #d4d4d8;\n    border-radius: 8px;\n    font: inherit;\n\n    &:focus {\n      border-color: #a855f7;\n      outline: none;\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n}\n\n.money-input[_ngcontent-%COMP%] {\n  position: relative;\n\n  > span {\n    position: absolute;\n    top: 50%;\n    left: 12px;\n    z-index: 2;\n    color: #71717a;\n    transform: translateY(-50%);\n  }\n\n  input {\n    padding-left: 28px;\n  }\n}\n\n\n\n\n.calculation[_ngcontent-%COMP%] {\n  max-width: 620px;\n  padding: 18px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n\n.calculation-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 6px 0;\n  color: #52525b;\n  font-size: 0.82rem;\n\n  strong {\n    color: #27272a;\n  }\n\n  &.negative strong {\n    color: #b91c1c;\n  }\n\n  &.result {\n    margin-top: 4px;\n    padding-top: 10px;\n    border-top: 1px solid #e4e4e7;\n\n    span,\n    strong {\n      color: #0369a1;\n      font-weight: 700;\n    }\n  }\n\n  &.grand-total {\n    margin-top: 4px;\n    padding-top: 12px;\n    border-top: 1px solid #d8b4fe;\n\n    span,\n    strong {\n      color: #7e22ce;\n      font-size: 0.95rem;\n      font-weight: 700;\n    }\n  }\n}\n\n.calculation-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 10px 0;\n  background: #e4e4e7;\n}\n\n\n\n\n.receipt-section[_ngcontent-%COMP%] {\n  padding-top: 4px;\n\n  h3 {\n    margin: 0 0 12px;\n    color: #27272a;\n    font-size: 0.88rem;\n  }\n}\n\n.receipt-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto minmax(200px, 1fr);\n  align-items: end;\n  gap: 15px;\n}\n\n.checkbox-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 42px;\n  gap: 8px;\n  padding: 0 12px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 9px;\n  cursor: pointer;\n\n  input {\n    width: 17px;\n    height: 17px;\n    accent-color: #9810d5;\n  }\n\n  span {\n    color: #3f3f46;\n    font-size: 0.78rem;\n    font-weight: 600;\n  }\n}\n\n\n\n\n.primary-button[_ngcontent-%COMP%], \n.secondary-button[_ngcontent-%COMP%], \n.danger-button[_ngcontent-%COMP%], \n.cancel-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  gap: 7px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 9px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n.primary-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: linear-gradient(90deg, #7e22ce, #b100e8);\n}\n\n.secondary-button[_ngcontent-%COMP%] {\n  color: #52525b;\n  background: #ffffff;\n  border: 1px solid #d4d4d8;\n}\n\n.danger-button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #dc2626;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n}\n\n.form-actions[_ngcontent-%COMP%], \n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.salary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n\n\n\n.cancelled-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 18px;\n  padding: 11px 13px;\n  color: #b91c1c;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 9px;\n  font-size: 0.78rem;\n}\n\n\n\n\n.discount-disabled[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  color: #71717a;\n  background: #fafafa;\n  border: 1px dashed #d4d4d8;\n  border-radius: 10px;\n  font-size: 0.78rem;\n}\n\n[_nghost-%COMP%]     {\n\n  .discount-table .p-datatable-thead > tr > th {\n    color: #71717a;\n    background: #fafafa;\n    font-size: 0.72rem;\n    text-transform: uppercase;\n  }\n\n  .discount-table .p-datatable-tbody > tr > td {\n    color: #3f3f46;\n    font-size: 0.82rem;\n  }\n\n  .discount-table .p-datatable-footer {\n    padding: 0;\n  }\n}\n\n.discount-amount[_ngcontent-%COMP%] {\n  color: #b91c1c !important;\n  font-weight: 600;\n}\n\n.discount-footer[_ngcontent-%COMP%] {\n  font-weight: 700;\n\n  td:nth-child(2) {\n    color: #b91c1c;\n  }\n}\n\n.additional-footer[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: #15803d;\n}\n\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 5px;\n\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 33px;\n    height: 33px;\n    padding: 0;\n    color: #52525b;\n    background: transparent;\n    border: 0;\n    border-radius: 8px;\n    cursor: pointer;\n\n    &:hover {\n      color: #9810d5;\n      background: #faf5ff;\n    }\n\n    &.danger:hover {\n      color: #dc2626;\n      background: #fef2f2;\n    }\n  }\n}\n\n.table-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 35px;\n  color: #a1a1aa;\n  text-align: center;\n}\n\n\n\n\n.delete-confirm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n\n  p {\n    margin: 5px 0 0;\n    color: #71717a;\n    font-size: 0.8rem;\n  }\n}\n\n.delete-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #dc2626;\n  background: #fef2f2;\n  border-radius: 50%;\n}\n\n\n\n\n@media (max-width: 1100px) {\n\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n\n@media (max-width: 900px) {\n\n  .receipt-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n@media (max-width: 768px) {\n\n  .salary-detail-page[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n\n  .detail-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .period-selector[_ngcontent-%COMP%]   p-datepicker[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  [_nghost-%COMP%]     .period-selector .p-datepicker {\n    width: 100%;\n  }\n\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .section-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .section-header[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%], \n   .section-header[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .payment-status-grid[_ngcontent-%COMP%], \n   .files-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n@media (max-width: 520px) {\n\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .detail-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetalleSueldo, [{
        type: Component,
        args: [{ selector: 'app-detalle-sueldo', imports: [
                    FormsModule,
                    ButtonDirective,
                    DatePicker,
                    DialogModule,
                    ConfirmDialog,
                    InputText,
                    Select,
                    TableModule,
                    ToastModule
                ], providers: [MessageService, ConfirmationService], template: "<p-toast\n  position=\"bottom-right\"\n  [life]=\"3000\"\n/>\n\n<p-confirmdialog />\n\n<section class=\"salary-detail-page\">\n\n  <header class=\"detail-header\">\n\n    <div class=\"header-left\">\n\n      <button\n        type=\"button\"\n        class=\"back-button\"\n        (click)=\"back()\"\n      >\n        <i class=\"pi pi-arrow-left\"></i>\n      </button>\n\n\n      <div>\n\n        <span class=\"page-eyebrow\">\n          Sueldo\n        </span>\n\n        <h1>\n          @if (employee()) {\n            {{ employee()!.apellido }},\n            {{ employee()!.nombre }}\n          } @else {\n            Empleado\n          }\n        </h1>\n\n        <p>\n          Matr\u00EDcula:\n          {{ employee()?.matricula || '-' }}\n        </p>\n\n      </div>\n\n    </div>\n\n\n    <div class=\"period-selector\">\n\n      <label for=\"periodo\">\n        Per\u00EDodo\n      </label>\n\n      <div class=\"period-navigation\">\n        <button type=\"button\" aria-label=\"Mes anterior\" (click)=\"movePeriod(-1)\">\n          <i class=\"pi pi-chevron-left\"></i>\n        </button>\n\n        <p-datepicker\n          inputId=\"periodo\"\n          view=\"month\"\n          dateFormat=\"mm/yy\"\n          [showIcon]=\"true\"\n          [readonlyInput]=\"true\"\n          [ngModel]=\"periodDate()\"\n          (ngModelChange)=\"changePeriodDate($event)\"\n        />\n\n        <button type=\"button\" aria-label=\"Mes siguiente\" (click)=\"movePeriod(1)\">\n          <i class=\"pi pi-chevron-right\"></i>\n        </button>\n      </div>\n\n    </div>\n\n  </header>\n\n\n  @if (loading()) {\n\n    <section class=\"loading-card\">\n      <i class=\"pi pi-spinner pi-spin\"></i>\n      Cargando liquidaci\u00F3n...\n    </section>\n\n  } @else {\n\n    <!-- ====================== SUMMARY ====================== -->\n\n    <section class=\"summary-grid\">\n\n      <article class=\"summary-card receipt\">\n\n        <span>Recibo de sueldo</span>\n\n        <strong>\n          {{ formatCurrency(previewReceipt()) }}\n        </strong>\n\n      </article>\n\n\n      <article class=\"summary-card discount\">\n\n        <span>Descuentos</span>\n\n        <strong>\n          - {{ formatCurrency(previewDiscounts()) }}\n        </strong>\n\n      </article>\n\n\n      <article class=\"summary-card transfer\">\n\n        <span>Transferencia real</span>\n\n        <strong>\n          {{ formatCurrency(previewTransfer()) }}\n        </strong>\n\n        <small>\n          Recibo menos descuentos\n        </small>\n\n      </article>\n\n\n      <article class=\"summary-card cash\">\n\n        <span>Efectivo</span>\n\n        <strong>\n          {{ formatCurrency(previewCash()) }}\n        </strong>\n\n        <small>\n          Ajuste en efectivo\n        </small>\n\n      </article>\n\n\n      <article class=\"summary-card cash\">\n\n        <span>Adicionales</span>\n\n        <strong>\n          + {{ formatCurrency(previewAdditionals()) }}\n        </strong>\n\n        <small>\n          Bonos y otros conceptos\n        </small>\n\n      </article>\n\n\n      <article class=\"summary-card total\">\n\n        <span>Sueldo total</span>\n\n        <strong>\n          {{ formatCurrency(previewTotal()) }}\n        </strong>\n\n        <small>\n          Transferencia + efectivo + adicionales\n        </small>\n\n      </article>\n\n    </section>\n\n\n    <!-- ====================== LIQUIDACI\u00D3N ====================== -->\n\n    <section class=\"detail-card\">\n\n      <div class=\"section-header\">\n\n        <div>\n\n          <h2>\n            Liquidaci\u00F3n\n          </h2>\n\n          <p>\n            Carg\u00E1 el recibo y el ajuste correspondiente al per\u00EDodo.\n          </p>\n\n        </div>\n\n\n        @if (salary()) {\n\n          <div class=\"salary-actions\">\n            <button\n              type=\"button\"\n              class=\"cancel-button\"\n              (click)=\"toggleCancelled()\"\n              [disabled]=\"saving()\"\n            >\n              @if (salary()!.anulado) {\n                <i class=\"pi pi-refresh\"></i>\n                Reactivar\n              } @else {\n                <i class=\"pi pi-ban\"></i>\n                Anular\n              }\n            </button>\n\n            <button\n              type=\"button\"\n              class=\"danger-button\"\n              (click)=\"deleteSalaryDialogVisible.set(true)\"\n              [disabled]=\"saving()\"\n            >\n              <i class=\"pi pi-trash\"></i>\n              Eliminar\n            </button>\n          </div>\n\n        }\n\n      </div>\n\n\n      @if (salary()?.anulado) {\n\n        <div class=\"cancelled-alert\">\n\n          <i class=\"pi pi-exclamation-triangle\"></i>\n\n          Esta liquidaci\u00F3n se encuentra anulada.\n\n        </div>\n\n      }\n\n\n      <form\n        class=\"salary-form\"\n        (ngSubmit)=\"saveSalary()\"\n      >\n\n        <div class=\"form-grid\">\n\n          <div class=\"field\">\n\n            <label for=\"importe_recibo\">\n              Recibo de sueldo\n            </label>\n\n            <div class=\"money-input\">\n\n              <span>$</span>\n\n              <input\n                pInputText\n                id=\"importe_recibo\"\n                name=\"importe_recibo\"\n                type=\"text\"\n                inputmode=\"decimal\"\n                [ngModel]=\"formatMoneyInput(salaryForm.importe_recibo)\"\n                (ngModelChange)=\"updateMoneyField('importe_recibo', $event)\"\n              />\n\n            </div>\n\n            <small>\n              Neto oficial que figura en el recibo.\n            </small>\n\n          </div>\n\n\n          <div class=\"field\">\n\n            <label for=\"ajuste_efectivo\">\n              Ajuste en efectivo\n            </label>\n\n            <div class=\"money-input\">\n\n              <span>$</span>\n\n              <input\n                pInputText\n                id=\"ajuste_efectivo\"\n                name=\"ajuste_efectivo\"\n                type=\"text\"\n                inputmode=\"decimal\"\n                [ngModel]=\"formatMoneyInput(salaryForm.ajuste_efectivo)\"\n                (ngModelChange)=\"updateMoneyField('ajuste_efectivo', $event)\"\n              />\n\n            </div>\n\n            <small>\n              Importe adicional entregado en efectivo.\n            </small>\n\n          </div>\n\n\n          <div class=\"field\">\n\n            <label for=\"fecha_pago_prevista\">\n              Fecha prevista de pago\n            </label>\n\n            <p-datepicker\n              inputId=\"fecha_pago_prevista\"\n              name=\"fecha_pago_prevista\"\n              dataType=\"string\"\n              dateFormat=\"yy-mm-dd\"\n              [showIcon]=\"true\"\n              [showClear]=\"true\"\n              [ngModel]=\"salaryForm.fecha_pago_prevista\"\n              (ngModelChange)=\"salaryForm.fecha_pago_prevista = $event || ''\"\n              [appendTo]=\"'body'\"\n            />\n\n          </div>\n\n\n          <div class=\"field\">\n\n            <label for=\"moneda\">\n              Moneda\n            </label>\n\n            <p-select\n              inputId=\"moneda\"\n              name=\"moneda\"\n              [options]=\"currencyOptions\"\n              optionLabel=\"label\"\n              optionValue=\"value\"\n              [(ngModel)]=\"salaryForm.moneda\"\n              [appendTo]=\"'body'\"\n            />\n\n          </div>\n\n        </div>\n\n\n        <!-- ====================== CALCULATION ====================== -->\n\n        <div class=\"calculation\">\n\n          <div class=\"calculation-row\">\n\n            <span>\n              Recibo\n            </span>\n\n            <strong>\n              {{ formatCurrency(previewReceipt()) }}\n            </strong>\n\n          </div>\n\n\n          <div class=\"calculation-row negative\">\n\n            <span>\n              Descuentos\n            </span>\n\n            <strong>\n              - {{ formatCurrency(previewDiscounts()) }}\n            </strong>\n\n          </div>\n\n\n          <div class=\"calculation-row result\">\n\n            <span>\n              Transferencia real\n            </span>\n\n            <strong>\n              {{ formatCurrency(previewTransfer()) }}\n            </strong>\n\n          </div>\n\n\n          <div class=\"calculation-divider\"></div>\n\n\n          <div class=\"calculation-row\">\n\n            <span>\n              Transferencia\n            </span>\n\n            <strong>\n              {{ formatCurrency(previewTransfer()) }}\n            </strong>\n\n          </div>\n\n\n          <div class=\"calculation-row\">\n\n            <span>\n              Ajuste en efectivo\n            </span>\n\n            <strong>\n              {{ formatCurrency(previewCash()) }}\n            </strong>\n\n          </div>\n\n\n          <div class=\"calculation-row\">\n\n            <span>\n              Adicionales\n            </span>\n\n            <strong>\n              + {{ formatCurrency(previewAdditionals()) }}\n            </strong>\n\n          </div>\n\n\n          <div class=\"calculation-row grand-total\">\n\n            <span>\n              Sueldo total\n            </span>\n\n            <strong>\n              {{ formatCurrency(previewTotal()) }}\n            </strong>\n\n          </div>\n\n        </div>\n\n\n        <!-- ====================== PAYMENT STATUS ====================== -->\n\n        <div class=\"payment-status-section\">\n          <h3>Estado del pago</h3>\n\n          <div class=\"payment-status-grid\">\n            <label class=\"payment-status-card\">\n              <input\n                type=\"checkbox\"\n                name=\"transferencia_realizada\"\n                [(ngModel)]=\"salaryForm.transferencia_realizada\"\n              />\n\n              <span class=\"status-icon transfer\">\n                <i class=\"pi pi-building-columns\"></i>\n              </span>\n\n              <span class=\"status-copy\">\n                <strong>Transferencia realizada</strong>\n                <small>Importe esperado</small>\n                <b>{{ formatCurrency(previewTransfer()) }}</b>\n              </span>\n            </label>\n\n            <label class=\"payment-status-card\">\n              <input\n                type=\"checkbox\"\n                name=\"efectivo_entregado\"\n                [(ngModel)]=\"salaryForm.efectivo_entregado\"\n              />\n\n              <span class=\"status-icon cash\">\n                <i class=\"pi pi-money-bill\"></i>\n              </span>\n\n              <span class=\"status-copy\">\n                <strong>Efectivo entregado</strong>\n                <small>Importe esperado</small>\n                <b>{{ formatCurrency(previewCash()) }}</b>\n              </span>\n            </label>\n          </div>\n        </div>\n\n\n        <!-- ====================== RECEIPT ====================== -->\n\n        <div class=\"receipt-section\">\n\n          <h3>\n            Recibo\n          </h3>\n\n\n          <div class=\"receipt-options\">\n\n            <label class=\"checkbox-option\">\n\n              <input\n                type=\"checkbox\"\n                name=\"recibo_entregado\"\n                [(ngModel)]=\"salaryForm.recibo_entregado\"\n              />\n\n              <span>\n                Recibo entregado\n              </span>\n\n            </label>\n\n\n            <label class=\"checkbox-option\">\n\n              <input\n                type=\"checkbox\"\n                name=\"recibo_firmado\"\n                [(ngModel)]=\"salaryForm.recibo_firmado\"\n              />\n\n              <span>\n                Recibo firmado\n              </span>\n\n            </label>\n\n\n            <div class=\"field\">\n\n              <label for=\"fecha_entrega_recibo\">\n                Fecha de entrega\n              </label>\n\n              <p-datepicker\n                inputId=\"fecha_entrega_recibo\"\n                name=\"fecha_entrega_recibo\"\n                dataType=\"string\"\n                dateFormat=\"yy-mm-dd\"\n                [showIcon]=\"true\"\n                [showClear]=\"true\"\n                [ngModel]=\"salaryForm.fecha_entrega_recibo\"\n                (ngModelChange)=\"salaryForm.fecha_entrega_recibo = $event || ''\"\n                [appendTo]=\"'body'\"\n              />\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <div class=\"field\">\n\n          <label for=\"observaciones\">\n            Observaciones\n          </label>\n\n          <textarea\n            id=\"observaciones\"\n            name=\"observaciones\"\n            rows=\"4\"\n            [(ngModel)]=\"salaryForm.observaciones\"\n          ></textarea>\n\n        </div>\n\n\n        <div class=\"form-actions\">\n\n          <button\n            pButton\n            type=\"submit\"\n            class=\"primary-button\"\n            [disabled]=\"saving() || !hasUnsavedChanges()\"\n          >\n\n            @if (saving()) {\n\n              <i class=\"pi pi-spinner pi-spin\"></i>\n              Guardando...\n\n            } @else {\n\n              <i class=\"pi pi-check\"></i>\n\n              @if (salary()) {\n                Guardar cambios\n              } @else {\n                Crear liquidaci\u00F3n\n              }\n\n            }\n\n          </button>\n\n        </div>\n\n      </form>\n\n    </section>\n\n\n    <!-- ====================== FILES ====================== -->\n\n    <section class=\"detail-card\">\n      <div class=\"section-header\">\n        <div>\n          <h2>Archivos</h2>\n          <p>Adjunt\u00E1 comprobantes y documentaci\u00F3n relacionada con la liquidaci\u00F3n.</p>\n        </div>\n      </div>\n\n      <div class=\"files-grid\">\n        <label class=\"upload-card\">\n          <input\n            type=\"file\"\n            accept=\"application/pdf\"\n            (change)=\"selectTransferReceipt($event)\"\n          />\n\n          <span class=\"upload-icon\"><i class=\"pi pi-receipt\"></i></span>\n          <span>\n            <strong>Comprobante de transferencia</strong>\n            <small>Archivo PDF</small>\n            @if (transferReceipt()) {\n              <b>{{ transferReceipt()!.name }}</b>\n            } @else {\n              <b>Seleccionar archivo</b>\n            }\n          </span>\n        </label>\n\n        <label class=\"upload-card\">\n          <input type=\"file\" multiple (change)=\"selectFiles($event)\" />\n\n          <span class=\"upload-icon\"><i class=\"pi pi-paperclip\"></i></span>\n          <span>\n            <strong>Otros archivos</strong>\n            <small>Recibos y documentaci\u00F3n adicional</small>\n            @if (selectedFiles().length) {\n              <b>{{ selectedFiles().length }} archivo(s) seleccionado(s)</b>\n            } @else {\n              <b>Seleccionar archivos</b>\n            }\n          </span>\n        </label>\n      </div>\n\n      <div class=\"files-notice\">\n        <i class=\"pi pi-info-circle\"></i>\n        Los archivos seleccionados todav\u00EDa no se guardan en el servidor.\n      </div>\n    </section>\n\n\n    <!-- ====================== DISCOUNTS ====================== -->\n\n    <section class=\"detail-card\">\n\n      <div class=\"section-header\">\n\n        <div>\n\n          <h2>\n            Descuentos\n          </h2>\n\n          <p>\n            Los descuentos se restan del recibo para obtener la transferencia real.\n          </p>\n\n        </div>\n\n\n        <button\n          pButton\n          type=\"button\"\n          class=\"primary-button\"\n          [disabled]=\"!salary()\"\n          (click)=\"openDiscountCreate()\"\n        >\n          <i class=\"pi pi-plus\"></i>\n          Agregar descuento\n        </button>\n\n      </div>\n\n\n      @if (!salary()) {\n\n        <div class=\"discount-disabled\">\n\n          <i class=\"pi pi-info-circle\"></i>\n\n          Primero cre\u00E1 la liquidaci\u00F3n para poder agregar descuentos.\n\n        </div>\n\n      } @else {\n\n        <p-table\n          class=\"desktop-data-table\"\n          [value]=\"discounts()\"\n          styleClass=\"discount-table concept-table\"\n        >\n\n          <ng-template #header>\n\n            <tr>\n              <th pSortableColumn=\"descripcion\">Descripci\u00F3n <p-sort-icon field=\"descripcion\" /></th>\n              <th pSortableColumn=\"importe\">Importe <p-sort-icon field=\"importe\" /></th>\n              <th></th>\n            </tr>\n\n          </ng-template>\n\n\n          <ng-template\n            #body\n            let-discount\n          >\n\n            <tr>\n\n              <td>\n                {{ discount.descripcion }}\n              </td>\n\n\n              <td class=\"discount-amount\">\n                - {{ formatCurrency(discount.importe) }}\n              </td>\n\n\n              <td>\n\n                <div class=\"row-actions\">\n\n                  <button\n                    type=\"button\"\n                    title=\"Editar\"\n                    (click)=\"openDiscountEdit(discount)\"\n                  >\n                    <i class=\"pi pi-pencil\"></i>\n                  </button>\n\n\n                  <button\n                    type=\"button\"\n                    class=\"danger\"\n                    title=\"Eliminar\"\n                    (click)=\"askDeleteDiscount(discount)\"\n                  >\n                    <i class=\"pi pi-trash\"></i>\n                  </button>\n\n                </div>\n\n              </td>\n\n            </tr>\n\n          </ng-template>\n\n\n          <ng-template #emptymessage>\n\n            <tr>\n\n              <td colspan=\"3\">\n\n                <div class=\"table-empty\">\n\n                  <i class=\"pi pi-percentage\"></i>\n\n                  <span>\n                    No hay descuentos cargados.\n                  </span>\n\n                </div>\n\n              </td>\n\n            </tr>\n\n          </ng-template>\n\n\n          <ng-template #footer>\n\n            <tr class=\"discount-footer\">\n\n              <td>\n                Total descuentos\n              </td>\n\n              <td>\n                - {{ formatCurrency(previewDiscounts()) }}\n              </td>\n\n              <td></td>\n\n            </tr>\n\n          </ng-template>\n\n        </p-table>\n        <div class=\"mobile-record-list\">\n          @for (discount of discounts(); track discount.id) {\n            <article class=\"mobile-record-card\" tabindex=\"0\">\n              <div class=\"mobile-record-header\"><div class=\"mobile-record-avatar\"><i class=\"pi pi-minus-circle\"></i></div><div><small>Descuento</small><strong>{{ discount.descripcion }}</strong></div></div>\n              <div class=\"mobile-record-total\"><span>Importe</span><strong class=\"mobile-record-negative\">- {{ formatCurrency(discount.importe) }}</strong></div>\n              <div class=\"mobile-record-actions\"><button type=\"button\" (click)=\"openDiscountEdit(discount)\"><i class=\"pi pi-pencil\"></i> Editar</button><button type=\"button\" class=\"danger\" (click)=\"askDeleteDiscount(discount)\"><i class=\"pi pi-trash\"></i> Eliminar</button></div>\n            </article>\n          } @empty { <div class=\"mobile-record-empty\"><i class=\"pi pi-minus-circle\"></i><strong>No hay descuentos cargados</strong></div> }\n        </div>\n\n      }\n\n    </section>\n\n\n    <!-- ====================== ADDITIONALS ====================== -->\n\n    <section class=\"detail-card\">\n      <div class=\"section-header\">\n        <div>\n          <h2>Adicionales</h2>\n          <p>Los bonos y otros adicionales se suman al sueldo total.</p>\n        </div>\n\n        <button\n          pButton\n          type=\"button\"\n          class=\"primary-button\"\n          [disabled]=\"!salary()\"\n          (click)=\"openAdditionalCreate()\"\n        >\n          <i class=\"pi pi-plus\"></i>\n          Agregar adicional\n        </button>\n      </div>\n\n      @if (!salary()) {\n        <div class=\"discount-disabled\">\n          <i class=\"pi pi-info-circle\"></i>\n          Primero cre\u00E1 la liquidaci\u00F3n para poder agregar adicionales.\n        </div>\n      } @else {\n        <p-table class=\"desktop-data-table\" [value]=\"additionals()\" styleClass=\"discount-table concept-table\">\n          <ng-template #header>\n            <tr>\n              <th pSortableColumn=\"descripcion\">Descripci\u00F3n <p-sort-icon field=\"descripcion\" /></th>\n              <th pSortableColumn=\"importe\">Importe <p-sort-icon field=\"importe\" /></th>\n              <th></th>\n            </tr>\n          </ng-template>\n\n          <ng-template #body let-additional>\n            <tr>\n              <td>{{ additional.descripcion }}</td>\n              <td class=\"cash-value\">+ {{ formatCurrency(additional.importe) }}</td>\n              <td>\n                <div class=\"row-actions\">\n                  <button type=\"button\" title=\"Editar\" (click)=\"openAdditionalEdit(additional)\">\n                    <i class=\"pi pi-pencil\"></i>\n                  </button>\n                  <button type=\"button\" class=\"danger\" title=\"Eliminar\" (click)=\"askDeleteAdditional(additional)\">\n                    <i class=\"pi pi-trash\"></i>\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </ng-template>\n\n          <ng-template #emptymessage>\n            <tr>\n              <td colspan=\"3\">\n                <div class=\"table-empty\">\n                  <i class=\"pi pi-plus-circle\"></i>\n                  <span>No hay adicionales cargados.</span>\n                </div>\n              </td>\n            </tr>\n          </ng-template>\n\n          <ng-template #footer>\n            <tr class=\"discount-footer additional-footer\">\n              <td>Total adicionales</td>\n              <td>+ {{ formatCurrency(previewAdditionals()) }}</td>\n              <td></td>\n            </tr>\n          </ng-template>\n        </p-table>\n        <div class=\"mobile-record-list\">\n          @for (additional of additionals(); track additional.id) {\n            <article class=\"mobile-record-card\" tabindex=\"0\">\n              <div class=\"mobile-record-header\"><div class=\"mobile-record-avatar\"><i class=\"pi pi-plus-circle\"></i></div><div><small>Adicional</small><strong>{{ additional.descripcion }}</strong></div></div>\n              <div class=\"mobile-record-total\"><span>Importe</span><strong class=\"mobile-record-positive\">+ {{ formatCurrency(additional.importe) }}</strong></div>\n              <div class=\"mobile-record-actions\"><button type=\"button\" (click)=\"openAdditionalEdit(additional)\"><i class=\"pi pi-pencil\"></i> Editar</button><button type=\"button\" class=\"danger\" (click)=\"askDeleteAdditional(additional)\"><i class=\"pi pi-trash\"></i> Eliminar</button></div>\n            </article>\n          } @empty { <div class=\"mobile-record-empty\"><i class=\"pi pi-plus-circle\"></i><strong>No hay adicionales cargados</strong></div> }\n        </div>\n      }\n    </section>\n\n  }\n\n</section>\n\n\n<!-- ====================== DISCOUNT DIALOG ====================== -->\n\n<p-dialog\n  [visible]=\"discountDialogVisible()\"\n  (visibleChange)=\"discountDialogVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [header]=\"\n    editingDiscountId() === null\n      ? 'Agregar descuento'\n      : 'Editar descuento'\n  \"\n  [style]=\"{\n    width: 'min(520px, calc(100vw - 32px))'\n  }\"\n>\n\n  <form\n    class=\"dialog-form\"\n    (ngSubmit)=\"saveDiscount()\"\n  >\n\n    <div class=\"field\">\n\n      <label for=\"discount_description\">\n        Descripci\u00F3n\n      </label>\n\n      <input\n        pInputText\n        id=\"discount_description\"\n        name=\"discount_description\"\n        placeholder=\"Ej: Adelanto, pr\u00E9stamo, herramientas...\"\n        [(ngModel)]=\"discountForm.descripcion\"\n      />\n\n    </div>\n\n\n    <div class=\"field\">\n\n      <label for=\"discount_amount\">\n        Importe\n      </label>\n\n      <div class=\"money-input\">\n\n        <span>$</span>\n\n        <input\n          pInputText\n          id=\"discount_amount\"\n          name=\"discount_amount\"\n          type=\"text\"\n          inputmode=\"decimal\"\n          [ngModel]=\"formatMoneyInput(discountForm.importe)\"\n          (ngModelChange)=\"updateDiscountAmount($event)\"\n        />\n\n      </div>\n\n    </div>\n\n\n    <div class=\"dialog-actions\">\n\n      <button\n        type=\"button\"\n        class=\"secondary-button\"\n        [disabled]=\"saving()\"\n        (click)=\"discountDialogVisible.set(false)\"\n      >\n        Cancelar\n      </button>\n\n\n      <button\n        pButton\n        type=\"submit\"\n        class=\"primary-button\"\n        [disabled]=\"saving()\"\n      >\n\n        @if (saving()) {\n          <i class=\"pi pi-spinner pi-spin\"></i>\n        } @else {\n          <i class=\"pi pi-check\"></i>\n        }\n\n        Guardar\n\n      </button>\n\n    </div>\n\n  </form>\n\n</p-dialog>\n\n\n<!-- ====================== ADDITIONAL DIALOG ====================== -->\n\n<p-dialog\n  [visible]=\"additionalDialogVisible()\"\n  (visibleChange)=\"additionalDialogVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [header]=\"editingAdditionalId() === null ? 'Agregar adicional' : 'Editar adicional'\"\n  [style]=\"{ width: 'min(520px, calc(100vw - 32px))' }\"\n>\n  <form class=\"dialog-form\" (ngSubmit)=\"saveAdditional()\">\n    <div class=\"field\">\n      <label for=\"additional_description\">Descripci\u00F3n</label>\n      <input\n        pInputText\n        id=\"additional_description\"\n        name=\"additional_description\"\n        placeholder=\"Ej: Bono por productividad...\"\n        [(ngModel)]=\"additionalForm.descripcion\"\n      />\n    </div>\n\n    <div class=\"field\">\n      <label for=\"additional_amount\">Importe</label>\n      <div class=\"money-input\">\n        <span>$</span>\n        <input\n          pInputText\n          id=\"additional_amount\"\n          name=\"additional_amount\"\n          type=\"text\"\n          inputmode=\"decimal\"\n          [ngModel]=\"formatMoneyInput(additionalForm.importe)\"\n          (ngModelChange)=\"updateAdditionalAmount($event)\"\n        />\n      </div>\n    </div>\n\n    <div class=\"dialog-actions\">\n      <button type=\"button\" class=\"secondary-button\" [disabled]=\"saving()\" (click)=\"additionalDialogVisible.set(false)\">\n        Cancelar\n      </button>\n      <button pButton type=\"submit\" class=\"primary-button\" [disabled]=\"saving()\">\n        @if (saving()) {\n          <i class=\"pi pi-spinner pi-spin\"></i>\n        } @else {\n          <i class=\"pi pi-check\"></i>\n        }\n        Guardar\n      </button>\n    </div>\n  </form>\n</p-dialog>\n\n\n<!-- ====================== DELETE ADDITIONAL DIALOG ====================== -->\n\n<p-dialog\n  [visible]=\"deleteAdditionalDialogVisible()\"\n  (visibleChange)=\"deleteAdditionalDialogVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  header=\"Eliminar adicional\"\n  [style]=\"{ width: 'min(430px, calc(100vw - 32px))' }\"\n>\n  <div class=\"delete-confirm\">\n    <div class=\"delete-icon\"><i class=\"pi pi-exclamation-triangle\"></i></div>\n    <div>\n      <strong>\u00BFEliminar este adicional?</strong>\n      <p>\n        {{ additionalToDelete()?.descripcion }} -\n        {{ formatCurrency(additionalToDelete()?.importe) }}\n      </p>\n      <p>El sueldo total se recalcular\u00E1 autom\u00E1ticamente.</p>\n    </div>\n  </div>\n\n  <div class=\"dialog-actions\">\n    <button type=\"button\" class=\"secondary-button\" [disabled]=\"saving()\" (click)=\"deleteAdditionalDialogVisible.set(false)\">\n      Cancelar\n    </button>\n    <button type=\"button\" class=\"danger-button\" [disabled]=\"saving()\" (click)=\"deleteAdditional()\">\n      @if (saving()) {\n        <i class=\"pi pi-spinner pi-spin\"></i>\n      } @else {\n        <i class=\"pi pi-trash\"></i>\n      }\n      Eliminar\n    </button>\n  </div>\n</p-dialog>\n\n\n<!-- ====================== DELETE SALARY DIALOG ====================== -->\n\n<p-dialog\n  [visible]=\"deleteSalaryDialogVisible()\"\n  (visibleChange)=\"deleteSalaryDialogVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  header=\"Eliminar liquidaci\u00F3n\"\n  [style]=\"{\n    width: 'min(430px, calc(100vw - 32px))'\n  }\"\n>\n\n  <div class=\"delete-confirm\">\n    <div class=\"delete-icon\">\n      <i class=\"pi pi-exclamation-triangle\"></i>\n    </div>\n\n    <div>\n      <strong>\u00BFEliminar esta liquidaci\u00F3n?</strong>\n\n      <p>\n        Se eliminar\u00E1n tambi\u00E9n todos sus descuentos y adicionales.\n        Esta acci\u00F3n no se puede deshacer.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"dialog-actions\">\n    <button\n      type=\"button\"\n      class=\"secondary-button\"\n      [disabled]=\"saving()\"\n      (click)=\"deleteSalaryDialogVisible.set(false)\"\n    >\n      Cancelar\n    </button>\n\n    <button\n      type=\"button\"\n      class=\"danger-button\"\n      [disabled]=\"saving()\"\n      (click)=\"deleteSalary()\"\n    >\n      @if (saving()) {\n        <i class=\"pi pi-spinner pi-spin\"></i>\n      } @else {\n        <i class=\"pi pi-trash\"></i>\n      }\n      Eliminar\n    </button>\n  </div>\n\n</p-dialog>\n\n\n<!-- ====================== DELETE DIALOG ====================== -->\n\n<p-dialog\n  [visible]=\"deleteDialogVisible()\"\n  (visibleChange)=\"deleteDialogVisible.set($event)\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  header=\"Eliminar descuento\"\n  [style]=\"{\n    width: 'min(430px, calc(100vw - 32px))'\n  }\"\n>\n\n  <div class=\"delete-confirm\">\n\n    <div class=\"delete-icon\">\n      <i class=\"pi pi-exclamation-triangle\"></i>\n    </div>\n\n    <div>\n\n      <strong>\n        \u00BFEliminar este descuento?\n      </strong>\n\n      <p>\n        {{ discountToDelete()?.descripcion }}\n        -\n        {{ formatCurrency(discountToDelete()?.importe) }}\n      </p>\n\n      <p>\n        La transferencia y el sueldo total\n        se recalcular\u00E1n autom\u00E1ticamente.\n      </p>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"dialog-actions\">\n\n    <button\n      type=\"button\"\n      class=\"secondary-button\"\n      [disabled]=\"saving()\"\n      (click)=\"deleteDialogVisible.set(false)\"\n    >\n      Cancelar\n    </button>\n\n\n    <button\n      type=\"button\"\n      class=\"danger-button\"\n      [disabled]=\"saving()\"\n      (click)=\"deleteDiscount()\"\n    >\n\n      @if (saving()) {\n        <i class=\"pi pi-spinner pi-spin\"></i>\n      } @else {\n        <i class=\"pi pi-trash\"></i>\n      }\n\n      Eliminar\n\n    </button>\n\n  </div>\n\n</p-dialog>\n", styles: [":host {\n  display: block;\n}\n\n.salary-detail-page {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n}\n\n\n/* ====================== HEADER ====================== */\n\n.detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1500px;\n  gap: 20px;\n  margin: 0 auto 24px;\n}\n\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  h1 {\n    margin: 3px 0 4px;\n    color: #18181b;\n    font-size: 1.8rem;\n    font-weight: 700;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.8rem;\n  }\n}\n\n.page-eyebrow {\n  color: #9810d5;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.back-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  padding: 0;\n  color: #52525b;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 10px;\n  cursor: pointer;\n\n  &:hover {\n    color: #9810d5;\n    background: #faf5ff;\n  }\n}\n\n.period-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  label {\n    color: #52525b;\n    font-size: 0.72rem;\n    font-weight: 600;\n  }\n\n  p-datepicker {\n    width: 180px;\n  }\n}\n\n.period-navigation {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  p-datepicker {\n    display: inline-flex;\n    margin: 0 4px;\n  }\n\n  > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 38px;\n    height: 38px;\n    color: #7e22ce;\n    background: #ffffff;\n    border: 1px solid #d8b4fe;\n    border-radius: 9px;\n\n    &:hover {\n      background: #faf5ff;\n      border-color: #a855f7;\n    }\n  }\n}\n\n.payment-status-section {\n  margin-top: 22px;\n  padding-top: 22px;\n  border-top: 1px solid #e4e4e7;\n\n  h3 {\n    margin: 0 0 14px;\n    font-size: 0.9rem;\n  }\n}\n\n.payment-status-grid,\n.files-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.payment-status-card,\n.upload-card {\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 11px;\n  cursor: pointer;\n  transition: 150ms ease;\n\n  &:hover {\n    background: #faf5ff;\n    border-color: #d8b4fe;\n  }\n}\n\n.payment-status-card > input {\n  width: 18px;\n  height: 18px;\n  accent-color: #7e22ce;\n}\n\n.status-icon,\n.upload-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #7e22ce;\n  background: #f3e8ff;\n  border-radius: 10px;\n}\n\n.status-copy,\n.upload-card > span:last-child {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 3px;\n\n  strong { font-size: 0.82rem; }\n  small { color: #71717a; font-size: 0.7rem; }\n  b { color: #7e22ce; font-size: 0.82rem; overflow-wrap: anywhere; }\n}\n\n.upload-card > input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n\n.files-notice {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  color: #71717a;\n  font-size: 0.72rem;\n}\n\n:host ::ng-deep {\n  .period-selector .p-datepicker {\n    width: 180px;\n  }\n\n  .period-selector .p-datepicker-input {\n    width: 1%;\n    min-width: 0;\n    flex: 1 1 auto;\n  }\n\n  .salary-form .p-select {\n    width: 100%;\n  }\n\n  .salary-form .p-datepicker {\n    width: min(100%, 240px);\n  }\n\n  .salary-form .p-datepicker-input {\n    width: 100%;\n    min-width: 0;\n  }\n}\n\n\n/* ====================== LOADING ====================== */\n\n.loading-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 1500px;\n  min-height: 200px;\n  gap: 10px;\n  margin: 0 auto;\n  color: #71717a;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n\n\n/* ====================== SUMMARY ====================== */\n\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  max-width: 1500px;\n  gap: 14px;\n  margin: 0 auto 20px;\n}\n\n.summary-card {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 5px;\n  padding: 18px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 13px;\n\n  > span {\n    color: #71717a;\n    font-size: 0.75rem;\n  }\n\n  strong {\n    color: #18181b;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n\n  small {\n    color: #a1a1aa;\n    font-size: 0.69rem;\n  }\n\n  &.discount {\n    border-color: #fecaca;\n\n    strong {\n      color: #b91c1c;\n    }\n  }\n\n  &.transfer {\n    border-color: #bae6fd;\n\n    strong {\n      color: #0369a1;\n    }\n  }\n\n  &.cash {\n    border-color: #bbf7d0;\n\n    strong {\n      color: #15803d;\n    }\n  }\n\n  &.total {\n    background: linear-gradient(135deg, #ffffff, #faf5ff);\n    border-color: #e9d5ff;\n\n    strong {\n      color: #7e22ce;\n      font-size: 1.35rem;\n    }\n  }\n}\n\n\n/* ====================== CARD ====================== */\n\n.detail-card {\n  max-width: 1500px;\n  margin: 0 auto 20px;\n  padding: 22px;\n  background: #ffffff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 20px;\n\n  h2 {\n    margin: 0 0 4px;\n    color: #18181b;\n    font-size: 1rem;\n  }\n\n  p {\n    margin: 0;\n    color: #71717a;\n    font-size: 0.78rem;\n  }\n}\n\n\n/* ====================== FORM ====================== */\n\n.salary-form,\n.dialog-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  label {\n    color: #3f3f46;\n    font-size: 0.78rem;\n    font-weight: 600;\n  }\n\n  > small {\n    color: #a1a1aa;\n    font-size: 0.68rem;\n  }\n\n  input,\n  select,\n  textarea {\n    width: 100%;\n  }\n\n  select,\n  textarea {\n    padding: 10px 12px;\n    color: #18181b;\n    background: #ffffff;\n    border: 1px solid #d4d4d8;\n    border-radius: 8px;\n    font: inherit;\n\n    &:focus {\n      border-color: #a855f7;\n      outline: none;\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n}\n\n.money-input {\n  position: relative;\n\n  > span {\n    position: absolute;\n    top: 50%;\n    left: 12px;\n    z-index: 2;\n    color: #71717a;\n    transform: translateY(-50%);\n  }\n\n  input {\n    padding-left: 28px;\n  }\n}\n\n\n/* ====================== CALCULATION ====================== */\n\n.calculation {\n  max-width: 620px;\n  padding: 18px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n\n.calculation-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 6px 0;\n  color: #52525b;\n  font-size: 0.82rem;\n\n  strong {\n    color: #27272a;\n  }\n\n  &.negative strong {\n    color: #b91c1c;\n  }\n\n  &.result {\n    margin-top: 4px;\n    padding-top: 10px;\n    border-top: 1px solid #e4e4e7;\n\n    span,\n    strong {\n      color: #0369a1;\n      font-weight: 700;\n    }\n  }\n\n  &.grand-total {\n    margin-top: 4px;\n    padding-top: 12px;\n    border-top: 1px solid #d8b4fe;\n\n    span,\n    strong {\n      color: #7e22ce;\n      font-size: 0.95rem;\n      font-weight: 700;\n    }\n  }\n}\n\n.calculation-divider {\n  height: 1px;\n  margin: 10px 0;\n  background: #e4e4e7;\n}\n\n\n/* ====================== RECEIPT ====================== */\n\n.receipt-section {\n  padding-top: 4px;\n\n  h3 {\n    margin: 0 0 12px;\n    color: #27272a;\n    font-size: 0.88rem;\n  }\n}\n\n.receipt-options {\n  display: grid;\n  grid-template-columns: auto auto minmax(200px, 1fr);\n  align-items: end;\n  gap: 15px;\n}\n\n.checkbox-option {\n  display: flex;\n  align-items: center;\n  min-height: 42px;\n  gap: 8px;\n  padding: 0 12px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 9px;\n  cursor: pointer;\n\n  input {\n    width: 17px;\n    height: 17px;\n    accent-color: #9810d5;\n  }\n\n  span {\n    color: #3f3f46;\n    font-size: 0.78rem;\n    font-weight: 600;\n  }\n}\n\n\n/* ====================== BUTTONS ====================== */\n\n.primary-button,\n.secondary-button,\n.danger-button,\n.cancel-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  gap: 7px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 9px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n\n.primary-button {\n  color: #ffffff;\n  background: linear-gradient(90deg, #7e22ce, #b100e8);\n}\n\n.secondary-button {\n  color: #52525b;\n  background: #ffffff;\n  border: 1px solid #d4d4d8;\n}\n\n.danger-button {\n  color: #ffffff;\n  background: #dc2626;\n}\n\n.cancel-button {\n  color: #b91c1c;\n  background: #fef2f2;\n}\n\n.form-actions,\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.salary-actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n\n/* ====================== CANCELLED ====================== */\n\n.cancelled-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 18px;\n  padding: 11px 13px;\n  color: #b91c1c;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 9px;\n  font-size: 0.78rem;\n}\n\n\n/* ====================== DISCOUNTS ====================== */\n\n.discount-disabled {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  color: #71717a;\n  background: #fafafa;\n  border: 1px dashed #d4d4d8;\n  border-radius: 10px;\n  font-size: 0.78rem;\n}\n\n:host ::ng-deep {\n\n  .discount-table .p-datatable-thead > tr > th {\n    color: #71717a;\n    background: #fafafa;\n    font-size: 0.72rem;\n    text-transform: uppercase;\n  }\n\n  .discount-table .p-datatable-tbody > tr > td {\n    color: #3f3f46;\n    font-size: 0.82rem;\n  }\n\n  .discount-table .p-datatable-footer {\n    padding: 0;\n  }\n}\n\n.discount-amount {\n  color: #b91c1c !important;\n  font-weight: 600;\n}\n\n.discount-footer {\n  font-weight: 700;\n\n  td:nth-child(2) {\n    color: #b91c1c;\n  }\n}\n\n.additional-footer td:nth-child(2) {\n  color: #15803d;\n}\n\n.row-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 5px;\n\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 33px;\n    height: 33px;\n    padding: 0;\n    color: #52525b;\n    background: transparent;\n    border: 0;\n    border-radius: 8px;\n    cursor: pointer;\n\n    &:hover {\n      color: #9810d5;\n      background: #faf5ff;\n    }\n\n    &.danger:hover {\n      color: #dc2626;\n      background: #fef2f2;\n    }\n  }\n}\n\n.table-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 35px;\n  color: #a1a1aa;\n  text-align: center;\n}\n\n\n/* ====================== DELETE ====================== */\n\n.delete-confirm {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n\n  p {\n    margin: 5px 0 0;\n    color: #71717a;\n    font-size: 0.8rem;\n  }\n}\n\n.delete-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  color: #dc2626;\n  background: #fef2f2;\n  border-radius: 50%;\n}\n\n\n/* ====================== RESPONSIVE ====================== */\n\n@media (max-width: 1100px) {\n\n  .summary-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n\n@media (max-width: 900px) {\n\n  .receipt-options {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n@media (max-width: 768px) {\n\n  .salary-detail-page {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n\n  .detail-header {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .period-selector p-datepicker {\n    width: 100%;\n  }\n\n  :host ::ng-deep .period-selector .p-datepicker {\n    width: 100%;\n  }\n\n  .summary-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .section-header {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .section-header .primary-button,\n  .section-header .cancel-button {\n    align-self: flex-start;\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .payment-status-grid,\n  .files-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n@media (max-width: 520px) {\n\n  .summary-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .detail-card {\n    padding: 16px;\n  }\n}\n"] }]
    }], null, { warnBeforeUnload: [{
            type: HostListener,
            args: ['window:beforeunload', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetalleSueldo, { className: "DetalleSueldo", filePath: "src/app/pages/sueldos/detalle-sueldo/detalle-sueldo.ts", lineNumber: 75 }); })();
