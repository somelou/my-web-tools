import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UploadFilter, UploadFile } from 'ng-zorro-antd';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Square } from 'src/app/utils/Square';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  @Output()
  urlChange = new EventEmitter<string>();

  @Input()
  formats: string[];

  @Input()
  crop: boolean; // 是否需要裁切

  @Input()
  label: string;

  showCropper = false;
  imageEvent: any;
  visible = false;

  file: any;
  fileList: UploadFile[] = [];

  filters: UploadFilter[] = [
    {
      name: 'type',
      fn: (fileList: UploadFile[]) => {
        // tslint:disable-next-line: no-bitwise
        const filterFiles = fileList.filter(w => ~this.formats.indexOf(w.type));
        if (filterFiles.length !== fileList.length) {
          this.snackBar.open('不是合法的图片格式🔫', '知道了', {
            duration: 2000
          });
          return filterFiles;
        }
        return fileList;
      }
    }
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  /**
   * 通过antd组件上传图片
   */
  handleChange(info: any): void {
    this._operateImage(info.file.originFileObj);
  }

  /**
   * 通过原生组件传入图片
   */
  uploadFile($event: { srcElement: { files: any[]; }; }) {
    this._operateImage($event.srcElement.files[0]);
  }

  /**
   * 获取file的uri并做出处理
   * @param file image-file
   */
  private _operateImage(file: any) {
    const url = window.URL.createObjectURL(file); // 获取上传的图片临时路径
    if (!this.crop) {
      this.imageChange(url);
      return;
    }
    this._getImageInfo(url, (width, height) => {
      if (Square.isApproximateSquare(width, height)) {
        this.imageChange(url);
      } else {
        this.showCropper = true;
        this.file = file;
        this.visible = true;
      }
    });
  }

  /**
   * 获得剪切后的图片
   */
  imageChange($event: string) {
    this.urlChange.emit($event);
    this.file = null;
  }

  /**
   * 获取图片width|height
   * @param url 图片uri
   * @param callback 获取数据
   */
  private _getImageInfo(url: string, callback: (width: number, height: number) => void) {
    const img = new Image();
    img.src = url;
    if (img.complete) {
      // 如果图片被缓存，则直接返回缓存数据
      callback(img.width, img.height);
    } else {
      img.onload = () => {
        callback(img.width, img.height);
      };
    }
  }


}
