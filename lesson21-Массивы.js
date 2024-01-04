// Тема: Массивы

let arr1 = new Array();
let arr2 = [];

//В массиве могут храниться элементы любого типа.
let myArr = ["Яблоко", 11, { name: 'Джон' }, true,];

console.log( myArr[0] ); // Яблоко
console.log( myArr[1] ); // 11
console.log( myArr[2] ); // { name: 'Джон' }
console.log( myArr.length ); // 4 элемента в массиве


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
// for of - for item of arr
for (let fruit of fruits3) {
    console.log( fruit );
  }

//for in - for key in arr
for (let key in fruits3) {
    console.log( fruits3[key] );
}