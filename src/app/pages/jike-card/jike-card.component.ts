import { Component, OnInit } from '@angular/core';
import { JikePostPojo } from 'src/app/entity/jike-post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jike-card',
  templateUrl: './jike-card.component.html',
  styleUrls: ['./jike-card.component.scss']
})
export class JikeCardComponent implements OnInit {

  uriPrefix = 'https://m.okjike.com/originalPosts/';

  postData: JikePostPojo;
  loading = true;
  mark = false;

  liking = true;
  uri: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/post_data.json').subscribe((data: {
      data: JikePostPojo
    }) => {
      this.postData = this._setOriginalData(data);
      this.uri = this._getUri(this.postData.id);
      this.loading = false;
    });
  }

  private _setOriginalData(data: {
    data: JikePostPojo
  }): JikePostPojo {
    const result = data.data;
    result.user.avatarImage.picUrl = '../../../assets/avatar.jpg';
    if (result.pictures.length === 0) {
      result.pictures = [{ picUrl: '' }];
    }
    return result;
  }

  private _getUri(postId: string) {
    return postId;
  }

}
