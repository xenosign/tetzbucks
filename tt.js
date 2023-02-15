// MAIN HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

let isNotSearchClick = false;
let clickEl;

document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("material-symbols-outlined")) {
    isNotSearchClick = true;
  } else {
    isNotSearchClick = false;
  }
});

searchIconEl.addEventListener("click", function () {
  if (isNotSearchClick) {
    console.log("1");
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합 검색");
    isNotSearchClick = false;
  } else if (!searchEl.classList.contains("active")) {
    console.log("2");
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합 검색");
  } else {
    console.log("3");
    searchEl.classList.remove("active");
  }
});

searchInputEl.addEventListener("focusout", function (e) {
  searchInputEl.setAttribute("placeholder", "");
});
