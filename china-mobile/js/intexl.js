window.onload=function(){
    var con=document.querySelector(".content");
    var num=1;
    var t1=setInterval(move,2000);
    function move() {
        bottom=false;
        if (num==1||num==10){
        con.style.transition="all 0.5s";
        }
        num++;
        con.style.marginLeft=-295*num+"px"

    }
    con.addEventListener("transitionend",function(){
        if (num==13){
            con.style.transition="none"
             con.style.marginLeft="-295px";
            num=1;
        }
        bottom=true;
    });
    var box=document.querySelector(".box");
    box.onmousemove=function(){
              clearInterval(t1)
    };
    box.onmouseout=function(){
        t1=setInterval(move,2000)
    };
    var left=document.querySelector(".left");
    var right=document.querySelector(".right");
    var bottom=true;
      right.onclick=function(){
             if (bottom){
                 move()
             }
      };
     left.onclick=function(){
         if (bottom){
             num-=2;
             move();
         }
     };
    var boxx=document.querySelectorAll(".boxx")[0];
    var xx=document.querySelectorAll(".xx");
    var dabanners=document.querySelectorAll(".dabanner");
    var bannersum=document.querySelector(".bannersum")
    var dd=0;

    var tt=setInterval(mmo,2000);
    function mmo(){
        if (dd==0){
            boxx.style.transition="all 1s";
        }
            dd++;
        boxx.style.marginLeft=-740*dd+"px";
        if (dd==10){
            boxx.style.transition="none";
             boxx.style.marginLeft=0;
            dd=0;
        }
        for (let i=0;i<xx.length;i++){
            xx[i].style.background="#ADADAE";
            xx[i].onclick=function(){
                boxx.style.marginLeft=-740*i+"px";
                dd=i;
            }
        }
        xx[dd].style.background="#C60069"
    };
    bannersum.onmousemove=function(){
        clearInterval(tt);
    }
    bannersum.onmouseout=function(){
        tt=setInterval(mmo,2000);
    }
    var denglu=document.querySelector(".denglu")
    var dengluimg=document.querySelector(".dengluimg")
    denglu.onmouseover=function(){
        dengluimg.style.opacity="1"
    };
    denglu.onmouseout=function(){
        dengluimg.style.opacity="0"
    };

//    最后
};