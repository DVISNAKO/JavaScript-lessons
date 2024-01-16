//Тема: Классы

/*
class MyClass {
    // методы класса
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }
*/

//Внутри классов запятые не требуются для разделения методов.
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
  sayGoodbye() {
    console.log("Goodbye" + " " + this.name);
  }
}

// Использование:
let user = new User("Иван");
user.sayHi();
user.sayGoodbye();

/*  Базовый синтаксис для классов выглядит так:
class MyClass {
  prop = value; // свойство
  constructor(...) { // конструктор
    // ...
  }
  method(...) {} // метод
  get something(...) {} // геттер
  set something(...) {} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}
*/

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
