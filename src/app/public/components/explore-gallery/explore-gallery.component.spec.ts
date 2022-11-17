import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGalleryComponent } from './explore-gallery.component';

describe('ExploreGalleryComponent', () => {
  let component: ExploreGalleryComponent;
  let fixture: ComponentFixture<ExploreGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
