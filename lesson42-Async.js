//Тема: Async/await


async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });
  
    let result = await promise; // будет ждать, пока промис не выполнится (*)
    //await нельзя использовать в обычных функциях
    console.log(result); // "готово!"
  }
  
  f();



// Функция, возвращающая промис после задержки
function getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Данные получены!");
      }, 1000);
    });
  }
  
  // Асинхронная функция с использованием async/await
  async function fetchData() {
    console.log("Начало выполнения");
  
    try {
      const result = await getData(); // Здесь выполнение приостанавливается до завершения промиса
      console.log(result); // "Данные получены!"
    } catch (error) {
      console.error("Ошибка:", error);
    }
  
    console.log("Завершение выполнения");
  }
  
  // Вызов асинхронной функции
  fetchData();