/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JikePostProFormComponent } from './jike-post-pro-form.component';

describe('PostIdFormComponent', () => {
  let component: JikePostProFormComponent;
  let fixture: ComponentFixture<JikePostProFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JikePostProFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JikePostProFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
