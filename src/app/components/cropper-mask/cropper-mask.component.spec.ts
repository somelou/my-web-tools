/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CropperMaskComponent } from './cropper-mask.component';

describe('CropperMaskComponent', () => {
  let component: CropperMaskComponent;
  let fixture: ComponentFixture<CropperMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
