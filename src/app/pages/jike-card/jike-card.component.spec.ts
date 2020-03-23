/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JikeCardComponent } from './jike-card.component';

describe('JikeCardComponent', () => {
  let component: JikeCardComponent;
  let fixture: ComponentFixture<JikeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JikeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JikeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
