window.onload=function () {
    var pfc=document.querySelector(".pfc")
    var speedx=10;
    var speedy=10;
    var l=parseInt(getComputedStyle(pfc,null).left)
    var t=parseInt(getComputedStyle(pfc,null).top)
    setInterval(function () {
        l+=speedx;
        t+=speedy;
        if(t>window.innerHeight-pfc.offsetHeight||t<0){
            speedy*=-1;
        }
        if(l>window.innerWidth-pfc.offsetWidth||l<0){
            speedx*=-1
        }

        pfc.style.left=l+"px"
        pfc.style.top=t+"px"

    },50)




//最后
}