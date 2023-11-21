
// Тема: Преобразование типов
//=======================

// 1. разделить строку получим - числовое значние
let a = '6' / '2';
console.log(a);
console.log(typeof(a));

//2. из строки сделать число
let str = '123';
let num = Number(str);
console.log(str);
console.log(typeof(num));

//3. Если строка не может быть приведена к числу, то результатом преобразования будет NaN
let age = Number("Любая строка вместо числа");
console.log(age);

//4. Примеры:
console.log(Number("   123   ")); //123
console.log(Number("123z")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

//5. Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log( Boolean("Привет!") ); // true
console.log( Boolean("") ); //false

//6. 

console.log(Boolean('0')); // true
console.log(Boolean('   ')); //true
