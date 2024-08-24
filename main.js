import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

var bannerSwiper = new Swiper(".bannerSwiper", {
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 1.2,
  grabCursor: true,
  rewind: true,
  loop: true,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-blog-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
