// MAIN HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

let isFocused = false;

searchIconEl.addEventListener("click", function () {
  searchInputEl.focus();
  console.log(document.activeElement);

  // if (isFocused) {
  //   searchInputEl.blur();
  //   isFocused = false;
  // } else {
  //   searchInputEl.focus();
  //   isFocused = true;
  // }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});