import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBathroomComponent } from './explore-bathroom.component';

describe('ExploreBathroomComponent', () => {
  let component: ExploreBathroomComponent;
  let fixture: ComponentFixture<ExploreBathroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreBathroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
