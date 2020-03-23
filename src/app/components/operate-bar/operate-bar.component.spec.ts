/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OperateBarComponent } from './operate-bar.component';

describe('OperateBarComponent', () => {
  let component: OperateBarComponent;
  let fixture: ComponentFixture<OperateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
