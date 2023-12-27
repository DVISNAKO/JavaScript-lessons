//Тема: Map и Set

//Map – коллекция пар ключ-значение.

//new Map([iterable]) – создаёт коллекцию, можно указать перебираемый объект (обычно массив) из пар [ключ,значение] для инициализации.
let map = new Map();
// map.set(key, value) – записывает по ключу key значение value.
map.set("1", "str1");
console.log(map);

// map.set(key, value) – записывает по ключу key значение value.
map.set('1', 15).set(2, true);
console.log(map)

// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
console.log(map.get('1'));
console.log(map.get('9'));

// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
console.log(map.has('99'));

// map.delete(key) – удаляет элемент по ключу key.
map.delete(2);
console.log(map);

// map.size – возвращает текущее количество элементов.
console.log(map.size);

// map.clear() – очищает коллекцию от всех элементов.
console.log(map.clear());


//Перебор Map
let map2 = new Map();
map2.set(1, '1').set('2', 2).set('three', true);

// map.keys() – возвращает итерируемый объект по ключам,
console.log(map2.keys()); 

//map.values() – возвращает итерируемый объект по значениям,
console.log(map2.values());

//map.entries() – возвращает итерируемый объект по парам
console.log(map2.entries());


//Object.entries: из Object в Map 

let obj = {name: 'Josh', age: 22, gender: 'man'};

let map3 = new Map(Object.entries(obj));
console.log(map3);


// обратно из Map в Object
let obj2 = Object.fromEntries(map3.entries());

console.log(obj2);

//==========================
//Объект Set – это особый вид коллекции: «множество» значений (без ключей), 
//где каждое значение может появляться только один раз.

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
let set = new Set();

// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
let john = { name: "John", age: 24 };
let pete = { name: "Pete", status: true};
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set);

// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
set.delete(pete);
console.log(set);

// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
console.log(set.has(mary));

// set.size – возвращает количество элементов в множестве.
console.log(set.size);

// set.clear() – удаляет все имеющиеся значения.
console.log(set.clear());


//Перебор объекта Set

let set2 = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set2) {
   console.log(value); 
}

set2.forEach(value => {
    console.log(value + "1");
}) 