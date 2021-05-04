import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbooksComponent } from './readbooks.component';

describe('ReadbooksComponent', () => {
  let component: ReadbooksComponent;
  let fixture: ComponentFixture<ReadbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
