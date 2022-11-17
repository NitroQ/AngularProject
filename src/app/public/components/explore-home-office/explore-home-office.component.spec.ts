import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreHomeOfficeComponent } from './explore-home-office.component';

describe('ExploreHomeOfficeComponent', () => {
  let component: ExploreHomeOfficeComponent;
  let fixture: ComponentFixture<ExploreHomeOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreHomeOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreHomeOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
