//Тема: Прототипное наследование

//В JavaScript все объекты имеют скрытое свойство [[Prototype]], 
//которое является либо другим объектом, либо null.

let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };

let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // теперь мы можем найти оба свойства в rabbit:
  console.log( rabbit.eats ); // true (**)
  console.log( rabbit.jumps ); // true

  rabbit.walk();

  /*Если мы вызываем obj.method(), а метод при этом взят из прототипа, 
  то this всё равно ссылается на obj. Таким образом, методы 
  всегда работают с текущим объектом, даже если они наследуются.*/


  // методы animal
  //Неважно, где находится метод: в объекте или его прототипе. 
  //При вызове метода this — всегда объект перед точкой.
let animal2 = {
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal2
};

// модифицирует rabbit.isSleeping
rabbit.sleep();
console.log(rabbit);

console.log(rabbit.isSleeping); // true
console.log(animal2.isSleeping); // undefined (нет такого свойства в прототипе)