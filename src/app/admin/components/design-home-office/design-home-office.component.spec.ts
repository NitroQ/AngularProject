import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignHomeOfficeComponent } from './design-home-office.component';

describe('DesignHomeOfficeComponent', () => {
  let component: DesignHomeOfficeComponent;
  let fixture: ComponentFixture<DesignHomeOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignHomeOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignHomeOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
