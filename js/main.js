$(document).ready(function(){


  $("#fullpage").fullpage({

  }); 


  var mv = new Swiper(".mv", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var rone = new Swiper(".r-one", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      
    },
    pagination: {
      el: ".swiper-pagination",
      type : "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*$(".f-img").hide();*/

 // 탭메뉴
 $(".f-img li").hide();

 $(".f-txt li").eq(0).addClass("hover")
 $(".f-img li").eq(0).show();

 $(".f-txt li").click(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   /* 순서를 가져오는 index() - 사용자가 선택한 li의 순번을 기억*/

   var indexNum = $(this).index();
   $(".f-img li").eq(indexNum).fadeIn().siblings().hide();
 });



 //돋보기 메뉴

 $(".pc-search").hide();
 $(".btn-search").click(function(){
  $(".pc-search").fadeIn();
});

$(".search-close").click(function(){
  $(".pc-search").fadeOut();
});

 $(".check img").hide();

 $(".check").click(function(){
  $(".check img").show();
 });
 
 $(".check img").click(function(){
  $(".check img").hide();
 });
});