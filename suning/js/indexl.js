window.onload=function(){
        var con=document.querySelector(".con");
        var sl,ml,cx,i=0,dx=0,st,mt,ct;
        var pd="right";
        var w=window.innerWidth;
        con.addEventListener("touchstart",function(e){
            con.style.transition="none";
            sl=e.changedTouches[0].clientX;
            st=e.timeStamp;
        });
        con.addEventListener("touchmove",function(e){
            ml=e.changedTouches[0].clientX;
            cx=ml-sl;
            pd=cx<0?"left":"right";
            con.style.transform=`translateX(${cx+dx}px)`;
            mt=e.timeStamp;
        });
        con.addEventListener("touchend",function() {
            con.style.transition="all 0.5s";
            var n=i;
            var ct=mt-st;
            if (Math.abs(cx)>w/3||ct>300){
                con.style.transform=`translateX(0)`;
            }else {
                if (pd=="left"){
                    i++;
                }else {
                    i--
                }
            }
            if (i<0||i>5){
                i=n;
            }
            dx=-i*w;
            con.style.transform=`translateX(${dx}px)`;
        });
    //最后
    };