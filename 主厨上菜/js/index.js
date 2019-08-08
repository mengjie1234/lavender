$(function () {


	//box1
	$(".lest .box1").mouseover(function (event) {
		$(".box1").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
		$(".box2").stop(true, true).animate({ width: "335px", height: "228px", left: "515px", top: "0px" }, 200);
		$(".box3").stop(true, true).animate({ width: "335px", height: "228px", left: "865px", top: "0px" }, 200);
		$(".box4").stop(true, true).animate({ width: "218px", height: "228px", left: "515px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "218px", height: "228px", left: "748px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "218px", height: "228px", left: "981px", top: "243px" }, 200);
		event.stopPropagation();    //  阻止事件冒泡
	})
	$(".box1").mouseout(function (event) {
		$(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
		$(".box2").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "0px" }, 200);
		$(".box3").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "0px" }, 200);
		$(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
	})

	//box2
	$(".box2").mouseover(function (event) {
		$(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
		$(".box2").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
		$(".box3").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "0px" }, 200);
		$(".box4").stop(true, true).animate({ width: "187px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "188px", height: "228px", left: "203px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "243px" }, 200);
		event.stopPropagation();    //  阻止事件冒泡

	})
	$(".box2").mouseout(function (event) {
		$(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
		$(".box2").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "0px" }, 200);
		$(".box3").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "0px" }, 200);
		$(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
	})


	//box3
	$(".box3").mouseover(function (event) {
		$(".box3").stop(true, true).animate({ width: "500px", height: "471px", left: "700", top: "0px" }, 300);
		$(".box1").stop(true, true).animate({ width: "335px", height: "228px", left: "0px", top: "0px" }, 200);
		$(".box2").stop(true, true).animate({ width: "335px", height: "228px", left: "350px", top: "0px" }, 200);
		$(".box4").stop(true, true).animate({ width: "218px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "218px", height: "228px", left: "233px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "218px", height: "228px", left: "466px", top: "243px" }, 200);
		event.stopPropagation();    //  阻止事件冒泡

	})
	$(".box3").mouseout(function (event) {
		$(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
		$(".box2").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "0px" }, 200);
		$(".box3").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "0px" }, 200);
		$(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
	})




	//box4
	$(".lest .box4").mouseover(function (event) {
		$(".box4").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
		$(".box5").stop(true, true).animate({ width: "335px", height: "228px", left: "515px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "335px", height: "228px", left: "865px", top: "243px" }, 200);
		$(".box7").stop(true, true).animate({ width: "218px", height: "228px", left: "515px", top: "486px" }, 200);
		$(".box8").stop(true, true).animate({ width: "218px", height: "228px", left: "748px", top: "486px" }, 200);
		$(".box9").stop(true, true).animate({ width: "218px", height: "228px", left: "981px", top: "486px" }, 200);
		event.stopPropagation();    //  阻止事件冒泡
	})
	$(".box4").mouseout(function (event) {
		$(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
		$(".box7").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "486px" }, 200);
		$(".box8").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "486px" }, 200);
		$(".box9").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "486px" }, 200);
	})


	//box5
	$(".box5").mouseover(function (event) {
		$(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
		$(".box6").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "243px" }, 200);
		$(".box7").stop(true, true).animate({ width: "187px", height: "228px", left: "0px", top: "486px" }, 200);
		$(".box8").stop(true, true).animate({ width: "188px", height: "228px", left: "203px", top: "486px" }, 200);
		$(".box9").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "486px" }, 200);
		event.stopPropagation();    //  阻止事件冒泡


	})
	$(".box5").mouseout(function (event) {
		$(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
		$(".box7").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "486px" }, 200);
		$(".box8").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "486px" }, 200);
		$(".box9").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "486px" }, 200);
	})

	//box6
	$(".box6").mouseover(function (event) {
		$(".box6").stop(true, true).animate({ width: "500px", height: "471px", left: "700", top: "243px" }, 200);
		$(".box4").stop(true, true).animate({ width: "335px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "335px", height: "228px", left: "350px", top: "243px" }, 200);
		$(".box7").stop(true, true).animate({ width: "218px", height: "228px", left: "0px", top: "486px" }, 200);
		$(".box8").stop(true, true).animate({ width: "218px", height: "228px", left: "233px", top: "486px" }, 200);
		$(".box9").stop(true, true).animate({ width: "218px", height: "228px", left: "466px", top: "486px" }, 200);
		event.stopPropagation();    //  阻止事件冒泡


	})
	$(".box6").mouseout(function (event) {
		$(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
		$(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
		$(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
		$(".box7").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "486px" }, 200);
		$(".box8").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "486px" }, 200);
		$(".box9").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "486px" }, 200);
	})

})

// 页面雪花特效
/**
 * Created by Administrator on 2016/10/26.
 */
var minSize = 5;
var maxSize = 50;
var newOn = 80;
var flake = $("<div></div>").css({ "position": "absolute", "top": "-50px" }).html("❄");
$(document).ready(function () {
	//雪花部分开始
	var documentHeight = $(document).height();
	var documentWidth = $(document).width();
	setInterval(function () {
		var startPositionLeft = Math.random() * documentWidth;
		var sizeFlake = minSize + Math.random() * maxSize;
		var endPositionLeft = Math.random() * documentWidth;
		var durationFall = documentHeight * 10 + Math.random() *
			2000;
		var startOpacity = 0.7 + 0.3 * Math.random();
		var endOpacity = 0.5 * Math.random();
		flake.clone().appendTo($("body")).css({
			"left": startPositionLeft,
			"opacity": startOpacity,
			"font-size": sizeFlake,
			"color": "#f99"
		}).animate({
			"top": documentHeight - 40,
			"left": endPositionLeft,
			"opacity": endOpacity
		}, durationFall, function () {
			$(this).remove();
		});
	}, newOn);
	//雪花部分结束
	
	
})