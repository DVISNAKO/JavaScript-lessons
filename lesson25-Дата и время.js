//Тема: Дата и время
//  Нельзя создать «только дату» или «только время»: объекты Date всегда содержат и то, и другое.
let now = new Date();
console.log( now );

//Счёт месяцев начинается с нуля (да, январь – это нулевой месяц).
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date = new Date("2017-01-26");
console.log(date);


console.log(date.getMonth());
// Существуют методы получения года, месяца и т.д. из объекта Date:

getFullYear() //Получить год (4 цифры)
getMonth() //Получить месяц, от 0 до 11.
getDate() //Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
//Вернуть день недели от 0 (воскресенье) до 6 (суббота).
getHours(), getMinutes(), getSeconds(), getMilliseconds()
//Получить, соответственно, часы, минуты, секунды или миллисекунды.


let date5 = new Date(2023, 1, 28);
date5.setDate(date5.getDate() + 2);
console.log(date5);


let id = Date.now();
console.log(id);