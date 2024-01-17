// Тема: Наследование классов

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно.`);
      }
  }
  
  let animal = new Animal("Мой питомец");

  //===

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} прячется!`);
    }
    // переопледеление метода 
    stop() { 
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно метод Rabbit.`);
      }
      /* Это полезно, когда вам нужно сохранить поведение родительского метода, 
        но добавить свою собственную функциональность. */
    //   stop() {
    //     super.stop(); // вызываем родительский метод stop
    //     this.hide(); // и затем hide
    //   }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); // Белый кролик бежит со скоростью 5.
  rabbit.hide(); // Белый кролик прячется!
  rabbit.stop(); // возьмет из Rabit
 
  //==== После extends разрешены любые выражения

  function f(phrase) {
    return class {
      sayHi() { console.log(phrase); }
    };
  }
  
  class User extends f("Привет") {}
  
  new User().sayHi(); // Привет


