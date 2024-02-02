// Тема: BigInt

const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // то же самое, что и 10n

console.log(bigintFromNumber)

//=== Математические операторы

console.log(1n + 2n); // 3


console.log(1n + 2); // Error: Cannot mix BigInt and other types


let bigint1 = 1n;
let number = 2;

// конвертируем number в bigint
console.log(bigint1 + BigInt(number)); // 3

// конвертируем `bigint` в number
console.log(Number(bigint1) + number); // 3


//К BigInt числам нельзя применить унарный оператор +
let bigint2 = 1n;

console.log( +bigint2 ); // Ошибка!

//Операции сравнения
console.log( 2n > 1n ); // true

console.log( 2n > 1 ); // true

//В if или любом другом логическом операторе bigint число ведёт себя как обычное число.
//Логические операторы ||, && и другие также работают с bigint числами как с обычными числами