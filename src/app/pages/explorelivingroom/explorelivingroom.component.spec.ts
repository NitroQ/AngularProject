import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorelivingroomComponent } from './explorelivingroom.component';

describe('ExplorelivingroomComponent', () => {
  let component: ExplorelivingroomComponent;
  let fixture: ComponentFixture<ExplorelivingroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorelivingroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorelivingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
