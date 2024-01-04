// Тема: Методы объекта, "this"

let user = {
    name: 'Anna',
    age: 23,
    sayHi: function(){
        console.log("Hello");
    },
    sayName(){
    console.log(this.age)
    }
}

console.log(user.name);
user.sayHi();
user.sayName();

//=====

let man = {age: 32};
let woman = {age: 25};

function showAge(){
    console.log(this.age);
}

man.method = showAge;
woman.method = showAge;

man.method();
woman.method();