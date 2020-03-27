import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { JikePostPojo } from 'src/app/entity/jike-post';
import { Poster } from 'src/app/utils/Poster';

@Component({
  selector: 'app-jike-input-form',
  templateUrl: './jike-input-form.component.html',
  styleUrls: ['./jike-input-form.component.scss']
})
export class JikeInputFormComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: variable-name
  private _value: JikePostPojo;
  @Input()
  get value() {
    return this._value;
  }
  set value($value: JikePostPojo) {
    this._value = $value;
    this.valueChange.emit($value);
  }
  @Output()
  valueChange = new EventEmitter<JikePostPojo>();

  @Input()
  uri: string;
  isShowQrcode: boolean;

  canvasId = 'poster';
  qrcodeId = 'qrcode';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.uri) {
      this.isShowQrcode = changes.uri.currentValue && changes.uri.currentValue !== 0;
    }
  }

  sharePoster() {
    const poster = new Poster(this.canvasId, this.qrcodeId);
    poster.setMakeQRCode(this.isShowQrcode).sharePoster();
  }

  avatarImageChange($event: string) {
    this.value.user.avatarImage.picUrl = $event;
  }

  contentPictureChange($event: string) {
    this.value.pictures = [{ picUrl: $event }];
  }

}
