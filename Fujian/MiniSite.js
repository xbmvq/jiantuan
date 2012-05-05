var MiniSite=new Object();
MiniSite.Browser={
	ie:/msie/.test(window.navigator.userAgent.toLowerCase()),
	moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),
	opera:/opera/.test(window.navigator.userAgent.toLowerCase()),
	safari:/safari/.test(window.navigator.userAgent.toLowerCase())
};
MiniSite.$=function(s){
	return(typeof s=='object')?s:document.getElementById(s);
};

MiniSite.Cookie={
	set:function(name,value,expires,path,domain){
		if(typeof expires=="undefined"){
			expires=new Date(new Date().getTime()+24*3600*1000);
		}
		document.cookie=name+"="+escape(value)+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path="+path:"; path=/")+((domain)?";domain="+domain:"");
	},
	get:function(name){
		var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr!=null){
			return unescape(arr[2]);
		}
		return null;
	},
	clear:function(name,path,domain){
		if(this.get(name)){
			document.cookie=name+"="+((path)?"; path="+path:"; path=/")+((domain)?"; domain="+domain:"")+";expires=Fri, 02-Jan-1970 00:00:00 GMT";
		}
	}
};

function $(o){ return (typeof o == "object")?o:document.getElementById(o);}

function getExpires(a){//a:day
	var expires=new Date(new Date().getTime()+(a?a:1)*24*3600*1000);
	return expires;
}

function setdefSkin(){
	var expires = getExpires(90);
	var n =  MiniSite.Cookie.get("index_skin");
	if(n!=null){
		var m = MiniSite.Cookie.get("index_skin_2010");//index_skin_def
		if(!m){
			setSkin(0);
			MiniSite.Cookie.set("index_skin_2010","true",expires);
		}else{
			setSkin(n);
		}
			
	}else{
		MiniSite.Cookie.set("index_skin_2010","true",expires);
	}
}

	var cssList = new Array("red.css","yellow.css","blue.css","green.css")

	function setSkin(n){var expires = getExpires(90);var css = $("cssChange");var cssurl = "/img10/";cssurl +=cssList[n];css.href=cssurl;MiniSite.Cookie.set("index_skin",n,expires);}

	function formatSkin()
	{var p = $("SkinList").getElementsByTagName("li");var s = $("sar");for(i=0;i<p.length;i++){p[i].num = i;p[i].onclick = function(){setSkin(this.num);}}}

function register0410(item,page) 
{try{var type = window.event.srcElement.tagName;if (type == "A" || type == "IMG" ) {call_0410(type,item, page);}return true;}catch(e){}}