import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JikePostItemComponent } from './components/jike-post-item/jike-post-item.component';
import { DarkYellowDotComponent } from './components/dark-yellow-dot/dark-yellow-dot.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { JikeBaseComponent } from './pages/jike-base/jike-base.component';
import { JikeCardComponent } from './pages/jike-card/jike-card.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { JikeInputFormComponent } from './components/jike-input-form/jike-input-form.component';
import { JikeFooterComponent } from './components/jike-footer/jike-footer.component';
import { OperateBarComponent } from './components/operate-bar/operate-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { JikeItemIntervalComponent } from './components/jike-item-interval/jike-item-interval.component';
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';
import { CropperMaskComponent } from './components/cropper-mask/cropper-mask.component';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { JikePostProFormComponent } from './components/jike-post-pro-form/jike-post-pro-form.component';
import { Subject } from 'rxjs';


registerLocaleData(zh);


const JikeCardComponents = [
  JikeBaseComponent,
  JikeCardComponent,
  JikePostItemComponent, QrcodeComponent, DarkYellowDotComponent,
  JikeItemIntervalComponent,
  JikeInputFormComponent, UploadPictureComponent, OperateBarComponent,
  JikePostProFormComponent,
  JikeFooterComponent,
  CropperMaskComponent
];
@NgModule({
  declarations: [
    AppComponent,
    ...JikeCardComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ImageCropperModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN
    },
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
    },
    Subject
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
