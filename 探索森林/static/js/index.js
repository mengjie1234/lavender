
$(function () {
// 关闭音乐
$("#mp3").on("click",function(){
  $("audio").prop("src","");
  // console.log(123);
})








  $(".top").mouseenter(function () {
    $(".forst-dream").stop().slideDown(1000);
    $(".wave").stop().animate({
      top: 275
    }, 1000)

  })
  $(".top").mouseleave(function () {
    $(".forst-dream").stop().slideUp(1000);
    $(".wave").stop().animate({
      top: 135
    }, 1000)
  })

  // 返回顶部
  $(".goTop").click(function () {
    $("html,boy").animate({
      scrollTop: 0
    }, 1000)
  })

  // 森林漫游

  $('.three li').on("mouseenter", function () {
    $(this).find(".new").stop().fadeIn(1000);
    $(this).find(".old").stop().fadeOut(1000);
  })
  $('.three li').on("mouseleave", function () {
    $(this).find('.new').stop().fadeOut(1000);
    $(this).find(".old").stop().fadeIn(1000);
  })



  //    台中新社店

  // var $lis = $(".forst-family-two ul li")
  // $lis.each("mouseenter",function(){
  //   $(this).addClass("change").siblings().removeClass("change");
  // })
  // $lis.each("mouseleave",function(){
  //   $lis.removeClass("change");
  // })






})



      // $(function () {
      //     $(".top").mouseenter(function () {
      //         // $(".forst-dream"). slideDown(800);
      //         $(".forst-dream").css("display", "block");
      //         $(".top").stop().animate({
      //             height: 280
      //         }, 800)
      //         $(".wave").css("top", 280)
      //     })
      //     $(".top").mouseleave(function () {
      //         // $(".forst-dream").slideUp(800);
      //         $(".forst-dream").css("display", "none");
      //         $(".top").stop().animate({
      //             height: 140
      //         }, 800)
      //         $(".wave").css("top", 140)
      //     })
      // })


      //     (function () {
      //         var ul = document.querySelector(".forst-family-two ul");
      //         var lis = ul.childen;
      //         console.log(ul)
      //         ul.style.width = lis[0].offsetWidth * lis.length + "px";
      //     })();
      // (function () {
      //     new IScroll(".forst-family-two", {
      //         scrollX: false,
      //         scrollY: false
      //     })
      // })();
