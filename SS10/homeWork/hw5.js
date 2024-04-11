"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(this.id);
        console.log(this.name);
    }
}
let obj = new Department(1, "P402", ["duong", "duong1"]);
obj.describe();
