// tạo hàm decorator.
/*
target: tham chiếu tới class mà có method được gắn decorator.
propertyKey: Tên method được gắn.
descriptor: mô tả về method.
*/
function log(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    // lưu trữ tham chiếu đến hàm gốc.
    let originMethod = descriptor.value;

    //ghi đè hàm gốc bằng function mới,  cái này sẽ thay cho hàm gốc khi được gọi.
    //arg được truyền vào chính là các đối số mà ta truyền vào hàm gốc (sum)
    descriptor.value = function (...arg:number[]){
        // clg ra tên hàm
        console.log(`tên hàm: ${propertyKey}`);
        //clg các tham số đầu vào
        console.log(`các tham số đầu vào:${arg}`);

        //gọi hàm gốc với tham số truyền vào và lưu vào biến result 
        let result = originMethod(...arg);
        console.log(`kết quả trả về của hàm gốc: ${result}`);

        return result;
    }
}


//tạo lớp
class homeWork1 {
    name:string;
    constructor(nameCln:string) {
        this.name = nameCln;
    }
    //phương thức có gắn decorator
    @log
    sum(a:number,b:number):number{
        return a + b;
    }
}

//tạo đối tượng
let hw1 = new homeWork1('duong');
//gọi phương thức.
hw1.sum(1,2);
