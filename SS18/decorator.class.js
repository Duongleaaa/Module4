"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
- Dùng để bổ sung, thay đổi thuộc tính, method cho đối tượng
- cú pháp: @
*/
//ví dụ
//funtion decorator để thêm thuộc tính.
function decoratorProperty(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.address = 'HN';
            this.sayHello = () => {
                console.log('hello');
            };
        }
    };
}
//dùng
let Student = class Student {
    constructor(name) {
        this.userName = name;
    }
};
Student = __decorate([
    decoratorProperty,
    __metadata("design:paramtypes", [String])
], Student);
//khởi tạo đối tượng
let std1 = new Student('duong');
//muốn thêm thuộc tính age cho đối tượng std1 thì?
// dùng decorator
console.log(std1);
//---------------------------------------------
function sum() {
    return function (a, b) {
        return a + b;
    };
}
console.log(sum()(1, 2)); // 3
//closure : biến được sử dụng trong hàm
function closure() {
    let a = 5;
    function test1() {
        console.log(a);
    }
    test1();
}
closure();
