$(document).ready(function(){


  //CATEGORY SECTION
  const categorySwiper = new Swiper('.category-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: false,
    freeMode: true,
  });

  $('.category-prev').click(function(){
    categorySwiper.slidePrev();
  })

  $('.category-next').click(function(){
    categorySwiper.slideNext();
  })


  //POW SECTION
  const powSwiper = new Swiper('.pow-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: false,
    freeMode: true,
  });

  $('.pow-prev').click(function(){
    powSwiper.slidePrev();
  })

  $('.pow-next').click(function(){
    powSwiper.slideNext();
  })


  //PP SECTION
  const ppSwiper = new Swiper('.pp-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: false,
    freeMode: true,
  });

  $('.pp-prev').click(function(){
    ppSwiper.slidePrev();
  })

  $('.pp-next').click(function(){
    ppSwiper.slideNext();
  })

  //PB SECTION
  const pbSwiper = new Swiper('.pb-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: false,
    freeMode: true,
  });

  $('.pb-prev').click(function(){
    pbSwiper.slidePrev();
  })

  $('.pb-next').click(function(){
    pbSwiper.slideNext();
  })
















});
