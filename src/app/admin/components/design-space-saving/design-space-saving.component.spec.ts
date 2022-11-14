import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSpaceSavingComponent } from './design-space-saving.component';

describe('DesignSpaceSavingComponent', () => {
  let component: DesignSpaceSavingComponent;
  let fixture: ComponentFixture<DesignSpaceSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignSpaceSavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSpaceSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
