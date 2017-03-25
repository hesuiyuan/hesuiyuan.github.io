//获取
function getCookie(key) {
     var cookie=document.cookie;
     var arr=cookie.split("; ");
     var val;
     arr.forEach(function(v){
         var ar=v.split("=");
          if (ar[0]==key){
             val=ar[1];
          }
     });
     return val;
}
//设置
function setCookie(key,val,time) {
    if (time==undefined){
        document.cookie=key+"="+val;
    }else{
        var data=new Date();
        data.setTime(data.getTime()+time);
        document.cookie=key+"="+val+"; expires="+data.toGMTString();
    }
}
//删除
function delCookie(key){
    var data=new Date();
    data.setTime(data.getTime()-1000);
    document.cookie=key+"="+"; expires="+data.toGMTString();
}