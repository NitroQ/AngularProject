import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBathroomComponent } from './design-bathroom.component';

describe('DesignBathroomComponent', () => {
  let component: DesignBathroomComponent;
  let fixture: ComponentFixture<DesignBathroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignBathroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignBathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
