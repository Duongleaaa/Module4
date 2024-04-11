class Person {
	public name:string; // phạm vi truy cập mặc định
	private age:number; // bên ngoài sẽ ko truy cập được.
    // trong trường hợp phạm vi là private, để truy cập được phải thông qua phương thức
    // lấy ra: get | thêm vào: set.
	firstName:string;
    private address:string;
	constructor(name:string,age:number,firstName:string,address:string){
		this.name = name;
		this.age = age;
		this.firstName = firstName;
        this.address = address;
	}
	//nơi khai báo những phương thức
    showInfo():void{
        console.log(`hello`,this.firstName);
    }

    showName():void{
        console.log('name',this.name);
    }

    getAge():number{
        return this.age
    }
    setAge(age:number){
        this.age = age;
    }
    // getter
    get addressF(){
        return this.address;
    }
    //setter
    set addressF(address:string){
         this.address = address;
    }
}

let std1 = new Person ('minh',10,'thu','HN');
// std1 được gọi là 1 instance của class Person. (được tạo bằng new)
//gọi phương thức
std1.showInfo();

/*
1.Tính đóng gói : encapsulation
access modifier - phạm vi truy cập :
    a. public 
    b. private
    c. proceted.
        - khi class con kế thừa class cha thì class con sẽ có các thuộc tính
        và phương thức của class cha
        - nếu phạm vi truy cập proceted thì class con ko truy cập được thuộc tính 
        của class cha.
*/
std1.name = 'huy';
std1.showName();
//khi không đưa phạm vi truy cập vào thì mặc định phạm vi truy cập là public.

//thêm vào
std1.setAge(22);

//lấy ra
console.log(std1.getAge());

//muốn truy cập khi private không cần gọi hàm (getter)
 console.log(std1.addressF);

 // thay đổi địa chỉ private ko gọi hàm (setter)
 std1.addressF = 'SG';
 console.log(std1.addressF);