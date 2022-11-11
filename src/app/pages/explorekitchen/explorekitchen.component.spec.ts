import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorekitchenComponent } from './explorekitchen.component';

describe('ExplorekitchenComponent', () => {
  let component: ExplorekitchenComponent;
  let fixture: ComponentFixture<ExplorekitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorekitchenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorekitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
