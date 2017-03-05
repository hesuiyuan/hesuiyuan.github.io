window.onload=function(){
    //banner的轮播图
    var radom=document.getElementsByClassName("yuanquan");
    var img=document.getElementsByClassName("banneroo");
    for (let i=0;i<radom.length;i++){
        radom[i].onmouseover=function(){
            for(let j=0;j<img.length;j++){
                radom[j].style.background="#ccc";
                img[j].style.opacity="0"
            }
            radom[i].style.background="#A10000";
            img[i].style.opacity="1";
            num=i;
        }
    }
    var wei=document.getElementsByClassName("weixin")[0];
    var ewm=document.getElementsByClassName("ewm")[0];
    wei.onmouseover=function(){
        ewm.style.display="block"
        ewm.style.zIndex="3"
    };
    wei.onmouseout=function(){
            ewm.style.display="none"
        };
    //自动播放
    var num=0;
    function move(){
        num++;
        if (num==img.length){
            num=0;
        }
        if (num==-1){
            num=img.length-1;
        }
        for(let j=0;j<img.length;j++){
            radom[j].style.background="#ccc";
            img[j].style.opacity="0"
        }
        radom[num].style.background="#A10000";
        img[num].style.opacity="1"
    }
    var t1=setInterval(move,1000);
 //   移入停止
    var imgbox=document.getElementsByClassName("img-box")[0];
    imgbox.onmousemove=function(){
        clearInterval(t1)
    };
    imgbox.onmouseout=function(){
        t1=setInterval(move,1000);
    };
    //箭头
    var left=document.getElementsByClassName("jiantuoyou")[0];
    var right=document.getElementsByClassName("jiantuozuo")[0];
    right.onclick=function(){
        move();
    };
    left.onclick=function(){
        num-=2;
        move();
    };


 //   nav
    var an=document.querySelectorAll(".dangahnglanwenzi>li");
    var arran=Array.from(an).slice(1,-1);
    var con=document.querySelectorAll(".dangahnglanwenzi ul");
    var newarr=[];
     for (let i=0;i<con.length;i++){
         var lis=con[i].querySelectorAll("li");
                 newarr.push((lis.length)*35+5+"px");
     }
           arran.forEach(function(v,j){
              v.onmouseover=function(){
                  con[j].style.height=newarr[j];
              };
               v.onmouseout=function(){
                   con[j].style.height=0;
               }
           });
    //gouwu
    var gouwu=document.querySelector(".gouwu-word")
    var gowuboxones=document.querySelector(".gowuboxones")
    var gowubox=document.querySelector(".gowubox")
    gouwu.onmouseover=function(){
           gowuboxones.style.opacity="1"
           gowubox.style.opacity="1"
           jia.style.opacity="1"
    };
    gouwu.onmouseout=function(){
        gowuboxones.style.opacity="0"
        gowubox.style.opacity="0"
    };
 //结束框
};