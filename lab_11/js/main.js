console.log("Лабораторна робота #11: Особливості ініціалізації змінних Javascript");

console.log("Завдання 1: Аналіз hoisting");
// Передбачте результат виконання, потім запустіть код та поясніть в коментарі коментар.

console.log(a); // undefined (змінна піднята, але значення ще не присвоєно)
var a = 10;

// console.log(b); // Помилка (Cannot access 'b' before initialization)
let b = 20;

// console.log(c); // Помилка (Cannot access 'c' before initialization)
const c = 30;

console.log("Завдання 2: Робота з областю видимості (scope)");
function testScope() {
    if (true) {
        var x = 5;
        let y = 10;
        const z = 15;
    }
    console.log(x); // 5 (var має функціональну область видимості)
    // console.log(y); // Помилка (y визначена у блоці)
    // console.log(z); // Помилка (z визначена у блоці)
}
testScope();

console.log("Завдання 3: Робота з типами даних");
console.log(5 + "5");  // "55" (конкатенація рядка)
console.log("5" - 2);  // 3 (рядок "5" перетворюється на число)
console.log(true + false);  // 1 (true -> 1, false -> 0)
console.log(null + 1);  // 1 (null -> 0)
console.log(undefined + 1);  // NaN (undefined не має числового значення)
console.log(0 == false);  // true (нестроге порівняння, false -> 0)
console.log(0 === false); // false (строге порівняння, різні типи)

console.log("Завдання 4: const та об'єкти");
const person = {
    name: "John",
    age: 30
};

person.age = 31; // Дозволено (властивості об'єкта можна змінювати)
person.city = "New York"; // Дозволено
console.log(person); // { name: "John", age: 31, city: "New York" }

// Object.freeze(person);
// person.age = 32; // Тепер змінювати не можна, буде ігноровано або кинута помилка у строгому режимі

// person = { name: "Alice", age: 25 }; // Помилка (перевизначити const-змінну не можна)

console.log("Завдання 5: Визначення типу даних");
function checkType(value) {
    return typeof value;
}

console.log(checkType(10));  // "number"
console.log(checkType("Hello"));  // "string"
console.log(checkType(null));  // "object" (це особливість typeof, null вважається об'єктом)
