class User {
    constructor(name, age){
        this.name = name || "kim";
        this.age = age;
    }
    job = "programmer";
    sex = "male";
}

const user1 = new User();
console.log(user1);
console.log(user1.name);

class Animal{
    constructor(){

    }
    speak
}

const animal = new Animal("개");
animal.speak();

class Dog extends Animal{
    constructor(name,breed){
        super();
        this.name = name;
        this.bread = breed;
    
    }
    
    speak(){
        console.log("멍멍");
    }
}