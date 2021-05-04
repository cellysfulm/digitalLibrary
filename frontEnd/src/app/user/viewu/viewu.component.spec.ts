import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuComponent } from './viewu.component';

describe('ViewuComponent', () => {
  let component: ViewuComponent;
  let fixture: ComponentFixture<ViewuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
