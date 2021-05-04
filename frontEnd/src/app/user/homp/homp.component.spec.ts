import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HompComponent } from './homp.component';

describe('HompComponent', () => {
  let component: HompComponent;
  let fixture: ComponentFixture<HompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
