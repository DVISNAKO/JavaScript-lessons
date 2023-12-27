// Методы массивов

/*
arr.push(...items) – добавляет элементы в конец,
arr.pop() – извлекает элемент из конца,
arr.shift() – извлекает элемент из начала,
arr.unshift(...items) – добавляет элементы в начало.
*/

// splice - start 0, сколько удалить 3, добавить, добавить

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");

console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]


//arr.slice([start], [end])
//Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). 
let num = [0, 1, 2, 3];
console.log(num.slice(1,3));

//arr.concat(arg1, arg2...) - создаёт новый массив, в который копирует данные из других массивов
let numArr = [0, 1, 2];
console.log(numArr.concat(3, 4));



let fruits = ["Яблоко", "Апельсин", "Слива"];
fruits.forEach((item, index, array) => {
    console.log(`У ${item}  индекс ${index} в ${array}`)
})


// find
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user.name); // Вася