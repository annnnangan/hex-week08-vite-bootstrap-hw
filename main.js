import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

var bannerSwiper = new Swiper(".bannerSwiper", {
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 1,
  grabCursor: true,
  rewind: true,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-arrow-next",
    prevEl: ".swiper-button-arrow-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      height: 800,
      slidesPerView: 1.2,
    },
  },
});

var courseCardSwiper = new Swiper(".courseCardSwiper", {
  grabCursor: true,
  slidesPerView: 1,
  grabCursor: true,
  rewind: true,
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

var courseCardSwiper2 = new Swiper(".courseCardSwiper2", {
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 24,
  // autoplay: {
  //   delay: 5000,
  // },
  navigation: {
    nextEl: ".swiper-button-arrow-next",
    prevEl: ".swiper-button-arrow-prev",
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});
