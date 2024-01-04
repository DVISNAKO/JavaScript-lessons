//Формат JSON, метод toJSON

/*JavaScript предоставляет методы:
JSON.stringify для преобразования объектов в JSON.
JSON.parse для преобразования JSON обратно в объект.*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
let json = JSON.stringify(student);
  
console.log(typeof json); // мы получили строку!
  
console.log(json);

let obj = JSON.parse(json);

console.log(obj);

/*JSON поддерживает следующие типы данных:

Объекты { ... }
Массивы [ ... ]
Примитивы:
строки,
числа,
логические значения true/false,
null. */

//JSON.stringify пропускает
// 1. Свойства-функции (методы).
// 2. Символьные ключи и значения.
// 3. Свойства, содержащие undefined.

let user = {
    sayHi() { // будет пропущено
      alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined // как и это - пропущено
  };
  
  console.log( JSON.stringify(user) ); // {} (пустой объект)