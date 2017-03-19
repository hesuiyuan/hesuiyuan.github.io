function ajax (obj) {
	var type=obj.type||"get";
	var url=obj.url;
	var data=obj.data||"";
	var aysnch=obj.aysnch==undefined?true:obj.aysnch;
	var dataType=obj.dataType||"text";
	var succ=obj.success;
	var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	if (typeof data=="object") {
         for(i in data){
         	var src="";
         	src+=i+"="+data[i]+"&";
         	src.slice(0,-1);
         	data=src;
         }
	};
	if (type=="get") {
		if (data=="") {
			xhr.open(type,url,aysnch)
		}else{
			xhr.open(type,url+"?"+data,aysnch)
		}
		xhr.send();
	}else{
               xhr.open(type,url,aysnch)
               xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
               xhr.send(data);
	}
	xhr.responseType=dataType;
	xhr.onload=function(){
		var r=xhr.response
		 succ(r);
	}
}