import {
  Component,
  computed,
  inject,
  OnInit,
  signal
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { InputText } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Tooltip } from 'primeng/tooltip';

import { Api } from '../../services/api';

import {
  SalaryMonthRow
} from '../../models/salary.model';


@Component({
  selector: 'app-sueldos',
  imports: [
    FormsModule,
    DatePicker,
    InputText,
    Select,
    TableModule,
    ToastModule,
    Tooltip
  ],
  providers: [MessageService],
  templateUrl: './sueldos.html',
  styleUrl: './sueldos.scss'
})
export class Sueldos implements OnInit {

  private readonly api = inject(Api);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly messageService = inject(MessageService);

  readonly rows = signal<SalaryMonthRow[]>([]);
  readonly loading = signal(false);
  readonly search = signal('');
  readonly gremioFilter = signal('TODOS');
  readonly groupFilter = signal<number | null>(null);
  readonly statusFilter = signal('TODOS');
  readonly transferFilter = signal('TODOS');
  readonly cashFilter = signal('TODOS');
  readonly receiptFilter = signal('TODOS');

  readonly periodo = signal(
    this.route.snapshot.queryParamMap.get('periodo')
    ?? this.getCurrentPeriod()
  );

  readonly periodDate = computed(() => {
    const [year, month] = this.periodo().split('-').map(Number);
    return new Date(year, month - 1, 1);
  });

  readonly statusOptions = [
    { label: 'Todos los estados', value: 'TODOS' },
    { label: 'Liquidados', value: 'LIQUIDADO' },
    { label: 'Sin liquidar', value: 'PENDIENTE' },
    { label: 'Anulados', value: 'ANULADO' }
  ];

  readonly transferOptions = [
    { label: 'Todas las transferencias', value: 'TODOS' },
    { label: 'Transferencia realizada', value: 'SI' },
    { label: 'Transferencia pendiente', value: 'NO' }
  ];

  readonly cashOptions = [
    { label: 'Todo el efectivo', value: 'TODOS' },
    { label: 'Efectivo entregado', value: 'SI' },
    { label: 'Efectivo pendiente', value: 'NO' }
  ];

  readonly receiptOptions = [
    { label: 'Todos los recibos', value: 'TODOS' },
    { label: 'Recibo entregado', value: 'SI' },
    { label: 'Recibo pendiente', value: 'NO' }
  ];


  readonly filteredRows = computed(() => {
    const term = this.search().trim().toLowerCase();

    return this.rows().filter(row => {
      const employee = row.employee;

      const matchesSearch = !term || [
        employee.nombre,
        employee.apellido,
        employee.gremio
      ].some(value => value?.toLowerCase().includes(term));

      const matchesGremio = (
        this.gremioFilter() === 'TODOS'
        || (employee.gremio ?? '') === this.gremioFilter()
      );
      const matchesGroup = this.groupFilter() === null
        || employee.group?.id === this.groupFilter();

      const status = !row.salary
        ? 'PENDIENTE'
        : row.salary.anulado
          ? 'ANULADO'
          : 'LIQUIDADO';

      const matchesStatus = (
        this.statusFilter() === 'TODOS'
        || status === this.statusFilter()
      );

      const matchesTransfer = this.matchesBooleanFilter(
        row.salary?.transferencia_realizada,
        this.transferFilter(),
        !!row.salary
      );

      const matchesCash = this.matchesBooleanFilter(
        row.salary?.efectivo_entregado,
        this.cashFilter(),
        !!row.salary
      );

      const matchesReceipt = this.matchesBooleanFilter(
        row.salary?.recibo_entregado,
        this.receiptFilter(),
        !!row.salary
      );

      return (
        matchesSearch
        && matchesGremio
        && matchesGroup
        && matchesStatus
        && matchesTransfer
        && matchesCash
        && matchesReceipt
      );
    });
  });


  readonly gremios = computed(() => {
    return [...new Set(
      this.rows()
        .map(row => row.employee.gremio)
        .filter((value): value is string => !!value)
    )].sort((a, b) => a.localeCompare(b, 'es'));
  });


  readonly gremioOptions = computed(() => [
    { label: 'Todos los gremios', value: 'TODOS' },
    ...this.gremios().map(gremio => ({ label: gremio, value: gremio }))
  ]);

  readonly groupOptions = computed(() => [
    { label: 'Todos los grupos', value: null },
    ...[...new Map(
      this.rows().flatMap(row => row.employee.group ? [[row.employee.group.id, row.employee.group]] : [])
    ).values()].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
      .map(group => ({ label: group.nombre, value: group.id }))
  ]);


  readonly liquidatedCount = computed(() => {
    return this.filteredRows().filter(row => row.salary && !row.salary.anulado).length;
  });


  readonly totalTransfers = computed(() => {
    return this.filteredRows().reduce(
      (total, row) =>
        total + (row.salary && !row.salary.anulado
          ? Number(row.salary.transferencia_real)
          : 0),
      0
    );
  });


  readonly totalCash = computed(() => {
    return this.filteredRows().reduce(
      (total, row) =>
        total + (row.salary && !row.salary.anulado
          ? Number(row.salary.ajuste_efectivo)
          : 0),
      0
    );
  });


  readonly totalSalaries = computed(() => {
    return this.filteredRows().reduce(
      (total, row) =>
        total + (row.salary && !row.salary.anulado
          ? Number(row.salary.sueldo_total)
          : 0),
      0
    );
  });


  readonly periodLabel = computed(() => {
    const [year, month] = this.periodo()
      .split('-')
      .map(Number);

    const date = new Date(year, month - 1, 1);

    const value = new Intl.DateTimeFormat(
      'es-AR',
      {
        month: 'long',
        year: 'numeric'
      }
    ).format(date);

    return value.charAt(0).toUpperCase() + value.slice(1);
  });


  ngOnInit(): void {
    void this.loadSalaries();
  }


  async loadSalaries(): Promise<void> {
    this.loading.set(true);

    try {
      const response = await firstValueFrom(
        this.api.getSalaries(this.periodo())
      );

      this.rows.set(response.employees);

    } catch (error) {
      this.showError(this.getApiError(error));

    } finally {
      this.loading.set(false);
    }
  }


  changePeriod(periodo: string): void {
    if (!periodo) {
      return;
    }

    this.periodo.set(periodo);

    void this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { periodo },
        replaceUrl: true
      }
    );

    void this.loadSalaries();
  }


  changePeriodDate(value: Date | null): void {
    if (!value) {
      return;
    }

    this.changePeriod(
      `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`
    );
  }


  movePeriod(offset: number): void {
    const date = this.periodDate();
    const target = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    this.changePeriodDate(target);
  }


  resetFilters(): void {
    this.search.set('');
    this.gremioFilter.set('TODOS');
    this.groupFilter.set(null);
    this.statusFilter.set('TODOS');
    this.transferFilter.set('TODOS');
    this.cashFilter.set('TODOS');
    this.receiptFilter.set('TODOS');
  }


  openEmployee(employeeId: number): void {
    void this.router.navigate(
      ['/sueldos', employeeId],
      {
        queryParams: {
          periodo: this.periodo()
        }
      }
    );
  }


  getFullName(row: SalaryMonthRow): string {
    return `${row.employee.apellido}, ${row.employee.nombre}`;
  }


  formatCurrency(value: string | number | null | undefined): string {
    return new Intl.NumberFormat(
      'es-AR',
      {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 2
      }
    ).format(Number(value ?? 0));
  }


  private getCurrentPeriod(): string {
    const now = new Date();

    return `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, '0')}`;
  }


  private matchesBooleanFilter(
    value: boolean | undefined,
    filter: string,
    hasSalary: boolean
  ): boolean {
    if (filter === 'TODOS') {
      return true;
    }

    return hasSalary && value === (filter === 'SI');
  }


  private showError(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 4000
    });
  }


  private getApiError(error: unknown): string {
    if (error instanceof HttpErrorResponse && error.error?.detail) {
      return error.error.detail;
    }

    return 'Ocurrió un error inesperado.';
  }
}
