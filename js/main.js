// MAIN HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

// 외부 요소를 클릭하여 포커스 아웃 된 경우를 처리하기 위한 전역 변수
let isNotSearchClick = false;

// 돋보기 아이콘이 아닌 외부 요소를 클릭하였는지를 확인 하기 위하여
// 문서에 이벤트 리스너 걸기
document.addEventListener("click", function (e) {
  // 요소를 클릭한게 아니라면 --> 외부를 클릭하여 포커스 아웃이 되었다면, 전역 변수를 true;
  if (!e.target.classList.contains("material-symbols-outlined")) {
    isNotSearchClick = true;
    // 요소를 클릭했다면 --> 전역 변수를 false;
  } else {
    isNotSearchClick = false;
  }
});

searchIconEl.addEventListener("click", function () {
  // 클릭이 한번도 안된 상태라서 active 클래스가 없다면?
  // active 클래스 부여 및 focus 보내기, placeholder 지정
  if (!searchEl.classList.contains("active")) {
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합 검색");

    // 외부 요소 클릭으로 포커스가 아웃 된 상태에서, 다시 돋보기를 누르면
    // active 클래스 부여 및 focus 보내기, placeholder 지정
  } else if (isNotSearchClick) {
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합 검색");
    isNotSearchClick = false;

    // active 클래스와, focus 가 모두 있는 상태에서 클릭을 하면 active 클래스를 제거하여
    // 토글 효과
  } else {
    searchEl.classList.remove("active");
  }
});

// 포커스 아웃이 되면 일단 placeholder 초기화
searchInputEl.addEventListener("blur", function (e) {
  searchInputEl.setAttribute("placeholder", "");
});
