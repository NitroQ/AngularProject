import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLivingRoomComponent } from './design-living-room.component';

describe('DesignLivingRoomComponent', () => {
  let component: DesignLivingRoomComponent;
  let fixture: ComponentFixture<DesignLivingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignLivingRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignLivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
