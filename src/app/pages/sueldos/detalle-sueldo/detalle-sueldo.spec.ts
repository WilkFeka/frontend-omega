import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSueldo } from './detalle-sueldo';

describe('DetalleSueldo', () => {
  let component: DetalleSueldo;
  let fixture: ComponentFixture<DetalleSueldo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSueldo],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleSueldo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
