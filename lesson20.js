//Тема: Строки

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
console.log(backticks.length) // length это свойство. Отображает количесво символов.


let say = 'Hello'
console.log(`${say} world!`);

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);

// \n - с новой строки
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList2);



// получаем первый символ
let str = 'Hello';
console.log( str[0] ); // H
// получаем последний символ
console.log( str[str.length - 1] ); // o

//Изменение регистра
console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface

//Получение подстроки
let str2 = 'Hello World';
console.log(str2.slice(0, 5)); // str.slice(start [, end])
console.log(str2);


let str3 = '   Hello World   ';
console.log(str3.trim()); // убирает пробелы в начале и конце строки.

console.log(str3.repeat(n)); // повторяет строку n раз.