import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorebathroomComponent } from './explorebathroom.component';

describe('ExplorebathroomComponent', () => {
  let component: ExplorebathroomComponent;
  let fixture: ComponentFixture<ExplorebathroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorebathroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorebathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
