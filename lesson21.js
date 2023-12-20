// Тема: Массивы

let arr1 = new Array();
let arr2 = [];

//В массиве могут храниться элементы любого типа.
let fruits = ["Яблоко", 11, { name: 'Джон' }, true,];

console.log( fruits[0] ); // Яблоко
console.log( fruits[1] ); // Апельсин
console.log( fruits[2] ); // Слива
console.log( fruits.length );

/*
push - добавляет элемент в конец.
shift - удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
push - добавляет элемент в конец.
pop - удаляет последний элемент.
*/

let fruits2 = ["Яблоко", "Апельсин"];
console.log( fruits2 ); 

fruits2.push("Груша");
console.log( fruits2 ); 


//Перебор элементов
let fruits3 = ["Яблоко", "Апельсин", "Слива"];
// for
for (let i = 0; i < fruits3.length; i++) {
    console.log( fruits3[i] );
}
// for of
for (let fruit of fruits3) {
    console.log( fruit );
  }

//for in
for (let key in fruits3) {
    console.log( fruits3[key] );
}