"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    get calArea() {
        return this.width * this.height;
    }
    get calPeri() {
        return 2 * (this.width + this.height);
    }
}
let obj8 = new Rectangle(1, 3);
console.log(obj8.getHeight());
console.log(obj8.getWidth());
console.log(obj8.calPeri);
console.log(obj8.calArea);
obj8.setWidth(4);
obj8.setHeight(8);
console.log("------------------------------------------");
console.log(obj8.getHeight());
console.log(obj8.getWidth());
console.log(obj8.calPeri);
console.log(obj8.calArea);
