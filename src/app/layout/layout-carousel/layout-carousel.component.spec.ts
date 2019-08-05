import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCarouselComponent } from './layout-carousel.component';

describe('LayoutCarouselComponent', () => {
  let component: LayoutCarouselComponent;
  let fixture: ComponentFixture<LayoutCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
