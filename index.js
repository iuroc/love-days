/// <reference path = "LoveDays.ts" />
var loveDays = new LoveDays('2022-11-22', '2022-12-03');
var xiangShuEle = document.querySelector('.xiangShi');
var guanXuanEle = document.querySelector('.guanXuan');
if (xiangShuEle && guanXuanEle) {
    xiangShuEle.innerHTML = '相识：' + loveDays.getXiangShiDate() + '，距今 ' + loveDays.getXiangShiDays() + ' 天';
    guanXuanEle.innerHTML = '官宣：' + loveDays.getGuanXuanDate() + '，距今 ' + loveDays.getGuanXuanDays() + ' 天';
}
document.body.style.display = 'initial';
