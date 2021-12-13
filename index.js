// const db = require('./db');
// let products = db.products;

let counter = 0;

class User {
    constructor(name){
        this.name = name;
        this.order = [];
        this.cost = 0;
    }

    addOrder(prod){
        if(!prod){
            return 'Add a product';
        }
        let search = products.find(product => product.name === prod);
        if(!search){
            return 'Product not found';
        } 
        this.cost = this.cost + search.price;
        this.order.push(search);
        counter = counter + 1;
        console.log(`The product has been added successfully.`);
    };

    showOrderData(){
        console.log('Order Data: ');
        this.order.forEach(product => console.log(`${product.name} - ${product.price}`));
        console.log(`Total: ${this.cost}`);
    }

    pay(amount){
        if(amount < this.cost){
            console.log('The amount is not enough');
        }
        if(amount > this.cost){
                let rest = this.cost - amount;
                this.cost = 0;
                this.order = [];
                console.log(`Payment done successfully! Your change is $${rest}`);
            }
        if(amount = this.cost){
            this.cost = 0;
            this.order = [];
            console.log('Payment done succesfully!');
        }
        }
}

let showMenu = () => {
    return products.forEach(product => console.log(`${product.name} - ${product.price}`));
};

let orderCounter = () => {
    console.log(`Order's counter: ${counter}`)
}
