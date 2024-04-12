class Employee2 {
    public name:string;
    protected company:string;
    private phone:string;
    constructor(nameCln:string,companyCln:string,phoneCln:string){
        this.name = nameCln;
        this.company = companyCln;
        this.phone = phoneCln;
    }
    printInfo(){
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
    get phoneF():string{
        return this.phone;
    }

}
//lớp con
class childEmployee2 extends Employee2 {
    teamSize:string;
    constructor(nameCln:string,companyCln:string,phoneCln:string,teamSize:string){
        super(nameCln,phoneCln,companyCln);
        this.teamSize = teamSize;
    }
    printInfo(){
        super.printInfo();
        console.log(this.teamSize);
    }
}

// muốn in ra key trong một obj dùng Object.keys(tên obj)
let obj2 = new childEmployee2('Lê Dương','RA','0987654321','XXL');
obj2.printInfo();
