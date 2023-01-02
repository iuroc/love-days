var LoveDays = /** @class */ (function () {
    /**
     * 初始化
     * @param xiangShiDate 相识日期，格式：2022-11-22
     * @param guanxuanDate 官宣日期，格式：2022-12-03
     */
    function LoveDays(xiangShiDate, guanxuanDate) {
        this.xiangShiDate = xiangShiDate;
        this.guanXuanDate = guanxuanDate;
        var nowTimestamp = new Date().getTime();
        var xiangShiTimestamp = new Date(xiangShiDate).getTime();
        var guanxuanTimestamp = new Date(guanxuanDate).getTime();
        this.xiangShiDays = this.getDays(xiangShiTimestamp, nowTimestamp);
        this.guanXuanDays = this.getDays(guanxuanTimestamp, nowTimestamp);
    }
    /**
     * 计算两个时间戳之间的天数
     * @param startTimestamp 开始日期，时间戳
     * @param endTimestamp 结束日期，时间戳
     * @returns 相距的天数
     */
    LoveDays.prototype.getDays = function (startTimestamp, endTimestamp) {
        var timestamp = endTimestamp - startTimestamp;
        var days = timestamp / (1000 * 60 * 60 * 24);
        var daysLimit = Math.round(days * 10) / 10;
        return daysLimit;
    };
    /**
     * 获取相识日期
     * @returns 相识日期，格式：2022-11-22
     */
    LoveDays.prototype.getXiangShiDate = function () {
        return this.xiangShiDate;
    };
    /**
    * 获取官宣日期
    * @returns 相识日期，格式：2022-12-03
    */
    LoveDays.prototype.getGuanXuanDate = function () {
        return this.guanXuanDate;
    };
    /**
     * 获取已相识的天数
     * @returns 已相识的天数
     */
    LoveDays.prototype.getXiangShiDays = function () {
        return this.xiangShiDays;
    };
    /**
     * 获取已官宣的天数
     * @returns 已官宣的天数
     */
    LoveDays.prototype.getGuanXuanDays = function () {
        return this.guanXuanDays;
    };
    /**
     * 显示天数信息
     */
    LoveDays.prototype.show = function () {
        console.log("".concat(this.xiangShiDate, "\uFF0C\u6211\u4EEC\u7B2C\u4E00\u6B21\u8BA4\u8BC6\uFF0C\u8DDD\u4ECA ").concat(this.xiangShiDays, " \u5929"));
        console.log("".concat(this.guanXuanDate, "\uFF0C\u6211\u4EEC\u5B98\u5BA3\u4E86\uFF0C\u8DDD\u4ECA ").concat(this.guanXuanDays, " \u5929"));
    };
    return LoveDays;
}());
