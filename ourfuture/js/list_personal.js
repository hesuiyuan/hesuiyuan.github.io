$(function(){
    $(".lc-mbbbox1>div").click(function(){
        $(".lc-changeimg").addClass("lc-height");
    })
    $(".lc-changeimg>div:contains('取消')").click(function () {
        $(".lc-changeimg").removeClass("lc-height");
    })
    $(".lc-mbbbox2>p:last-child").click(function () {
        $(".lc-changename").toggle();
    })
})