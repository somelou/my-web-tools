import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import html2canvas from 'html2canvas';
import { QRCodeFactory } from './utils/QRCodeFactory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
