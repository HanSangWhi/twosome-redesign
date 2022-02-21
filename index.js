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

// 화살표를 눌렀을때 사진과 맞는 메뉴설명이 나오게하기
$(document).ready(function(){
  $(".banner-2 .con .swiper-con .swiper-box1 .swiper-button-next").click(function(){
    if(Image == img2/banner2-coffee1.png){
      $(".banner-2 .con2 .menu-1").addClass("active");
    }else{
      $("banner-2 .con2 .menu-1").removeClass("active");
    }
    if(Image == img2/banner2-coffee2.png){
      $(".banner-2 .con2 .menu-2").addClass("active");
    }else{
      $("banner-2 .con2 .menu-2").removeClass("active");
    }
    if(Image == img2/banner2-coffee3.png){
      $(".banner-2 .con2 .menu-3").addClass("active");
    }else{
      $("banner-2 .con2 .menu-3").removeClass("active");
    }
    if(Image == img2/banner2-coffee4.png){
      $(".banner-2 .con2 .menu-4").addClass("active");
    }else{
      $("banner-2 .con2 .menu-4").removeClass("active");
    }
  });
});
