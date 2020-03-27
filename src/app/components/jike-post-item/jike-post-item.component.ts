import { Component, OnInit, Input } from '@angular/core';
import { JikePostPojo } from 'src/app/entity/jike-post';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

const JIKE_CARD_TYPE = {
  ORIGINAL_POST: '发表了一条动态',
  REPOST: '转发了一条动态'
};
@Component({
  selector: 'app-jike-post-item',
  templateUrl: './jike-post-item.component.html',
  styleUrls: ['./jike-post-item.component.scss']
})
export class JikePostItemComponent implements OnInit {

  canvasId = 'poster';
  qrcodeId = 'qrcode';
  isShowQrcode: boolean; // 是否显示二维码

  @Input()
  mark = false; // gif|长图标记

  @Input()
  uri: string;

  @Input()
  value: JikePostPojo;

  haveMedia = false;
  thisYear: boolean; // 发布时间（年的判断）

  cardType: string; // 动态｜评论
  contentFontSize = '1rem'; // 字号大小(随文本长度变化)

  isShow = false; // 点开大图

  constructor(public sanitizer: DomSanitizer, private snackBar: MatSnackBar) {
    this.isShowQrcode = environment.qrcode;
  }

  ngOnInit() {
    this.value.pictures = [];
    this.setCardType();
    this.setContentFontSize();
    this.thisYear = this.isThisYearPost(this.value.createdAt);
    this.haveMedia = this.isHaveMedia();
  }

  setCardType() {
    this.cardType = JIKE_CARD_TYPE[this.value.type];
  }

  setContentFontSize() {
    if (this.value.content.length < 30) {
      this.contentFontSize = '1.7rem';
    }
  }

  /**
   * 是否是今年发布的
   * @param createdAt 发布时间
   */
  isThisYearPost(createdAt: string) {
    return new Date().getFullYear() === new Date(createdAt).getFullYear();
  }

  isHaveMedia() {
    if (this.value.pictures.length !== 0) {
      return true;
    }
  }

  showFullScreen() {
    this.snackBar.open('点开大图还么得', '知道了', {
      duration: 2000
    });
    this.isShow = true;
  }

}
