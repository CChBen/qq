var shezhi = 0;
var statelist = 0;
var xianjiantou1 = 0;
var xianjiantou2 = 0;
var haoyoujiantou = 0;
var qunliaojiantou = 0;
var labelType = 1; //1为联系人，2为动态，3为消息
var type = 1;
var jiahao = 0;
var liList = $("#ulList2").children("li");
var historyList = $("#historyList").children("li");
$("#title").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
	$("#search_extend").hide();
	$("#search").css("background-color", "rgb(224, 224, 224)");
	$("#search_input").css("background-color", "rgb(224, 224, 224)");
	$("#searchImg").attr('src', "img/search.png");
	$("#cancel").hide();
	if(type == 1) {
		$("#friendsList").show();
	} else {
		$("#jiaqun").show();
	}
	if(labelType==2){
		$("#dynamic_info").show();
	}else if(labelType==3){
		$("#message_info").show();
	}
});

$("#search").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$("#lable").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
	$("#search_extend").hide();
	$("#search").css("background-color", "rgb(224, 224, 224)");
	$("#search_input").css("background-color", "rgb(224, 224, 224)");
	$("#searchImg").attr('src', "img/search.png");
	$("#cancel").hide();
	if(type == 1) {
		$("#friendsList").show();
	} else {
		$("#jiaqun").show();
	}
	if(labelType==2){
		$("#dynamic_info").show();
	}else if(labelType==3){
		$("#message_info").show();
	}
});

$("#people_info_type").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
	$("#search_extend").hide();
	$("#search").css("background-color", "rgb(224, 224, 224)");
	$("#search_input").css("background-color", "rgb(224, 224, 224)");
	$("#searchImg").attr('src', "img/search.png");
	$("#cancel").hide();
	if(type == 1) {
		$("#friendsList").show();
	} else {
		$("#jiaqun").show();
	}
	if(labelType==2){
		$("#dynamic_info").show();
	}else if(labelType==3){
		$("#message_info").show();
	}
});

$("#friendsList").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$(".botton").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
	$("#search_extend").hide();
	$("#search").css("background-color", "rgb(224, 224, 224)");
	$("#search_input").css("background-color", "rgb(224, 224, 224)");
	$("#searchImg").attr('src', "img/search.png");
	$("#cancel").hide();
	if(type == 1) {
		$("#friendsList").show();
	} else {
		$("#jiaqun").show();
	}
	if(labelType==2){
		$("#dynamic_info").show();
	}else if(labelType==3){
		$("#message_info").show();
	}
});

$("#people").on("click", function() {
	labelType = 1;
	$(this).css("border-bottom", "#808080 solid 1px");
	$('#dynamic').css("border-bottom", "none");
	$('#message').css("border-bottom", "none");
	$("#page").show();
	$("#dynamic_info").hide();
	$("#message_info").hide();
});
$("#dynamic").on("click", function() {
	labelType = 2;
	$(this).css("border-bottom", "#808080 solid 1px");
	$('#people').css("border-bottom", "none");
	$('#message').css("border-bottom", "none");
	$("#page").hide();
	$("#dynamic_info").show();
	$("#message_info").hide();
});
$("#message").on("click", function() {
	labelType = 3;
	$(this).css("border-bottom", "#808080 solid 1px");
	$('#dynamic').css("border-bottom", "none");
	$('#people').css("border-bottom", "none");
	$("#page").hide();
	$("#dynamic_info").hide();
	$("#message_info").show();
});

$("#shezhi").on("click", function() {
	if(shezhi == 0) {
		$("#menu").show();
		shezhi = 1;
	} else {
		$("#menu").hide();
		shezhi = 0;
	}
});

$("#list").on("click", function() {
	if(statelist == 0) {
		$("#statelist").show();
		statelist = 1;
	} else {
		$("#statelist").hide();
		statelist = 0;
	}
});

$("#image").hover(function() {
	$("#user").stop().animate({
		opacity: 'show'
	});
}, function() {
	$("#user").stop().animate({
		opacity: 'hide'
	});
});

$("#weather").hover(function() {
	$("#tianqi").stop().animate({
		opacity: 'show'
	});
}, function() {
	$("#tianqi").stop().animate({
		opacity: 'hide'
	});
});

$("#zaixian").hover(function() {
	$("#zaixianImg").attr('src', "img/zaixian_hover.png");
}, function() {
	$("#zaixianImg").attr('src', "img/zaixian.png");
});

$("#Q").hover(function() {
	$("#QImg").attr('src', "img/Q_hover.png");
}, function() {
	$("#QImg").attr('src', "img/Q.png");
});

$("#likai").hover(function() {
	$("#likaiImg").attr('src', "img/likai_hover.png");
}, function() {
	$("#likaiImg").attr('src', "img/likai.png");
});

$("#divlist1").hover(function() {
	if(xianjiantou1 == 0) {
		$("#youjiantou1").attr('src', "img/youjiantou_hover.png");
	} else {
		$("#youjiantou1").attr('src', "img/xiajiantou_hover.png");
	}
}, function() {
	if(xianjiantou1 == 0) {
		$("#youjiantou1").attr('src', "img/youjiantou.png");
	} else {
		$("#youjiantou1").attr('src', "img/xiajiantou.png");
	}
});

$("#divlist2").hover(function() {
	if(xianjiantou2 == 0) {
		$("#youjiantou2").attr('src', "img/youjiantou_hover.png");
	} else {
		$("#youjiantou2").attr('src', "img/xiajiantou_hover.png");
	}
}, function() {
	if(xianjiantou2 == 0) {
		$("#youjiantou2").attr('src', "img/youjiantou.png");
	} else {
		$("#youjiantou2").attr('src', "img/xiajiantou.png");
	}
});

$("#divlist1").on("click", function() {
	if(xianjiantou1 == 0) {
		xianjiantou1 = 1;
		$("#youjiantou1").attr('src', "img/xiajiantou_hover.png");
		$("#ulList1").show();
	} else {
		xianjiantou1 = 0;
		$("#youjiantou1").attr('src', "img/youjiantou_hover.png");
		$("#ulList1").hide();
	}
});

$("#divlist2").on("click", function() {
	if(xianjiantou2 == 0) {
		xianjiantou2 = 1;
		$("#youjiantou2").attr('src', "img/xiajiantou_hover.png");
		$("#ulList2").show();
	} else {
		xianjiantou2 = 0;
		$("#youjiantou2").attr('src', "img/youjiantou_hover.png");
		$("#ulList2").hide();
	}
});

$("#ulList2>li").hover(function() {
	var number = $('#ulList2>li').index(this);
	$("#user_info_list").css("top", liList[number].offsetTop + 240);
	$("#user_info_list").stop().animate({
		opacity: 'show'
	});
}, function() {
	$("#user_info_list").stop().animate({
		opacity: 'hide'
	});
});
//yaoxiugai
$('#historyList>li').on("click", function(){
	$(this).attr('src', "img/xiaoxi1_hover.png");
	console.log($(this));
});
$("#historyList>li").hover(function() {
	var number = $('#historyList>li').index(this);
	$("#history_list").css("top", historyList[number].offsetTop + 240);
	$("#history_list").stop().animate({
		opacity: 'show'
	});
}, function() {
	$("#history_list").stop().animate({
		opacity: 'hide'
	});
});

$("#friends").hover(function() {
	if(type == 1) {
		$("#haoyoujiantou").show();
	}
}, function() {
	$("#haoyoujiantou").hide();
});

$("#qunliao").hover(function() {
	if(type == 2) {
		$("#qunliaojiantou").show();
	}
}, function() {
	$("#qunliaojiantou").hide();
});

$("#friends").on("click", function() {
	type = 1;
	$("#haoyoujiantou").show();
	$("#friendsList").show();
	$("#jiaqun").hide();
	$("#friends").css("background", "rgb(251,251,251)");
	$("#qunliao").css("background", "#FFFFFF");
});

$("#qunliao").on("click", function() {
	type = 2;
	$("#qunliaojiantou").show();
	$("#friendsList").hide();
	$("#jiaqun").show();
	$("#friends").css("background", "#FFFFFF");
	$("#qunliao").css("background", "rgb(251,251,251)");
});

$("#haoyoujiantou").on("click", function() {
	if(haoyoujiantou == 0) {
		$("#haoyou_xiajiantou").show();
		haoyoujiantou = 1;
	} else {
		$("#haoyou_xiajiantou").hide();
		haoyoujiantou = 0;
	}
});

$("#qunliaojiantou").on("click", function() {
	console.log(qunliaojiantou);
	if(qunliaojiantou == 0) {

		$("#qunliaojiantou").show();
		qunliaojiantou = 1;
	} else {
		$("#qunliaojiantou").hide();
		qunliaojiantou = 0;
	}
});

$(".touxiangxianshi").hover(function() {
	$("#touxiangxianshi").attr('src', "img/touxiangxianshi_hover.png");
}, function() {
	$("#touxiangxianshi").attr('src', "img/touxiangxianshi.png");
});

$(".touxiangxianshi").hover(function() {
	$("#touxiangxianshi_youjiantou").attr('src', "img/touxiangxianshi_youjiantou_hover.png");
}, function() {
	$("#touxiangxianshi_youjiantou").attr('src', "img/touxiangxianshi_youjiantou.png");
});

$("#jiahao").hover(function() {
	$("#jiahao").attr('src', "img/jia_hover.png");
}, function() {
	$("#jiahao").attr('src', "img/jia.PNG");
});

$(".search").on("click", function() {
	$("#search_extend").show();
	$("#search").css("background-color", "#FFFFFF");
	$("#search_input").css("background-color", "#FFFFFF");
	$("#searchImg").attr('src', "img/search_click.png");
	if(type == 1) {
		$("#friendsList").hide();
	} else {
		$("#jiaqun").hide();
	}
	if(labelType==2){
		$("#dynamic_info").hide();
	}else if(labelType==3){
		$("#message_info").hide();
	}
	$("#cancel").show();
});

$("#contact").on("click", function() {
	$("#search_extend").hide();
	$("#search").css("background-color", "rgb(224, 224, 224)");
	$("#search_input").css("background-color", "rgb(224, 224, 224)");
	$("#searchImg").attr('src', "img/search.png");
	if(type == 1) {
		$("#friendsList").show();
	} else {
		$("#jiaqun").show();
	}
	if(labelType==2){
		$("#dynamic_info").show();
	}else if(labelType==3){
		$("#message_info").show();
	}
	$("#cancel").hide();
});

$("#cancel").on("click", function() {
	$("#search_extend").hide();
	$("#search").css("background-color", "rgb(224, 224, 224)");
	$("#search_input").css("background-color", "rgb(224, 224, 224)");
	$("#searchImg").attr('src', "img/search.png");
	if(type == 1) {
		$("#friendsList").show();
	} else {
		$("#jiaqun").show();
	}
	if(labelType==2){
		$("#dynamic_info").show();
	}else if(labelType==3){
		$("#message_info").show();
	}
	$("#cancel").hide();
});

$(".jiahaoyou").hover(function() {
	$("#jiahaoyouImg").attr('src', "img/jiahaoyou_hover.png");
}, function() {
	$("#jiahaoyouImg").attr('src', "img/jiahaoyou.png");
});

$(".chuangqunliao").hover(function() {
	$("#chuangqunliaoImg").attr('src', "img/chuangqunliao_hover.png");
}, function() {
	$("#chuangqunliaoImg").attr('src', "img/chuangqunliao.png");
});

$("#jiahao").on("click", function() {
	if(jiahao==0){
		$("#jiahaoyou").show();
		jiahao=1;
	}else{
		$("#jiahaoyou").hide();
		jiahao=0;
	}
});