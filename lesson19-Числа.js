// Тема: Числа

let billion1 = 1000000000;

let billion2 = 1_000_000_000; // Движок JavaScript попросту игнорирует _ между цифрами

let billion3 = 1e9; // e * количество нулей (1 * 1000000000);


let mcs = 0.000001; // 1 микросекунду
let ms = 1e-6; // шесть нулей слева от 1





//Вызов метода на числе
console.log(123456..toString(36)) // OK ..
console.log(123456.toString(36)); //Error
console.log((123456).toString(36)) // OK ()





// Math.floor Округление в меньшую сторону
let num1 = 1.6;
console.log(Math.floor(num1));

//Math.ceil Округление в большую
let num2 = 1.3;
console.log(Math.ceil(num2));

// Math.round Округление до ближайшего целого
let num3 = 1.3;
let num4 = 1.6;
console.log(Math.round(num3), Math.round(num4));






//Math.random() Возвращает случайное число от 0 до 1
let a = '';
console.log(Math.random(a).toFixed(4));

//Math.max Возвращает наибольшее
console.log( Math.max(3, 5, -10, 0, 1) ); // 5

//Math.pow(n, power) Возвращает число n, возведённое в степень power
console.log(Math.pow(2, 10))





//округлить число до 2-х знаков после запятой
let num5 = 1.23456;
console.log( Math.round(num5 * 100) / 100 ); 

let num6 = 12.34435;
console.log( num6.toFixed(1));



//Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой:
console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке