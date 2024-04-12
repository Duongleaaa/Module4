"use strict";
class Person {
    constructor(nameCln) {
        this.name = nameCln;
    }
    printInfo() {
        console.log(' Tên:' + this.name);
    }
}
//kế thừa person thêm id
class Student extends Person {
    constructor(idCln, nameCln) {
        super(nameCln);
        this.id = idCln;
    }
    printInfo() {
        super.printInfo();
        console.log('ID:' + this.id);
    }
}
//khởi tạo từ lớp std
let std3 = new Student(123, 'duong');
std3.printInfo();
