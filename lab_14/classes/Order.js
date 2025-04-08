export class Order {
    constructor(products = []) {
      this.products = products;
    }
  
    getTotal() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  
    viewOrder() {
      this.products.forEach((product) => {
        console.log(` - ${product.getInfo()}`);
      });
      console.log(`Загальна сума: $${this.getTotal()}`);
    }
  }
  