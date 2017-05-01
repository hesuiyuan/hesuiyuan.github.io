window.onload=function () {
        var sytitle=document.querySelector("#sy-title");
        var sytitlei=document.querySelector("#sy-title>i");
        var syhidden=document.querySelector(".sy-hidden");
        var flage=true;
        sytitle.addEventListener("touchstart",function(){
            if (flage){
                sytitlei.innerHTML="&#xe600";
                syhidden.style.height="100%";
                flage=false;
            }else {
                sytitlei.innerHTML="&#xe60e";
                syhidden.style.height="0rem";
                flage=true;
            }
        })
    }