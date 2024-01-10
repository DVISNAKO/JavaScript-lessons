//Тема: Привязка контекста к функции

// потеря контекста 
let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Привет, undefined!

//== решения – это обернуть вызов в анонимную функцию, создав замыкание:

  let user1 = {
    firstName: "Вася",
    sayHi() {
    console.log(`Привет, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user1.sayHi(); // Привет, Вася!
  }, 1000);

  //То же самое, только короче:
  setTimeout(() => user1.sayHi(), 1000); // Привет, Вася!

//============
//у функций есть встроенный метод bind, который позволяет зафиксировать this.
//Обычно bind применяется для фиксации this в методе объекта, 
//чтобы передать его в качестве колбэка. Например, для setTimeout.

  let user2 = {
    firstName: "Вася"
  };
  
  function func() {
    console.log(this.firstName);
  }
  
  let funcUser = func.bind(user2);
  funcUser(); // Вася

  //========= с методом

  let user3 = {
    firstName: "Вася",
    sayHi() {
        console.log(`Привет, ${this.firstName}!`);
    }
  };
  
  let sayHi = user3.sayHi.bind(user3); // (*)
  
  sayHi(); // Привет, Вася!
  
  setTimeout(sayHi, 1000); // Привет, Вася!