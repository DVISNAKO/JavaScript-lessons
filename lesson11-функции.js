// Тема: функции
sayHi();

function sayHi () {
    console.log('Привет, Мир')
}






// локальные переменные

function sayHi () {
    let message = 'Привет, мир'
    console.log(message);
}

sayHi();
console.log(mesage);





//Внешние переменные

let userName = 'Вася';

function showMessage(){
let userName = 'Петя'; 
//функция создаст и будет использовать свою собственную локальную переменную userName
 let message = 'Привет, ' + userName;
 console.log(message)
}

showMessage();


// ============ Параметры

function sayHi (name, text = 'текст не добавлен'){
    console.log(name + text)
}

sayHi('Anna ', "Привет");
sayHi('Anna ', );