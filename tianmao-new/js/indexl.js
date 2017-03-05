window.onload=function(){
    

var list=document.getElementsByClassName("list");
var dian=document.getElementsByClassName("dian");
 var content=document.querySelector(".content")
    var boxx=document.querySelector(".boxx")
    var colorss=["#000","#E8E8E8","#E8E8E8","#E8E8E8","#F4CCC9"]
for (let i=0;i<dian.length;i++){
    dian[i].onmouseover=function(){
        for (let j=0;j<list.length;j++){
            list[j].style.opacity="0";
            dian[j].style.background="#A2A2A2";
        }
        list[i].style.opacity="1";
        dian[i].style.background="#F1F1F1";
        num=i
    };
}
//        00001
var num=0;
var t1=setInterval(move,2000);
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
}
    content.onmouseover=function(){
    clearInterval(t1);
};
    content.onmouseout=function(){
        t1=setInterval(move,2000);
    };
    //02
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
        if (obj.scrollTop>=1700&&obj.scrollTop<2133){
            newboxsumli[0].style.background=color[0]
        }
            if (obj.scrollTop>=2023&&obj.scrollTop<2914){
                newboxsumli[0].style.background="#626262"
                newboxsumli[1].style.background=color[1]
        }
        if (obj.scrollTop>=2804&&obj.scrollTop<3414){
            newboxsumli[1].style.background="#626262"
            newboxsumli[2].style.background=color[2]
        }
        if (obj.scrollTop>=3304&&obj.scrollTop<4017){
            newboxsumli[2].style.background="#626262"
            newboxsumli[3].style.background=color[3]
        }
        if (obj.scrollTop>=3907&&obj.scrollTop<4517){
            newboxsumli[3].style.background="#626262"
            newboxsumli[4].style.background=color[4]
        }
        if (obj.scrollTop>=4397&&obj.scrollTop<5082){
            newboxsumli[4].style.background="#626262"
            newboxsumli[5].style.background=color[5]
        }
        if (obj.scrollTop>=5028){
            newboxsumli[5].style.background="#626262"
            newboxsumli[6].style.background=color[6]
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
            }
            else {
                if (i==7){
                  var fooe=fooers.offsetTop;
                    animate(obj,{scrollTop:fooe},50)
                }
            }
            var s=chuxinpin[i].offsetTop;

                animate(obj,{scrollTop:s-110},50)
            console.log(s)
        }

    }
    //侧滑栏
    var boxsumli=document.querySelectorAll(".box-sum li");
    var arrli=Array.from(boxsumli);
    var newboxsumli=arrli.slice(1,-1);
    var color=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000"];
    var obk=newboxsumli[0];
     newboxsumli.forEach(function(h,s){
        h.onmouseover=function(){
            newboxsumli[s].style.background=color[s]
            obk.style.background="#626262"
            obk=newboxsumli[s];
        } 
     });
//最后
};