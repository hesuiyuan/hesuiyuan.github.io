window.onload=function(){
    

var list=document.getElementsByClassName("list");
var dian=document.getElementsByClassName("dian");
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
}
//         02
var content=document.getElementsByClassName("box")[0];
content.onmouseover=function(){
    clearInterval(t1);
}
content.onmouseout=function(){
        t1=setInterval(move,2000);
    }
    
    
    
//最后
};