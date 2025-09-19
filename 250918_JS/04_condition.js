// Math.random() // 0 이상 1 미만의 숫자.
// Math.random() * 6 // 0 이상 6 미만의 숫자.
// Math.random() * 6 + 1 // 1 이상 7 미만의 숫자.
const dice = Math.floor(Math.random() * 6 + 1);
console.log("주사위의 눈", dice);
if (dice >= 5) {
  console.log("승리!");
} else if (dice >= 3) {
  // 앞의 if가 처리 되고 나서 그 나머지의 상황에서만 작동하는 로직
  console.log("무승부!");
} else {
  console.log("패배!");
}