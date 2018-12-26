import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosameznaPage } from './posamezna.page';

describe('PosameznaPage', () => {
  let component: PosameznaPage;
  let fixture: ComponentFixture<PosameznaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosameznaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosameznaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
