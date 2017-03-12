//下拉搜索框
window.onload=function(){
        var search=document.getElementsByClassName("search")[0];
        var cenav=document.querySelector(".cenav");
        window.onscroll=function(){
            var obj=document.body.scrollTop==0?document.documentElement:document.body;
            if (obj.scrollTop>700){
                search.style.marginTop="0"
            }else {
                search.style.marginTop="-50px"
            }
            //测导航出现
            if (obj.scrollTop>1500){
                cenav.style.opacity="1";
            }else {
                cenav.style.opacity="0"
            }
        };
    //定时器
    var hours=document.querySelector(".hours");
    var mines=document.querySelector(".mines");
    var secounnd=document.querySelector(".secound");
    var mm,hh,m;
    var furture=new Date();
    furture.setHours(20);
    furture.setMinutes(0);
    furture.setSeconds(0);
    setInterval(function () {
        var now=new Date();
        var cha=furture.getTime()-now.getTime();
        hh=Math.floor(cha/(1000*60*60));
        hours.innerHTML=hh<10?`0${hh}`:hh;
        m=Math.floor(cha/(1000*60)%60);
        mines.innerHTML=m<10?`0${m}`:m;
        mm=Math.floor((cha/1000)%60);
        secounnd.innerHTML=mm<10?`0${mm}`:mm;
    },1000);
     


    //最后
    };