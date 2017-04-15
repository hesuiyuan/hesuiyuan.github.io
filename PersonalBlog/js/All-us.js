$(function(){


$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})
$(window).scroll(function(e){
    var t=$(this).scrollTop()
    var play=true;
    if (play){

        if (t>200){
            play=false;
            $(".navbar-inverse").animate().addClass("dd");
        }else {
            play=true;
            $(".navbar-inverse").animate().removeClass("dd");
        }
    }

})
})