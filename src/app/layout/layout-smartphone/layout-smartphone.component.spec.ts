import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSmartphoneComponent } from './layout-smartphone.component';

describe('LayoutSmartphoneComponent', () => {
  let component: LayoutSmartphoneComponent;
  let fixture: ComponentFixture<LayoutSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
