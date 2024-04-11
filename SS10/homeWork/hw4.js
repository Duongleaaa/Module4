"use strict";
class Vehicle4 {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(this.id);
        console.log(this.name);
        console.log(this.year);
        console.log(this.company);
    }
}
let obj4 = new Vehicle4("car", 1999, "duongCPN", 1);
obj4.printInfo();
