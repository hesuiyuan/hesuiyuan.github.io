$(function(){


$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})
$(window).scroll(function(e){
    var t=$(this).scrollTop()
    var play=true;
    if (play){

        if (t>=150){
            play=false;
            $(".navbar-inverse").animate().addClass("dd");
            $(".nav-right").css({
                display: "block"
            })
            $(".nav-right-top").css({
                display: "block"
            })
        }else {
            play=true;
            $(".navbar-inverse").animate().removeClass("dd");
            $(".nav-right").css({
                display: "none"
            })
            $(".nav-right-top").css({
                display: "none"
            })
        }
    }
})
    $(".nav-right").click(function(){
        $("body,html").animate({
            scrollTop:0
        })
    })
    $(".nav-right-top").hover(function(){
        $(".erwm>img").css({
            display: "block"
        })
    },function(){
        $(".erwm>img").css({
            display: "none"
        })
    })
})