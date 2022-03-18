(function () {
  new Swiper(".our-services__carousel", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoHeight: false,
    watchOverflow: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
      270: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1120: {
        slidesPerView: 4,
      },
    },
  });
})();