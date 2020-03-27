import { QRCodeFactory } from './QRCodeFactory';
import html2canvas from 'html2canvas';
import { environment } from 'src/environments/environment';

export class Poster {

    pictureNamePrefix: string;
    qrcodeId: string;
    canvasId: string;

    /**
     * 是否生成二维码|default: environment.qrcode
     */
    isMakeQRCode = environment.qrcode;

    constructor(canvasId: string, qrcodeId?: string, prefix = 'jike_card_') {
        this.qrcodeId = qrcodeId;
        this.canvasId = canvasId;
        this.pictureNamePrefix = prefix;
    }

    /**
     * 分享图片（并保存）
     */
    sharePoster() {
        this._setScroll2Top();
        if (this.isMakeQRCode) {
            QRCodeFactory.makeQRCode(this.qrcodeId);
        }
        html2canvas(document.getElementById(this.canvasId), {
            useCORS: true,
            height: document.getElementById(this.canvasId).scrollHeight
        }).then(canvas => {
            this._downloadFile(this._packagePictureInfo(canvas.toDataURL('image/png')));
        });
    }


    /**
     * 设置是否生成二维码
     */
    setMakeQRCode(isMake: boolean) {
        this.isMakeQRCode = isMake;
        return this;
    }

    /**
     * 将页面滚动回顶部
     *
     * 防止图片高度过长时
     */
    private _setScroll2Top() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    /**
     * 下载图片
     * @param picture canvas图片流地址
     */
    private _downloadFile(picture: HTMLAnchorElement) {
        // const event = document.createEvent('MouseEvents');
        // event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        const event = new MouseEvent('click'); // 创建一个单击事件
        picture.dispatchEvent(event);
    }

    /**
     * 包装图片信息
     * @param canvasUri canvas图片流地址
     */
    private _packagePictureInfo(canvasUri: string): HTMLAnchorElement {
        const base64Img = document.createElement('a');
        base64Img.href = canvasUri;
        base64Img.download = this._generatePictureName();
        return base64Img;
    }

    /**
     * 生成图片名称
     */
    private _generatePictureName() {
        return this.pictureNamePrefix + Date.now() + '.png';
    }

}
