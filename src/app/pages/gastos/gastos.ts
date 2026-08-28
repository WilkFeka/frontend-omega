import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
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
import { Expense, ExpenseCategory, ExpenseRequest } from '../../models/expense.model';
import { Api } from '../../services/api';
import { formatMoneyInput, normalizeMoneyInput } from '../../utils/money-input';

@Component({ selector: 'app-gastos', imports: [FormsModule, ButtonDirective, DatePicker, Dialog, InputText, Select, TableModule, Textarea, Toast], providers: [MessageService], templateUrl: './gastos.html', styleUrl: './gastos.scss' })
export class Gastos implements OnInit {
  private readonly api = inject(Api); private readonly messages = inject(MessageService);
  readonly rows = signal<Expense[]>([]); readonly loading = signal(false); readonly saving = signal(false); readonly search = signal(''); readonly categoryFilter = signal<'TODOS' | ExpenseCategory>('TODOS');
  readonly total = signal('0'); readonly totals = signal<Record<ExpenseCategory, string>>({ IMPUESTOS: '0', SERVICIOS: '0', VARIOS: '0' });
  readonly periodDate = signal(new Date(new Date().getFullYear(), new Date().getMonth(), 1)); readonly dialogVisible = signal(false); readonly confirmVisible = signal(false); readonly editing = signal<Expense | null>(null); readonly toDelete = signal<Expense | null>(null);
  readonly copyVisible = signal(false); readonly previousRows = signal<Expense[]>([]); readonly selectedCopyIds = signal<number[]>([]); readonly loadingPrevious = signal(false);
  form: { category: ExpenseCategory; description: string; amount: string; observation: string } = this.emptyForm();
  readonly categoryOptions = [{ label: 'Impuestos', value: 'IMPUESTOS' }, { label: 'Servicios', value: 'SERVICIOS' }, { label: 'Varios', value: 'VARIOS' }];
  readonly filterOptions = [{ label: 'Todas las categorías', value: 'TODOS' }, ...this.categoryOptions];
  readonly filteredRows = computed(() => { const term = this.search().trim().toLocaleLowerCase('es'); return this.rows().filter(item => (this.categoryFilter() === 'TODOS' || item.category === this.categoryFilter()) && (!term || `${item.description} ${item.observation}`.toLocaleLowerCase('es').includes(term))); });
  readonly filteredTotals = computed(() => { const rows = this.filteredRows(); const by = (category: ExpenseCategory) => rows.filter(item => item.category === category).reduce((sum, item) => sum + Number(item.amount ?? 0), 0); const impuestos = by('IMPUESTOS'), servicios = by('SERVICIOS'), varios = by('VARIOS'); return { impuestos, servicios, varios, total: impuestos + servicios + varios }; });
  readonly allPreviousSelected = computed(() => this.previousRows().length > 0 && this.selectedCopyIds().length === this.previousRows().length);
  ngOnInit(): void { void this.load(); }
  async load(): Promise<void> { this.loading.set(true); try { const response = await firstValueFrom(this.api.getExpenses(this.period())); this.rows.set(response.expenses); this.total.set(response.total); this.totals.set(response.totals); } catch (e) { this.error(e); } finally { this.loading.set(false); } }
  changePeriod(value: Date): void { if (!value) return; this.periodDate.set(new Date(value.getFullYear(), value.getMonth(), 1)); void this.load(); }
  movePeriod(offset: number): void { const v = this.periodDate(); this.changePeriod(new Date(v.getFullYear(), v.getMonth() + offset, 1)); }
  openCreate(): void { this.editing.set(null); this.form = this.emptyForm(); this.dialogVisible.set(true); }
  openEdit(item: Expense): void { this.editing.set(item); this.form = { category: item.category, description: item.description, amount: item.amount ?? '', observation: item.observation }; this.dialogVisible.set(true); }
  async openCopyPrevious(): Promise<void> { this.copyVisible.set(true); this.loadingPrevious.set(true); this.selectedCopyIds.set([]); try { const response = await firstValueFrom(this.api.getPreviousExpenses(this.period())); this.previousRows.set(response.expenses); } catch (e) { this.error(e); this.copyVisible.set(false); } finally { this.loadingPrevious.set(false); } }
  toggleCopy(id: number, checked: boolean): void { this.selectedCopyIds.update(ids => checked ? [...ids, id] : ids.filter(value => value !== id)); }
  toggleAllPrevious(checked: boolean): void { this.selectedCopyIds.set(checked ? this.previousRows().map(item => item.id) : []); }
  async copySelected(): Promise<void> { const ids = this.selectedCopyIds(); if (!ids.length) { this.showError('Seleccioná al menos un gasto.'); return; } this.saving.set(true); try { const result = await firstValueFrom(this.api.copyPreviousExpenses(`${this.period()}-01`, ids)); this.copyVisible.set(false); await this.load(); this.success(result.skipped ? `${result.created} gastos copiados; ${result.skipped} ya existían.` : `${result.created} gastos copiados sin importe.`); } catch (e) { this.error(e); } finally { this.saving.set(false); } }
  async save(): Promise<void> { if (!this.form.description.trim() || Number(this.form.amount) <= 0) { this.showError('Ingresá una descripción y un importe mayor a cero.'); return; } const payload: ExpenseRequest = { period: `${this.period()}-01`, category: this.form.category, description: this.form.description.trim(), amount: Number(this.form.amount), observation: this.form.observation.trim() }; this.saving.set(true); try { const item = this.editing(); if (item) await firstValueFrom(this.api.updateExpense(item.id, payload)); else await firstValueFrom(this.api.createExpense(payload)); this.dialogVisible.set(false); await this.load(); this.success(item ? 'Gasto actualizado.' : 'Gasto agregado.'); } catch (e) { this.error(e); } finally { this.saving.set(false); } }
  askDelete(item: Expense): void { this.toDelete.set(item); this.confirmVisible.set(true); }
  async delete(): Promise<void> { const item = this.toDelete(); if (!item) return; this.saving.set(true); try { await firstValueFrom(this.api.deleteExpense(item.id)); this.confirmVisible.set(false); this.toDelete.set(null); await this.load(); this.success('Gasto eliminado.'); } catch (e) { this.error(e); } finally { this.saving.set(false); } }
  resetFilters(): void { this.search.set(''); this.categoryFilter.set('TODOS'); }
  formatCurrency(value: string | number | null | undefined): string { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(value ?? 0)); }
  formatMoneyInput(value: string): string { return formatMoneyInput(value); } updateAmount(value: string): void { const normalized = normalizeMoneyInput(value); if (normalized !== null) this.form.amount = normalized; }
  categoryLabel(value: ExpenseCategory): string { return ({ IMPUESTOS: 'Impuestos', SERVICIOS: 'Servicios', VARIOS: 'Varios' })[value]; }
  periodLabel(): string { const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(this.periodDate()); return label[0].toUpperCase() + label.slice(1); }
  previousPeriodLabel(): string { const value = this.periodDate(); const previous = new Date(value.getFullYear(), value.getMonth() - 1, 1); const label = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(previous); return label[0].toUpperCase() + label.slice(1); }
  private period(): string { const v = this.periodDate(); return `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(2, '0')}`; } private emptyForm() { return { category: 'IMPUESTOS' as ExpenseCategory, description: '', amount: '', observation: '' }; }
  private error(e: unknown): void { this.showError(e instanceof HttpErrorResponse && e.error?.detail ? e.error.detail : 'Ocurrió un error inesperado.'); } private success(detail: string): void { this.messages.add({ severity: 'success', summary: 'Correcto', detail }); } private showError(detail: string): void { this.messages.add({ severity: 'error', summary: 'Error', detail }); }
}
