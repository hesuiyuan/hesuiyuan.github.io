window.onload=function(){
        var bannersum=document.querySelector(".bannersum");
        var banner=document.querySelector(".banner");
        var left=document.querySelector(".left");
        var right=document.querySelector(".right");
        var banners=document.querySelectorAll(".bannersum li")
         var cccli=document.querySelectorAll(".ccc li");
          var ctow=document.querySelectorAll(".ctow");
        var wwss=window.innerWidth;
        var num=1;
        var flage=true;
        var cone=ctow[0];
        var t1=setInterval(move,2000)
        window.document.onkeydown=function(e){
            if (e.keyCode==116){
                bannersum.style.transform=`translateX(${-(wwss-17)}px)`;
            }

        }
        function move(){
        if (num==1){
            bannersum.style.transition="all 0.5s"
        }
        num++
        bannersum.style.transform=`translateX(${-num*(wwss-17)}px)`
            // ctow.forEach(function(v,i){
            //     v.onmouseover=function(){
            //         cone.style.backgroundColor="#DCDCDC"
            //         v.style.backgroundColor="#808080"
            //         cone=ctow[i]
            //
            //     }
            // })

    }
        bannersum.addEventListener("transitionend",function (){
            if (num==4){
                bannersum.style.transform=`translateX(-${wwss-17}px)`
                num=1;
                bannersum.style.transition="none"
            }
            if (num==0){
                bannersum.style.transform=`translateX(-${(wwss-17)*3}px)`
                num=3;
                bannersum.style.transition="none"
            }
            flage=true;
        })
            hover(banner,function(e){
                // clearInterval(t1)
                left.style.opacity=1;
                right.style.opacity=1;
            },function () {
                // t1=setInterval(move,2000)
                left.style.opacity=0;
                right.style.opacity=0;
            })
    right.onclick=function(){
        if (flage){
            move();
            flage=false;
        }
    }
    left.onclick=function(){
        if (flage){
            num-=2
            move()
            flage=false;

        }

    }
    var flages=true;
    var goshopping=document.querySelector(".goshopping");
    var shapping=document.querySelector(".shapping");
    shapping.onclick=function(){
        if (flages){
            goshopping.style.opacity=1;
            flages=!flages;
        }else {
            goshopping.style.opacity=0;
            flages=!flages
        }


    }
    var smallshows=document.querySelector(".smallshows");
    var navsmallshows=document.querySelector(".navsmallshows");
    var top=document.querySelector(".top");
    var shapping=document.querySelector(".shapping");
    var flpp=true;
    smallshows.onclick=function(){
        if (flpp){
            animate(navsmallshows,{height:500},500);
            smallshows.innerHTML="&#xe659;";
            smallshows.style.color="#fff";
            top.style.display="none"
            shapping.style.opacity=0;
            flpp=!flpp;
        }else {
            animate(navsmallshows,{height:0},500);
            smallshows.innerHTML="&#xe601;";
            top.style.display="block"
            shapping.style.opacity=1;
            flpp=!flpp;
        }

        }
    var find=document.querySelector("#find");
    var findbox=document.querySelector(".findbox");
    var mac=document.querySelector("#mac");
    var macs=document.querySelector("#macs");
    var gply=true;
    find.onclick=function(){
        if (gply){
            find.innerHTML="&#xe659;"
            find.style.color="#fff"
            findbox.style.width="60%"
            findbox.innerHTML="搜索";
            mac.style.opacity=0;
            macs.style.opacity=0;
            top.style.display="none"
            gply=!gply;
        }else {
            findbox.style.width="";
            findbox.innerHTML="";
            find.innerHTML="&#xe67a;"
            mac.style.opacity=1
            macs.style.opacity=0;
            top.style.display="block"
            gply=!gply
        }


    }

    //最后
    }