class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];
  
    constructor(id: number, name: string, employees: string[]) {
      this.id = id;
      this.name = name;
      this.employees = employees;
    }
  
    describe(): void {
      console.log( this.id);
      console.log( this.name);
    }
  }
  
  let obj = new Department(1, "P402", ["duong", "duong1"]);
  
  obj.describe();