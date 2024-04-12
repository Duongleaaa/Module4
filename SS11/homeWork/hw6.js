"use strict";
class Product {
    constructor(nameCln, priceCln) {
        this.name = nameCln;
        this.price = priceCln;
    }
    getDescription() {
        console.log('Thông tin hiện tại:');
        console.log(this.name);
        console.log(this.price);
    }
}
class Electronics extends Product {
    constructor(nameCln, priceCln, brandCln) {
        super(nameCln, priceCln);
        this.brand = brandCln;
    }
    getDescription() {
        super.getDescription();
        console.log(this.brand);
    }
}
let elect = new Electronics('GG', '18000', 'Gucci');
console.log(elect);
elect.getDescription();
