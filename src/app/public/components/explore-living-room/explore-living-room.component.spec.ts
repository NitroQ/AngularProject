import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreLivingRoomComponent } from './explore-living-room.component';

describe('ExploreLivingRoomComponent', () => {
  let component: ExploreLivingRoomComponent;
  let fixture: ComponentFixture<ExploreLivingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreLivingRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreLivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
