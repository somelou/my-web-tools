import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Operation {
  value: string;
  label?: string;
  isSelected: boolean;
  position: string;
}

@Component({
  selector: 'app-operate-bar',
  templateUrl: './operate-bar.component.html',
  styleUrls: ['./operate-bar.component.scss']
})
export class OperateBarComponent implements OnInit {

  operations: Operation[] = [
    { value: 'icon:like', isSelected: true, label: '1', position: 'left' },
    { value: 'icon:comment', isSelected: false, position: 'left' },
    { value: 'icon:retweet', isSelected: false, position: 'right' }
  ];

  // tslint:disable-next-line: variable-name
  private _type: string;
  @Input()
  get type() {
    return this._type;
  }
  set type($value: string) {
    this._type = $value;
    this.typeChange.emit($value);
  }
  @Output()
  typeChange = new EventEmitter<string>();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  toast() {
    this.snackBar.open('这个功能还没写orz', '知道了', {
      duration: 2000
    });
  }

}
