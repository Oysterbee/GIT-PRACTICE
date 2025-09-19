const matrix = [];
for (let i = 0; i < 5; i++) {
  // 가로를 의미하는 축 (행)
  const row = [];
  for (let j = 0; j < 5; j++) {
    // 세로를 의미하는 축
    row.push("*"); // 열.
  }
  matrix.push(row);
}
console.log(matrix);