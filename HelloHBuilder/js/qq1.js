var shezhi = 0;
var statelist = 0;
$("#title").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$("#search").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$("#lable").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$("#people_info_type").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$("#friendsList").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$(".botton").on("click", function() {
	$("#statelist").hide();
	$("#menu").hide();
});

$("#people").on("click", function() {
	$(this).css("border-bottom", "#808080 solid 1px");
	$('#dynamic').css("border-bottom", "none");
	$('#message').css("border-bottom", "none");
	$("#page1").show();
	$("#dynamic_info").hide();
	$("#message_info").hide();
});
$("#dynamic").on("click", function() {
	$(this).css("border-bottom", "#808080 solid 1px");
	$('#people').css("border-bottom", "none");
	$('#message').css("border-bottom", "none");
	$("#page1").hide();
	$("#dynamic_info").show();
	$("#message_info").hide();
});
$("#message").on("click", function() {
	$(this).css("border-bottom", "#808080 solid 1px");
	$('#dynamic').css("border-bottom", "none");
	$('#people').css("border-bottom", "none");
	$("#page1").hide();
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

$("#divlist").hover(function() {
	$("#youjiantou").attr('src', "img/youjiantou_hover.png");
}, function() {
	$("#youjiantou").attr('src', "img/youjiantou.png");
});