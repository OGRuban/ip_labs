// --- Класи для онлайн-магазину ---

// Загальний прототип з методом getInfo
const Entity = {
    getInfo() {
        return JSON.stringify(this, null, 2);
    }
};

// Клас Product
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}
Product.prototype = Object.create(Entity);

// Клас Order
function Order() {
    this.products = [];
    this.total = 0;
}
Order.prototype = Object.create(Entity);
Order.prototype.addProduct = function(product) {
    this.products.push(product);
    this.total += product.price;
};

// Клас Customer
function Customer(name) {
    this.name = name;
    this.orders = [];
}
Customer.prototype = Object.create(Entity);
Customer.prototype.viewOrders = function() {
    this.orders.forEach((order, i) => {
        console.log(`Замовлення #${i + 1} (сума: ${order.total}):`);
        order.products.forEach(p => console.log(`- ${p.name}, ${p.price} грн`));
    });
};
Customer.prototype.addOrder = function(order) {
    this.orders.push(order);
};

// --- Тестування ---

const product1 = new Product("Ноутбук", 25000, "Електроніка");
const product2 = new Product("Книга", 500, "Освіта");

const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

const customer1 = new Customer("Іван");
customer1.addOrder(order1);

// Демонстрація роботи
console.log("Інформація про продукт:");
console.log(product1.getInfo());

console.log("Інформація про замовлення:");
console.log(order1.getInfo());

console.log("Замовлення клієнта:");
customer1.viewOrders();