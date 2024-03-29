//Тема: Promise 

/*
Промис (Promise): Промис – это объект, представляющий асинхронную операцию, 
которая может завершиться успешно (resolved) или с ошибкой (rejected). 
Промис имеет два состояния: 
"ожидание" (pending), 
"выполнено" (fulfilled) 
или "отклонено" (rejected). 
*/

let promise = new Promise(function(resolve, reject) {
    // асинхронный код 
    /*(это код, который может быть запущены параллельно с другими операциями, 
    и выполнение кода продолжится без ожидания завершения этих асинхронных задач.) */

    // если успешно, вызываем resolve
    // если с ошибкой, вызываем reject
  });

//Промис позволяет использовать методы .then() и .catch() 
//для обработки успешного или ошибочного результата соответственно.
promise.then(
    result => {
      // обработка успешного выполнения
    },
    error => {
      // обработка ошибки
    }
  );


/*Цепочка промисов (Chaining):
Промисы могут быть объединены в цепочку, используя метод .then(). 
//Это удобно для последовательного выполнения асинхронных операций */

promise
  .then(result => { /* обработка успешного выполнения */ })
  .then(nextResult => { /* следующая асинхронная операция */ })
  .catch(error => { /* обработка ошибки в любом из предыдущих шагов */ });


  /*Promise.all(iterable) принимает массив промисов и возвращает новый промис, 
  который выполняется, когда все промисы в массиве завершаются.*/

  let promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then(results => { /* обработка результатов успешно завершенных промисов */ })
  .catch(error => { /* обработка ошибки любого из промисов */ });

  //=== Пример

  // Создаем промис
const myPromise = new Promise((resolve, reject) => {
    // Эмулируем асинхронную операцию (например, загрузку данных)
    setTimeout(() => {
      const success = false; // Здесь можно установить значение в false для имитации ошибки
  
      if (success) {
        resolve("Данные успешно загружены");
      } else {
        reject("Ошибка при загрузке данных");
      }
    }, 2000); // Задержка 2 секунды
  });
  
  // Используем промис
  myPromise
    .then((result) => {
      console.log("Успех:", result);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });

