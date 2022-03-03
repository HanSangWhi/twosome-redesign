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