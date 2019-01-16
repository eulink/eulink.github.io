// JavaScript Document
var speed=50;
var colee2=document.getElementById("colee2");
var colee1=document.getElementById("colee1");
var colee=document.getElementById("colee");
colee2.innerHTML=colee1.innerHTML; 
function Marquee1(){
if(colee2.offsetTop-colee.scrollTop<=0){
 colee.scrollTop-=colee1.offsetHeight; 
 }else{
 colee.scrollTop++
}
}
var MyMar1=setInterval(Marquee1,speed)
colee.onmouseover=function() {clearInterval(MyMar1)}
colee.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}
