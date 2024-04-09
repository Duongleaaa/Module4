/*
1.array--------------------------------------
*/
let students : string[] = ['hoa','huy'];
let students2 : Array<string> = ['huy','hoang'];
//cách 1.
//ngầm hiểu rằng mảng này chỉ chứa các phần tử là string.
//cách 2.
let numbber :Array <number> = [5,6,7,8];
// hiểu mảng chỉ chứa số.

/*
 2. object-------------------------
 */
let cats: {name:string,height:number, color:string} = {
    name:'tom',
    height:50,
    color:'black'
}

/*
3.enum----------------------------------
*/
enum Role {
    ADMIN, // mặc định là 0 ,1 và có thể gán được ADMIN = 5,
    USER,
}
let person:{name:string,age:number,role:Role.ADMIN}={
    name:'minh',
    age:20,
    role:0,
}

//4.void------------------------
//hàm không cần trả về.
function sayHello():void{
    console.log('hello');
    // return nếu return thì sẽ undefined.
}
sayHello();
//5.unknowns----------------------------
//sự khác nhau giữa unknowns và any
/*
- cũng giống như any nhưng unknowns chặt hơn,
khi sử dụng cần kiểm tra.
vì vậy nên hạn chế dùng any.
*/
function typeAny(userName:unknown):void{
    if(typeof userName == 'string'){
        console.log('type unknow',userName.toUpperCase());
    }else{
        console.log(' Không phải là string.');
    }
}
typeAny(5);
//nếu truyền số 5 vào thì chạy mới báo bug, chứ ko báo dưới terminal.
// nhưng nếu dùng unknowns thì sẽ báo ngay trên tẻminal.

// 6.never-----------------------------
/*
Thường dùng trong vòng lặp vô tận.
giúp kiểm soát không bị treo máy.
*/
function typeNever():never{
    //bắt buộc bên trong cần vòng lặp voo hạn nếu không báo lỗi
    while(true){
        console.log('vô tận');
    }
};

// tìm hiểu union, intersection, guards, literals, tupie, alasses.

