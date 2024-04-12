"use strict";
class Shape1 {
    calculateArea(width, height) {
        /*
        Overloading là một tính năng cho phép bạn định nghĩa nhiều phương thức cùng tên nhưng có các danh sách tham số khác nhau.
         Khi gọi phương thức, TypeScript sẽ dựa vào số lượng và kiểu dữ liệu của các đối số được truyền để xác định phương thức tương ứng.
        */
        console.log(width * height);
    }
    calculateArea(radius) {
        console.log(3.14 * (radius ** 2));
    }
}
class Rectangle1 extends Shape1 {
    constructor(widthCln, heightCln) {
        super();
        this.width = widthCln;
        this.height = heightCln;
    }
    calculateArea() {
        super.calculateArea(this.width, this.height);
    }
}
class Circle1 extends Shape1 {
    constructor(radiusCln) {
        super();
        this.radius = radiusCln;
    }
    calculateArea() {
        super.calculateArea(this.radius);
    }
}
let rect10 = new Rectangle1(10, 20);
let cir10 = new Circle1(10);
rect10.calculateArea(10, 20);
cir10.calculateArea(10);
