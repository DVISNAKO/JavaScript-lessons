// Остаточные параметры и оператор расширения
/*Остаточные параметры используются, чтобы создавать 
новые функции с неопределённым числом аргументов.*/

function sum(a, b) {
  return a + b;
}

console.log( sum(1, 2, 3, 4, 5) );


function sumAll(...args) { // args — имя массива
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6

//

function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Юлий Цезарь

  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  console.log( titles[0] ); // Консул
  console.log( titles[1] ); // Император
  console.log( titles.length ); // 2
}

showName("Юлий", "Цезарь", "Консул", "Император");

//============


let arr = [3, 5, 1];

console.log( Math.max(arr) ); // NaN

// ------------- добавить и обычное число
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// слияние массивов = ... оператор расширения
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

console.log(merged);