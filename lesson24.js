//Тема: Деструктурирующее присваивание

let arr = ["Ilya", "Kantor"];

let firstName1 = arr[0];
let surname1 = arr[1];

console.log(firstName1);
console.log(surname1);

//============

let [firstName2, surname2] = arr;

console.log(firstName2);
console.log(surname2);

let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(title);

//========
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
console.log(c, two);

//=== Дальнейшие элементы нигде не присваиваются
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// ...Rest
let [name3, name4, ...titles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(titles); //titles = ["Consul", "of the Roman Republic"]

//======
// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name); // Julius (из массива)
console.log(surname); // Anonymous (значение по умолчанию)

//== Object

let options = {
  title1: "Menu",
  width: 100,
  height: 200,
};

let { title1, width, height } = options;

console.log(title1); // Menu
console.log(width); // 100
console.log(height); // 200

//======
let options2 = {
  title4: "Menu",
};

let { width2 = 100, height2 = 200, title4 } = options2;

console.log(title4); // Menu
console.log(width2); // 100
console.log(height2); // 200

//==
let options3 = {
  title3: "Menu",
  height: 200,
  width: 100,
};

// title = свойство с именем title
// rest = объект с остальными свойствами
let { title3, ...rest } = options3;

// сейчас title="Menu", rest={height: 200, width: 100}
console.log(rest.height); // 200
console.log(rest.width); // 100

// Пример
let user = {
  firstName3: "John",
  years: 30,
};

let { firstName3, years: age, isAdmin = false } = user;

console.log(firstName3, age, isAdmin);
