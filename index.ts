/// <reference path = "LoveDays.ts" />
const loveDays = new LoveDays('2022-11-22T12:00:00', '2022-12-03T23:00:00')
const xiangShuEle = document.querySelector('.xiangShi')
const guanXuanEle = document.querySelector('.guanXuan')
if (xiangShuEle && guanXuanEle && document) {
    xiangShuEle.innerHTML = '相识：' + loveDays.getXiangShiDate() + '，距今 ' + loveDays.getXiangShiDays() + ' 天'
    guanXuanEle.innerHTML = '官宣：' + loveDays.getGuanXuanDate() + '，距今 ' + loveDays.getGuanXuanDays() + ' 天'
    document.body.style.display = 'initial'
}
