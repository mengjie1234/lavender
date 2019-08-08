// 导航鼠标移入下滑

$(function(){
    $(".sbyr").mouseenter(function(){
        $(".menu").stop().slideDown(1000);
        $(".wave").stop().animate({top:257},1000);
    })
    $(".sbyr").mouseleave(function(){
        $(".menu").stop().slideUp(1000);
        $(".wave").stop().animate({top:125},1000);
    })
});

// 三原图鼠标滑入切换
$(function(){
    $(".drim_list li a").mouseenter(function(){
        $(this).children().stop().show(1000);
        $(this).children(".img_hover").stop().show(1000);

    })
    $(".drim_list li a").mouseleave(function(){
        $(".heart_out").siblings().stop().hide(1000);
        $(".heart_out .img_hover").stop().hide(1000);
    })
});

//头部左边鼠标移入拉长
$(function(){
        $(".show .sub a").on("mouseenter",function(){
            $(this).stop().animate({
                paddingLeft:45,
                paddingRight:45
            },600)
        })
        $(".show .sub a").on("mouseleave",function(){
            $(this).stop().animate({
                paddingLeft:30,
                paddingRight:30
            },600)
        })
     });


$(function(){
        $(".show .right>li").on("mouseenter",function(){
            $(this).animate({
                marginLeft:27,
                marginRight:27
            },600)
        })
    });
$(function(){
        $(".show .right>li").on("mouseleave",function(){
            $(this).animate({
                marginLeft:10,
                marginRight:10
            },600)
        })
    });

//音乐播放

function toggleSound() {
             

            if (music.paused) { //判读是否播放  
                music.paused=false;
                music.play(); //没有就播放 
            }  
            
        }
     var music = document.getElementById("music");//获取ID 
     var timeId=setInterval("toggleSound()",1);
     var btn=document.querySelector(".sound>a");
     btn.setAttribute("title","1");
     btn.onclick=function(){
       clearInterval(timeId);
       var t= btn.getAttribute("title");
      if(t==1){
        btn.setAttribute("title","0");
        btn.style.backgroundImage="url('img/sound-stop.svg')";
        music.setAttribute("src","");
      }else{
        btn.setAttribute("title","1");
        btn.style.backgroundImage="url('')";
        music.setAttribute("src","img/guang.mp3");
      }
    
     };

// 雪花*
var minSize = 5;
var maxSize = 50;
var newOn = 80;
var flake = $("<div></div>").css({ "position": "absolute", "top": "-50px" }).html("☆");
$(document).ready(function () {
    //雪花部分开始
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    setInterval(function () {
        var startPositionLeft = Math.random() * documentWidth;
        var sizeFlake = minSize + Math.random() * maxSize;
        var endPositionLeft = Math.random() * documentWidth;
        var durationFall = documentHeight * 10 + Math.random() *
            3000;
        var startOpacity = 0.7 + 0.3 * Math.random();
        var endOpacity = 0.5 * Math.random();
        flake.clone().appendTo($("body")).css({
            "left": startPositionLeft,
            "opacity": startOpacity,
            "font-size": sizeFlake,
            "color": "#7c4697"
        }).animate({
            "top": documentHeight - 40,
            "left": endPositionLeft+300,
            "opacity": endOpacity
        }, durationFall, function () {
            $(this).remove();
        });
    }, newOn);
  });

//页面scroll事件
$(function(){
  $(window).scroll(function(){
    var scrollT=$(window).scrollTop();
    console.log(scrollT);
  });

  $(".scroll_down").on("click",function(){
    $("html,body").animate({
      scrollTop:1000
    },1000)
  });

  $(".scroll_down02").on("click",function(){
    $("html,body").animate({
      scrollTop:2600
    },1000)
  })

  $(".more_dream_news").on("click",function(){
    $("html,body").animate({
      scrollTop:3850
    },1000)
  })

  $(".dreams_scroll").on("click",function(){
    $("html,body").animate({
      scrollTop:0
    },1000)
  })
});