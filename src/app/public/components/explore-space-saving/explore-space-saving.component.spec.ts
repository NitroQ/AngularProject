import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSpaceSavingComponent } from './explore-space-saving.component';

describe('ExploreSpaceSavingComponent', () => {
  let component: ExploreSpaceSavingComponent;
  let fixture: ComponentFixture<ExploreSpaceSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreSpaceSavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreSpaceSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
