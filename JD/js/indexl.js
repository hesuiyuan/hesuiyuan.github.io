//下拉搜索框
window.onload=function(){
        var obj;
        var search=document.getElementsByClassName("search")[0];
        var cenav=document.querySelector(".cenav");
        var cenavli=document.querySelectorAll(".cenav li");
        window.onscroll=function(){
            obj=document.body.scrollTop==0?document.documentElement:document.body;
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
    furture.setHours(23);
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
    // 侧导航的选择功能
    var makelife=document.querySelector(".makelife");
    var better=document.getElementById("better");
    better.onclick=function(){
        var h=makelife.offsetTop;
        animate(obj,{scrollTop:h-50},500);
    };
    //不再一起的
    var newcennav=Array.from(cenavli).slice(1);
     var seven=document.querySelector(".seven");
    var five=document.querySelectorAll(".five");
    newcennav.forEach(function(v,i){
        v.onclick=function(){
            var height=five[i].offsetTop;
            animate(obj,{scrollTop:height-50},500);
        };
        newcennav[8].onclick=function(){
             var sevenhh=seven.offsetTop;
            animate(obj,{scrollTop:sevenhh-110},500)
        };
        newcennav[9].onclick=function(){
          animate(obj,{scrollTop:0},500)
        }
    });
    //banner的自动轮播
    //停止
    var tent=document.querySelector("#falk");
    tent.onmouseover=function(){
        clearInterval(t1)
    };
    tent.onmouseout=function(){
        t1=setInterval(move,2000);
    };
    //手动
    var banner=document.querySelectorAll(".tent2s img");
    var oo=document.querySelectorAll(".oo");
    var oneoo=oo[0];
     oo.forEach(function(v,i){
               v.onmouseover=function(){
                   oneoo.style.backgroundColor="#fff";
                   oo[i].style.backgroundColor="#DB192A";
                   oneoo=oo[i];
                   banner.forEach(function(v){
                       v.style.opacity=0;
                   });
                   banner[i].style.opacity=1;
               };
         num=i;
     });
    //自动
    var num=0;
    var too=0;
    var t1=setInterval(move,2000);
    function move(){
        num++;
        if (num==banner.length){
            num=0;
        }
        banner.forEach(function(v){
            v.style.opacity=0;
            oneoo.style.backgroundColor="#fff";
        });
        banner[num].style.opacity=1;
        oo[num].style.backgroundColor="#DB192A";
        oneoo=oo[num]
        too=num;
    }
    

    


    //最后
    };