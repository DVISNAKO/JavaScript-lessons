// Тема: Тип данных Symbol
//Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);


// Символы не преобразуются автоматически.
let id = Symbol("id");
alert(id); //  TypeError: Cannot convert a Symbol value to a string
alert(id.toString()); // Symbol(id), теперь работает


// к символу сложно нечаянно обратиться, сторонний код вряд ли его вообще увидит
let user = {
    name: "Вася"
  };
  
  let id3 = Symbol("id");
  
  user[id3] = 1;
  
  console.log( user );
  console.log( user[id3] );

  //КОПИРОВАНИЕ Свойства, чьи ключи – СИМВОЛЫ, не перебираются циклом for..in.

let id4 = Symbol("id");
let user = {
  [id4]: 123
};

let clone = Object.assign({}, user);

console.log( clone[id4] ); // 123