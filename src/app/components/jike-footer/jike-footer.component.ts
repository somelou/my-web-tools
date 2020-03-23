import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jike-footer',
  templateUrl: './jike-footer.component.html',
  styleUrls: ['./jike-footer.component.css']
})
export class JikeFooterComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  toast() {
    this.snackBar.open('这是你无法到达的领域', '知道了', {
      duration: 2000
    });
  }

}
