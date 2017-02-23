window.onload=function(){
    var con=document.querySelector(".content");
    var num=1;
    var t1=setInterval(move,2000);
    function move() {
        bottom=false;
        con.style.transition="all 0.5s";
        num++;
        con.style.marginLeft=-295*num+"px"
    }
    con.addEventListener("transitionend",function(){
        if (num==13){
             con.style.marginLeft="-295px";
            num=0;
            con.style.transition="none"
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
          move();
          }
      };

//    最后
};