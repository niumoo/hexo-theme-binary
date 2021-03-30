// 隐藏显示回到顶部按钮
window.onscroll = function () {
    //考虑到浏览器的兼容性
    //chrome 支持body，IE，firefox支持documentElement
    //safari 比较特别，有自己获取scrollTop的函数 ： window.pageYOffset
    var t = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var to_top = document.getElementsByClassName("to_top")[0];
    var num = 400;  //自定义设置显滑动多少距离显示
    var wid = document.body.clientWidth;
    if (t >= num && wid >= 1000) {
        to_top.style.display = "inline";
    } else {
        to_top.style.display = "none";
    }
}
// 回到顶部
function smoothscroll() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
};