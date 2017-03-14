//下拉搜索框
window.onload=function(){
        var obj;
        var search=document.getElementsByClassName("search")[0];
        var cenav=document.querySelector(".cenav");
        var cenavli=document.querySelectorAll(".cenav li");
        window.onscroll=function(){
            obj=document.body.scrollTop==0?document.documentElement:document.body;
            if (obj.scrollTop>700){
                search.style.marginTop="0"
            }else {
                search.style.marginTop="-50px"
            }
            //测导航出现
            if (obj.scrollTop>1500){
                cenav.style.opacity="1";
            }else {
                cenav.style.opacity="0"
            }
        };
    //定时器
    var hours=document.querySelector(".hours");
    var mines=document.querySelector(".mines");
    var secounnd=document.querySelector(".secound");
    var mm,hh,m;
    var furture=new Date();
    furture.setHours(24);
    furture.setMinutes(0);
    furture.setSeconds(0);
    setInterval(function () {
        var now=new Date();
        var cha=furture.getTime()-now.getTime();
        hh=Math.floor(cha/(1000*60*60));
        hours.innerHTML=hh<10?`0${hh}`:hh;
        m=Math.floor(cha/(1000*60)%60);
        mines.innerHTML=m<10?`0${m}`:m;
        mm=Math.floor((cha/1000)%60);
        secounnd.innerHTML=mm<10?`0${mm}`:mm;
    },1000);
    // 侧导航的选择功能
    var makelife=document.querySelector(".makelife");
    var better=document.getElementById("better");
    better.onclick=function(){
        var h=makelife.offsetTop;
        animate(obj,{scrollTop:h-50},500);
    };
    //不再一起的
    var newcennav=Array.from(cenavli).slice(1);
     var seven=document.querySelector(".seven");
    var five=document.querySelectorAll(".five");
    newcennav.forEach(function(v,i){
        v.onclick=function(){
            var height=five[i].offsetTop;
           console.log(height)
            animate(obj,{scrollTop:height-50},500);
        };
        newcennav[8].onclick=function(){
             var sevenhh=seven.offsetTop;
            animate(obj,{scrollTop:sevenhh-110},500)
        };
        newcennav[9].onclick=function(){
          animate(obj,{scrollTop:0},500)
        };
    });

    //banner的自动轮播
    //停止
    var tent=document.querySelector("#falk");
    var left=document.querySelector(".left");
    var right=document.querySelector(".right");
    tent.onmouseover=function(){
        clearInterval(t1);
        left.style.opacity=1;
        right.style.opacity=1;
    };
    tent.onmouseout=function(){
        t1=setInterval(move,2000);
        left.style.opacity=0;
        right.style.opacity=0;
    };
    //手动
    var banner=document.querySelectorAll(".tent2s img");
    var oo=document.querySelectorAll(".oo");
    var oneoo=oo[0];
     oo.forEach(function(v,i){
               v.onmouseover=function(){
                   num=i;
                   oneoo.style.backgroundColor="#fff";
                   oo[i].style.backgroundColor="#DB192A";
                   oneoo=oo[i];
                   banner.forEach(function(v){
                       v.style.opacity=0;
                   });
                   banner[i].style.opacity=1;
               };
     });
    //自动
    var num=0;
    var too=0;
    var t1=setInterval(move,2000);
    function move(){
        num++;
        if (num==banner.length){
            num=0;
        }
        if (num==-1){
            num=banner.length-1
        }
        banner.forEach(function(v){
            v.style.opacity=0;
            oneoo.style.backgroundColor="#fff";
        });
        banner[num].style.opacity=1;
        oo[num].style.backgroundColor="#DB192A";
        oneoo=oo[num]
        too=num;
    }
    //清除点击快出现的蓝屏
    //箭头点击的效果banner
     right.onmousedown=function(e){
         e.preventDefault()
     };
    right.onclick=function(){
        move()
    };
    left.onclick=function(){
        num=num-2;
        move();
    };
    //address
    var list1=document.querySelector(".list1");
    var address=document.querySelector(".address");
    list1.onmouseover=function(){
        list1.style.border="1px solid #ccc";
        list1.style.borderBottom="none";
        list1.style.backgroundColor="#fff";
        address.style.display="flex";
        address.style.opacity="1";
        address.onmouseover=function(){
            list1.style.border="1px solid #ccc";
            list1.style.borderBottom="none";
            list1.style.backgroundColor="#fff";
            address.style.display="flex";
        };
    };
    list1.onmouseout=function(){
        list1.style.border="none";
        list1.style.backgroundColor="#E3E4E5";
        address.style.display="none"
    };

    address.onmouseout=function(){
        list1.style.border="none";
        list1.style.backgroundColor="#E3E4E5";
        address.style.display="none"
    };
    //测动画
    var navoneulli=document.querySelectorAll(".rightnavoneul li");
    var rightchur=document.querySelectorAll(".rightchur");
    var asd=document.querySelectorAll("#i");
    navoneulli.forEach(function(v,i){
        v.onmouseover=function(){
            v.style.backgroundColor="#CA1623";
            rightchur[i].style.left="-55px"
            // animate(rightchur[i],{left:-55},500);
            rightchur[i].style.opacity="1";
            asd[i].style.backgroundColor="#CA1623"
        };
        v.onmouseout=function(){
            v.style.backgroundColor="#7A6E6E";
            // animate(rightchur[i],{left:100},500);
            rightchur[i].style.left="100px";
            asd[i].style.backgroundColor="#7A6E6E";
            asd[i].style.borderRadius="5px"

        }
    });
    //最下面
    var ppp=document.querySelectorAll("#ppp");
    var rightnavthreeul=document.querySelectorAll(".rightnavthreeul li")
    rightnavthreeul.forEach(function(v,l){
        rightnavthreeul[0].onclick=function(){
           animate(obj,{scrollTop:0},500)
        };
        v.onmouseover=function(){
            v.style.backgroundColor="#CA1623";
            animate(ppp[l],{left:-55},500);
            ppp[l].style.opacity="1"
        };
        v.onmouseout=function(){
            v.style.backgroundColor="#7A6E6E";
            animate(ppp[l],{left:0},500);
        }
    });
    //促销 广告
    var con2images=document.querySelectorAll(".con2images span");
    var con2textp=document.querySelectorAll(".con2textp p");
    var con=[{rr:"自营图书叠券享满300自营图书"}, {rr:"牙齿炫白 星级口腔会场！ "},
        {rr:"“鬼怪棉花”变身“好奇中国最大家京"},
        {rr:"下单立减1000元"}];
    var cons=["京东成为中国最大家京东自营", "京东自营家电清洗帮服务店",
        "京东帮服务店突破170店突破",
        " 京东售后退换无忧店突破店突破"];
             con2images[0].onmouseover=function(){
                 con2textp.forEach(function(v,i){
                     v.innerHTML=con[i].rr;
                     con2images[0].style.borderBottom="2px solid #c43b1f"
        });
};
    con2images[1].onmouseover=function(){
        con2textp.forEach(function(v,i){
            v.innerHTML=cons[i];
             con2images[0].style.borderBottom="none"
        });
    };

    //最后
    };