import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSectionCarouselComponent } from './featured-section-carousel.component';

describe('FeaturedSectionCarouselComponent', () => {
  let component: FeaturedSectionCarouselComponent;
  let fixture: ComponentFixture<FeaturedSectionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedSectionCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedSectionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
