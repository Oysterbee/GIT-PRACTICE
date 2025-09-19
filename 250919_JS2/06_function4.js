const ob = {name: "cho", age: 100, money: 24};
const { name: myName, age, money, job = "programmer"}=ob;
console.log(myName, age, money, job);

function fun1(props){
    const {name, age, job} = props;
}
function fun2({name, age, job}){
    console.log(name, age, job);
}

function fun3(a,b,c, ...data){
    console.log(1,2,3,4,5,6,7,8,9,10);
}