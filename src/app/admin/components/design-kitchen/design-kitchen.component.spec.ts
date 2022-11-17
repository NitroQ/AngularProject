import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignKitchenComponent } from './design-kitchen.component';

describe('DesignKitchenComponent', () => {
  let component: DesignKitchenComponent;
  let fixture: ComponentFixture<DesignKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignKitchenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
