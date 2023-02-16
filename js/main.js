// MAIN HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

let isNotSearchClick = false;

document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("material-symbols-outlined")) {
    isNotSearchClick = true;
  } else {
    isNotSearchClick = false;
  }
})

searchIconEl.addEventListener("click", function () {
  if (!searchEl.classList.contains("active")) {
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
  } else if (isNotSearchClick) {
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
    isNotSearchClick = false;
  } else {
    searchEl.classList.remove("active");
  }
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
})

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(".notice .notice-line .inner .inner__left .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// AutoPlay 컨트롤
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

// Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  };
});

// 애니메이션 파트

// Visual
window.onload = function () {
  const visualSection = document.querySelector('.visual');
  visualSection.classList.add("animate");
};

// 애니메이션 스크롤 파트
window.addEventListener("scroll", function () {
  // 엘살바도르
  if (window.scrollY > 490) {
    const elsalvadorSection = this.document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }

  if (window.scrollY > 1030) {
    const ethiopiaSection = this.document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }

  if (window.scrollY > 1430) {
    const favoriteSection = this.document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }

  if (window.scrollY > 2230) {
    const magazineSection = this.document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }

  if (window.scrollY > 2630) {
    const storeSection = this.document.querySelector(".store");
    storeSection.classList.add("animate");
  }
})
