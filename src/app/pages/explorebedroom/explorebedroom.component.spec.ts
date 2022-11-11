import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorebedroomComponent } from './explorebedroom.component';

describe('ExplorebedroomComponent', () => {
  let component: ExplorebedroomComponent;
  let fixture: ComponentFixture<ExplorebedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorebedroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorebedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
