const obj = {
    key1 : 1234,
    1 : 1234, // 값은 중복되어도 상관없음
    1: 123 // 키가 중복되면?
    //가장 최신값으로 덮어씌워짐
    // ...rest -> 이걸로 default한 다음에
    // 추가로 수정하고자 하는 키 : 값 해서 테크닉이 있음.
};

console.log(obj);

const map = new Map(); // 자바 배열과 비슷한 생성방식
map.set("name", "cho"); // key - value를 세팅
map.set("age", 26);
map.set("job","engineer");
console.log(map);
console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.get("job"));

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
console.log(set1);

const data1 = [1,2,3,4,5];
const data1Copy = [];
for(const v of data1){
    data1Copy.push(v*2);
}
console.log(data1Copy);

console.log(
    data1.reduce(
        (prev, cur) => {
            console.log(prev, cur);
            return prev + cur;
        }
    )
)