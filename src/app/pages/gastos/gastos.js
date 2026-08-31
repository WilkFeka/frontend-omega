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
import { FileUpload } from 'primeng/fileupload';
import { Api } from '../../services/api';
import { formatMoneyInput, normalizeMoneyInput } from '../../utils/money-input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
const _c0 = () => ({ width: "min(700px, calc(100vw - 32px))" });
const _c1 = () => ({ width: "min(580px, calc(100vw - 32px))" });
const _c2 = () => ({ width: "min(760px, calc(100vw - 24px))" });
const _c3 = () => ({ width: "min(450px, calc(100vw - 32px))" });
const _forTrack0 = ($index, $item) => $item.id;
function Gastos_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 74);
    i0.ɵɵtext(2, "Descripci\u00F3n ");
    i0.ɵɵelement(3, "p-sort-icon", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 76);
    i0.ɵɵtext(5, "Categor\u00EDa ");
    i0.ɵɵelement(6, "p-sort-icon", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Observaci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th", 78);
    i0.ɵɵtext(12, " Tipo de pago ");
    i0.ɵɵelement(13, "p-sort-icon", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 80);
    i0.ɵɵtext(15, "Estado ");
    i0.ɵɵelement(16, "p-sort-icon", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 82);
    i0.ɵɵtext(18, "Importe ");
    i0.ɵɵelement(19, "p-sort-icon", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "th");
    i0.ɵɵelementEnd();
} }
function Gastos_ng_template_100_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.formatCurrency(item_r3.amount), " ");
} }
function Gastos_ng_template_100_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 88);
    i0.ɵɵtext(1, "Sin cargar");
    i0.ɵɵelementEnd();
} }
function Gastos_ng_template_100_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 84);
    i0.ɵɵlistener("click", function Gastos_ng_template_100_Template_tr_click_0_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openDetail(item_r3)); });
    i0.ɵɵelementStart(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "span", 85);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "span", 86);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 87);
    i0.ɵɵconditionalCreate(17, Gastos_ng_template_100_Conditional_17_Template, 1, 1)(18, Gastos_ng_template_100_Conditional_18_Template, 2, 0, "span", 88);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "div", 89)(21, "button", 90);
    i0.ɵɵlistener("click", function Gastos_ng_template_100_Template_button_click_21_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r3.openEdit(item_r3)); });
    i0.ɵɵelement(22, "i", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 92);
    i0.ɵɵlistener("click", function Gastos_ng_template_100_Template_button_click_23_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r3.askDelete(item_r3)); });
    i0.ɵɵelement(24, "i", 93);
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
    i0.ɵɵtextInterpolate(ctx_r3.paymentLabel(item_r3.payment_method));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("paid", item_r3.is_paid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.is_paid ? "Pagado" : "Pendiente");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r3.amount !== null ? 17 : 18);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("text", true)("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true);
} }
function Gastos_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 94)(2, "div", 95);
    i0.ɵɵelement(3, "i", 34);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "No hay gastos en este per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Agreg\u00E1 el primero para comenzar.");
    i0.ɵɵelementEnd()()()();
} }
function Gastos_For_106_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 99);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(item_r6.amount));
} }
function Gastos_For_106_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 88);
    i0.ɵɵtext(1, "Sin cargar");
    i0.ɵɵelementEnd();
} }
function Gastos_For_106_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 96);
    i0.ɵɵlistener("click", function Gastos_For_106_Template_article_click_0_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openDetail(item_r6)); });
    i0.ɵɵelementStart(1, "header", 97)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 85);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 98)(10, "div")(11, "small");
    i0.ɵɵtext(12, "Per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div")(16, "small");
    i0.ɵɵtext(17, "Tipo de pago");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "small");
    i0.ɵɵtext(22, "Estado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div")(26, "small");
    i0.ɵɵtext(27, "Importe");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, Gastos_For_106_Conditional_28_Template, 2, 1, "strong", 99)(29, Gastos_For_106_Conditional_29_Template, 2, 0, "strong", 88);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 100)(31, "span");
    i0.ɵɵtext(32, "Importe total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "strong", 99);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(35, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "footer", 101)(37, "button", 102);
    i0.ɵɵlistener("click", function Gastos_For_106_Template_button_click_37_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r3.openEdit(item_r6)); });
    i0.ɵɵelement(38, "i", 91);
    i0.ɵɵtext(39, " Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "button", 103);
    i0.ɵɵlistener("click", function Gastos_For_106_Template_button_click_40_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r3.askDelete(item_r6)); });
    i0.ɵɵelement(41, "i", 93);
    i0.ɵɵtext(42, " Eliminar ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r6.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.observation || "Sin observaci\u00F3n");
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-category", item_r6.category);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.categoryLabel(item_r6.category));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.periodLabel());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.paymentLabel(item_r6.payment_method));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r6.is_paid ? "Pagado" : "Pendiente");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(item_r6.amount !== null ? 28 : 29);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r6.amount !== null ? ctx_r3.formatCurrency(item_r6.amount) : "Sin cargar");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("text", true)("rounded", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("text", true)("rounded", true);
} }
function Gastos_ForEmpty_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay gastos");
    i0.ɵɵelementEnd()();
} }
function Gastos_Conditional_114_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelement(1, "i", 104);
    i0.ɵɵtext(2, " Cargando gastos...");
    i0.ɵɵelementEnd();
} }
function Gastos_Conditional_115_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelement(1, "i", 105);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No hay gastos en el per\u00EDodo anterior");
    i0.ɵɵelementEnd()();
} }
function Gastos_Conditional_116_For_8_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.observation);
} }
function Gastos_Conditional_116_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 108)(1, "input", 107);
    i0.ɵɵlistener("change", function Gastos_Conditional_116_For_8_Template_input_change_1_listener($event) { const item_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.toggleCopy(item_r9.id, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, Gastos_Conditional_116_For_8_Conditional_5_Template, 2, 1, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 85);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r3.selectedCopyIds().includes(item_r9.id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r9.observation ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-category", item_r9.category);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.categoryLabel(item_r9.category));
} }
function Gastos_Conditional_116_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54)(1, "label", 106)(2, "input", 107);
    i0.ɵɵlistener("change", function Gastos_Conditional_116_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleAllPrevious($event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Seleccionar todos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(7, Gastos_Conditional_116_For_8_Template, 8, 5, "label", 108, _forTrack0);
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
function Gastos_Conditional_153_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59)(1, "label");
    i0.ɵɵtext(2, "\u00BFCu\u00E1ndo se pag\u00F3? *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p-datepicker", 122);
    i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Conditional_153_Conditional_39_Template_p_datepicker_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.detailPaidAt, $event) || (ctx_r3.detailPaidAt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.detailPaidAt);
    i0.ɵɵproperty("showIcon", true);
    i0.ɵɵcontrol();
} }
function Gastos_Conditional_153_Conditional_50_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 123);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "a", 124);
    i0.ɵɵelement(8, "i", 125);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 126);
    i0.ɵɵlistener("click", function Gastos_Conditional_153_Conditional_50_For_2_Template_button_click_9_listener() { const attachment_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.deleteAttachment(attachment_r13.id)); });
    i0.ɵɵelement(10, "i", 93);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const attachment_r13 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(attachment_r13.content_type === "application/pdf" ? "pi pi-file-pdf" : "pi pi-image");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(attachment_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatFileSize(attachment_r13.size));
    i0.ɵɵadvance();
    i0.ɵɵproperty("text", true)("rounded", true)("href", attachment_r13.download_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("text", true)("rounded", true)("disabled", ctx_r3.uploading());
} }
function Gastos_Conditional_153_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 120);
    i0.ɵɵrepeaterCreate(1, Gastos_Conditional_153_Conditional_50_For_2_Template, 11, 10, "div", 123, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r14.attachments);
} }
function Gastos_Conditional_153_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 121);
    i0.ɵɵelement(1, "i", 127);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Este gasto todav\u00EDa no tiene comprobantes.");
    i0.ɵɵelementEnd()();
} }
function Gastos_Conditional_153_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 109)(1, "div", 110)(2, "span", 85);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "strong", 111);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 112)(11, "div")(12, "small");
    i0.ɵɵtext(13, "Per\u00EDodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "small");
    i0.ɵɵtext(18, "Tipo de pago");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "small");
    i0.ɵɵtext(23, "Estado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div")(27, "small");
    i0.ɵɵtext(28, "Fecha de pago");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "strong");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "section", 113)(32, "label", 114)(33, "input", 115);
    i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Conditional_153_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.detailPaid, $event) || (ctx_r3.detailPaid = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(34, "span")(35, "strong");
    i0.ɵɵtext(36, "El gasto est\u00E1 pagado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "small");
    i0.ɵɵtext(38, "Activ\u00E1 esta opci\u00F3n cuando el pago se haya realizado.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(39, Gastos_Conditional_153_Conditional_39_Template, 4, 2, "div", 59);
    i0.ɵɵelementStart(40, "button", 116);
    i0.ɵɵlistener("click", function Gastos_Conditional_153_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.savePaymentStatus()); });
    i0.ɵɵtext(41, " Guardar estado ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "section", 117)(43, "div", 118)(44, "div")(45, "h3");
    i0.ɵɵtext(46, "Comprobantes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "span");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "p-fileupload", 119);
    i0.ɵɵlistener("uploadHandler", function Gastos_Conditional_153_Template_p_fileupload_uploadHandler_49_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.uploadReceipt($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(50, Gastos_Conditional_153_Conditional_50_Template, 3, 0, "div", 120)(51, Gastos_Conditional_153_Conditional_51_Template, 4, 0, "div", 121);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 55)(53, "button", 17);
    i0.ɵɵlistener("click", function Gastos_Conditional_153_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.detailVisible.set(false)); });
    i0.ɵɵtext(54, " Cerrar ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r14 = ctx;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-category", item_r14.category);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.categoryLabel(item_r14.category));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r14.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r14.observation || "Sin observaci\u00F3n");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatCurrency(item_r14.amount));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.periodLabel());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.paymentLabel(item_r14.payment_method));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("paid-text", item_r14.is_paid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r14.is_paid ? "Pagado" : "Pendiente");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.formatDate(item_r14.paid_at));
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.detailPaid);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r3.detailPaid ? 39 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("loading", ctx_r3.saving());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", item_r14.attachments?.length || 0, " archivos adjuntos");
    i0.ɵɵadvance();
    i0.ɵɵproperty("customUpload", true)("auto", true)("maxFileSize", 10000000)("disabled", ctx_r3.uploading());
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r14.attachments?.length ? 50 : 51);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("outlined", true);
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
    paymentFilter = signal('TODOS', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "paymentFilter" }] : /* istanbul ignore next */ []));
    total = signal('0', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    totals = signal({
        IMPUESTOS: '0',
        SERVICIOS: '0',
        VARIOS: '0',
    }, /* @ts-ignore */
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
    detailVisible = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "detailVisible" }] : /* istanbul ignore next */ []));
    selectedExpense = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedExpense" }] : /* istanbul ignore next */ []));
    uploading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "uploading" }] : /* istanbul ignore next */ []));
    detailPaid = false;
    detailPaidAt = null;
    form = this.emptyForm();
    categoryOptions = [
        { label: 'Impuestos', value: 'IMPUESTOS' },
        { label: 'Servicios', value: 'SERVICIOS' },
        { label: 'Varios', value: 'VARIOS' },
    ];
    filterOptions = [
        { label: 'Todas las categorías', value: 'TODOS' },
        ...this.categoryOptions,
    ];
    paymentOptions = [
        { label: 'Transferencia', value: 'TRANSFERENCIA' },
        { label: 'Efectivo', value: 'EFECTIVO' },
    ];
    paymentFilterOptions = [
        { label: 'Todos los medios de pago', value: 'TODOS' },
        ...this.paymentOptions,
    ];
    filteredRows = computed(() => {
        const term = this.search().trim().toLocaleLowerCase('es');
        return this.rows().filter((item) => (this.categoryFilter() === 'TODOS' || item.category === this.categoryFilter()) &&
            (this.paymentFilter() === 'TODOS' || item.payment_method === this.paymentFilter()) &&
            (!term || `${item.description} ${item.observation}`.toLocaleLowerCase('es').includes(term)));
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredRows" }] : /* istanbul ignore next */ []));
    filteredTotals = computed(() => {
        const rows = this.filteredRows();
        const by = (category) => rows
            .filter((item) => item.category === category)
            .reduce((sum, item) => sum + Number(item.amount ?? 0), 0);
        const byPayment = (method) => rows
            .filter((item) => item.payment_method === method)
            .reduce((sum, item) => sum + Number(item.amount ?? 0), 0);
        const impuestos = by('IMPUESTOS'), servicios = by('SERVICIOS'), varios = by('VARIOS');
        return {
            impuestos,
            servicios,
            varios,
            transferencia: byPayment('TRANSFERENCIA'),
            efectivo: byPayment('EFECTIVO'),
            total: impuestos + servicios + varios,
        };
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredTotals" }] : /* istanbul ignore next */ []));
    allPreviousSelected = computed(() => this.previousRows().length > 0 &&
        this.selectedCopyIds().length === this.previousRows().length, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "allPreviousSelected" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        void this.load();
    }
    async load() {
        this.loading.set(true);
        try {
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
        }
    }
    changePeriod(value) {
        if (!value)
            return;
        this.periodDate.set(new Date(value.getFullYear(), value.getMonth(), 1));
        void this.load();
    }
    movePeriod(offset) {
        const v = this.periodDate();
        this.changePeriod(new Date(v.getFullYear(), v.getMonth() + offset, 1));
    }
    openCreate() {
        this.editing.set(null);
        this.form = this.emptyForm();
        this.dialogVisible.set(true);
    }
    openEdit(item) {
        this.editing.set(item);
        this.form = {
            category: item.category,
            description: item.description,
            amount: item.amount ?? '',
            observation: item.observation,
            payment_method: item.payment_method,
        };
        this.dialogVisible.set(true);
    }
    async openDetail(item) {
        this.loading.set(true);
        try {
            const detail = await firstValueFrom(this.api.getExpense(item.id));
            this.selectedExpense.set(detail);
            this.detailPaid = detail.is_paid;
            this.detailPaidAt = detail.paid_at ? this.fromIsoDate(detail.paid_at) : null;
            this.detailVisible.set(true);
        }
        catch (e) {
            this.error(e);
        }
        finally {
            this.loading.set(false);
        }
    }
    async openCopyPrevious() {
        this.copyVisible.set(true);
        this.loadingPrevious.set(true);
        this.selectedCopyIds.set([]);
        try {
            const response = await firstValueFrom(this.api.getPreviousExpenses(this.period()));
            this.previousRows.set(response.expenses);
        }
        catch (e) {
            this.error(e);
            this.copyVisible.set(false);
        }
        finally {
            this.loadingPrevious.set(false);
        }
    }
    toggleCopy(id, checked) {
        this.selectedCopyIds.update((ids) => checked ? [...ids, id] : ids.filter((value) => value !== id));
    }
    toggleAllPrevious(checked) {
        this.selectedCopyIds.set(checked ? this.previousRows().map((item) => item.id) : []);
    }
    async copySelected() {
        const ids = this.selectedCopyIds();
        if (!ids.length) {
            this.showError('Seleccioná al menos un gasto.');
            return;
        }
        this.saving.set(true);
        try {
            const result = await firstValueFrom(this.api.copyPreviousExpenses(`${this.period()}-01`, ids));
            this.copyVisible.set(false);
            await this.load();
            this.success(result.skipped
                ? `${result.created} gastos copiados; ${result.skipped} ya existían.`
                : `${result.created} gastos copiados sin importe.`);
        }
        catch (e) {
            this.error(e);
        }
        finally {
            this.saving.set(false);
        }
    }
    async save() {
        if (!this.form.description.trim() || Number(this.form.amount) <= 0) {
            this.showError('Ingresá una descripción y un importe mayor a cero.');
            return;
        }
        const payload = {
            period: `${this.period()}-01`,
            category: this.form.category,
            description: this.form.description.trim(),
            amount: Number(this.form.amount),
            observation: this.form.observation.trim(),
            payment_method: this.form.payment_method,
        };
        this.saving.set(true);
        try {
            const item = this.editing();
            if (item)
                await firstValueFrom(this.api.updateExpense(item.id, {
                    ...payload,
                    is_paid: item.is_paid,
                    paid_at: item.paid_at,
                }));
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
        }
    }
    async savePaymentStatus() {
        const item = this.selectedExpense();
        if (!item)
            return;
        if (this.detailPaid && !this.detailPaidAt) {
            this.showError('Indicá cuándo se realizó el pago.');
            return;
        }
        const payload = {
            period: item.period,
            category: item.category,
            description: item.description,
            amount: Number(item.amount),
            observation: item.observation,
            payment_method: item.payment_method,
            is_paid: this.detailPaid,
            paid_at: this.detailPaid && this.detailPaidAt ? this.toIsoDate(this.detailPaidAt) : null,
        };
        this.saving.set(true);
        try {
            const updated = await firstValueFrom(this.api.updateExpense(item.id, payload));
            this.selectedExpense.update((current) => (current ? { ...current, ...updated } : updated));
            await this.load();
            this.success('Estado de pago actualizado.');
        }
        catch (e) {
            this.error(e);
        }
        finally {
            this.saving.set(false);
        }
    }
    async uploadReceipt(event) {
        const item = this.selectedExpense();
        const file = event.files?.[0];
        if (!item || !file)
            return;
        this.uploading.set(true);
        try {
            await firstValueFrom(this.api.uploadExpenseAttachment(item.id, file));
            await this.refreshDetail(item.id);
            this.success('Comprobante adjuntado.');
        }
        catch (e) {
            this.error(e);
        }
        finally {
            this.uploading.set(false);
        }
    }
    async deleteAttachment(attachmentId) {
        const item = this.selectedExpense();
        if (!item)
            return;
        this.uploading.set(true);
        try {
            await firstValueFrom(this.api.deleteExpenseAttachment(item.id, attachmentId));
            await this.refreshDetail(item.id);
            this.success('Comprobante eliminado.');
        }
        catch (e) {
            this.error(e);
        }
        finally {
            this.uploading.set(false);
        }
    }
    askDelete(item) {
        this.toDelete.set(item);
        this.confirmVisible.set(true);
    }
    async delete() {
        const item = this.toDelete();
        if (!item)
            return;
        this.saving.set(true);
        try {
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
        }
    }
    resetFilters() {
        this.search.set('');
        this.categoryFilter.set('TODOS');
        this.paymentFilter.set('TODOS');
    }
    formatCurrency(value) {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value ?? 0));
    }
    formatMoneyInput(value) {
        return formatMoneyInput(value);
    }
    updateAmount(value) {
        const normalized = normalizeMoneyInput(value);
        if (normalized !== null)
            this.form.amount = normalized;
    }
    categoryLabel(value) {
        return { IMPUESTOS: 'Impuestos', SERVICIOS: 'Servicios', VARIOS: 'Varios' }[value];
    }
    paymentLabel(value) {
        return value === 'TRANSFERENCIA' ? 'Transferencia' : 'Efectivo';
    }
    formatDate(value) {
        return value ? new Intl.DateTimeFormat('es-AR').format(this.fromIsoDate(value)) : '—';
    }
    formatFileSize(value) {
        return value < 1024 * 1024
            ? `${Math.ceil(value / 1024)} KB`
            : `${(value / 1024 / 1024).toFixed(1)} MB`;
    }
    periodLabel() {
        const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(this.periodDate());
        return label[0].toUpperCase() + label.slice(1);
    }
    previousPeriodLabel() {
        const value = this.periodDate();
        const previous = new Date(value.getFullYear(), value.getMonth() - 1, 1);
        const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(previous);
        return label[0].toUpperCase() + label.slice(1);
    }
    period() {
        const v = this.periodDate();
        return `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(2, '0')}`;
    }
    emptyForm() {
        return {
            category: 'IMPUESTOS',
            description: '',
            amount: '',
            observation: '',
            payment_method: 'TRANSFERENCIA',
        };
    }
    async refreshDetail(id) {
        const detail = await firstValueFrom(this.api.getExpense(id));
        this.selectedExpense.set(detail);
    }
    toIsoDate(value) {
        return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
    }
    fromIsoDate(value) {
        const [year, month, day] = value.split('-').map(Number);
        return new Date(year, month - 1, day);
    }
    error(e) {
        this.showError(e instanceof HttpErrorResponse && e.error?.detail
            ? e.error.detail
            : 'Ocurrió un error inesperado.');
    }
    success(detail) {
        this.messages.add({ severity: 'success', summary: 'Correcto', detail });
    }
    showError(detail) {
        this.messages.add({ severity: 'error', summary: 'Error', detail });
    }
    static ɵfac = function Gastos_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Gastos)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Gastos, selectors: [["app-gastos"]], features: [i0.ɵɵProvidersFeature([MessageService])], decls: 167, vars: 74, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["position", "bottom-right"], [1, "expenses-page"], [1, "page-header"], [1, "eyebrow"], [1, "header-actions"], [1, "period-selector"], ["for", "expense_period"], [1, "period-navigation"], ["type", "button", "aria-label", "Mes anterior", 3, "click"], [1, "pi", "pi-chevron-left"], ["inputId", "expense_period", "view", "month", "dateFormat", "mm/yy", 3, "ngModelChange", "showIcon", "readonlyInput", "ngModel"], ["type", "button", "aria-label", "Mes siguiente", 3, "click"], [1, "pi", "pi-chevron-right"], [1, "header-buttons"], ["pButton", "", "type", "button", "severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-copy"], ["pButton", "", "type", "button", 3, "click"], [1, "pi", "pi-plus"], [1, "stats-grid"], [1, "stat-card", "taxes"], [1, "stat-icon"], [1, "pi", "pi-file"], [1, "stat-card", "services"], [1, "pi", "pi-bolt"], [1, "stat-card", "misc"], [1, "pi", "pi-box"], [1, "stat-card", "transfer"], [1, "pi", "pi-building-columns"], [1, "stat-card", "cash"], [1, "pi", "pi-money-bill"], [1, "stat-card", "total"], [1, "pi", "pi-wallet"], [1, "table-card"], [1, "table-toolbar"], ["id", "expenses-filter-toggle", "type", "checkbox", 1, "filter-toggle-input"], ["for", "expenses-filter-toggle", "title", "Mostrar u ocultar filtros", "aria-label", "Mostrar u ocultar filtros", 1, "filter-toggle"], [1, "pi", "pi-filter"], [1, "filters"], ["optionLabel", "label", "optionValue", "value", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], [1, "search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "search", "placeholder", "Buscar gasto...", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "severity", "secondary", "title", "Restablecer filtros", 3, "click", "text", "rounded"], [1, "pi", "pi-filter-slash"], ["styleClass", "mobile-card-table expenses-table", 1, "desktop-data-table", 3, "value", "loading", "paginator", "rows"], [1, "mobile-record-list"], ["tabindex", "0", 1, "mobile-record-card", "mobile-card-link"], [1, "mobile-cards-empty"], ["header", "Copiar gastos del mes anterior", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "copy-description"], [1, "copy-empty"], [1, "copy-list"], [1, "dialog-actions"], ["pButton", "", "type", "button", 3, "click", "loading", "disabled"], [3, "visibleChange", "visible", "header", "modal", "draggable", "resizable"], [1, "form", 3, "ngSubmit"], [1, "field"], ["name", "category", "optionLabel", "label", "optionValue", "value", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["pInputText", "", "name", "description", 3, "ngModelChange", "ngModel"], [1, "field", "full"], ["name", "payment_method", "optionLabel", "label", "optionValue", "value", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], [1, "money-input"], ["pInputText", "", "name", "amount", "type", "text", "inputmode", "decimal", 3, "ngModelChange", "ngModel"], ["pTextarea", "", "name", "observation", "rows", "3", "placeholder", "Opcional", 3, "ngModelChange", "ngModel"], [1, "dialog-actions", "full"], ["pButton", "", "type", "submit", 3, "loading"], ["header", "Detalle del gasto", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], ["header", "Eliminar gasto", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "confirm"], [1, "pi", "pi-exclamation-triangle"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "loading"], ["pSortableColumn", "description"], ["field", "description"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "payment_method"], ["field", "payment_method"], ["pSortableColumn", "is_paid"], ["field", "is_paid"], ["pSortableColumn", "amount"], ["field", "amount"], [1, "clickable-row", 3, "click"], [1, "category"], [1, "payment-status"], [1, "amount"], [1, "pending-amount"], [1, "actions"], ["pButton", "", "type", "button", "title", "Editar", 3, "click", "text", "rounded"], [1, "pi", "pi-pencil"], ["pButton", "", "type", "button", "severity", "danger", "title", "Eliminar", 3, "click", "text", "rounded"], [1, "pi", "pi-trash"], ["colspan", "8"], [1, "empty"], ["tabindex", "0", 1, "mobile-record-card", "mobile-card-link", 3, "click"], [1, "mobile-card-header"], [1, "mobile-card-grid"], [1, "negative"], [1, "mobile-card-total"], [1, "mobile-card-actions"], ["pButton", "", "type", "button", 3, "click", "text", "rounded"], ["pButton", "", "type", "button", "severity", "danger", 3, "click", "text", "rounded"], [1, "pi", "pi-spinner", "pi-spin"], [1, "pi", "pi-inbox"], [1, "copy-row", "copy-all"], ["type", "checkbox", 3, "change", "checked"], [1, "copy-row"], [1, "expense-detail-summary"], [1, "detail-title"], [1, "detail-amount"], [1, "detail-data-grid"], [1, "payment-panel"], [1, "paid-control"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", 3, "click", "loading"], [1, "attachments-panel"], [1, "attachments-heading"], ["mode", "basic", "chooseLabel", "Subir comprobante", "chooseIcon", "pi pi-upload", "accept", "application/pdf,image/jpeg,image/png,image/webp", 3, "uploadHandler", "customUpload", "auto", "maxFileSize", "disabled"], [1, "attachment-list"], [1, "attachments-empty"], ["dateFormat", "dd/mm/yy", "appendTo", "body", 3, "ngModelChange", "ngModel", "showIcon"], [1, "attachment-row"], ["pButton", "", "title", "Descargar", 3, "text", "rounded", "href"], [1, "pi", "pi-download"], ["pButton", "", "type", "button", "severity", "danger", "title", "Eliminar", 3, "click", "text", "rounded", "disabled"], [1, "pi", "pi-paperclip"]], template: function Gastos_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtext(26, " Copiar mes anterior ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 19);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_27_listener() { return ctx.openCreate(); });
            i0.ɵɵelement(28, "i", 20);
            i0.ɵɵtext(29, " Nuevo gasto ");
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
            i0.ɵɵtext(60, "Transferencia");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "strong");
            i0.ɵɵtext(62);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "article", 31)(64, "span", 23);
            i0.ɵɵelement(65, "i", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "div")(67, "small");
            i0.ɵɵtext(68, "Efectivo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "strong");
            i0.ɵɵtext(70);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(71, "article", 33)(72, "span", 23);
            i0.ɵɵelement(73, "i", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "div")(75, "small");
            i0.ɵɵtext(76, "Total gastos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "strong");
            i0.ɵɵtext(78);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(79, "section", 35)(80, "div", 36)(81, "div")(82, "h2");
            i0.ɵɵtext(83, "Gastos registrados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "span");
            i0.ɵɵtext(85);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(86, "input", 37);
            i0.ɵɵelementStart(87, "label", 38);
            i0.ɵɵelement(88, "i", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "div", 40)(90, "p-select", 41);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_p_select_ngModelChange_90_listener($event) { return ctx.categoryFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(91, "p-select", 41);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_p_select_ngModelChange_91_listener($event) { return ctx.paymentFilter.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(92, "span", 42);
            i0.ɵɵelement(93, "i", 43);
            i0.ɵɵelementStart(94, "input", 44);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_input_ngModelChange_94_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "button", 45);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_95_listener() { return ctx.resetFilters(); });
            i0.ɵɵelement(96, "i", 46);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(97, "p-table", 47);
            i0.ɵɵtemplate(98, Gastos_ng_template_98_Template, 21, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(100, Gastos_ng_template_100_Template, 25, 14, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(102, Gastos_ng_template_102_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 48);
            i0.ɵɵrepeaterCreate(105, Gastos_For_106_Template, 43, 13, "article", 49, _forTrack0, false, Gastos_ForEmpty_107_Template, 4, 0, "div", 50);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(108, "p-dialog", 51);
            i0.ɵɵlistener("visibleChange", function Gastos_Template_p_dialog_visibleChange_108_listener($event) { return ctx.copyVisible.set($event); });
            i0.ɵɵelementStart(109, "p", 52);
            i0.ɵɵtext(110, " Seleccion\u00E1 los gastos de ");
            i0.ɵɵelementStart(111, "strong");
            i0.ɵɵtext(112);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(113);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(114, Gastos_Conditional_114_Template, 3, 0, "div", 53)(115, Gastos_Conditional_115_Template, 4, 0, "div", 53)(116, Gastos_Conditional_116_Template, 9, 2, "div", 54);
            i0.ɵɵelementStart(117, "div", 55)(118, "button", 17);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_118_listener() { return ctx.copyVisible.set(false); });
            i0.ɵɵtext(119, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "button", 56);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_120_listener() { return ctx.copySelected(); });
            i0.ɵɵtext(121);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(122, "p-dialog", 57);
            i0.ɵɵlistener("visibleChange", function Gastos_Template_p_dialog_visibleChange_122_listener($event) { return ctx.dialogVisible.set($event); });
            i0.ɵɵelementStart(123, "form", 58);
            i0.ɵɵlistener("ngSubmit", function Gastos_Template_form_ngSubmit_123_listener() { return ctx.save(); });
            i0.ɵɵelementStart(124, "div", 59)(125, "label");
            i0.ɵɵtext(126, "Categor\u00EDa *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "p-select", 60);
            i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Template_p_select_ngModelChange_127_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.category, $event) || (ctx.form.category = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(128, "div", 59)(129, "label");
            i0.ɵɵtext(130, "Descripci\u00F3n *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "input", 61);
            i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Template_input_ngModelChange_131_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.description, $event) || (ctx.form.description = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "div", 62)(133, "label");
            i0.ɵɵtext(134, "Tipo de pago *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(135, "p-select", 63);
            i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Template_p_select_ngModelChange_135_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.payment_method, $event) || (ctx.form.payment_method = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "div", 62)(137, "label");
            i0.ɵɵtext(138, "Importe *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(139, "div", 64)(140, "span");
            i0.ɵɵtext(141, "$");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(142, "input", 65);
            i0.ɵɵlistener("ngModelChange", function Gastos_Template_input_ngModelChange_142_listener($event) { return ctx.updateAmount($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(143, "div", 62)(144, "label");
            i0.ɵɵtext(145, "Observaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(146, "textarea", 66);
            i0.ɵɵtwoWayListener("ngModelChange", function Gastos_Template_textarea_ngModelChange_146_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.form.observation, $event) || (ctx.form.observation = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "div", 67)(148, "button", 17);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_148_listener() { return ctx.dialogVisible.set(false); });
            i0.ɵɵtext(149, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(150, "button", 68);
            i0.ɵɵtext(151, "Guardar");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(152, "p-dialog", 69);
            i0.ɵɵlistener("visibleChange", function Gastos_Template_p_dialog_visibleChange_152_listener($event) { return ctx.detailVisible.set($event); });
            i0.ɵɵconditionalCreate(153, Gastos_Conditional_153_Template, 55, 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(154, "p-dialog", 70);
            i0.ɵɵlistener("visibleChange", function Gastos_Template_p_dialog_visibleChange_154_listener($event) { return ctx.confirmVisible.set($event); });
            i0.ɵɵelementStart(155, "div", 71);
            i0.ɵɵelement(156, "i", 72);
            i0.ɵɵelementStart(157, "div")(158, "strong");
            i0.ɵɵtext(159);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(160, "p");
            i0.ɵɵtext(161);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(162, "div", 55)(163, "button", 17);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_163_listener() { return ctx.confirmVisible.set(false); });
            i0.ɵɵtext(164, " Cancelar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(165, "button", 73);
            i0.ɵɵlistener("click", function Gastos_Template_button_click_165_listener() { return ctx.delete(); });
            i0.ɵɵtext(166, " Eliminar ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_68_0;
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
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.filteredTotals().transferencia));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.filteredTotals().efectivo));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.formatCurrency(ctx.filteredTotals().total));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.filteredRows().length, " resultados");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.filterOptions)("ngModel", ctx.categoryFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.paymentFilterOptions)("ngModel", ctx.paymentFilter());
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("text", true)("rounded", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.filteredRows())("loading", ctx.loading())("paginator", ctx.filteredRows().length > 10)("rows", 10);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.filteredRows());
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(70, _c0));
            i0.ɵɵproperty("visible", ctx.copyVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.previousPeriodLabel());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" que quer\u00E9s crear en ", ctx.periodLabel(), ". Los importes no se copiar\u00E1n. ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loadingPrevious() ? 114 : !ctx.previousRows().length ? 115 : 116);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving())("disabled", !ctx.selectedCopyIds().length);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" Copiar seleccionados (", ctx.selectedCopyIds().length, ") ");
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(71, _c1));
            i0.ɵɵproperty("visible", ctx.dialogVisible())("header", ctx.editing() ? "Editar gasto" : "Nuevo gasto")("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.categoryOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.category);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.description);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("options", ctx.paymentOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.payment_method);
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
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(72, _c2));
            i0.ɵɵproperty("visible", ctx.detailVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_68_0 = ctx.selectedExpense()) ? 153 : -1, tmp_68_0);
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(73, _c3));
            i0.ɵɵproperty("visible", ctx.confirmVisible())("modal", true)("draggable", false)("resizable", false);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("\u00BFEliminar ", ctx.toDelete()?.description, "?");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.formatCurrency(ctx.toDelete()?.amount), " dejar\u00E1 de formar parte del total mensual.");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("outlined", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loading", ctx.saving());
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, ButtonDirective,
            DatePicker,
            Dialog,
            FileUpload,
            InputText,
            Select,
            TableModule, i2.Table, i2.SortableColumn, i2.SortIcon, Textarea,
            Toast], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.expenses-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n  color: #18181b;\n}\n.page-header[_ngcontent-%COMP%], \n.stats-grid[_ngcontent-%COMP%], \n.table-card[_ngcontent-%COMP%] {\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 4px 0 6px;\n  font-size: 2rem;\n  letter-spacing: -0.035em;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #71717a;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n}\n.header-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.period-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #52525b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.period-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-navigation[_ngcontent-%COMP%]   p-datepicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 180px;\n  margin: 0 4px;\n}\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  color: #7e22ce;\n  background: #fff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n}\n.period-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background: #faf5ff;\n  border-color: #a855f7;\n}\n[_nghost-%COMP%]     .period-selector .p-datepicker {\n  width: 180px;\n}\n[_nghost-%COMP%]     .period-selector .p-datepicker-input {\n  width: 1%;\n  min-width: 0;\n  flex: 1;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #71717a;\n  margin-bottom: 3px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n}\n.taxes[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.services[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.misc[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #52525b;\n  background: #f4f4f5;\n}\n.transfer[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.cash[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #15803d;\n  background: #dcfce7;\n}\n.total[_ngcontent-%COMP%] {\n  border-color: #e9b7f5;\n  background: #fffaff;\n}\n.total[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  color: #9810d5;\n  background: #f7dcfb;\n}\n.table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.table-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.table-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.table-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.76rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%);\n  color: #a1a1aa;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 240px;\n  padding-left: 36px;\n}\n.amount[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 700;\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable-row[_ngcontent-%COMP%]:hover {\n  background: #faf5ff !important;\n}\n.payment-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 5px 9px;\n  color: #a16207;\n  background: #fef3c7;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.payment-status.paid[_ngcontent-%COMP%] {\n  color: #15803d;\n  background: #dcfce7;\n}\n.expense-detail-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.detail-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 4px;\n  font-size: 1.2rem;\n}\n.detail-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #71717a;\n}\n.detail-amount[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 1.3rem;\n  white-space: nowrap;\n}\n.detail-data-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1px;\n  margin: 18px 0;\n  overflow: hidden;\n  background: #e4e4e7;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n.detail-data-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 72px;\n  padding: 12px;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n.detail-data-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.7rem;\n}\n.detail-data-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n}\n.paid-text[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.payment-panel[_ngcontent-%COMP%], \n.attachments-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n.payment-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.payment-panel[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  min-width: 190px;\n  flex: 1;\n}\n.paid-control[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 240px;\n  flex: 2;\n  align-items: center;\n  gap: 11px;\n  cursor: pointer;\n}\n.paid-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #9810d5;\n}\n.paid-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.paid-control[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.72rem;\n}\n.attachments-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.attachments-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-size: 0.95rem;\n}\n.attachments-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.75rem;\n}\n.attachment-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin-top: 14px;\n}\n.attachment-row[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 10px;\n}\n.attachment-row[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #9810d5;\n  font-size: 1.2rem;\n}\n.attachment-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  flex-direction: column;\n  gap: 2px;\n}\n.attachment-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.8rem;\n}\n.attachment-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.68rem;\n}\n.attachments-empty[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.pending-amount[_ngcontent-%COMP%] {\n  color: #a16207;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.category[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 5px 9px;\n  border-radius: 999px;\n  background: #f4f4f5;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.category[data-category='IMPUESTOS'][_ngcontent-%COMP%] {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.category[data-category='SERVICIOS'][_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 6px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   p-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.money-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.money-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  z-index: 2;\n  color: #71717a;\n  transform: translateY(-50%);\n}\n.money-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.confirm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirm[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.3rem;\n}\n.confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.82rem;\n}\n.copy-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #52525b;\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.copy-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n.copy-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 12px;\n  min-height: 56px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f4f4f5;\n  cursor: pointer;\n}\n.copy-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.copy-row[_ngcontent-%COMP%]:hover {\n  background: #faf5ff;\n}\n.copy-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  accent-color: #9810d5;\n}\n.copy-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 2px;\n}\n.copy-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.72rem;\n}\n.copy-all[_ngcontent-%COMP%] {\n  min-height: 48px;\n  background: #fafafa;\n  font-weight: 700;\n}\n.copy-empty[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 150px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 8px;\n  color: #71717a;\n}\n@media (max-width: 1000px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .expenses-page[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n  .page-header[_ngcontent-%COMP%], \n   .table-toolbar[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .stats-grid[_ngcontent-%COMP%], \n   .form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .full[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .expense-detail-summary[_ngcontent-%COMP%], \n   .attachments-heading[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .detail-amount[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .detail-data-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .payment-panel[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .paid-control[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .attachments-heading[_ngcontent-%COMP%]   p-fileupload[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Gastos, [{
        type: Component,
        args: [{ selector: 'app-gastos', imports: [
                    FormsModule,
                    ButtonDirective,
                    DatePicker,
                    Dialog,
                    FileUpload,
                    InputText,
                    Select,
                    TableModule,
                    Textarea,
                    Toast,
                ], providers: [MessageService], template: "<p-toast position=\"bottom-right\" />\n<section class=\"expenses-page\">\n  <header class=\"page-header\">\n    <div>\n      <span class=\"eyebrow\">Finanzas</span>\n      <h1>Gastos</h1>\n      <p>\n        Gastos correspondientes a <strong>{{ periodLabel() }}</strong\n        >.\n      </p>\n    </div>\n    <div class=\"header-actions\">\n      <div class=\"period-selector\">\n        <label for=\"expense_period\">Per\u00EDodo</label>\n        <div class=\"period-navigation\">\n          <button type=\"button\" aria-label=\"Mes anterior\" (click)=\"movePeriod(-1)\">\n            <i class=\"pi pi-chevron-left\"></i></button\n          ><p-datepicker\n            inputId=\"expense_period\"\n            view=\"month\"\n            dateFormat=\"mm/yy\"\n            [showIcon]=\"true\"\n            [readonlyInput]=\"true\"\n            [ngModel]=\"periodDate()\"\n            (ngModelChange)=\"changePeriod($event)\"\n          /><button type=\"button\" aria-label=\"Mes siguiente\" (click)=\"movePeriod(1)\">\n            <i class=\"pi pi-chevron-right\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"header-buttons\">\n        <button\n          pButton\n          type=\"button\"\n          severity=\"secondary\"\n          [outlined]=\"true\"\n          (click)=\"openCopyPrevious()\"\n        >\n          <i class=\"pi pi-copy\"></i> Copiar mes anterior\n        </button>\n        <button pButton type=\"button\" (click)=\"openCreate()\">\n          <i class=\"pi pi-plus\"></i> Nuevo gasto\n        </button>\n      </div>\n    </div>\n  </header>\n  <section class=\"stats-grid\">\n    <article class=\"stat-card taxes\">\n      <span class=\"stat-icon\"><i class=\"pi pi-file\"></i></span>\n      <div>\n        <small>Impuestos</small><strong>{{ formatCurrency(filteredTotals().impuestos) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card services\">\n      <span class=\"stat-icon\"><i class=\"pi pi-bolt\"></i></span>\n      <div>\n        <small>Servicios</small><strong>{{ formatCurrency(filteredTotals().servicios) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card misc\">\n      <span class=\"stat-icon\"><i class=\"pi pi-box\"></i></span>\n      <div>\n        <small>Varios</small><strong>{{ formatCurrency(filteredTotals().varios) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card transfer\">\n      <span class=\"stat-icon\"><i class=\"pi pi-building-columns\"></i></span>\n      <div>\n        <small>Transferencia</small\n        ><strong>{{ formatCurrency(filteredTotals().transferencia) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card cash\">\n      <span class=\"stat-icon\"><i class=\"pi pi-money-bill\"></i></span>\n      <div>\n        <small>Efectivo</small><strong>{{ formatCurrency(filteredTotals().efectivo) }}</strong>\n      </div>\n    </article>\n    <article class=\"stat-card total\">\n      <span class=\"stat-icon\"><i class=\"pi pi-wallet\"></i></span>\n      <div>\n        <small>Total gastos</small><strong>{{ formatCurrency(filteredTotals().total) }}</strong>\n      </div>\n    </article>\n  </section>\n  <section class=\"table-card\">\n    <div class=\"table-toolbar\">\n      <div>\n        <h2>Gastos registrados</h2>\n        <span>{{ filteredRows().length }} resultados</span>\n      </div>\n      <input id=\"expenses-filter-toggle\" class=\"filter-toggle-input\" type=\"checkbox\" />\n      <label\n        for=\"expenses-filter-toggle\"\n        class=\"filter-toggle\"\n        title=\"Mostrar u ocultar filtros\"\n        aria-label=\"Mostrar u ocultar filtros\"\n        ><i class=\"pi pi-filter\"></i\n      ></label>\n      <div class=\"filters\">\n        <p-select\n          [options]=\"filterOptions\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"categoryFilter()\"\n          (ngModelChange)=\"categoryFilter.set($event)\"\n          appendTo=\"body\"\n        /><p-select\n          [options]=\"paymentFilterOptions\"\n          optionLabel=\"label\"\n          optionValue=\"value\"\n          [ngModel]=\"paymentFilter()\"\n          (ngModelChange)=\"paymentFilter.set($event)\"\n          appendTo=\"body\"\n        /><span class=\"search\"\n          ><i class=\"pi pi-search\"></i\n          ><input\n            pInputText\n            type=\"search\"\n            placeholder=\"Buscar gasto...\"\n            [ngModel]=\"search()\"\n            (ngModelChange)=\"search.set($event)\" /></span\n        ><button\n          pButton\n          type=\"button\"\n          [text]=\"true\"\n          [rounded]=\"true\"\n          severity=\"secondary\"\n          title=\"Restablecer filtros\"\n          (click)=\"resetFilters()\"\n        >\n          <i class=\"pi pi-filter-slash\"></i>\n        </button>\n      </div>\n    </div>\n    <p-table\n      class=\"desktop-data-table\"\n      [value]=\"filteredRows()\"\n      [loading]=\"loading()\"\n      [paginator]=\"filteredRows().length > 10\"\n      [rows]=\"10\"\n      styleClass=\"mobile-card-table expenses-table\"\n      ><ng-template #header\n        ><tr>\n          <th pSortableColumn=\"description\">Descripci\u00F3n <p-sort-icon field=\"description\" /></th>\n          <th pSortableColumn=\"category\">Categor\u00EDa <p-sort-icon field=\"category\" /></th>\n          <th>Per\u00EDodo</th>\n          <th>Observaci\u00F3n</th>\n          <th pSortableColumn=\"payment_method\">\n            Tipo de pago <p-sort-icon field=\"payment_method\" />\n          </th>\n          <th pSortableColumn=\"is_paid\">Estado <p-sort-icon field=\"is_paid\" /></th>\n          <th pSortableColumn=\"amount\">Importe <p-sort-icon field=\"amount\" /></th>\n          <th></th></tr></ng-template\n      ><ng-template #body let-item\n        ><tr class=\"clickable-row\" (click)=\"openDetail(item)\">\n          <td>\n            <strong>{{ item.description }}</strong>\n          </td>\n          <td>\n            <span class=\"category\" [attr.data-category]=\"item.category\">{{\n              categoryLabel(item.category)\n            }}</span>\n          </td>\n          <td>{{ periodLabel() }}</td>\n          <td>{{ item.observation || '\u2014' }}</td>\n          <td>{{ paymentLabel(item.payment_method) }}</td>\n          <td>\n            <span class=\"payment-status\" [class.paid]=\"item.is_paid\">{{\n              item.is_paid ? 'Pagado' : 'Pendiente'\n            }}</span>\n          </td>\n          <td class=\"amount\">\n            @if (item.amount !== null) {\n              {{ formatCurrency(item.amount) }}\n            } @else {\n              <span class=\"pending-amount\">Sin cargar</span>\n            }\n          </td>\n          <td>\n            <div class=\"actions\">\n              <button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                title=\"Editar\"\n                (click)=\"$event.stopPropagation(); openEdit(item)\"\n              >\n                <i class=\"pi pi-pencil\"></i></button\n              ><button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                severity=\"danger\"\n                title=\"Eliminar\"\n                (click)=\"$event.stopPropagation(); askDelete(item)\"\n              >\n                <i class=\"pi pi-trash\"></i>\n              </button>\n            </div>\n          </td></tr></ng-template\n      ><ng-template #emptymessage\n        ><tr>\n          <td colspan=\"8\">\n            <div class=\"empty\">\n              <i class=\"pi pi-wallet\"></i><strong>No hay gastos en este per\u00EDodo</strong\n              ><span>Agreg\u00E1 el primero para comenzar.</span>\n            </div>\n          </td>\n        </tr></ng-template\n      ></p-table\n    >\n    <div class=\"mobile-record-list\">\n      @for (item of filteredRows(); track item.id) {\n        <article\n          class=\"mobile-record-card mobile-card-link\"\n          tabindex=\"0\"\n          (click)=\"openDetail(item)\"\n        >\n          <header class=\"mobile-card-header\">\n            <div>\n              <strong>{{ item.description }}</strong\n              ><small>{{ item.observation || 'Sin observaci\u00F3n' }}</small>\n            </div>\n            <span class=\"category\" [attr.data-category]=\"item.category\">{{\n              categoryLabel(item.category)\n            }}</span>\n          </header>\n          <div class=\"mobile-card-grid\">\n            <div>\n              <small>Per\u00EDodo</small><strong>{{ periodLabel() }}</strong>\n            </div>\n            <div>\n              <small>Tipo de pago</small><strong>{{ paymentLabel(item.payment_method) }}</strong>\n            </div>\n            <div>\n              <small>Estado</small><strong>{{ item.is_paid ? 'Pagado' : 'Pendiente' }}</strong>\n            </div>\n            <div>\n              <small>Importe</small>\n              @if (item.amount !== null) {\n                <strong class=\"negative\">{{ formatCurrency(item.amount) }}</strong>\n              } @else {\n                <strong class=\"pending-amount\">Sin cargar</strong>\n              }\n            </div>\n          </div>\n          <div class=\"mobile-card-total\">\n            <span>Importe total</span\n            ><strong class=\"negative\">{{\n              item.amount !== null ? formatCurrency(item.amount) : 'Sin cargar'\n            }}</strong\n            ><i class=\"pi pi-chevron-right\"></i>\n          </div>\n          <footer class=\"mobile-card-actions\">\n            <button\n              pButton\n              type=\"button\"\n              [text]=\"true\"\n              [rounded]=\"true\"\n              (click)=\"$event.stopPropagation(); openEdit(item)\"\n            >\n              <i class=\"pi pi-pencil\"></i> Editar</button\n            ><button\n              pButton\n              type=\"button\"\n              [text]=\"true\"\n              [rounded]=\"true\"\n              severity=\"danger\"\n              (click)=\"$event.stopPropagation(); askDelete(item)\"\n            >\n              <i class=\"pi pi-trash\"></i> Eliminar\n            </button>\n          </footer>\n        </article>\n      } @empty {\n        <div class=\"mobile-cards-empty\">\n          <i class=\"pi pi-wallet\"></i><strong>No hay gastos</strong>\n        </div>\n      }\n    </div>\n  </section>\n</section>\n<p-dialog\n  [visible]=\"copyVisible()\"\n  (visibleChange)=\"copyVisible.set($event)\"\n  header=\"Copiar gastos del mes anterior\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(700px, calc(100vw - 32px))' }\"\n>\n  <p class=\"copy-description\">\n    Seleccion\u00E1 los gastos de <strong>{{ previousPeriodLabel() }}</strong> que quer\u00E9s crear en\n    {{ periodLabel() }}. Los importes no se copiar\u00E1n.\n  </p>\n  @if (loadingPrevious()) {\n    <div class=\"copy-empty\"><i class=\"pi pi-spinner pi-spin\"></i> Cargando gastos...</div>\n  } @else if (!previousRows().length) {\n    <div class=\"copy-empty\">\n      <i class=\"pi pi-inbox\"></i><strong>No hay gastos en el per\u00EDodo anterior</strong>\n    </div>\n  } @else {\n    <div class=\"copy-list\">\n      <label class=\"copy-row copy-all\"\n        ><input\n          type=\"checkbox\"\n          [checked]=\"allPreviousSelected()\"\n          (change)=\"toggleAllPrevious($any($event.target).checked)\"\n        /><span>Seleccionar todos</span><small>{{ previousRows().length }} gastos</small></label\n      >\n      @for (item of previousRows(); track item.id) {\n        <label class=\"copy-row\"\n          ><input\n            type=\"checkbox\"\n            [checked]=\"selectedCopyIds().includes(item.id)\"\n            (change)=\"toggleCopy(item.id, $any($event.target).checked)\"\n          /><span\n            ><strong>{{ item.description }}</strong>\n            @if (item.observation) {\n              <small>{{ item.observation }}</small>\n            }</span\n          ><span class=\"category\" [attr.data-category]=\"item.category\">{{\n            categoryLabel(item.category)\n          }}</span></label\n        >\n      }\n    </div>\n  }\n  <div class=\"dialog-actions\">\n    <button\n      pButton\n      type=\"button\"\n      severity=\"secondary\"\n      [outlined]=\"true\"\n      (click)=\"copyVisible.set(false)\"\n    >\n      Cancelar</button\n    ><button\n      pButton\n      type=\"button\"\n      [loading]=\"saving()\"\n      [disabled]=\"!selectedCopyIds().length\"\n      (click)=\"copySelected()\"\n    >\n      Copiar seleccionados ({{ selectedCopyIds().length }})\n    </button>\n  </div>\n</p-dialog>\n<p-dialog\n  [visible]=\"dialogVisible()\"\n  (visibleChange)=\"dialogVisible.set($event)\"\n  [header]=\"editing() ? 'Editar gasto' : 'Nuevo gasto'\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(580px, calc(100vw - 32px))' }\"\n  ><form class=\"form\" (ngSubmit)=\"save()\">\n    <div class=\"field\">\n      <label>Categor\u00EDa *</label\n      ><p-select\n        name=\"category\"\n        [options]=\"categoryOptions\"\n        optionLabel=\"label\"\n        optionValue=\"value\"\n        [(ngModel)]=\"form.category\"\n        appendTo=\"body\"\n      />\n    </div>\n    <div class=\"field\">\n      <label>Descripci\u00F3n *</label\n      ><input pInputText name=\"description\" [(ngModel)]=\"form.description\" />\n    </div>\n    <div class=\"field full\">\n      <label>Tipo de pago *</label>\n      <p-select\n        name=\"payment_method\"\n        [options]=\"paymentOptions\"\n        optionLabel=\"label\"\n        optionValue=\"value\"\n        [(ngModel)]=\"form.payment_method\"\n        appendTo=\"body\"\n      />\n    </div>\n    <div class=\"field full\">\n      <label>Importe *</label>\n      <div class=\"money-input\">\n        <span>$</span\n        ><input\n          pInputText\n          name=\"amount\"\n          type=\"text\"\n          inputmode=\"decimal\"\n          [ngModel]=\"formatMoneyInput(form.amount)\"\n          (ngModelChange)=\"updateAmount($event)\"\n        />\n      </div>\n    </div>\n    <div class=\"field full\">\n      <label>Observaci\u00F3n</label\n      ><textarea\n        pTextarea\n        name=\"observation\"\n        [(ngModel)]=\"form.observation\"\n        rows=\"3\"\n        placeholder=\"Opcional\"\n      ></textarea>\n    </div>\n    <div class=\"dialog-actions full\">\n      <button\n        pButton\n        type=\"button\"\n        severity=\"secondary\"\n        [outlined]=\"true\"\n        (click)=\"dialogVisible.set(false)\"\n      >\n        Cancelar</button\n      ><button pButton type=\"submit\" [loading]=\"saving()\">Guardar</button>\n    </div>\n  </form></p-dialog\n>\n<p-dialog\n  [visible]=\"detailVisible()\"\n  (visibleChange)=\"detailVisible.set($event)\"\n  header=\"Detalle del gasto\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(760px, calc(100vw - 24px))' }\"\n>\n  @if (selectedExpense(); as item) {\n    <div class=\"expense-detail-summary\">\n      <div class=\"detail-title\">\n        <span class=\"category\" [attr.data-category]=\"item.category\">{{\n          categoryLabel(item.category)\n        }}</span>\n        <h3>{{ item.description }}</h3>\n        <p>{{ item.observation || 'Sin observaci\u00F3n' }}</p>\n      </div>\n      <strong class=\"detail-amount\">{{ formatCurrency(item.amount) }}</strong>\n    </div>\n    <div class=\"detail-data-grid\">\n      <div>\n        <small>Per\u00EDodo</small><strong>{{ periodLabel() }}</strong>\n      </div>\n      <div>\n        <small>Tipo de pago</small><strong>{{ paymentLabel(item.payment_method) }}</strong>\n      </div>\n      <div>\n        <small>Estado</small\n        ><strong [class.paid-text]=\"item.is_paid\">{{\n          item.is_paid ? 'Pagado' : 'Pendiente'\n        }}</strong>\n      </div>\n      <div>\n        <small>Fecha de pago</small><strong>{{ formatDate(item.paid_at) }}</strong>\n      </div>\n    </div>\n    <section class=\"payment-panel\">\n      <label class=\"paid-control\"\n        ><input type=\"checkbox\" [(ngModel)]=\"detailPaid\" /><span\n          ><strong>El gasto est\u00E1 pagado</strong\n          ><small>Activ\u00E1 esta opci\u00F3n cuando el pago se haya realizado.</small></span\n        ></label\n      >\n      @if (detailPaid) {\n        <div class=\"field\">\n          <label>\u00BFCu\u00E1ndo se pag\u00F3? *</label\n          ><p-datepicker\n            [(ngModel)]=\"detailPaidAt\"\n            dateFormat=\"dd/mm/yy\"\n            [showIcon]=\"true\"\n            appendTo=\"body\"\n          />\n        </div>\n      }\n      <button pButton type=\"button\" [loading]=\"saving()\" (click)=\"savePaymentStatus()\">\n        Guardar estado\n      </button>\n    </section>\n    <section class=\"attachments-panel\">\n      <div class=\"attachments-heading\">\n        <div>\n          <h3>Comprobantes</h3>\n          <span>{{ item.attachments?.length || 0 }} archivos adjuntos</span>\n        </div>\n        <p-fileupload\n          mode=\"basic\"\n          chooseLabel=\"Subir comprobante\"\n          chooseIcon=\"pi pi-upload\"\n          [customUpload]=\"true\"\n          [auto]=\"true\"\n          accept=\"application/pdf,image/jpeg,image/png,image/webp\"\n          [maxFileSize]=\"10000000\"\n          [disabled]=\"uploading()\"\n          (uploadHandler)=\"uploadReceipt($event)\"\n        />\n      </div>\n      @if (item.attachments?.length) {\n        <div class=\"attachment-list\">\n          @for (attachment of item.attachments; track attachment.id) {\n            <div class=\"attachment-row\">\n              <i\n                [class]=\"\n                  attachment.content_type === 'application/pdf' ? 'pi pi-file-pdf' : 'pi pi-image'\n                \"\n              ></i>\n              <div>\n                <strong>{{ attachment.name }}</strong\n                ><small>{{ formatFileSize(attachment.size) }}</small>\n              </div>\n              <a\n                pButton\n                [text]=\"true\"\n                [rounded]=\"true\"\n                [href]=\"attachment.download_url\"\n                title=\"Descargar\"\n                ><i class=\"pi pi-download\"></i></a\n              ><button\n                pButton\n                type=\"button\"\n                [text]=\"true\"\n                [rounded]=\"true\"\n                severity=\"danger\"\n                title=\"Eliminar\"\n                [disabled]=\"uploading()\"\n                (click)=\"deleteAttachment(attachment.id)\"\n              >\n                <i class=\"pi pi-trash\"></i>\n              </button>\n            </div>\n          }\n        </div>\n      } @else {\n        <div class=\"attachments-empty\">\n          <i class=\"pi pi-paperclip\"></i><span>Este gasto todav\u00EDa no tiene comprobantes.</span>\n        </div>\n      }\n    </section>\n    <div class=\"dialog-actions\">\n      <button\n        pButton\n        type=\"button\"\n        severity=\"secondary\"\n        [outlined]=\"true\"\n        (click)=\"detailVisible.set(false)\"\n      >\n        Cerrar\n      </button>\n    </div>\n  }\n</p-dialog>\n<p-dialog\n  [visible]=\"confirmVisible()\"\n  (visibleChange)=\"confirmVisible.set($event)\"\n  header=\"Eliminar gasto\"\n  [modal]=\"true\"\n  [draggable]=\"false\"\n  [resizable]=\"false\"\n  [style]=\"{ width: 'min(450px, calc(100vw - 32px))' }\"\n  ><div class=\"confirm\">\n    <i class=\"pi pi-exclamation-triangle\"></i>\n    <div>\n      <strong>\u00BFEliminar {{ toDelete()?.description }}?</strong>\n      <p>{{ formatCurrency(toDelete()?.amount) }} dejar\u00E1 de formar parte del total mensual.</p>\n    </div>\n  </div>\n  <div class=\"dialog-actions\">\n    <button\n      pButton\n      type=\"button\"\n      severity=\"secondary\"\n      [outlined]=\"true\"\n      (click)=\"confirmVisible.set(false)\"\n    >\n      Cancelar</button\n    ><button pButton type=\"button\" severity=\"danger\" [loading]=\"saving()\" (click)=\"delete()\">\n      Eliminar\n    </button>\n  </div></p-dialog\n>\n", styles: [":host {\n  display: block;\n}\n.expenses-page {\n  min-height: calc(100vh - 72px);\n  padding: 32px 32px 48px 96px;\n  background: #f8fafc;\n  color: #18181b;\n}\n.page-header,\n.stats-grid,\n.table-card {\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.eyebrow {\n  color: #9810d5;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\nh1 {\n  margin: 4px 0 6px;\n  font-size: 2rem;\n  letter-spacing: -0.035em;\n}\n.page-header p {\n  margin: 0;\n  color: #71717a;\n}\n.header-actions {\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n}\n.header-buttons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.period-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.period-selector label {\n  color: #52525b;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.period-navigation {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.period-navigation p-datepicker {\n  display: inline-flex;\n  width: 180px;\n  margin: 0 4px;\n}\n.period-navigation > button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  color: #7e22ce;\n  background: #fff;\n  border: 1px solid #d8b4fe;\n  border-radius: 9px;\n}\n.period-navigation > button:hover {\n  background: #faf5ff;\n  border-color: #a855f7;\n}\n:host ::ng-deep .period-selector .p-datepicker {\n  width: 180px;\n}\n:host ::ng-deep .period-selector .p-datepicker-input {\n  width: 1%;\n  min-width: 0;\n  flex: 1;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.stat-card small {\n  display: block;\n  color: #71717a;\n  margin-bottom: 3px;\n}\n.stat-icon {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n}\n.taxes .stat-icon {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.services .stat-icon {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.misc .stat-icon {\n  color: #52525b;\n  background: #f4f4f5;\n}\n.transfer .stat-icon {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.cash .stat-icon {\n  color: #15803d;\n  background: #dcfce7;\n}\n.total {\n  border-color: #e9b7f5;\n  background: #fffaff;\n}\n.total .stat-icon {\n  color: #9810d5;\n  background: #f7dcfb;\n}\n.table-card {\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 14px;\n}\n.table-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.table-toolbar h2 {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.table-toolbar span {\n  color: #71717a;\n  font-size: 0.76rem;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.search {\n  position: relative;\n}\n.search i {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  z-index: 1;\n  transform: translateY(-50%);\n  color: #a1a1aa;\n}\n.search input {\n  width: 240px;\n  padding-left: 36px;\n}\n.amount {\n  color: #b91c1c;\n  font-weight: 700;\n}\n.clickable-row {\n  cursor: pointer;\n}\n.clickable-row:hover {\n  background: #faf5ff !important;\n}\n.payment-status {\n  display: inline-flex;\n  padding: 5px 9px;\n  color: #a16207;\n  background: #fef3c7;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.payment-status.paid {\n  color: #15803d;\n  background: #dcfce7;\n}\n.expense-detail-summary {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid #e4e4e7;\n}\n.detail-title h3 {\n  margin: 10px 0 4px;\n  font-size: 1.2rem;\n}\n.detail-title p {\n  margin: 0;\n  color: #71717a;\n}\n.detail-amount {\n  color: #b91c1c;\n  font-size: 1.3rem;\n  white-space: nowrap;\n}\n.detail-data-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1px;\n  margin: 18px 0;\n  overflow: hidden;\n  background: #e4e4e7;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n.detail-data-grid > div {\n  display: flex;\n  min-height: 72px;\n  padding: 12px;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n.detail-data-grid small {\n  color: #71717a;\n  font-size: 0.7rem;\n}\n.detail-data-grid strong {\n  font-size: 0.84rem;\n}\n.paid-text {\n  color: #15803d;\n}\n.payment-panel,\n.attachments-panel {\n  margin-top: 16px;\n  padding: 16px;\n  background: #fafafa;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n.payment-panel {\n  display: flex;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.payment-panel .field {\n  min-width: 190px;\n  flex: 1;\n}\n.paid-control {\n  display: flex;\n  min-width: 240px;\n  flex: 2;\n  align-items: center;\n  gap: 11px;\n  cursor: pointer;\n}\n.paid-control input {\n  width: 18px;\n  height: 18px;\n  accent-color: #9810d5;\n}\n.paid-control span {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.paid-control small {\n  color: #71717a;\n  font-size: 0.72rem;\n}\n.attachments-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.attachments-heading h3 {\n  margin: 0 0 3px;\n  font-size: 0.95rem;\n}\n.attachments-heading span {\n  color: #71717a;\n  font-size: 0.75rem;\n}\n.attachment-list {\n  display: grid;\n  gap: 8px;\n  margin-top: 14px;\n}\n.attachment-row {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  background: #fff;\n  border: 1px solid #e4e4e7;\n  border-radius: 10px;\n}\n.attachment-row > i {\n  color: #9810d5;\n  font-size: 1.2rem;\n}\n.attachment-row > div {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  flex-direction: column;\n  gap: 2px;\n}\n.attachment-row strong {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.8rem;\n}\n.attachment-row small {\n  color: #71717a;\n  font-size: 0.68rem;\n}\n.attachments-empty {\n  display: flex;\n  min-height: 100px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.pending-amount {\n  color: #a16207;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.category {\n  display: inline-flex;\n  padding: 5px 9px;\n  border-radius: 999px;\n  background: #f4f4f5;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.category[data-category='IMPUESTOS'] {\n  color: #c2410c;\n  background: #ffedd5;\n}\n.category[data-category='SERVICIOS'] {\n  color: #2563eb;\n  background: #dbeafe;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.empty {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 7px;\n  color: #71717a;\n}\n.form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.field {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 6px;\n}\n.field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.field input,\n.field textarea,\n.field p-select {\n  width: 100%;\n}\n.full {\n  grid-column: 1/-1;\n}\n.money-input {\n  position: relative;\n}\n.money-input span {\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  z-index: 2;\n  color: #71717a;\n  transform: translateY(-50%);\n}\n.money-input input {\n  padding-left: 28px;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.confirm {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.confirm > i {\n  color: #dc2626;\n  font-size: 1.3rem;\n}\n.confirm p {\n  color: #71717a;\n  font-size: 0.82rem;\n}\n.copy-description {\n  margin: 0 0 16px;\n  color: #52525b;\n  font-size: 0.84rem;\n  line-height: 1.5;\n}\n.copy-list {\n  overflow: hidden;\n  border: 1px solid #e4e4e7;\n  border-radius: 12px;\n}\n.copy-row {\n  display: grid;\n  grid-template-columns: 20px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 12px;\n  min-height: 56px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f4f4f5;\n  cursor: pointer;\n}\n.copy-row:last-child {\n  border-bottom: 0;\n}\n.copy-row:hover {\n  background: #faf5ff;\n}\n.copy-row input {\n  width: 17px;\n  height: 17px;\n  accent-color: #9810d5;\n}\n.copy-row > span:nth-child(2) {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 2px;\n}\n.copy-row small {\n  color: #71717a;\n  font-size: 0.72rem;\n}\n.copy-all {\n  min-height: 48px;\n  background: #fafafa;\n  font-weight: 700;\n}\n.copy-empty {\n  display: flex;\n  min-height: 150px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 8px;\n  color: #71717a;\n}\n@media (max-width: 1000px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .header-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .expenses-page {\n    min-height: calc(100vh - 64px);\n    padding: 22px 16px 36px 80px;\n  }\n  .page-header,\n  .table-toolbar,\n  .filters {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .stats-grid,\n  .form {\n    grid-template-columns: 1fr;\n  }\n  .full {\n    grid-column: auto;\n  }\n  .search input {\n    width: 100%;\n  }\n  .expense-detail-summary,\n  .attachments-heading {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .detail-amount {\n    align-self: flex-start;\n  }\n  .detail-data-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .payment-panel {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .paid-control {\n    min-width: 0;\n  }\n  .attachments-heading p-fileupload {\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Gastos, { className: "Gastos", filePath: "src/app/pages/gastos/gastos.ts", lineNumber: 42 }); })();
