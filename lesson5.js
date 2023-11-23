// Тема: Операторы сравнения

// == равно
// != не равно
// > больше
// < меньше
// >= больше или равно
// <= меньше или равно
// === строгое сравнение  (проверяет равенство без приведения типов.)
// !== строгое неравенство 


// ================ 
//Результат сравнения имеет логический тип

console.log( '2' > 1 ); // true, строка '2' становится числом 2
console.log( '01' == 1 ); // true, строка '01' становится числом 1

//Boolean

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

// ================

console.log( null === undefined ); // false (При строгом равенстве)

console.log( null == undefined ); // true (При нестрогом равенстве)
// ================

// При использовании математических операторов и других операторов сравнения < > <= >=
// Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.

//сравнения null и 0
//(нестрогое равенство и сравнения > < >= <=, преобразуют null в число, рассматривая его как 0)
console.log( null > 0 );  // (1) false 0 > 0
console.log( null == 0 ); // (2) false особое правило == значений undefined и null они равны друг другу и не равны ничему другому. 
console.log( null >= 0 ); // (3) true 0 >= 0


//========= undefined несравнимо с другими значениями:

console.log( undefined > 0 ); // false (1) (undefined преобразуется в NaN, а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

//Значения null и undefined равны == друг другу и не равны любому другому значению.
undefined == null // true
undefined === null // false

//Советы: 
//Относитесь очень осторожно к любому сравнению с undefined/null, кроме случаев строгого равенства ===.
//Не используйте сравнения >= > < <= с переменными, которые могут принимать значения null/undefined, 
//разве что вы полностью уверены в том, что делаете. 
