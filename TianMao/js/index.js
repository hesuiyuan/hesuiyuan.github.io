window.onload=function () {
    var lunbo1=document.querySelectorAll(".down");
    var quan1=document.querySelectorAll(".kuai");
    for(let i=0;i<quan1.length;i++){
        quan1[i].onmouseover=function(){
            for(let j=0;j<quan1.length;j++){
                quan1[j].style.background="rgba(0,0,0,0.5)";
                quan1[j].style.border="0";
                lunbo1[j].style.zIndex="1";
                lunbo1[j].style.opacity="0";
            }
            quan1[i].style.background="rgba(255,255,255,0.7)";
            quan1[i].style.border="2px solid rgba(0,0,0,0.5)";
            lunbo1[i].style.zIndex="2";
            lunbo1[i].style.opacity="1";
            num=i;
        }
    }
    var num=5;
    var tt=setInterval(move,3000);
    function move() {
        num++;
        if (num==lunbo1.length){
            num=0;
        }
        if (num==-1){
            num=lunbo1.length-1;
        }
        for(let j=0;j<quan1.length;j++){
            quan1[j].style.background="rgba(0,0,0,0.5)";
            quan1[j].style.border="0";
            lunbo1[j].style.zIndex="1";
            lunbo1[j].style.opacity="0";
        }
        quan1[num].style.background="rgba(255,255,255,0.7)";
        quan1[num].style.border="2px solid rgba(0,0,0,0.5)";
        lunbo1[num].style.zIndex="2";
        lunbo1[num].style.opacity="1";
    }
    var banner1=document.querySelectorAll(".banner")[0];
    banner1.onmouseover=function () {
        clearInterval(tt)
    };
    banner1.onmouseout=function () {
        tt=setInterval(move,3000)
    };
    var newlist=document.querySelector(".conlose");
    var newhang=document.querySelectorAll(".hang");
    var newbool1=document.querySelectorAll(".bool1");
    var newbool=document.querySelectorAll(".boolean");
    var num5=[1758,2255,2852,3355,3953,4455,5910,0];
    var dbi;
    var newcolor=["#ea5f8d","#0aa6e8","#64c333","#f15453","#19c8a9","#f7a945","#000","#ACACAC"]
    var newcolor1=["#ea5f8d","#0aa6e8","#64c333","#f15453","#19c8a9","#f7a945", "#DD2727","#ACACAC"]
    window.onscroll=function () {
        dbi=document.body.scrollTop==0?document.documentElement:document.body;
        if (dbi.scrollTop>700){
            newlist.style.top=0;
            newbool[0].style.width="36px";
            newbool[0].style.height="333px";
        }else{
            newlist.style.top="-50px";
            newbool[0].style.width="0";
            newbool[0].style.height="0";
        }

    }
    window.addEventListener("scroll",function () {
         for(let i=0;i<newbool1.length;i++) {
             if ((num5[i]<=dbi.scrollTop)&&(num5[i+1]>dbi.scrollTop)){
                 for(let j=0;j<newbool1.length;j++){
                     newbool1[j].style.background="rgba(0,0,0,0.5)";
                     newbool1[7].style.background="#ACACAC";
                 }
             newbool1[i].style.background=newcolor1[i]
             }
             if (num5[6]<=dbi.scrollTop){
              newbool1[6].style.background=newcolor1[6]
          newbool1[5].style.background="rgba(0,0,0,0.5)"
         }}
         })

    for(let i=0;i<newbool1.length;i++){
        newbool1[i].onclick=function () {
            newbool1[i].style.background=newcolor1[i];
            animate(dbi,{scrollTop:num5[i]},500);
        }
    }
    for(let i=0;i<newbool1.length;i++){
        newbool1[i].addEventListener("mouseover",function () {
        for(let j=0;j<newbool1.length;j++){
            newbool1[j].style.background="rgba(0,0,0,0.5)";
            newbool1[7].style.background="#ACACAC";
        }
        newbool1[i].style.background=newcolor[i];
    })
    }
    


 //结束
};
