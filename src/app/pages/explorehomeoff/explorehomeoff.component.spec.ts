import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorehomeoffComponent } from './explorehomeoff.component';

describe('ExplorehomeoffComponent', () => {
  let component: ExplorehomeoffComponent;
  let fixture: ComponentFixture<ExplorehomeoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorehomeoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorehomeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
