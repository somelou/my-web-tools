import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.prod';

interface Operation {
  value: string;
  label?: number;
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
    { value: 'icon:like', isSelected: true, label: 1, position: 'left' },
    { value: 'icon:comment', isSelected: false, label: 0, position: 'left' },
    { value: 'icon:retweet', isSelected: false, label: 0, position: 'right' }
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

  // tslint:disable-next-line: variable-name
  private _liking: boolean;
  @Input()
  get liking() {
    this._setOperation(0, this._liking);
    return this._liking;
  }
  set liking($value: boolean) {
    this._liking = $value;
    this.likingChange.emit($value);
  }
  @Output()
  likingChange = new EventEmitter<boolean>();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  clickItem($index: number) {
    if (0 === $index) {
      this.changeLiking($index);
    } else {
      this.toast();
    }
  }

  toast() {
    this.snackBar.open('这个功能还没写orz', '知道了', {
      duration: 2000
    });
  }

  changeLiking(index: number) {
    this.liking = !this.liking;
    this._setOperation(index, this.liking);
  }

  private _setOperation(index: number, isSelected: boolean) {
    this.operations[index].isSelected = isSelected;
    this.operations[index].label = Number(isSelected);
  }

}
