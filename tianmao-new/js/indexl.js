window.onload=function(){
    

var list=document.getElementsByClassName("list");
var dian=document.getElementsByClassName("dian");
    var content=document.querySelector(".content")
for (let i=0;i<dian.length;i++){
    dian[i].onmouseover=function(){
        for (let j=0;j<list.length;j++){
            list[j].style.opacity="0";
            dian[j].style.background="#A2A2A2"
        }
        list[i].style.opacity="1";
        dian[i].style.background="#F1F1F1"
        num=i
    };
}
//        00001
var num=0;
var t1=setInterval(move,2000)
function move(){
    num++;
    if (num==list.length){
        num=0;
    }
    for (let j=0;j<list.length;j++){
        list[j].style.opacity="0";
        dian[j].style.background="#A2A2A2"
    }
    list[num].style.opacity="1";
    dian[num].style.background="#F1F1F1"
    // content.onmouseover(function(){
    //     clearInterval(t1)
    // })
}
    // content.onmouseout(function(){
    //     t1=setInterval(move,2000)
    // })


//         02
var content=document.getElementsByClassName("box")[0];
content.onmouseover=function(){
    clearInterval(t1);
};
content.onmouseout=function(){
        t1=setInterval(move,2000);
    };
    var sum=document.querySelector(".box-sum");
    var an=document.querySelectorAll(".lists");
    var tops=document.querySelector(".top");
    window.onscroll=function(){
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        if (obj.scrollTop>1500){
            animate(sum,{width:40,height:360},1)
            tops.style.height="50px"
        }else {
            animate(sum,{width:0,height:0},1)
            tops.style.height="0"
        }
    };
//    22222
    var an=document.querySelectorAll(".lists");
    var chuxinpin=document.querySelectorAll(".chuxinpin");
    var sections=document.querySelector(".sectionss");
    var fooers=document.querySelector(".fooer")
    for(let i=0;i<an.length;i++){
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        an[i].onclick=function(){
            if (i==6){
                 var sect=sections.offsetTop;
                animate(obj,{scrollTop:sect-120},50)
            }else {
                if (i==7){
                  var fooe=fooers.offsetTop;
                    animate(obj,{scrollTop:fooe},50)
                }
            }
            var s=chuxinpin[i].offsetTop;
                animate(obj,{scrollTop:s-110},50)
        }
    }
//最后
};