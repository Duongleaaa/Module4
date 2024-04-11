class Vehicle {
    name: string;
    year: number;
    company: string;
  
    constructor(name: string, year: number, company: string) {
      this.name = name;
      this.year = year;
      this.company = company;
    }
  }
  
  let v1 = new Vehicle("car", 2000, "Rikkei");
  let v2 = new Vehicle("car2", 1980, "Keiri");
  
  console.log( v1.name);
  console.log( v1.year);
  console.log(v1.company);
  console.log( v2.name);
  console.log( v2.year);
  console.log( v2.company);