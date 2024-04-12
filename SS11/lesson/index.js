"use strict";
/*
1.Tính kế thừa - hiểu
- phương thức và thuộc tính của class cha có thể được inherited bởi class con
==> giúp tái sử dụng và thể hiện mối quan hệ giữa các đối tượng.
*/
class Parent {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }
    sayHello() {
        console.log('hello' + `${this.name}`);
    }
}
//class con muốn kế thừa class cha phải dùng từ khóa extend (kế thừa)
class Child extends Parent {
    // nhưng dùng protected thì sẽ giúp cha có gì con có nấy.
    constructor(name, pass, address) {
        super(name, pass);
        //
        this.name = name;
        this.pass = pass;
        this.address = address;
    }
    sayGoodbye() {
        console.log('goodbye');
    }
}
let child1 = new Child('minh', '1234', 'HN');
child1.sayHello(); // vẫn giữ phương thức của cha.
//tạo cháu
class grandChild extends Child {
    constructor(name, pass, address) {
        super(name, pass, address);
        this.name = name;
        this.pass = pass;
        this.address = address;
    }
    // override phương thức của child
    sayGoodbye() {
        super.sayGoodbye();
        return 'xin chào biệt';
    }
}
let child = new grandChild('cháu minh', ' 12345', ' SG');
console.log(child.sayGoodbye());
