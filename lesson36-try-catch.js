//Тема: try..catch

try {

    console.log('Начало блока try');  // (1) <--
  
    lalala; // ошибка, переменная не определена!
  
    console.log('Конец блока try (никогда не выполнится)');  // (2)
  
  } catch(err) { //Если нам не нужны детали ошибки, в catch можно её пропустить:
  
    console.log(`Возникла ошибка!`); // (3) <--
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)
    console.log(err);// ReferenceError: lalala is not defined
  }


  //try..catch работает синхронно
  try {
    setTimeout(function() {
      noSuchVariable; // скрипт упадёт тут
    }, 1000);
  } catch (e) {
    console.log( "не сработает" );
  }
  //функция выполняется позже, когда движок уже покинул конструкцию try..catch

  setTimeout(function() {
    try {
      noSuchVariable; // try..catch обрабатывает ошибку!
    } catch {
    console.log( "ошибка поймана!" );
    }
  }, 1000);


//=====

let json = "{ некорректный JSON }";

try {

  let user = JSON.parse(json); // <-- тут возникает ошибка...
  console.log( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  console.log( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  console.log( e.name );
  console.log( e.message );
}

//===

let json2 = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json2); // <-- выполнится без ошибок

  if (!user.name) { 
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  console.log( user.name );

} catch(e) {
    console.log( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}

///
try {
  console.log( 'try' );
  if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (e) {
  console.log( 'catch' );
} finally {
  console.log( 'finally' );
}