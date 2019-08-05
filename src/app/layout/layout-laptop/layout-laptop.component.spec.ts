import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLaptopComponent } from './layout-laptop.component';

describe('LayoutLaptopComponent', () => {
  let component: LayoutLaptopComponent;
  let fixture: ComponentFixture<LayoutLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
