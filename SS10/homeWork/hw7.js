"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radius1() {
        return this.radius;
    }
    set radius1(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    get perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
let obj7 = new Circle(5);
console.log(obj7.radius1);
console.log(obj7.perimeter);
console.log(obj7.area);
obj7.radius1 = 10;
console.log("-----------------------------------------");
console.log(obj7.radius1);
console.log(obj7.perimeter);
console.log(obj7.area);
