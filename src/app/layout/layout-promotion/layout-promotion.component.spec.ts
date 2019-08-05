import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPromotionComponent } from './layout-promotion.component';

describe('LayoutPromotionComponent', () => {
  let component: LayoutPromotionComponent;
  let fixture: ComponentFixture<LayoutPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
