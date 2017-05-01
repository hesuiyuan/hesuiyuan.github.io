window.onload=function () {
    var dldl=document.querySelector(".dl-dl");
    var dlzc=document.querySelector(".dl-zc");
    var dllogin=document.querySelector(".dl-login");
    var dlregister=document.querySelector(".dl-register");
    
    dllogin.onclick=function () {
        dldl.style.display = "block";
        dlzc.style.display = "none";
    };

    dlregister.onclick=function () {
        dlzc.style.display = "block";
        dldl.style.display = "none";
        

    };
    $(".dl-register").click(function(){
        $(".dl-login").removeClass("dl-sy")
        $(this).addClass("dl-sy")
    })
    $(".dl-login").click(function(){
        $(".dl-register").removeClass("dl-sy")
        $(this).addClass("dl-sy")
    })
};