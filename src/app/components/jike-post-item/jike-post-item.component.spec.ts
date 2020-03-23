/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JikePostItemComponent } from './jike-post-item.component';

describe('JikePostItemComponent', () => {
  let component: JikePostItemComponent;
  let fixture: ComponentFixture<JikePostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JikePostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JikePostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
