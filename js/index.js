$(function () {



    $('.hide').mouseenter(function () {

        $('.hide .jump li').slideDown(800, function () {
            $('.hide .jump li').css('display', 'block');
        });

        //  $(this).css('height',300);
        $('.hide').stop().animate({
            height: 300
        }, 800)
        $('.hide .img').stop().animate({
            top: 295
        }, 800);
    })



    $('.hide').mouseleave(function () {
        $('.hide .jump li').css('display', 'none');
        $('.hide').stop().animate({
            height: 170
        }, 800)
        $('.hide .img').stop().animate({
            top: 170
        }, 800);
    })


    var box = document.querySelector('.box');
    var hide = document.querySelector('.hide');
    window.onscroll = function () {
        var scrollTop = window.pageYOffset;
        if (scrollTop >= 0.7 * (box.offsetHeight)) {
            hide.style.display = 'block';
        } else {
            hide.style.display = 'none';
        }
    }
    
  $(".dd").on("click",function(){
    $("html, body").animate({
  scrollTop: box.offsetHeight
}, 1000)
  })


    var imgs = ['images/sound-stop.svg', 'images/sound-play.svg'];
    var index = 0;

    $('.audio').on("click", function () {
        index++;
        if (index >= imgs.length) {
            index = 0;
        }
        $('.audio').css("backgroundImage", "url(" + imgs[index] + ")");
        if (index == 0) {
            $('.audio audio').prop("src", "");
        } else {
            $('.audio audio').prop("src", "mp3/1.mp3");
        }
    })



    var data = [{
        width: 500,
        top: 20,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    },
    {
        width: 900,
        top: 100,
        left: 200,
        opacity: 1,
        zIndex: 4
    },

    {
        width: 500,
        top: 20,
        left: 750,
        opacity: .2,
        zIndex: 2
    }
    ];


    var $lis = $("#slide li");


    $lis.each(function (index, ele) {
        $(ele).css(data[index]);
    })

    $("#arrRight").on("click", function () {
        if (open) {
            data.unshift(data.pop());
            $lis.each(function (index, ele) {
                $(ele).css(data[index]);
            })


        }
    })


    $("#arrLeft").on("click", function () {


        data.push(data.shift());

        $lis.each(function (index, ele) {
            $(ele).css(data[index]);
        })
    })
    $lis.eq(0).on("transitionend", function () {
    })

    var timeId = setInterval(function () {
        $("#arrRight").trigger("click");
    }, 1000)

    $('#wrap ul li').on("mouseenter", function () {
        clearInterval(timeId);

    })
    $('#wrap ul li').on("mouseleave", function () {
        // console.log(111111);

        timeId = setInterval(function () {
            $("#arrRight").trigger("click");
        }, 2000)
    })


    $('.hide .lef').on("mouseenter", function () {
        $('.hide .lef .new').animate({
            width: 140
        }, 400)
    })
    $('.hide .lef').on("mouseleave", function () {
        $('.hide .lef .new').animate({
            width: 125
        }, 400)
    })

    $('.hide .right').on("mouseenter", function () {
        $(".right a").animate({
            paddingLeft: 23
        }, 400)
    })
    $('.hide .right').on("mouseleave", function () {
        $(".right a").animate({
            paddingLeft: 15
        }, 400)
    })


    $(".hide .jump li").mouseenter(function () {

        $(this).css("opacity", 1).siblings().css("opacity", .5);
    })

    $(".jump").mouseleave(function () {

        $(this).find("li").css("opacity", 1);
    })




    $(".box .left .f").on("mouseenter", function () {
        $(".box .left .f .theme").stop().fadeIn(800, function () {
            $(".box .left .f .theme").css("display", "block");
        })
    })

    $(".box .left .f").on("dblclick", function () {
        $('.top').stop().animate({
            backgroundColor: '#7C4697',
        }, 1000)
        $('.hide').css('background', "#7C4697"),
            $(".hide .img").css('display', 'block'),
            $('.free-news').css('background', "#7C4697"),
            $('.foot').css('background', "#7C4697"),
            $('html body').animate({
                backgroundColor: "white"
            }, 400)

    })

    $("#zi").on('click', function () {
        $('.top').stop().animate({
            backgroundColor: '#7C4697',
            opacity: 0.6
        }, 1000)
        $('.hide').stop().animate({
            backgroundColor: '#7C4697',
            opacity: 0.8
        }, 1000)
        $('.free-news').stop().animate({
            backgroundColor: '#7C4697',
            opacity: 0.8
        }, 1000)
        $('.foot').stop().animate({
            backgroundColor: '#7C4697',
            opacity: 0.8
        }, 1000)
        $('html body').animate({
            backgroundColor: '#7C4697',
            opacity: 0.8

        }, 400)

    })
    $("#lv").on('click', function () {
        $('.top').stop().animate({
            backgroundColor: '#a52a2a',
        }, 1000)
        $('.hide').css('background', "#a52a2a"),
            $(".hide .img").css('display', 'none'),
            $('.free-news').css('background', "#a52a2a"),
            $('.foot').css('background', "#a52a2a")

        $('html body').animate({
            backgroundColor: '#a52a2a',
        }, 400)
    })
    $("#pink").on('click', function () {
        $('.top').stop().animate({
            backgroundColor: '#ffc0cb',
        }, 1000)
        $('.hide').css('background', "#ffc0cb"),
            $(".hide .img").css('display', 'none'),
            $('.free-news').css('background', "#ffc0cb"),
            $('.foot').css('background', "#ffc0cb")
        $('html body').animate({
            backgroundColor: "#ffc0cb",
        }, 400)
    })

    $(".box .left .f .theme").on("mouseleave", function () {
        $(".box .left .f .theme").fadeOut(800, function () {
            $(".box .left .f .theme").css("display", "none");
        })
    })

    $(".free-news li:nth-child(1)").on("mouseenter", function () {
        $(".free-news .one").stop().fadeIn(400, function () {
            $(".free-news .one").css("display", "block");
        })
        //    return false;
    })
    $(".free-news li:nth-child(2)").on("mouseenter", function () {
        $(".free-news  .two").stop().fadeIn(400, function () {
            $(".free-news .two").css("display", "block");
        })
        //    return false;

    })
    $(".free-news li:nth-child(3)").on("mouseenter", function () {
        $(".free-news  .thr").stop().fadeIn(400, function () {
            $(".free-news .thr").css("display", "block");
        })
        //    return false;

    })

    $(".free-news ul li").on("mouseleave", function () {
        $(".free-news  font").stop().fadeOut(400, function () {
            $(".free-news  font").css("display", "none")
        })
        //    return false;

    })


 $('.back').click(function(){
   $('html,body').animate({
       scrollTop:0
   },2000);
 })



















});