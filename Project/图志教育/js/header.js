$(function(){
    $(".nav-con>li").each(function(){
        var i=$(this).index();
        $(this).mouseover(function(){
            var p=142*i+"px"
            var headerhover=document.querySelector(".header-hover");
            headerhover.style.left=p;
        })
    });
    $(function(){
        $(".footer-tou").click(function(){
            $("body","html").animate({scrollTop:0})
        })
    })
    // 最后
})