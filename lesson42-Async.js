//Тема: Async/await
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