class Vehicle4 {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: number;
  
    constructor(name: string, year: number, company: string, id: number) {
      this.name = name;
      this.year = year;
      this.company = company;
      this.id = id;
    }
  
    printInfo(): void {
      console.log( this.id);
      console.log( this.name);
      console.log( this.year);
      console.log( this.company);
    }
  }
  let obj4 = new Vehicle4("car", 1999, "duongCPN", 1);
  obj4.printInfo();