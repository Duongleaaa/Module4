"use strict";
class Vehicle {
    constructor(idCln, speedCln, nameCln) {
        this.id = idCln;
        this.name = nameCln;
        this.speed = speedCln;
    }
    //phương thức
    speedUp() {
        this.speed += 2;
    }
    slowDown() {
        this.speed -= 2;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(idCln, speedCln, nameCln, gearCln) {
        super(idCln, speedCln, nameCln);
        this.gear = gearCln;
    }
}
let obj4 = new Bicycle(1, 10, 'Xe đạp', 1);
console.log('ban đầu:');
obj4.showSpeed();
console.log(' Sau khi điều chỉnh:');
obj4.speedUp();
obj4.showSpeed();
