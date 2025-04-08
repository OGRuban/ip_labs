import { User } from './User.js';
import { Order } from './Order.js';

export class Customer extends User {
  constructor(name) {
    super(name);
    this.orders = [];
  }

  addOrder(order) {
    if (order instanceof Order) {
      this.orders.push(order);
      console.log(`Замовлення додано для ${this.name}`);
    } else {
      console.log('Невірний тип замовлення.');
    }
  }

  viewOrders() {
    console.log(`Замовлення користувача ${this.name}:`);
    this.orders.forEach((order, index) => {
      console.log(`Замовлення #${index + 1}`);
      order.viewOrder();
    });
  }
}
