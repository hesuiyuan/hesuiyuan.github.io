//下拉搜索框
window.onload=function(){
        var obj;
        var search=document.getElementsByClassName("search")[0];
        var cenav=document.querySelector(".cenav");
        var cenavli=document.querySelectorAll(".cenav li");
        var licl=cenavli[0];
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
            // cenavli.forEach(function(v,i){
            // if (obj.scrollTop<1841&&obj.scrollTop>1500){
            //     cenavli[0].style.backgroundColor="#918888"
            // }
            //  if (obj.scrollTop>1841&&scrollTop<2431){
            //      alert(0)
            //      licl.style.backgroundColor="#918888"
            //        cenavli[1].style.backgroundColor="#D70B1C";
            //      licl=cenavli[1];
            //  }
            // if (obj.scrollTop>2431&&scrollTop<2984){
            //     licl.style.backgroundColor="#918888"
            //     cenavli[2].style.backgroundColor="#D70B1C";
            //     licl=cenavli[2];
            // }
            // if (obj.scrollTop>2898&&scrollTop<3537){
            //     licl.style.backgroundColor="#918888"
            //     cenavli[3].style.backgroundColor="#D70B1C";
            //     licl=cenavli[3];
            // }
            // if (obj.scrollTop>3537&&scrollTop<4090){
            //     licl.style.backgroundColor="#918888"
            //     cenavli[4].style.backgroundColor="#D70B1C";
            //     licl=cenavli[4];
            // }
            //     if (obj.scrollTop>4090&&scrollTop<4773){
            //         licl.style.backgroundColor="#918888"
            //         cenavli[5].style.backgroundColor="#D70B1C";
            //         licl=cenavli[5];
            //     }
            //     if (obj.scrollTop>4773&&scrollTop<5326){
            //         licl.style.backgroundColor="#918888"
            //         cenavli[6].style.backgroundColor="#D70B1C";
            //         licl=cenavli[6];
            //     }
            //     if (obj.scrollTop>5326&&scrollTop<5879){
            //         licl.style.backgroundColor="#918888"
            //         cenavli[7].style.backgroundColor="#D70B1C";
            //         licl=cenavli[7];
            //     }
            //     if (obj.scrollTop>5879&&scrollTop<6432){
            //         licl.style.backgroundColor="#918888"
            //         cenavli[8].style.backgroundColor="#D70B1C";
            //         licl=cenavli[8];
            //     }
            //     if (obj.scrollTop>6432&&scrollTop<7432){
            //         licl.style.backgroundColor="#918888"
            //         cenavli[9].style.backgroundColor="#D70B1C";
            //         licl=cenavli[9];
            //     }
            // })
        };
    var centertxet=document.querySelectorAll(".centertxet");
    var conimgimg=document.querySelectorAll(".conimg img");
    var conimg=document.querySelectorAll(".conimg")
    Array.from(conimg).forEach(function(v,i){
        v.onmouseover=function(){
            conimgimg[i].style.transform="translateY(-5px)";
        };
        v.onmouseout=function(){
            conimgimg[i].style.transform="translateY(0)";
        }
    });
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
        console.log(v)
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
    //JD秒杀轮播图
    var list1sum=document.querySelector(".list1sum");
    var list1left=document.querySelector("#list1left");
    var list1rights=document.querySelector("#list1right");
    var conlist1=document.querySelector(".conlist1");
    list1sum.onmouseover=function(){
        list1left.style.opacity=1;
        list1rights.style.opacity=1;
    };
    list1sum.onmouseout=function(){
        list1left.style.opacity=0;
        list1rights.style.opacity=0;
    };
             var nums=1;
             var flage=true;
                 list1rights.onclick=function(){
                     if (nums==1){
                         conlist1.style.transition="all 1s"
                     }
                     if (flage){
                         nums++;
                         conlist1.style.transform=`translateX(${-nums*998}px)`;
                         flage=false;
                     }
                 };
    list1left.onclick=function(){
        conlist1.style.transition="all 1s"
        if (flage){
            nums--;
            conlist1.style.transform=`translateX(${-nums*998}px)`
            flage=false
        }

    };
    conlist1.addEventListener("transitionend",function(){
        if (nums==5){
            conlist1.style.transition="none";
            conlist1.style.transform='translateX(-998px)';
            nums=1;
        }
        if (nums==0){
            conlist1.style.transition="none";
            conlist1.style.transform='translateX(-3992px)';
            nums=4;
        }
         flage=true;
    });
    //five小轮播图
    var fiveleft=document.querySelectorAll(".fiveleft");
    var fiveright=document.querySelectorAll(".fiveright");
    var fivebox=document.querySelectorAll(".fivebox");
    var fivelast=document.querySelectorAll(".fivelist:last-child");
    Array.from(fivebox).forEach(function(v,i){
       HSY(fiveright[i],v,fiveleft[i],fivelast[i])
    });
    function HSY(fiveright,fivebox,fiveleft,fivelast) {
    fiveright.onclick=function(){
        if (first==1){
            fivebox.style.transition=""
        }
        if (play){
            first++;
            fivebox.style.transform=`translateX(${-590*first}px)`
            play=false;
        }
    };
    fivebox.addEventListener("transitionend",function(){
        if (first==3){
            fivebox.style.transition="none";
            fivebox.style.transform="translateX(-590px)";
            first=1;
        }
        if (first==0){
            fivebox.style.transition="none";
            fivebox.style.transform="translateX(-1180px)";
            first=2
        }
        play=true;
    });
    fiveleft.onclick=function(){
        if (first==2){
            fivebox.style.transition=""
        }
        if (play){
            first--;
            fivebox.style.transform=`translateX(${-590*first}px)`
            play=false;
        }
    };
        hover(fivelast,function(){
            fiveleft.style.opacity=1;
            fiveright.style.opacity=1;
            fiveleft.style.color="#F10835";
            fiveright.style.color="#F10835";
        },function() {
            fiveleft.style.opacity=0;
            fiveright.style.opacity=0;
        });
        var play=true;
        var first=1;
    }
    //发现好货的动画
    var importli=document.querySelectorAll(".import li");
    var line=document.querySelector(".line");
    var importspan=document.querySelectorAll(".import li span");
    var import2img=document.querySelectorAll(".import2 img");
    var import2span=document.querySelectorAll(".import2 span");
    var newimg=["images/12.jpg","images/12.1.jpg","images/12.3.jpg","images/12.4.jpg","images/12.5.jpg","images/12.1.jpg"];
    var newimg2=["images/12.1.jpg","images/12.jpg","images/12.4.jpg","images/12.3.jpg","images/12.1.jpg","images/12.5.jpg"];
    var newimg3=["images/12.3.jpg","images/12.1.jpg","images/12.5.jpg","images/12.3.jpg","images/12.jpg","images/12.4.jpg"];
    var newimg4=["images/12.4.jpg","images/12.5.jpg","images/12.jpg","images/12.1.jpg","images/12.3.jpg","images/12.4.jpg"];
    var newimg5=["images/12.5.jpg","images/12.jpg","images/12.1.jpg","images/12.4.jpg","images/12.5.jpg","images/12.jpg"];
    Array.from(importli).forEach(function(v,i){
        v.onmouseover=function(){
            import2img.forEach(function(v,k){
                import2span.forEach(function(m,o){
             if (i==0){
                 line.style.left=0;
                  import2img[o].src=newimg[o]
                 m.innerHTML="Apple iPhone 7 (A1660) 32G 黑色 移动联通电信4G手机"
             }else {
                 if (i==1){
                     line.style.left="80px"
                     import2img[o].src=newimg2[o]
                     m.innerHTML="2017新款彩棉婴儿连体衣 新生儿彩棉棉保暖衣服 春秋夹棉宝宝连体衣 哈衣爬服外出服 米白爱心(春秋夹棉) 66码(建议0-6个月)"
                 }else {
                     if (i==2){
                         line.style.left="160px"
                         import2img[o].src=newimg3[o]
                         m.innerHTML="【京东超市】帮宝适 Pampers 超薄干爽 婴儿拉拉裤 加加大号XXL50片【15kg以上】"
                     }else {
                         if (i==3){
                             import2img[o].src=newimg4[o]
                             line.style.left="230px"
                             m.innerHTML="小米米初生婴儿连体哈衣纯棉春装男女宝宝蝴蝶衣爬服新生儿衣服 粉 52cm(0-3月)"
                         }else {
                             import2img[o].src=newimg5[o]
                             line.style.left="310px"
                             m.innerHTML="天章(TANGO) 新绿天章70克A4复印纸 500张/包 8包/箱"
                         }
                     }
                 }
             }
            })
            })
        }
    });
    //购物
    var goshopping=document.querySelector("#goshoping");
    var goshoppingbox=document.querySelector(".goshopping-box");
    hover(goshopping,function () {
          goshoppingbox.style.opacity=1;
          goshopping.style.borderBottom="1px solid #fff"
    },function(){
        goshoppingbox.style.opacity=0;
        goshopping.style.borderBottom="";
    })
    //最后
    };