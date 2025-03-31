// Завдання 1: Побудова матриці n*n з 1 та 0
function buildMatrix() {
    let n = parseInt(prompt("Введіть розмір матриці n:"));
    let matrix = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix += (i + j) % 2 === 0 ? "1 " : "0 ";
        }
        matrix += "\n";
    }
    console.log(matrix);
}
// Завдання 2: Обчислення суми ряду S=a+a*r+a*r^2+...+a*r^(n-1)
function calculateSeries() {
    let a = parseFloat(prompt("Введіть перший елемент (a):"));
    let r = parseFloat(prompt("Введіть співвідношення (r):"));
    let n = parseInt(prompt("Введіть кількість членів ряду (n):"));
    let sum = 0;
    let term = a;
    
    for (let i = 0; i < n; i++) {
        sum += term;
        term *= r;
    }
    console.log("Сума ряду: " + sum);
}
// Завдання 3: Калькулятор з нескінченним циклом
function calculator() {
    while (true) {
        let input1 = prompt("Введіть перше число або 'exit' для виходу:");
        if (input1.toLowerCase() === "exit") break;
        let num1 = parseFloat(input1);

        let input2 = prompt("Введіть друге число або 'exit' для виходу:");
        if (input2.toLowerCase() === "exit") break;
        let num2 = parseFloat(input2);

        let operation = prompt("Введіть операцію (+, -, *, /, %) або 'exit' для виходу:");
        if (operation.toLowerCase() === "exit") break;
        
        let result;
        switch (operation) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num2 !== 0 ? num1 / num2 : "Ділення на нуль!"; break;
            case "%": result = num1 % num2; break;
            default: result = "Невідома операція!";
        }
        console.log("Результат: " + result);
    }
}
// Викликати функції за необхідності
// buildMatrix();
// calculateSeries();
// calculator();