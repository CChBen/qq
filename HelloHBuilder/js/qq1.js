var shezhi = 0;
var statelist = 0;
var xianjiantou1 = 0;
var xianjiantou2 = 0;
var haoyoujiantou = 0;
var qunliaojiantou = 0;
var labelType = 1; //1为联系人，2为动态，3为消息
var type = 1;
var jiahao = 0;
var fasongxiajiantou = 0;
var neironglan_more = 0;
var neironglan_more2 = 0;
var activeNumber;
var signatureValue;
var j = 1;
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
	if(labelType == 2) {
		$("#dynamic_info").show();
	} else if(labelType == 3) {
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
	if(labelType == 2) {
		$("#dynamic_info").show();
	} else if(labelType == 3) {
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
	if(labelType == 2) {
		$("#dynamic_info").show();
	} else if(labelType == 3) {
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
	if(labelType == 2) {
		$("#dynamic_info").show();
	} else if(labelType == 3) {
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
$("#zaixian").on("click", function() {
	$("#list").css("background-image", "url(img/zaixian.png)");
	$("#statelist").hide();
});
$("#Q").hover(function() {
	$("#QImg").attr('src', "img/Q_hover.png");
}, function() {
	$("#QImg").attr('src', "img/Q.png");
});
$("#Q").on("click", function() {
	$("#list").css("background-image", "url(img/Q.png)");
	$("#statelist").hide();
});
$("#likai").hover(function() {
	$("#likaiImg").attr('src', "img/likai_hover.png");
}, function() {
	$("#likaiImg").attr('src', "img/likai.png");
});
$("#likai").on("click", function() {
	$("#list").css("background-image", "url(img/likai.png)");
	$("#statelist").hide();
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
	if(activeNumber == 0) {
		$('.active').css("background-image", "url(img/xiaoxi3.png)");
	} else {
		$('.active').css("background-image", "url(img/xiaoxi4.png)");
	}
	$('.activeClass').css("background-image", "url(img/xiaoxi5.png)");
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
	if(activeNumber == 0) {
		$('.active').css("background-image", "url(img/xiaoxi3.png)");
	} else {
		$('.active').css("background-image", "url(img/xiaoxi4.png)");
	}
	$('.activeClass').css("background-image", "url(img/xiaoxi5.png)");
});

$("#ulList2>li").hover(function() {
	var number = $('#ulList2>li').index(this);
	$("#user_info_list").css("top", liList[number].offsetTop + 240);

	$("#user_info_list").stop().animate({
		opacity: 'show'
	}, "slow");
}, function() {
	$("#user_info_list").stop().animate({
		opacity: 'hide'
	});
});

$('#ulList1>li').on("click", function() {
	activeNumber = $('#activeId').index(this);
	var number = $('#ulList1>li').index(this);
	if(activeNumber == 0) {
		$('.active').css("background-image", "url(img/xiaoxi4.png)");
	} else if(activeNumber == -1) {
		$('.active').css("background-image", "url(img/xiaoxi3.png)");
	}
	$(".active").removeClass("active");
	$(this).addClass('active');
	$(this).css("background-image", "url(img/xiaoxi" + String(Number(number) + 3) + "_hover.png)");

});

$('#ulList2>li').on("click", function() {
	$('.activeClass').css("background-image", "url(img/xiaoxi5.png)");
	$('.activeClass').removeClass("activeClass");
	$(this).addClass('activeClass');
	$(this).css("background-image", "url(img/xiaoxi5_hover.png)");
	$("#youjian").hide();
});

$('#ulList2>li').dblclick(function() {
	$("#chatRoom").show();
});

$('#chatRoomEsc').on("click", function() {
	$("#chatRoom").hide();
});

$('#historyList>li').on("click", function() {
	$('.activeHistory').css("background-image", "url(img/xiaoxi1.PNG)");
	$('.activeHistory').removeClass("activeHistory");
	$(this).addClass('activeHistory');
	$(this).css("background-image", "url(img/xiaoxi1_hover.png)");
});

$('#historyList>li').dblclick(function() {
	$("#chatRoom").show();
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
	if(labelType == 2) {
		$("#dynamic_info").hide();
	} else if(labelType == 3) {
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
	if(labelType == 2) {
		$("#dynamic_info").show();
	} else if(labelType == 3) {
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
	if(labelType == 2) {
		$("#dynamic_info").show();
	} else if(labelType == 3) {
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
	if(jiahao == 0) {
		$("#jiahaoyou").show();
		jiahao = 1;
	} else {
		$("#jiahaoyou").hide();
		jiahao = 0;
	}
});

$("#chatRoomTop").mousedown(function(e) {
	//设置移动后的默认位置
	var endx = 0;
	var endy = 0;

	//获取div的初始位置，要注意的是需要转整型，因为获取到值带px
	var left = parseInt($("#chatRoom").css("left"));
	var top = parseInt($("#chatRoom").css("top"));

	//获取鼠标按下时的坐标，区别于下面的es.pageX,es.pageY
	var downx = e.pageX;
	var downy = e.pageY; //pageY的y要大写，必须大写！！

	//    鼠标按下时给div挂事件
	$("#chatRoomTop").bind("mousemove", function(es) {

		//es.pageX,es.pageY:获取鼠标移动后的坐标
		var endx = es.pageX - downx + left; //计算div的最终位置
		var endy = es.pageY - downy + top;

		//带上单位
		$("#chatRoom").css("left", endx + "px").css("top", endy + "px")
	});
})

$("#chatRoomTop").mouseup(function() {
	//鼠标弹起时给div取消事件
	$("#chatRoomTop").unbind("mousemove")
})

$("#title").mousedown(function(e) {
	//设置移动后的默认位置
	var endx = 0;
	var endy = 0;

	//获取div的初始位置，要注意的是需要转整型，因为获取到值带px
	var left = parseInt($("#qq").css("left"));
	var top = parseInt($("#qq").css("top"));

	//获取鼠标按下时的坐标，区别于下面的es.pageX,es.pageY
	var downx = e.pageX;
	var downy = e.pageY; //pageY的y要大写，必须大写！！

	//    鼠标按下时给div挂事件
	$("#title").bind("mousemove", function(es) {

		//es.pageX,es.pageY:获取鼠标移动后的坐标
		var endx = es.pageX - downx + left; //计算div的最终位置
		var endy = es.pageY - downy + top;

		//带上单位
		$("#qq").css("left", endx + "px").css("top", endy + "px")
	});
})

$("#title").mouseup(function() {
	//鼠标弹起时给div取消事件
	$("#title").unbind("mousemove")
})

$("#fasong2").hover(function() {
	$("#neironglikai").delay(500).fadeIn("fast");
}, function() {
	$("#neironglikai").delay(500).fadeOut("fast");
});

$("#fasongxiajiantou").hover(function() {
	$("#fasongxiajiantou").attr('src', "img/fasongxiajiantou_hover.pngng");
}, function() {
	$("#fasongxiajiantou").attr('src', "img/fasongxiajiantou.png");
});

$("#fasongxiajiantou").on("click", function() {
	if(fasongxiajiantou == 0) {
		$('.fasongxiajiantou').show();
		fasongxiajiantou = 1;
	} else {
		$('.fasongxiajiantou').hide();
		fasongxiajiantou = 0;
	}
});

$("#neironglan_more").click(function() {
	if(neironglan_more == 0) {
		$("#neironglan2").animate({
			left: "-=100px"
		}, "slow");
		$("#neironglan_more").hide();
		$("#neironglan_more").css("background-image", "url(img/neironglan8_hover.png)");
		$("#neironglan_more").show();
		neironglan_more = 1;
	} else {
		$("#neironglan2").animate({
			left: "+=100px"
		}, "slow");
		$("#neironglan_more").hide();
		$("#neironglan_more").css("background-image", "url(img/neironglan3_hover.png)");
		$("#neironglan_more").show();
		neironglan_more = 0;
		neironglan_more2 = 2;
	}
});

$(".neironglan_more").hover(function() {
	if(neironglan_more == 0 && neironglan_more2 != 2) {
		$("#neironglan2").animate({
			left: "-=100px"
		}, "slow");
		$("#neironglan_more").css("background-image", "url(img/neironglan8_hover.png)");
		neironglan_more2 = 0;
		neironglan_more = 1;
	}
}, function() {
	neironglan_more2 = 0;
});

$(".neirong").hover(function() {
	if(neironglan_more == 0 && neironglan_more2 == 1) {
		$("#neironglan2").animate({
			left: "-=100px"
		}, "slow");
		$("#neironglan_more").css("background-image", "url(img/neironglan8_hover.png)");
		neironglan_more = 1;
	}
}, function() {
	if(neironglan_more == 1 && neironglan_more2 == 0) {
		$("#neironglan2").animate({
			left: "+=100px"
		}, "slow");
		$("#neironglan_more").css("background-image", "url(img/neironglan3_hover.png)");
		neironglan_more = 0;
	}
});

var signatureType = 0;
$("#signature").click(function() {
	$(".signature").css("border", "0.5px solid #CCC");
	signatureType = 1;
});

$("#signature").hover(function() {
	$(".signature").css("border", "0.5px solid #CCC");
}, function() {
	if(signatureType == 0) {
		$(".signature").css("border", "0.5px solid rgb(242, 242, 242)");
	}
});

$("#signature").keydown(function(event) {
	if(event.keyCode == "13") {
		signatureValue = $(".signature").val();
		if(signatureValue == "") {
			$(".signature").attr("value", "编辑个性签名");
		} else {
			$(".signature").attr("value", signatureValue);
		}
		$(".signature").css("border", "0.5px solid rgb(242, 242, 242)");
		$(".signature").blur();
		signatureType = 0;
	}
});

$(".signature").focus(function() {
	signatureValue = $(".signature").val();
	if(signatureValue == "编辑个性签名") {
		$(".signature").val("");
		$(".signature").attr("value", "");
	}
});

$(".signature").blur(function() {
	signatureValue = $(".signature").val();
	if(signatureValue == "") {
		signatureValue = "编辑个性签名";

	}
	$(".signature").val(signatureValue);
	$(".signature").attr("value", signatureValue);
});

$("#userinfo>span").click(function() {
	$(".signature").css("border", "0.5px solid rgb(242, 242, 242)");
	signatureType = 0;
});

//阻止浏览器默认右键点击事件
$("div").bind("contextmenu", function() {
	return false;
})

$("#ulList2>li").mousedown(function(e) {
	//右键为3
	if(3 == e.which) {
		var x = e.pageX;
		var y = e.pageY;
		if(x > 483) {
			x = 483;
		}
		$("#youjian").css("left", x);
		$("#youjian").css("top", y);
		$("#youjian").show();
		$('.activeClass').css("background-image", "url(img/xiaoxi5.png)");
		$('.activeClass').removeClass("activeClass");
		$(this).addClass('activeClass');
		$(this).css("background-image", "url(img/xiaoxi5_hover.png)");
	}
});
$("#neironglan6").hover(function() {
	var x = $('#neironglan6').offset().left;
	var y = $('#neironglan6').offset().top;
	$(".neironglan6").css("left", x - 40);
	$(".neironglan6").css("top", y - 8);
	$(".neironglan6").show();
}, function() {
	$(".neironglan6").hide();
});
$(".neironglan6").hover(function() {
	$(".neironglan6").show();
}, function() {
	$(".neironglan6").hide();
});

$("#send").click(function() {
	var sendTime = new Date();
	//获取当前日
	var date = sendTime.getDate();
	var h = sendTime.getHours(); //获取当前小时数(0-23)
	var m = sendTime.getMinutes(); //获取当前分钟数(0-59)
	var s = sendTime.getSeconds();
	var now = p(h) + ':' + p(m) + ":" + p(s);
	var content = $(".fasong3").val();
	$(".fasong3").val("");
	var htmlStr = '<div class="content"><div id="time"><span>' + now + '</span>';
	htmlStr = htmlStr + '</div>';
	htmlStr = htmlStr + '<span id="contentGaodu">' + content + '</span><span></span>';
	htmlStr = htmlStr + '<img id="contentImg" src="img/contentImg.png" /></div>';
	$("#content").append(htmlStr);
	var contentGaodu = parseInt($("#content>.content:last>#contentGaodu").height());
	var timeGaodu = parseInt($("#time").height());
	if(contentGaodu + timeGaodu > 30) {
		$("#content>.content:last").attr("class", "content active");
		$(".active").css("height", contentGaodu + timeGaodu);
	} else {
		$("#content>.content:last").attr("class", "content active");
		$(".active").css("height", "30px");
	}
	$(".active").removeClass("active");
	$('#content').scrollTop($('#content')[0].scrollHeight);
});

function p(s) {
	return s < 10 ? '0' + s : s;
}

$(".fasong3").keydown(function(event) {
	if(event.keyCode == 13 && event.ctrlKey) { 
		var content = $(".fasong3").val();
		$(".fasong3").val(content + "\n");
	} else if(event.keyCode == 13) {
		// 避免回车键换行
		event.preventDefault();
		var sendTime = new Date();
		//获取当前日
		var date = sendTime.getDate();
		var h = sendTime.getHours(); //获取当前小时数(0-23)
		var m = sendTime.getMinutes(); //获取当前分钟数(0-59)
		var s = sendTime.getSeconds();
		var now = p(h) + ':' + p(m) + ":" + p(s);
		var content = $(".fasong3").val();
		content = content.replace(/\n/g, '_@').replace(/\r/g, '_#');
		content = content.replace(/_@/g, '<br/>'); //IE9、FF、chrome
		content = content.replace(/\s/g, '&nbsp;'); //空格处理
		$(".fasong3").val("");
		var htmlStr = '<div class="content"><div id="time"><span>' + now + '</span>';
		htmlStr = htmlStr + '</div>';
		htmlStr = htmlStr + '<span id="contentGaodu">' + content + '</span><span></span>';
		htmlStr = htmlStr + '<img id="contentImg" src="img/contentImg.png" /></div>';
		$("#content").append(htmlStr);
		var contentGaodu = parseInt($("#content>.content:last>#contentGaodu").height());
		var timeGaodu = parseInt($("#time").height());
		if(contentGaodu + timeGaodu > 30) {
			$("#content>.content:last").attr("class", "content active");
			$(".active").css("height", contentGaodu + timeGaodu);
		} else {
			$("#content>.content:last").attr("class", "content active");
			$(".active").css("height", "30px");
		}
		$(".active").removeClass("active");
		$('#content').scrollTop($('#content')[0].scrollHeight);
	}
});

