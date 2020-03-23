export class Square {

    /**
     * 近似因子
     */
    private static APPROXIMATE_REFACTOR = 0.01;

    /**
     * 是否近似为正方形
     * @param width 宽
     * @param height 高
     */
    static isApproximateSquare(width: number, height: number): boolean {
        if (this.isSquare(width, height)) {
            return true;
        }
        return Math.abs(1 - (width / height)) < this.APPROXIMATE_REFACTOR;
    }

    /**
     * 是否为标准正方向
     * @param width 宽
     * @param height 高
     */
    private static isSquare(width: number, height: number): boolean {
        return width === height;
    }

}
