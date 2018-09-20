var type = 1;
var search = 0;
$('#lianxiren').css("border-bottom", "2px solid #778899");
$("#lianxiren").bind("click", function() {
	$('#lianxiren').css("border-bottom", "2px solid #778899");
	$('#dongtai').css("border-bottom", "none");
	$('#xiaoxi').css("border-bottom", "none");
	$('#haoyouqunliao').show();
	type = 1;
	insertHtml(type);
});
$("#dongtai").bind("click", function() {
	$('#lianxiren').css("border-bottom", "none");
	$('#dongtai').css("border-bottom", "2px solid #778899");
	$('#xiaoxi').css("border-bottom", "none");
	$('#haoyouqunliao').hide();
	type = 2;
	insertHtml(type);
});
$("#xiaoxi").bind("click", function() {
	$('#lianxiren').css("border-bottom", "none");
	$('#dongtai').css("border-bottom", "none");
	$('#xiaoxi').css("border-bottom", "2px solid #778899");
	$('#haoyouqunliao').hide();
	type = 3;
	insertHtml(type);
});

insertHtml(type);

function insertHtml(type) {
	$("#list").children().remove();
	if(type == 1) {
		var htmlStr = '<li class="lis"><h2>我的设备 1/2</h2><ul>';
		htmlStr = htmlStr + '<li><img src="img/weixin.jpg" width="50px" class="mui-icon-image" style="border-radius:70%"><span>张三</span> <span id="qianming">个性签名</span></li></img>';
		htmlStr = htmlStr + '<li><img src="img/weixin.jpg" width="50px" class="mui-icon-image" style="border-radius:70%"><span>张三</span> <span id="qianming">个性签名</span></li></img>';
		htmlStr = htmlStr + '</ul></li>';
		htmlStr = htmlStr + '<li class="lis"><h2>同学 10/20</h2><ul>';
		htmlStr = htmlStr + '<li><img src="img/weixin.jpg" width="50px" class="mui-icon-image" style="border-radius:70%"><span>张三</span> <span id="qianming">个性签名</span></li></img>';
		htmlStr = htmlStr + '<li><img src="img/weixin.jpg" width="50px" class="mui-icon-image" style="border-radius:70%"><span>张三</span> <span id="qianming">个性签名</span></li></img>';
		htmlStr = htmlStr + '</ul></li>';
		htmlStr = htmlStr + '<li class="lis"><h2>黑名单 1/2</h2><ul>';
		htmlStr = htmlStr + '<li><img src="img/weixin.jpg" width="50px" class="mui-icon-image" style="border-radius:70%"><span>张三</span> <span id="qianming">个性签名</span></li></img>';
		htmlStr = htmlStr + '<li><img src="img/weixin.jpg" width="50px" class="mui-icon-image" style="border-radius:70%"><span>张三</span> <span id="qianming">个性签名</span></li></img>';
		htmlStr = htmlStr + '</ul></li>';
		$("#list").append(htmlStr);

		var list = document.getElementById('list');
		var ah2 = list.getElementsByTagName('h2');
		var uls = list.getElementsByTagName('ul');
		// h2要和下面的ul进行匹配，所以我们要用索引值，给h2身上添加索引值
		for(var i = 0; i < ah2.length; i++) {
			ah2[i].index = i; //给h2添加索引值，点击谁就给谁添加索引值
			ah2[i].onclick = function() {
				if(this.className == '') { //判断所点击的h2标签是否有类，
					//this.index指h2身上的索引数，this指h2，h2的索引值为this.index
					uls[this.index].style.display = 'block';
					this.className = 'active'; //给当前点击的h2添加类，更改箭头方向
				} else {
					uls[this.index].style.display = 'none';
					this.className = '';
				}
			}
		}
	} else if(type == 2) {
		var htmlStr = '<tr><td><img src="img/kongjian.PNG" class="dongtaiImg"/></td>';
		htmlStr = htmlStr + '<td><img src="img/zhibo.PNG" class="dongtaiImg"/></td>';
		htmlStr = htmlStr + '</tr>';
		htmlStr = htmlStr + '<tr><td><img src="img/kongjian.PNG" class="dongtaiImg"/></td>';
		htmlStr = htmlStr + '<td><img src="img/zhibo.PNG" class="dongtaiImg"/></td>';
		htmlStr = htmlStr + '</tr>';
		htmlStr = htmlStr + '<tr><td><img src="img/txketang.PNG" class="dongtaiImg"/></td>';
		htmlStr = htmlStr + '</tr>';
		$("#list").append(htmlStr);
	} else {
		var htmlStr = '<img src="img/xiaoxi1.PNG" class="xiaoxiImg"/>';
		htmlStr = htmlStr + '<img src="img/xiaoxi2.PNG" class="xiaoxiImg"/>';
		$("#list").append(htmlStr);
	}
}

$(".search").on("click", function() {
	if(search == 0) {
		search = 1;
		$('#sousuolang').show();
		$('#lxd').hide();
		$('#haoyouqunliao').hide();
		$('.div-search').css("background", "white");
		$('.div-search').css("border-bottom", "1px solid #778899");
		$('.div1').css("border-bottom", "1px solid #778899");
		$('.search').css("color", "black");
		$('#cancel').show();
	}
});

$("#cancel").on("click", function() {
	search = 0;
	$('#sousuolang').hide();
	$('#lxd').show();
	$('#haoyouqunliao').show();
	$('.div-search').css("background", "gray");
	$('.search').css("color", "whitesmoke");
	$('.div-search').css("border-bottom", "none");
	$('.div1').css("border-bottom", "none");
	$('#cancel').hide();
});

$(".div1").on("click", function() {
	if(search == 1) {
		search = 0;
		$('#sousuolang').hide();
		$('#lxd').show();
		$('#haoyouqunliao').show();
		$('.div-search').css("background", "gray");
		$('.search').css("color", "whitesmoke");
		$('.div-search').css("border-bottom", "none");
		$('.div1').css("border-bottom", "none");
		$('#cancel').hide();
	}
});

$("#touxiang").on("click", function() {
	if(search == 1) {
		search = 0;
		$('#sousuolang').hide();
		$('#lxd').show();
		$('#haoyouqunliao').show();
		$('.div-search').css("background", "gray");
		$('.search').css("color", "whitesmoke");
		$('.div-search').css("border-bottom", "none");
		$('.div1').css("border-bottom", "none");
		$('#cancel').hide();
	}
});