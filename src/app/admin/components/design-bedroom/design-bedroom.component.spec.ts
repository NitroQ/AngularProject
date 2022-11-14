import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBedroomComponent } from './design-bedroom.component';

describe('DesignBedroomComponent', () => {
  let component: DesignBedroomComponent;
  let fixture: ComponentFixture<DesignBedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignBedroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
