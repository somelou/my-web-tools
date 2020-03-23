import { QRCode } from './QRCode';

export class QRCodeFactory {
    static makeQRCode(elementId: string) {
        new QRCode(elementId).getRightQRCode();
    }
}
