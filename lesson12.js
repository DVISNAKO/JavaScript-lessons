// Тема: Function Expression 

let sayHi = function() {
    console.log( "Привет" );
  };

  console.log(sayHi);

  let func = sayHi;

  console.log(func);

  // Функции-«колбэки»
  //Давайте напишем функцию ask(question, yes, no) с тремя параметрами:

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "Вы согласны." );
  }
  
  function showCancel() {
    alert( "Вы отменили выполнение." );
  }
  
  // использование: функции showOk, showCancel передаются в качестве аргументов ask
  ask("Вы согласны?", showOk, showCancel);

 /* Function Declaration обрабатываются перед выполнением блока кода. 
 Они видны во всём блоке.
Функции, объявленные при помощи Function Expression, 
создаются только когда поток выполнения достигает их. */