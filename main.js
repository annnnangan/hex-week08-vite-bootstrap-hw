import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

//Mobile Dropdown Menu Set up
const dropDownLevelTwoBack = document.querySelector(".mobile-dropdown-menu .dropdown-menu-level-two .dropdown-item-all-wrapper")
const dropDownLevelThreeBack = document.querySelector(".mobile-dropdown-menu .dropdown-menu-level-three .dropdown-item-all-wrapper")
const dropDownLevelTwo = document.querySelector(".mobile-dropdown-menu .dropdown-menu-level-two")
const dropDownLevelThree = document.querySelector(".mobile-dropdown-menu .dropdown-menu-level-three")


dropDownLevelTwoBack.addEventListener("click", (event)=>{
  dropDownLevelTwo.classList.remove("show");
})

dropDownLevelThreeBack.addEventListener("click", (event)=>{
  dropDownLevelThree.classList.remove("show");
})


//Swiper Configuration
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

var mobileCardSwiper = new Swiper(".mobileCardSwiper", {
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
  autoplay: {
    delay: 5000,
  },
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

var mobileCardSwiper2 = new Swiper(".mobileCardSwiper2", {
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: -150,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


 

