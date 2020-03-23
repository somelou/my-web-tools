import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jike-item-interval',
  templateUrl: './jike-item-interval.component.html',
  styleUrls: ['./jike-item-interval.component.css']
})
export class JikeItemIntervalComponent implements OnInit {

  @Input()
  value: string;

  constructor() { }

  ngOnInit() {
  }

}
