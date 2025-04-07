// Завдання 1: findMax
let a1 = +prompt("Завдання 1: Введіть перше число:");
let b1 = +prompt("Завдання 1: Введіть друге число:");
function findMax(a, b) {
  return a > b ? a : b;
}
let result1 = findMax(a1, b1);
alert("Завдання 1: Максимум — " + result1);
console.log("Завдання 1: Максимум —", result1);

// Завдання 2: subtract
let a2 = +prompt("Завдання 2: Введіть число a:");
let b2 = +prompt("Завдання 2: Введіть число b:");
const subtract = function(a, b) {
  return a - b;
};
let result2 = subtract(a2, b2);
alert("Завдання 2: Різниця — " + result2);
console.log("Завдання 2: Різниця —", result2);

// Завдання 3: sqrt
let num = +prompt("Завдання 3: Введіть число для кореня:");
const sqrt = (n) => Math.sqrt(n);
let result3 = sqrt(num);
alert("Завдання 3: Квадратний корінь — " + result3);
console.log("Завдання 3: Квадратний корінь —", result3);

// Завдання 4: geometricProgression
let n = +prompt("Завдання 4: Введіть кількість членів (n):");
let a = +prompt("Завдання 4: Введіть перший член (a):");
let r = +prompt("Завдання 4: Введіть знаменник (r):");
function geometricProgression(n, a, r) {
  if (n === 0) return 0;
  return a * Math.pow(r, n - 1) + geometricProgression(n - 1, a, r);
}
let result4 = geometricProgression(n, a, r);
alert("Завдання 4: Сума прогресії — " + result4);
console.log("Завдання 4: Сума прогресії —", result4);

// Завдання 5: createDivider
let divisor = +prompt("Завдання 5: Введіть дільник:");
let numberToDivide = +prompt("Завдання 5: Введіть число для ділення:");
function createDivider(divisor) {
  return function(number) {
    return number / divisor;
  };
}
const divide = createDivider(divisor);
let result5 = divide(numberToDivide);
alert("Завдання 5: Результат ділення — " + result5);
console.log("Завдання 5: Результат ділення —", result5);

// Завдання 6: applyOperation
let a6 = +prompt("Завдання 6: Введіть перше число:");
let b6 = +prompt("Завдання 6: Введіть друге число:");
let op = prompt("Завдання 6: Введіть операцію (add або multiply):");

function applyOperation(a, b, func) {
  return func(a, b);
}
function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
let result6;
if (op === "add") {
  result6 = applyOperation(a6, b6, add);
} else if (op === "multiply") {
  result6 = applyOperation(a6, b6, multiply);
} else {
  result6 = "Невідома операція";
}
alert("Завдання 6: Результат — " + result6);
console.log("Завдання 6: Результат —", result6);

// Завдання 7: processSet
let inputSet = prompt("Завдання 7: Введіть числа через кому (наприклад: 1,2,3):");
const values = inputSet.split(",").map(Number);
const mySet = new Set(values);

function processSet(set, callback) {
  let result = [];
  for (let item of set) {
    result.push(callback(item));
  }
  return result;
}

let processed = processSet(mySet, (item) => item * 2);
alert("Завдання 7: Елементи множини * 2 — " + processed.join(", "));
console.log("Завдання 7: Елементи множини * 2 —", processed);