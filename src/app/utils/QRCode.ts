/**
 * 二维码转图片辅助
 *
 * svg使用html2canvas导出异常
 * 此类消除了异常并减弱了二维码间隙
 */
export class QRCode {

    private elementId: string;

    constructor(elementId: string) {
        this.elementId = elementId;
        return this;
    }

    /**
     * 二维码
     */
    getRightQRCode() {
        this.setInlineStyles(document.getElementById(this.elementId));
        this.setSvgElementsWidth();
    }

    /**
     * 设置元素宽度(消除异常)
     */
    private setSvgElementsWidth() {
        const svgElements = document.body.querySelectorAll('svg');
        svgElements.forEach(item => {
            item.setAttribute('width', item.getBoundingClientRect().width.toString());
        });
    }

    /**
     * 使svg内元素内联化(消除间隙)
     */
    private setInlineStyles(targetElem: HTMLElement) {

        const transformProperties = [
            'stroke',
            'stroke-width',
            'stroke-linejoin'
        ]; // 这三个元素的目的是减少黑块之间的间隙

        const svgElems = Array.from(targetElem.getElementsByTagName('svg'));

        for (const svgElement of svgElems) {
            recurseElementChildren(svgElement);
        }

        function recurseElementChildren(node: SVGSVGElement | HTMLElement) {
            if (!node.style) {
                return;
            }

            const styles = getComputedStyle(node);

            for (const transformProperty of transformProperties) {
                node.style[transformProperty] = styles[transformProperty];
            }

            for (const child of Array.from(node.childNodes)) {
                recurseElementChildren(child as SVGSVGElement);
            }
        }
    }

}
