$(function(){
    $(".lc-mbbbox1>div").bind(touchEvents.touchstart, function () {
        $(".lc-changeimg").addClass("lc-height");
    })
    $(".lc-changeimg>div:contains('取消')").bind(touchEvents.touchstart, function () {
        $(".lc-changeimg").removeClass("lc-height");
    })
    $(".lc-mbbbox2>p:last-child").bind(touchEvents.touchstart, function () {
        $(".lc-changename").toggle();
    })








})

    //
    // $(".lc-mbbbox1>div").click(function(){
    //     $(".lc-changeimg").addClass("lc-height");
    // })
    // $(".lc-changeimg>div:contains('取消')").click(function () {
    //     $(".lc-changeimg").removeClass("lc-height");
    // })
    // $(".lc-mbbbox2>p:last-child").click(function () {
    //     $(".lc-changename").toggle();
    // })