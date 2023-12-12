//Тема: Копирование объектов

let user = {
    name: 'John',
    age:30
};

let clone = {};

//=======================
for (let key in user) {
    clone[key] = user[key];
}

clone.name = 'Alise';
console.log(clone);

//==== Метот Assign({вернет объект}, копирует свойства всех исходных объектов, объект2, объект3)

let user2 = {
    name: "Bob",
    age: 31
  };
  
  let clone = Object.assign({}, user2);

  console.log(clone);

  clone = {...user2};

  console.log(clone);