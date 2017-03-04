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
    //03
    var xx=document.querySelectorAll(".xx");
    var dabanners=document.querySelectorAll(".boxx>li");
    var bannersum=document.querySelector(".bannersum");
    var dd=0;
    var z=1;
    var nums=0;
     var tt=setInterval(moove,2000);
    function moove(){
        nums=dd;
        nums++;
        if (num==10){
            nums=0
        }
        dabanners[nums].style.left=740+"px";
        dabanners[nums].style.zIndex=z++;
        animate(dabanners[nums],{left:0},1000);
        animate(dabanners[dd],{left:-740},1000);
        dd=nums;
    };
    bannersum.onmouseover=function(){
        clearInterval(tt);
    };
    bannersum.onmouseout=function (){
      tt=setInterval(moove,2000)
    };
    xx.forEach(function(s,b){
       s.onclick=function(){
           var n=1;
           if (b>dd){
               n=1;
           }else {
               if (b<dd){
                   n=-1;
               }else {
                   return
               }
           }
           dabanners[b].style.left=n*740+"px"
           dabanners[b].style.zIndex=z++;
           animate(dabanners[b],{left:0},1000)
           animate(dabanners[dd],{left:-n*740},1000)
           dd=b;
       }
    });
    //05
   var l=document.querySelector(".l");
   var r=document.querySelector(".r");
     r.onclick=function(){
         dabanners[nums].style.left=740+"px";
         dabanners[nums].style.zIndex=z++;
         animate(dabanners[nums],{left:0},1000);
         animate(dabanners[dd],{left:-740},1000);
         dd=nums;
     };

    
    
    
    
    
    //04
    var denglu=document.querySelector(".denglu")
    var dengluimg=document.querySelector(".dengluimg")
    denglu.onmouseover=function(){
        dengluimg.style.opacity="1"
    };
    denglu.onmouseout=function(){
        dengluimg.style.opacity="0"
    };
   var texts=[{text:"- 中国移动通信集团公司2016年下半年服务质量状况报告201...",date:"2017-02-12"},
       {text:"- 针对存量来电显示收费客户开展服务回馈活动的公告",date:"2017-11-21"},{text:"- 客户个人信息收集、" +
       "使用的目的、范围、方式以及使用规则",date:"2016-11-10"},{text:"- 关于2月9日至10日网站系统升级的公告",
           date:"2016-12-21"}]
    var wenzi=document.querySelectorAll(".text");
    var time=document.querySelectorAll(".date");
           var num1=0;
           var num2=1;
           setInterval(function(){
               num1++;
               if (num1==texts.length){
                   num1=0;
               }
                wenzi[0].innerHTML=texts[num1].text
               time[0].innerHTML=texts[num1].date
               num2++;
               if (num2==texts.length){
                   num2=1;
               }
               wenzi[1].innerHTML=texts[num2].text
               time[1].innerHTML=texts[num2].date
       },3000);

//    最后
};