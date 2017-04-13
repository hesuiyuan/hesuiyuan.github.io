 function getClass(cName){
        var arr = [];
        var allTag = document.getElementsByTagName("*");
        for(var i = 0; i < allTag.length; i++){
            if(allTag[i].className == cName){
                arr.push(allTag[i]);
            }
        }
        return arr;
    }
    var c=getClass("box");
    console.log(c)