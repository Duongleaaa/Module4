class Student {
    id: number;
    age: number;
    email: string;
  
    constructor(id: number, age: number, email: string) {
      this.id = id;
      this.age = age;
      this.email = email;
    }
  }
  
  let students: Student[] = [];
  
  let std1 = new Student(1, 10, "std1@gmail.com");
  let std2 = new Student(2, 11, "std1@gmail.com");
  let std3 = new Student(3, 12, "std1@gmail.com");
  
  students.push(std1, std2, std3);
  

  students.forEach((std,i,arr) => {
    console.log(`--------------- ${i}`);
    console.log( std.id);
    console.log( std.age);
    console.log( std.email);
  });