// Тема: Планирование: setTimeout и setInterval

/* 
setTimeout  - вызвать 1 раз,
setInterval - вызывать функцию регулярно
*/

let timerId = setTimeout(func, [delay], [arg1], [arg2], ...);


function sayHi() {
    console.log('Привет');
  }
  
  setTimeout(sayHi, 1000);


  function sayHi(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Привет", "Джон");


// очистить интервал
let timerId1 = setTimeout(sayHi, 2000);
clearTimeout(timerId1);


//=======================================

let timerId3 = setInterval(func, [delay], [arg1], [arg2], ...);

// повторить с интервалом 2 секунды
let timerId4 = setInterval(() => console.log('tick'), 1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId4); console.log('stop'); }, 5000);