export {Swiper}

// Swiper  
new Swiper('header .main-contant .swiper', {
  autoplay:{
    delay:4000
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: 'header .main-contant .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: 'header .main-contant .swiper-prev',
    nextEl: 'header .main-contant .swiper-next'
  }
})

new Swiper('main .guide .swiper',{
  autoplay:true,
  direction: 'vertical',
  slidesPerView:1,
  centeredSlides:true,
  loop:true
})