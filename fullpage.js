const swiper = new Swiper(".swiper-box1 .swiper", {
  loop:true,
  slidesPerView:4,
  spaceBetween:0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
  },
});
const swiper2 = new Swiper(".swiper-box2 .swiper", {
  loop:true,
  slidesPerView:4,
  spaceBetween:0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
  },
});
const swiper3 = new Swiper(".swiper-box3 .swiper", {
  loop:true,
  slidesPerView:4,
  spaceBetween:0,
  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

// 왼쪽 메뉴 3개랑 가운데 그림 연결

$(document).ready(function(){
  $(".banner-2 .con .taps>div").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var indexNum = $(this).index();
    console.log(indexNum);

    $(".banner-2 .con .swiper-con>div").eq(indexNum).addClass("active");
    $(".banner-2 .con .swiper-con>div").eq(indexNum).siblings().removeClass("active");

    // $(".banner-2 .con2 .menu-story>ul").eq(indexNum).addClass("active");
    // $(".banner-2 .con2 .menu-story>ul").eq(indexNum).siblings().removeClass("active");
  });
});

// 1페이지 2페이지 풀페이지 슬라이드

$(document).ready(function() {
  $("#fullpage").fullpage({
    autoScrolling:true,
    scrollHorizontally:true,
  });
});


// 3페이지 탭메뉴
$(document).ready(function(){
  $('.tap-menu .btn-box>div').click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var indexNum  = $(this).index();
    console.log(indexNum);

    $(".banner-3 .tap-menu .content-box>div").eq(indexNum).addClass("active");
    $(".banner-3 .tap-menu .content-box>div").eq(indexNum).siblings().removeClass("active");
  });
});


// 헤더연습(풀페이지)

new fullpage('#fullpage', {
  
});

// 풀페이지 js

$(document).ready(function() {
  $("#fullpage").fullpage();

  $.fn.fullpage.setAllowScrolling(false);
});

// 로고메뉴관련 js

$(document).ready(function(){
  $(".header .con .top-bar-logo-right").click(function(){
    $(".side-bar").addClass("active");
  });
  $(".side-bar .logo-btn").click(function(){
    $(".side-bar").removeClass("active");
  });
  $(".header .con .top-bar-logo-right2").click(function(){
    $(".side-bar").addClass("active");
  });
  $(".side-bar .logo-btn").click(function(){
    $(".side-bar").removeClass("active");
  });
});

// 모바일 메뉴박스(반응형)

$(document).ready(function(){
  $(".tap-menu-wrap>.btn-box>div").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    var indexNum = $(this).index();
    console.log(indexNum);
    
    $(".tap-menu-wrap>.content-box>div").eq(indexNum).addClass("active");
    $(".tap-menu-wrap>.content-box>div").eq(indexNum).siblings().removeClass("active");
  });
});