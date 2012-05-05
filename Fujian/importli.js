document.write('<div id=demo style="overflow:hidden;height:74px;width:920px;margin:0px 5px 0px 35px;">');
document.write('<table width="920" height="72" border="0" cellpadding="0" cellspacing="0"><tr align="center">');
document.write('<td><a href="http://www.beijingyouth.org.cn/"><img src="/img/2009/5/26/9A10BDFA6EE1465DBA4F16A4A95E9D43.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.bjstudent.org.cn/"><img src="/img/2007/12/5/20743.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://bqqx.bjyouth.net/"><img src="/images/link/bqqx.bjyouth.net.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.bjyc.org/"><img src="/img/2010/8/19/F2C6DDF63A554AFC98774E30B58E4D20.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://qytj.bjyouth.net"><img src="/img/2010/8/19/28AC96686A4B45409A61E0D48FAD54E4.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.bv2008.cn/"><img src="/img/2009/9/29/185BE62173074797AF0E31BDF5921046.jpg" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('</tr></table>');
document.write('<table width="920" height="72" border="0" cellpadding="0" cellspacing="0"><tr align="center">');
document.write('<td><a href="http://bjyouth.ynet.com/"><img src="/images/link/www.bjyouth.com.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.bjypc.edu.cn/"><img src="/img/2010/8/19/5B9B6F486FF84663B53874D18BC4F6A5.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.youthgroup.cn/"><img src="/img/2010/8/19/42FD0F554EDB4A0C94CC5745896D3739.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.bjqng.com.cn/"><img src="/images/link/www.bjqng.com.cn.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.beiqingyinxiang.com.cn/"><img src="/img/2010/8/19/220B0DB643F34FAEA3E388F5CA5931EC.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.bjjdzx.org/"><img src="/img/2007/12/5/20741.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('</tr></table>');
document.write('<table width="920" height="72" border="0" cellpadding="0" cellspacing="0"><tr align="center">');
document.write('<td><a href="http://www.bjydf.cn/"><img src="/img/2009/6/17/C7927EE0CD274630BD034542EE094C4E.jpg" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.bjyouth.gov.cn/special/201105zspd/"><img src="/img/2011/8/19/1891088017C1456BBDD30BF728099168.jpg" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.cybj.cn"><img src="/img/2009/5/26/5BD97F828E6B438F991D02BC51229948.jpg" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.12355.org/"><img src="/img/2010/8/19/D4F3DD1F85E044678B2D33FAA1249976.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://www.qmoon.net/"><img src="/img/2007/12/3/20584.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('<td><a href="http://xinli.youth.cn/"><img src="/img/2010/8/19/8862D9962C2C4FFCB45024ED2BBC3DD6.gif" width="130" height="60" border="1" style="border-color:#000000;"></a></td>');
document.write('</tr></table>');

document.write('</div>');

function startmarquee(lh,speed,delay){ 
var t; 
var p=false; 
var o=document.getElementById("demo"); 
o.innerHTML+=o.innerHTML; 
o.onmouseover=function(){p=true} 
o.onmouseout=function(){p=false} 
o.scrollTop = 0; 
function start(){ 
t=setInterval(scrolling,speed); 
if(!p) o.scrollTop += 8; 
} 
function scrolling(){ 
if(o.scrollTop%lh!=0){
o.scrollTop += 2; 
if(o.scrollTop>=o.scrollHeight/2) o.scrollTop = 0; 
}else{ 
clearInterval(t); 
setTimeout(start,delay); 
} 
} 
setTimeout(start,delay); 
} 
startmarquee(74,1,8000); /**startmarquee(一次滚动高度,速度,停留时间);**/