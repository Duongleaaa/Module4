"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
let employ1 = new Employee("duong", "Rikkei", "0987654321");
employ1.printInfo();
