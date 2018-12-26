import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrskanjePage } from './brskanje.page';

describe('BrskanjePage', () => {
  let component: BrskanjePage;
  let fixture: ComponentFixture<BrskanjePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrskanjePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrskanjePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
