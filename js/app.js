ScrollReveal().reveal('.word-about_item', { delay: 400,  reset: true, duration: 400, interval: 50  });

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    effect: 'fade',
    loop: true,
    
    autoplay: {
        delay: 3000,
      },
      
  });

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__slideInUp',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();