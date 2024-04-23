/*
- Dùng để bổ sung, thay đổi thuộc tính, method cho đối tượng
- cú pháp: @
*/
//ví dụ
//funtion decorator để thêm thuộc tính.
function decoratorProperty<T extends { new (...args: any[]): {} }> (constructor: T) {
    return class extends constructor {
      address= 'HN';
      sayHello = ()=> {
        console.log('hello');
      }
    };
  }

  //dùng
@decoratorProperty
class Student {
    userName:string;
    constructor(name:string) {
        this.userName = name;
    }
}
//khởi tạo đối tượng
let std1 = new Student ('duong');
//muốn thêm thuộc tính age cho đối tượng std1 thì?
// dùng decorator
console.log(std1);
//---------------------------------------------
function sum (){
  return function(a:number,b:number):number{
    return a+b;
  }
}
console.log(sum()(1,2));// 3
//closure : biến được sử dụng trong hàm
function closure(){
  let a = 5;
  function test1(){
  console.log(a);
  }
  test1();
}
closure();


