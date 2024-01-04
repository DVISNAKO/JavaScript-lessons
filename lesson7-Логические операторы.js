// Тема: Логические операторы

// || ИЛИ

// находит первое TRUE 
// если все false возвращает последее значение

let a = ''; // false
let b = 'name'; //true
let c = ''; // false
let d = ''; // false

console.log(a || b || c ); // a false, выведит b true
console.log(a || c || d ||'все строки пустые'); 


// ==== ||= (Логическое присваивание ИЛИ)
a ||= b // тоже что a || (a = b);
//(Если a ложно, присваивает a значение b.)

let johnHasCar = false;

johnHasCar ||= "У Джона нет машины!"; // (a ||= b);

console.log(johnHasCar);

//=== короче чем if, но if нагляднее
if (johnHasCar == false) {
  johnHasCar = "У Джона нет машины!";
}

console.log(johnHasCar);





// ================ && - И

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'Время 12:30' );
}

// && (И )находит первое FALSE 
// Если все были TRUE, возвращается последний.

console.log( 1 && 2 && null && 3 ); // null)




//========================
// Приоритет оператора && больше, чем у ||
a && b || c && d // тоже самое что (a && b) || (c && d)


//========================

// &&= (Логическое присваивание И)
a &&= b; // тоже что - a && (a = b);

let greeting = "Привет"; 
// строка непустая, поэтому будет преобразована 
// к логическому значению true оператором &&=

greeting &&= greeting + ", пользователь!"; 
// то же самое, что true && (greeting = greeting + "...")

console.log( greeting ) // "Привет, пользователь!"

//============  Пример через IF
let greeting2 = "Привет";

if (greeting2) {
  greeting2 = greeting2 + ", пользователь!"
}

console.log( greeting2);








//======= !(НЕ)
//Приоритет НЕ ! является наивысшим из всех логических операторов, 
//поэтому он всегда выполняется первым, перед && или ||.

console.log( !true ); // false
console.log( !0 ); // true