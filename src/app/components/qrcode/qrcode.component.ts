import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  @Input()
  data: string;

  constructor() { }

  ngOnInit() {
  }

}
