import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBedroomComponent } from './explore-bedroom.component';

describe('ExploreBedroomComponent', () => {
  let component: ExploreBedroomComponent;
  let fixture: ComponentFixture<ExploreBedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreBedroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
