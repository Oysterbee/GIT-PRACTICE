// 1부터 10까지 더하는 경우
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("sum", sum);
// 3의 배수를 출력
for (let i = 3; i < 50; i += 3) {
  console.log(i);
}

// 중첩 for문.
for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    // 같은 이름을 써버리면은 X
    console.log(i, i);
  }
}
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}