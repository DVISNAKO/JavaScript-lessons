// Тема: Стрелочные функции

let sum = (a, b) => a + b;

console.log(sum(2, 3));








// с одним аргументом 
let double = n => n * 2;
console.log(double(4));









// без аргументов

let sayHi = () => console.log("Hello!");

sayHi();






// Function Expression.

let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();






// множество инструкций

let sum2 = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
  };
  
  console.log( sum2(1, 2) ); // 3
