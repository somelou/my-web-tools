import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-yellow-dot',
  templateUrl: './dark-yellow-dot.component.html',
  styleUrls: ['./dark-yellow-dot.component.scss']
})
export class DarkYellowDotComponent implements OnInit {

  @Input()
  columns = 17; // 黄点行数

  @Input()
  rows = 2; // 黄点列数

  dots: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.rows * this.columns; i++) {
      this.dots.push(i);
    }
  }

}
