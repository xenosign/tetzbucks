const tc1 = 10;
const tc2 = 15;

function solution(num) {
  let answer = [];

  for (let i = 1; i <= num; i += 2) {
    answer.push(i);
  }

  return answer;
}

console.log(solution(tc1)); // [1, 3, 5, 7, 9]
console.log(solution(tc2)); // [1, 3, 5, 7, 9, 11, 13, 15]
