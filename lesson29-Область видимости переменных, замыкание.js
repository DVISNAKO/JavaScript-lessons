//Тема: Область видимости переменных, замыкание

{
let message = "Hello";
console.log(message);
}
// показать другое сообщение
{
let message = "Goodbye"; // SyntaxError: Identifier 'message' has already been declared
console.log(message);
}

//=============

//Для if, for, while и т.д. переменные, видны только внутри
if (true) {
    let text = "Hello";
  
    console.log(text); // Hello
  }
  
 console.log(text); // ошибка text is not defined




//============= Вложенные функции
//Функция называется «вложенной», когда она создаётся внутри другой функции.

 function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();
  
   console.log( counter() ); // 0
   console.log( counter() ); // 1
   console.log( counter() ); // 2
   console.log( counter() );

   
   /*вопрос: «что такое замыкание?»
   Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ. 
   в JavaScript, все функции изначально являются замыканиями.
   */


let name = "John";

function sayHi() {
console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?


//====

function first() {
let number = 1;

function second () {
    // let number = 2;
    console.log((number));
}
return second;
}

const showResult = first();
showResult(); //будет показано: 2