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
  pagination: {
    el: ".swiper-blog-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-banner-next",
    prevEl: ".swiper-button-banner-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      height: 800,
      slidesPerView: 1.2,
    },
  },
});
