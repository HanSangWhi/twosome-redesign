const swiper = new Swiper(".swiper", {
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
  $(".taps div").click(function(){
    $(this).addClass("active")
    $(this).siblings().removeClass("active");
  })
})