//Тема: Объекты: основы

let user1 = new Object(); // синтаксис "конструктор объекта"
let user2 = {};  // синтаксис "литерал объекта"

//=======

let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
  };

  // получаем свойства объекта:
console.log( user.name ); // John
console.log( user.age ); // 30

delete user.age;
user.city = 'London';

console.log(user)



//использование [];

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
    [fruit]: 5,
}
console.log(bag);


//цикл for in
let person = {
    name: 'Ann',
    age: 25,
    isAdmin: true,
}

for ( let key in person) {
    // console.log(key);
    console.log(person[key]);
}