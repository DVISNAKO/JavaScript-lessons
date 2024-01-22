// Тема: Расширение Error

// "Псевдокод" встроенного класса Error, определённого самим JavaScript
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
    this.stack = `<стек вызовов>;` // нестандартное свойство, но обычно поддерживается
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Упс!");
}

try {
  test();
} catch(err) {
  console.log(err.message); // Упс!
  console.log(err.name); // ValidationError
  console.log(err.stack); // список вложенных вызовов с номерами строк для каждого
}


//=======
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  // Использование
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new ValidationError("Нет поля: age");
    }
    if (!user.name) {
      throw new ValidationError("Нет поля: name");
    }
  
    return user;
  }

  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {  //instanceof для проверки конкретного типа ошибки в строке
      console.log("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
    } else if (err instanceof SyntaxError) { // (*)
      console.log("JSON Ошибка Синтаксиса: " + err.message);
    } else {
      throw err; // неизвестная ошибка, пробросить исключение (**)
    }
  }