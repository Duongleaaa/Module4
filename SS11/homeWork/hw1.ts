//https://drive.google.com/drive/folders/1nq6cvdYht68XmqlNuK7R03-DwfNEFzJg
class Employee {
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

}
//lớp con
class childEmployee extends Employee {
    teamSize:string;
    constructor(nameCln:string,companyCln:string,phoneCln:string,teamSize:string){
        super(nameCln,phoneCln,companyCln);
        this.teamSize = teamSize;
    }
}

// muốn in ra key trong một obj dùng Object.keys(tên obj)
let obj = new childEmployee('Lê Dương','RA','0987654321','XXL');
obj.printInfo();
