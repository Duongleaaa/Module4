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
/**
 trang trí cho phương thức
 - Khác nhau giữa hàm và phương thức.
 + Hàm là những function tự định nghĩa
 + phương thức dùng trong đối tượng hoặc lớp.

 - map,filter, forEach là hàm hay phương thức? là phương thức.

 - để dùng decorator cho hàm thì phải dùng @ và đặt trước tên phương thức.
 */
//taoh function decor cho sum trong class test
// hàm decor phải có 3 đối số
function decorMethodSum(target, propertyKey, descriptor) {
    console.log(111, target);
    console.log(222, propertyKey);
    console.log(descriptor);
    //trong descriptor có chứa thuộc tính value
    // nhờ value này thì mới có thể decor cho method được.
    descriptor.value = function (a, b) {
        return (a + b) * 2;
    };
}
class Test {
    // viết phương thức
    //tạo hàm tính tổng
    //đặt decorator ở đây
    sum1(a, b) {
        return a + b;
    }
}
__decorate([
    decorMethodSum,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "sum1", null);
let sum1 = new Test();
console.log(sum1.sum1(1, 2)); //6
