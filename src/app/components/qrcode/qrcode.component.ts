import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit, OnChanges {

  uriPrefix = 'https://m.okjike.com/originalPosts/';

  @Input()
  data: string;

  uri: string;

  constructor() { }

  ngOnInit() {
    this.uri = this._getUri(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.uri = this._getUri(changes.data.currentValue);
    }
  }

  private _getUri(postId: string): string {
    return postId.startsWith(this.uriPrefix) ? postId : (this.uriPrefix + postId);
  }

}
