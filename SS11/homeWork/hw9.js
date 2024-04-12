"use strict";
class Shape {
    calculateArea(val1, val2) {
        if (typeof val1 === 'number' && typeof val2 === 'number') {
            console.log(val1 * val2);
        }
        else if (typeof val1 === 'number' && typeof val2 === 'undefined') {
            console.log(3.14 * (val1 ** 2));
        }
    }
}
class Rectangle extends Shape {
    constructor(widthCln, heightCln) {
        super();
        this.width = widthCln;
        this.height = heightCln;
    }
}
class Circle extends Shape {
    constructor(radiusCln) {
        super();
        this.radius = radiusCln;
    }
}
let rect9 = new Rectangle(10, 20);
let cir9 = new Circle(10);
rect9.calculateArea(10, 20);
cir9.calculateArea(10);
