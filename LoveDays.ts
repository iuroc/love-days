class LoveDays {
    /**
     * 相识日期，格式：2022-11-22
     */
    private xiangShiDate: string
    /**
     * 官宣日期，格式：2022-12-03
     */
    private guanXuanDate: string
    /**
     * 已相识的天数
     */
    private xiangShiDays: number
    /**
     * 已官宣的天数
     */
    private guanXuanDays: number
    /**
     * 初始化
     * @param xiangShiDate 相识日期，格式：2022-11-22
     * @param guanxuanDate 官宣日期，格式：2022-12-03
     */
    constructor(xiangShiDate: string, guanxuanDate: string) {
        this.xiangShiDate = xiangShiDate
        this.guanXuanDate = guanxuanDate
        const nowTimestamp = new Date().getTime()
        const xiangShiTimestamp = new Date(xiangShiDate).getTime()
        const guanxuanTimestamp = new Date(guanxuanDate).getTime()
        this.xiangShiDays = this.getDays(xiangShiTimestamp, nowTimestamp)
        this.guanXuanDays = this.getDays(guanxuanTimestamp, nowTimestamp)
    }
    /**
     * 计算两个时间戳之间的天数
     * @param startTimestamp 开始日期，时间戳
     * @param endTimestamp 结束日期，时间戳
     * @returns 相距的天数
     */
    private getDays(startTimestamp: number, endTimestamp: number): number {
        const timestamp = endTimestamp - startTimestamp
        const days = timestamp / (1000 * 60 * 60 * 24)
        const daysLimit = Math.round(days * 10) / 10
        return daysLimit
    }
    /**
     * 获取相识日期
     * @returns 相识日期，格式：2022-11-22
     */
    public getXiangShiDate() {
        return this.xiangShiDate
    }
    /**
    * 获取官宣日期
    * @returns 相识日期，格式：2022-12-03
    */
    public getGuanXuanDate() {
        return this.guanXuanDate
    }
    /**
     * 获取已相识的天数
     * @returns 已相识的天数
     */
    public getXiangShiDays(): number {
        return this.xiangShiDays
    }
    /**
     * 获取已官宣的天数
     * @returns 已官宣的天数
     */
    public getGuanXuanDays(): number {
        return this.guanXuanDays
    }
    /**
     * 显示天数信息
     */
    public show() {
        console.log(`${this.xiangShiDate}，我们第一次认识，距今 ${this.xiangShiDays} 天`)
        console.log(`${this.guanXuanDate}，我们官宣了，距今 ${this.guanXuanDays} 天`)
    }
}
