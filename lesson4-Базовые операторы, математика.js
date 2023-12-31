// Тема: Базовые операторы, математика
//===============================

// % остаток на деление

console.log( 5%2 );  // 2*2 = 4 / 5-4 = 1 
console.log( 8%3 ); // 2
console.log( 8%4 ); // 0

//========================

// возведение в степень **

console.log( 2**2 ); // 4
console.log( 2**3 ); // 8
console.log( 3**4 ); // 81 

console.log( 4**(1/2) ); // 2

//========================
//Сложение строк
let s = "www." + "mypage" + '.com';
console.log(s);

// смешанное числа и строка
console.log(1 + 2 + '99'); // будет 42 - вначале сложение 2+2 и добавляеться строка 2

// унарный + аналог функции Number(str)
let str = '22'
console.log(+str);
console.log(typeof +str);

// Сокращённая арифметика с присваиванием
let n = 2;
console.log(n += 5); // n = 7 (работает как n = n + 5)
n *= 2; // n = 14 (работает как n = n * 2)
/// работает для остальных /=, -=, **= и так далее.

//Инкремент/декремент
let counter1 = 2;
counter1++; // работает как counter = counter + 1, просто запись короче
console.log(counter1);

counter1--;
console.log(counter1);

let counter2 = 2;
let a = counter2++ // добавить 1 но вернет значение до присвоения, то есть 2
console.log(a); // вернет 2 (префиксная форма: ++counter)

let counter3 = 2;
let b = ++counter3; // вернет 3
console.log(b);