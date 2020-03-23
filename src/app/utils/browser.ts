/**
 * 判断是否为移动端
 */
export function browserIsMobilePhone() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    return (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent));
}
