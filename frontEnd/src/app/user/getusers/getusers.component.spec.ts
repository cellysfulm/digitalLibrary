import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUsers } from './getusers.component';

describe('GetUsers', () => {
  let component: GetUsers;
  let fixture: ComponentFixture<GetUsers>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUsers ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
