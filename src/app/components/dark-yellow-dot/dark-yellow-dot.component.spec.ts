/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DarkYellowDotComponent } from './dark-yellow-dot.component';

describe('DarkYellowDotComponent', () => {
  let component: DarkYellowDotComponent;
  let fixture: ComponentFixture<DarkYellowDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkYellowDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkYellowDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
