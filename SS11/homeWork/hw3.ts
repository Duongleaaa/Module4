class Person {
    name:string;
    constructor(nameCln:string){
        this.name = nameCln;
    }
    printInfo(){
        console.log(' Tên:'+ this.name);
    }
}

//kế thừa person thêm id
class Student extends Person{
    id:number;
    constructor(idCln:number,nameCln:string){
        super(nameCln);
        this.id = idCln;
    }
    printInfo(): void {
        super.printInfo();
        console.log('ID:' +this.id);
    }
}

//khởi tạo từ lớp std
let std3 = new Student(123,'duong');
std3.printInfo();