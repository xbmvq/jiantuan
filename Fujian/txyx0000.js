function sc5(){
   var s=(document.documentElement.scrollTop+document.documentElement.clientHeight-document.getElementById("tuanxun").offsetHeight)+"px";
   var z=(document.documentElement.scrollLeft+document.documentElement.clientWidth-document.getElementById("tuanxun").offsetWidth)+"px";
	 document.getElementById("tuanxun").style.top=s; 
     document.getElementById("tuanxun").style.left=z; 
}
function closeDiv()
{
     document.getElementById('tuanxun').style.visibility='hidden';
}
function scall(){
 sc5();
 sc51();
}
function sc51(){
   var s1=(document.documentElement.scrollTop+document.documentElement.clientHeight-document.getElementById("tuanxun1").offsetHeight)+"px";
   var z1=0;
	 document.getElementById("tuanxun1").style.top=s1; 
     document.getElementById("tuanxun1").style.left=z1; 
}
function closeDiv1()
{
     document.getElementById('tuanxun1').style.visibility='hidden';
}
window.onscroll=scall;  
window.onresize=scall;  
window.onload=scall;  
