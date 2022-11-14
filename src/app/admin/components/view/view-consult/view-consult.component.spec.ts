import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsultComponent } from './view-consult.component';

describe('ViewConsultComponent', () => {
  let component: ViewConsultComponent;
  let fixture: ComponentFixture<ViewConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConsultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
