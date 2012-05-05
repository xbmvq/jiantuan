Day=new Array(7);
Day[0]="日"; Day[1]="一";
Day[2]="二"; Day[3]="三";
Day[4]="四"; Day[5]="五";
Day[6]="六";

today=new Date();
month=today.getMonth()+1;
day=today.getDate();
year=today.getYear();
weekly=today.getDay();

mydate=" "+year+"年"+month+"月"+day+"日 　星期"+Day[weekly];

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function SetMail() {
	var d;
	var t=document.getElementById("TxtMail").value;

	for (var i=0; i<document.getElementsByName("DoMail").length; i++){
		var e=document.getElementsByName("DoMail")[i];
		if (e.checked){
			d=document.getElementsByName("DoMail")[i].value;
		}
	}

	if (!ValEM(t)){
		alert("请输入正确的Email地址！");
		return false;
	}

	document.FrmSubMail.action = "/mail/submail.asp?do="+d+"&txt="+t;
	document.FrmSubMail.submit();

}

function imgtab(m,n,count){
 if (m==4){
 	getObject('tab_'+m+'_0').style.display='none';
 }
 for(var i=1;i<=count;i++){
  if (i==n){
   getObject(m+'_'+i).src='img10/bv2008_menu_'+m+'_'+i+'b.gif';
   getObject('tab_'+m+'_'+i).style.display='';
  }
  else {
   getObject(m+'_'+i).src='img10/bv2008_menu_'+m+'_'+i+'a.gif';
   getObject('tab_'+m+'_'+i).style.display='none';
   }
 }
}

function getObject(objectId) {
    if(document.getElementById && document.getElementById(objectId)) {
	// W3C DOM
	return document.getElementById(objectId);
    } else if (document.all && document.all(objectId)) {
	// MSIE 4 DOM
	return document.all(objectId);
    } else if (document.layers && document.layers[objectId]) {
	// NN 4 DOM.. note: this won't find nested layers
	return document.layers[objectId];
    } else {
	return false;
    }
} // getObject

//以下为牛逼的MS检查Email脚本
function ValEM(nb){var tsEM=Trim(nb);var iA=tsEM.indexOf("@");var aE=tsEM.split("@");if(iA==-1||tsEM.charAt(0)>"~"||tsEM.indexOf(".",iA)==-1||tsEM.indexOf(" ",0)!=-1||aE.length>2)return false;else{if(aE[0].length>0&&aE[1].length>0)return true;else return false;}}
function LTrim(Fb){for(var k=0;k<Fb.length&&Fb.charAt(k)<=" ";k++){}return Fb.substring(k,Fb.length);}
function RTrim(Gb){for(var j=Gb.length-1;j>=0&&Gb.charAt(j)<=" ";j--){}return Gb.substring(0,j+1);}
function Trim(Hb){return LTrim(RTrim(Hb));}
document.write( "<iframe name=\"ChkSubMail\" src=\"*.html\" style=\"display:none\"></iframe>");