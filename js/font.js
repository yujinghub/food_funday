!function(n){//1rem=100px
		var  e=n.document,
		t=e.documentElement,
		i=640,//设计图宽度一般情况：PC 1920	PHONE:1080
		d=i/100,
		o="orientationchange"in n?"orientationchange":"resize",
		a=function(){
		var n=t.clientWidth||320;n>640&&(n=640);//处都改为设计图宽度
		t.style.fontSize=n/d+"px"
	};
	e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);