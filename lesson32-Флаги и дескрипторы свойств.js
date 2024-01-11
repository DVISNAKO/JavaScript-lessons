'use strict'

//Тема: Флаги и дескрипторы свойств

//Флаги свойств

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
console.log( JSON.stringify(descriptor, null, 2 ) );
  /* дескриптор свойства:
  {
    "value": "John",
    "writable": true, свойство можно изменить, иначе оно только для чтения.
    "enumerable": true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
    "configurable": true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
  }
  */


  //===== изменить флаг /Ошибки отображаются только в строгом режиме
  let user2 = {
    name: "John"
  };

  Object.defineProperty(user2, "name", {
    writable: false
  });
  
user2.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'

console.log(user2.name);