import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JikePostPojo } from 'src/app/entity/jike-post';
import { Poster } from 'src/app/utils/Poster';

@Component({
  selector: 'app-jike-input-form',
  templateUrl: './jike-input-form.component.html',
  styleUrls: ['./jike-input-form.component.scss']
})
export class JikeInputFormComponent implements OnInit {

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

  canvasId = 'poster';
  qrcodeId = 'qrcode';

  constructor() { }

  ngOnInit() {
  }

  sharePoster() {
    const poster = new Poster(this.canvasId);
    poster.sharePoster();
  }

  avatarImageChange($event: string) {
    this.value.user.avatarImage.picUrl = $event;
  }

  contentPictureChange($event: string) {
    this.value.pictures = [{ picUrl: $event }];
  }

}
