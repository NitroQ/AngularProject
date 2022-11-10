import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFormsComponent } from './consult-forms.component';

describe('ConsultFormsComponent', () => {
  let component: ConsultFormsComponent;
  let fixture: ComponentFixture<ConsultFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
