class Employee {
    public name: string;
    protected company: string;
    private phone: string;
  
    constructor(name: string, company: string, phone: string) {
      this.name = name;
      this.company = company;
      this.phone = phone;
    }
  
    printInfo(): void {
      console.log( this.name);
      console.log( this.company);
      console.log(this.phone);
    }
  }

  let employ1 = new Employee("duong", "Rikkei", "0987654321");
  employ1.printInfo();