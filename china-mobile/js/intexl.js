window.onload=function(){
    var con=document.querySelector(".content");
    var num=0;
    setInterval(function () {
        con.style.transition="all 0.5s";
        num++;
        con.style.marginLeft=-295*num+"px"
    },2000);
    con.addEventListener("transitionend",function(){
        if (num==12){
            con.style.marginLeft="0";
            num=0;
            con.style.transition="none"
        }
    });
//    最后
};