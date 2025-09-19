function generateLottoNumbers() {
  const lottoNumbers = new Set();
  
  while (lottoNumbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1; // 1부터 45까지의 난수 생성
    lottoNumbers.add(randomNumber); // Set에 숫자 추가 (중복 시 추가되지 않음)
  }
  
  return Array.from(lottoNumbers).sort((a, b) => a - b); // 배열로 변환 후 오름차순 정렬
}

let cycle = 0;
while(cycle<5){
    console.log(generateLottoNumbers());
    cycle++
}