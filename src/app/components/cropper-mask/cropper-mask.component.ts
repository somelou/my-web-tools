import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent, Dimensions } from 'ngx-image-cropper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { browserIsMobilePhone } from 'src/app/utils/browser';

@Component({
  selector: 'app-cropper-mask',
  templateUrl: './cropper-mask.component.html',
  styleUrls: ['./cropper-mask.component.scss']
})
export class CropperMaskComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _visible: boolean;
  @Input()
  get visible(): boolean {
    return this._visible;
  }
  set visible($value: boolean) {
    this._visible = $value;
    this.visibleChange.emit($value);
  }
  @Output()
  visibleChange = new EventEmitter<boolean>();

  @Input()
  image: any;

  @Output()
  imageChange = new EventEmitter();

  @Input()
  file: any;

  @Output()
  fileChange = new EventEmitter();

  croppedImage: any;
  isPhone: boolean;
  loading = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isPhone = browserIsMobilePhone();
    // this.isPhone = false;
  }

  imageLoaded() {
    this.loading = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  loadImageFailed() {
    this.snackBar.open('出了点小问题 🤯', '真垃圾', {
      duration: 2000
    });
  }

  cropperReady($dimensions: Dimensions) {
    this.loading = false;
    const cropper = document.getElementById('cropper');
    cropper.style.opacity = '1';
    if ($dimensions.height / $dimensions.width > cropper.clientHeight / cropper.clientWidth) {
      cropper.style.width = 'auto';
    }
  }

  close() {
    const cropper = document.getElementById('cropper');
    cropper.style.opacity = '0.1';
    cropper.style.width = '100%';
    this.loading = false;
    this.visible = false;
  }

  submit() {
    this.fileChange.emit(this.croppedImage);
    this.close();
  }

}
