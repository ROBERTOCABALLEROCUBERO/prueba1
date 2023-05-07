import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoMainComponent } from './medico-main.component';

describe('MedicoMainComponent', () => {
  let component: MedicoMainComponent;
  let fixture: ComponentFixture<MedicoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
