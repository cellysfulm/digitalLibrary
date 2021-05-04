import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestarlibroComponent } from './prestarlibro.component';

describe('PrestarlibroComponent', () => {
  let component: PrestarlibroComponent;
  let fixture: ComponentFixture<PrestarlibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestarlibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
