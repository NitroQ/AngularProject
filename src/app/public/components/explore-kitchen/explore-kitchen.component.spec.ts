import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreKitchenComponent } from './explore-kitchen.component';

describe('ExploreKitchenComponent', () => {
  let component: ExploreKitchenComponent;
  let fixture: ComponentFixture<ExploreKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreKitchenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
