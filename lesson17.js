// Тема: Опциональная цепочка

/*Опциональная цепочка ?. останавливает вычисление 
и возвращает undefined, если значение перед ?. 
равно undefined или null.*/

//Синтаксис опциональной цепочки ?. три формы:
obj?.prop
obj?.[prop]
obj.method?.()

//возвращает значение если оно существует, если нет то undefine

let user = {};

console.log(user?.adress?.street);