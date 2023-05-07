import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoModalComponentComponent } from './diagnostico-modal-component.component';

describe('DiagnosticoModalComponentComponent', () => {
  let component: DiagnosticoModalComponentComponent;
  let fixture: ComponentFixture<DiagnosticoModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticoModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
