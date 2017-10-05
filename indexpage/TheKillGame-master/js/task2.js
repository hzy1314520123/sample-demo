/*match*/
var TotalArrStr;
var TotalArrStra;

function match() {
	var TotalNum = document.getElementById("txt_checkingPhone").value;
	var killnum = Math.floor(TotalNum / 4);
	var killstr = sudub(killnum, TotalNum);

	if(isNaN(TotalNum) || TotalNum < 4 || TotalNum > 18) {
		alert("请输入正确的玩家数量");
	}
	else{
		distribute();
	}
	
	function distribute(){
		var mar = true;
		$(".match_p2t").html("");
		for(var i = 0; i < TotalNum; i++) {
			var box = "<div><span class='icon_f'></span><p>平民1人</p></div>";
			$(".match_p2t").append(box);
		}

	$("span").css("background-color", "orange");
	$(".match_p2t p").html("平民1人");
	for(var i = 0; i < killstr.length; i++) {
		var killsArr = killstr[i];
		$("p").eq(killsArr).html("杀手1人");
		$("span").eq(killsArr).css("background-color", "#2BBDE0");
	}
	}
	

	localStorage.setItem("TotalArrStr", TotalNum);
	console.log("数组变成字符串存储" + TotalNum);

	TotalArrStr = JSON.stringify(killstr);
	localStorage.setItem("KillerArrStra", TotalArrStr);
	console.log("数组变成字符串存储" + TotalArrStr);

}

function sudub(a, b) {
	var sudu = new Array();
	for(var i = 0; i < a;) {
		var sudua = Math.floor(Math.random() * b);
		var chongfu = false;
		for(var j = 0; j < sudu.length; j++) {
			if(sudu[j] == sudua) {
				chongfu = true;
				break;
			}
		}
		if(!chongfu) {
			sudu[sudu.length] = sudua;
			i++;
		}
	}
	return sudu;
}

//数组变成字符串存储

function start() {
	if ($(".match_p2t").find('div').length == 0) {
		alert("请先配置角色，再开始游戏！");
	} else{
		location.href = "draw_1.html";
	}
		
}