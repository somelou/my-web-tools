import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-jike-post-pro-form',
  templateUrl: './jike-post-pro-form.component.html',
  styleUrls: ['./jike-post-pro-form.component.scss']
})
export class JikePostProFormComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _value: string; // uri或id
  @Input()
  get value() {
    return this._value;
  }
  set value($value: string) {
    this._value = $value;
    this.valueChange.emit($value);
  }
  @Output()
  valueChange = new EventEmitter<string>();

  uriPrefix = 'https://m.okjike.com/originalPosts/';

  public subject: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
    this.subject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe(value => {
        this.value = value;
      });
  }

  inputChange($event: string) {
    this.subject.next($event);
  }

}
