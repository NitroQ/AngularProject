import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorespacesavingComponent } from './explorespacesaving.component';

describe('ExplorespacesavingComponent', () => {
  let component: ExplorespacesavingComponent;
  let fixture: ComponentFixture<ExplorespacesavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorespacesavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorespacesavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
