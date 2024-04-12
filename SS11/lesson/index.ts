/*
1.Tính kế thừa - hiểu
- phương thức và thuộc tính của class cha có thể được inherited bởi class con
==> giúp tái sử dụng và thể hiện mối quan hệ giữa các đối tượng.
*/
class Parent{
    name:string;
    pass:string;
    constructor(name:string,pass:string){
        this.name = name;
        this.pass = pass;
    }
    sayHello():void{
        console.log('hello'+`${this.name}`);
    }
}
//class con muốn kế thừa class cha phải dùng từ khóa extend (kế thừa)
class Child extends Parent{
    protected address:string; //protected giống với private: ở ngoài không truy cập được
    // nhưng dùng protected thì sẽ giúp cha có gì con có nấy.
    constructor(name:string,pass:string,address:string){
        super(name,pass);
        //
        this.name = name;
        this.pass = pass;
        this.address = address;
    }
    sayGoodbye(){
        console.log('goodbye');
    }
}

let child1:Child = new Child('minh','1234','HN');
child1.sayHello(); // vẫn giữ phương thức của cha.

//tạo cháu
class grandChild extends Child{
    
    constructor(name:string,pass:string,address:string){
        super(name,pass,address)
        this.name = name;
        this.pass = pass;
        this.address =address;
    }
    // override phương thức của child
    sayGoodbye(): string {
        super.sayGoodbye();
        return 'xin chào biệt';
    }
}

let child = new grandChild('cháu minh',' 12345',' SG');
console.log(child.sayGoodbye());