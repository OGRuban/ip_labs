import { Product } from './classes/Product.js';
import { Customer } from './classes/Customer.js';
import { Order } from './classes/Order.js';

// Створення продуктів
const p1 = new Product("Ноутбук", 1200, "Електроніка");
const p2 = new Product("Книга", 20, "Література");
const p3 = new Product("Навушники", 80, "Аксесуари");

// Створення користувача-покупця
const customer = new Customer("Орест");

// Створення замовлення та додавання його
const order1 = new Order([p1, p2]);
const order2 = new Order([p3]);

customer.addOrder(order1);
customer.addOrder(order2);

// Перегляд усіх замовлень
customer.viewOrders();
