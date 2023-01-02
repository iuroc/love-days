class LoveDays {
    /**
     * 相识日期，格式：2022-11-22
     */
    private xiangShiDateTime: string
    /**
     * 官宣日期，格式：2022-12-03
     */
    private guanXuanDateTime: string
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
     * @param xiangShiDateTime 相识日期，格式：2022-11-22
     * @param guanXuanDateTime 官宣日期，格式：2022-12-03
     */
    constructor(xiangShiDateTime: string, guanXuanDateTime: string) {
        this.xiangShiDateTime = xiangShiDateTime
        this.guanXuanDateTime = guanXuanDateTime
        const nowTimestamp = new Date().getTime()
        const xiangShiTimestamp = new Date(xiangShiDateTime).getTime()
        const guanxuanTimestamp = new Date(guanXuanDateTime).getTime()
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
        const daysLimit = (days * 1.0).toFixed(1)
        return parseFloat(daysLimit)
    }
    /**
     * 获取相识日期
     * @returns 相识日期，格式：2022-11-22
     */
    public getXiangShiDate() {
        const date = new Date(this.xiangShiDateTime)
        return this.getDate(date)
    }
    /**
    * 获取官宣日期
    * @returns 相识日期，格式：2022-12-03
    */
    public getGuanXuanDate() {
        const date = new Date(this.guanXuanDateTime)
        return this.getDate(date)
    }
    public getDate(date: Date) {
        return date.getFullYear() + '-'
            + this.getTwoNumber(date.getMonth()) + '-'
            + this.getTwoNumber(date.getDate())
    }
    public getTwoNumber(number): string {
        return (number < 10 ? '0' : '') + number
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
}
