//导航切换事件
$(window).scroll(() => {
	if($(window).scrollTop() > 0) {
		$(".navbar").addClass("fixed-menu");
	} else {
		$(".navbar").removeClass("fixed-menu");
	}

	if($(window).scrollTop() < 72) {
		$(".navbar-nav li").removeClass("active")
		document.styleSheets[1].addRule(".navbar-nav li:nth-of-type(1) a:after", "transform:scale3d(0,1,1)");
	} else if($(window).scrollTop() > 72 && $(window).scrollTop() < 650) {
		$(".navbar-nav li:nth-of-type(1)").addClass("active");
		$(".navbar-nav li:nth-of-type(1)").siblings().removeClass("active");		
		document.styleSheets[1].addRule(".navbar-nav li:nth-of-type(1) a:after", "transform:scale3d(1,1,1)");
		document.styleSheets[1].addRule(".navbar-nav li:nth-of-type(2) a:after", "transform:scale3d(0,1,1)");
	} else if($(window).scrollTop() > 650 && $(window).scrollTop() < 2030) {
		$(".navbar-nav li:nth-of-type(2)").addClass("active");
		$(".navbar-nav li:nth-of-type(2)").siblings().removeClass("active");		
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(2) a:after', 'transform:scale3d(1,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(1) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(3) a:after', 'transform:scale3d(0,1,1)');
	} else if($(window).scrollTop() > 2030 && $(window).scrollTop() < 2850) {
		$(".navbar-nav li:nth-of-type(3)").addClass("active");
		$(".navbar-nav li:nth-of-type(3)").siblings().removeClass("active");
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(3) a:after', 'transform:scale3d(1,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(2) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(4) a:after', 'transform:scale3d(0,1,1)');
	} else if($(window).scrollTop() > 2850 && $(window).scrollTop() < 3850) {
		$(".navbar-nav li:nth-of-type(4)").addClass("active");
		$(".navbar-nav li:nth-of-type(4)").siblings().removeClass("active");	
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(3) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(5) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(4) a:after', 'transform:scale3d(1,1,1)');
	} else if($(window).scrollTop() > 3850 && $(window).scrollTop() < 5600) {
		$(".navbar-nav li:nth-of-type(5)").addClass("active");
		$(".navbar-nav li:nth-of-type(5)").siblings().removeClass("active");
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(4) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(6) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(5) a:after', 'transform:scale3d(1,1,1)');
	}else if($(window).scrollTop() > 5600 && $(window).scrollTop() < 6500){
		$(".navbar-nav li:nth-of-type(6)").addClass("active");
		$(".navbar-nav li:nth-of-type(6)").siblings().removeClass("active");
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(5) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(7) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(6) a:after', 'transform:scale3d(1,1,1)');
	}else if($(window).scrollTop() > 6500 && $(window).scrollTop() < 7500){
		$(".navbar-nav li:nth-of-type(7)").addClass("active");
		$(".navbar-nav li:nth-of-type(7)").siblings().removeClass("active");
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(6) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(7) a:after', 'transform:scale3d(1,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(8) a:after', 'transform:scale3d(0,1,1)');
	}else if($(window).scrollTop() > 7500 && $(window).scrollTop() < 8250){
		$(".navbar-nav li:nth-of-type(8)").addClass("active");
		$(".navbar-nav li:nth-of-type(8)").siblings().removeClass("active");
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(7) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(8) a:after', 'transform:scale3d(1,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(9) a:after', 'transform:scale3d(0,1,1)');
	}else if($(window).scrollTop() > 8250){
		$(".navbar-nav li:nth-of-type(9)").addClass("active");
		$(".navbar-nav li:nth-of-type(9)").siblings().removeClass("active");
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(8) a:after', 'transform:scale3d(0,1,1)');
		document.styleSheets[1].addRule('.navbar-nav li:nth-of-type(9) a:after', 'transform:scale3d(1,1,1)');
	}

});

$(".navbar-nav li").click(function() {
	for(var i = 0; i < $(".navbar-nav li").length; i++) {
		$(".navbar-nav li")[i].className = " ";
	}
		this.className = "active";
})

//banner图字体追加
$(function() {
	$(".main").appendAndRemoveCharAnimation([
		"Officemates".split(""),
		"Friends".split(""),
		"Family".split("")
	], 1500, 200, 250);
});

////special menu轮播事件改为用transform:translate,@keyform和animation移动
var p=0;
function lb(){		
	if(p==0){
		$(".outer-control span:nth-of-type(1)").addClass("active");
		$(".outer-control span:nth-of-type(1)").siblings().removeClass("active");
		$(".outer-show").animate({"marginLeft":"-400px"},600)
	}else if(p==1){
		$(".outer-control span:nth-of-type(2)").addClass("active");
		$(".outer-control span:nth-of-type(2)").siblings().removeClass("active");
		$(".outer-show").animate({"marginLeft":"-800px"},600)
	}else if(p==2){
		$(".outer-control span:nth-of-type(1)").addClass("active");
		$(".outer-control span:nth-of-type(1)").siblings().removeClass("active");
		$(".outer-show").animate({"marginLeft":"0px"},600)
	}
	p++;
	if(p==3){
		p=0;
	}
}
timer=setInterval(function(){
	lb();
},2000)

//our team
var lf = 0;
var g = 0;
$("dl").click(function() {
	for(var i = 0; i < $("dl").length; i++) {
		$("dl").removeClass("active");
		$("dl h2").removeClass("active");
	}
	$(this).addClass("active");
	$(this).children(":first").addClass("active");

	if($(this).attr("zd") == 0) {
		lf = 0;
		g = 0;
		$("dl").eq(i).removeClass("active")
		$("dl").eq(g).addClass("active");
		$(".tab-introduce-show").css("marginLeft", lf + "px");
	} else if($(this).attr("zd") == 1) {
		lf = -1155;
		g = 1;
		$("dl").eq(i).removeClass("active")
		$("dl").eq(g).addClass("active");
		$(".tab-introduce-show").css("marginLeft", lf + "px");
	} else if($(this).attr("zd") == 2) {
		lf = -2310;
		g = 2;
		$("dl").eq(i).removeClass("active")
		$("dl").eq(g).addClass("active");
		$(".tab-introduce-show").css("marginLeft", lf + "px");
	} else if($(this).attr("zd") == 3) {
		lf = -3465;
		g = 3;
		$("dl").eq(i).removeClass("active")
		$("dl").eq(g).addClass("active");
		$(".tab-introduce-show").css("marginLeft", lf + "px");
	}
})
//颜色切换
$(".color-panel a").click(function(){
	$(".color-panel").toggleClass("close-panel","open-panel");
	$(".color-panel").toggleClass("open-panel","close-panel");
})



console.log($(".logo"))
$(".color-chooice span").click(function(){
	var title=$(this).attr("title");
	$("#theme").attr("href","css/"+title+".css");
	
})

$(".color-chooice span:nth-of-type(1)").click(function(){
	$(".navbar-brand img").attr("src","img/logo.png");
	$(".logo img").attr("src","img/logo.png");
})

$(".color-chooice span:nth-of-type(2)").click(function(){
	$(".navbar-brand img").attr("src","img/logo2.png");
	$(".logo img").attr("src","img/logo2.png");
})

$(".color-chooice span:nth-of-type(3)").click(function(){
	$(".navbar-brand img").attr("src","img/logo3.png");
	$(".logo img").attr("src","img/logo3.png");
})

$(".color-chooice span:nth-of-type(4)").click(function(){
	$(".navbar-brand img").attr("src","img/logo4.png");
	$(".logo img").attr("src","img/logo4.png");
})
