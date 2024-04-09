"use strict";
/*
1.array--------------------------------------
*/
let students = ['hoa', 'huy'];
let students2 = ['huy', 'hoang'];
//cách 1.
//ngầm hiểu rằng mảng này chỉ chứa các phần tử là string.
//cách 2.
let numbber = [5, 6, 7, 8];
// hiểu mảng chỉ chứa số.
/*
 2. object-------------------------
 */
let cats = {
    name: 'tom',
    height: 50,
    color: 'black'
};
/*
3.enum----------------------------------
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: 'minh',
    age: 20,
    role: 0,
};
//4.void------------------------
//hàm không cần trả về.
function sayHello() {
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
function typeAny(userName) {
    if (typeof userName == 'string') {
        console.log('type unknow', userName.toUpperCase());
    }
    else {
        console.log(' Không phải là string.');
    }
}
typeAny(5);
//nếu truyền số 5 vào thì chạy mới báo bug, chứ ko báo dưới terminal.
// nhưng nếu dùng unknowns thì sẽ báo ngay trên tẻminal.
// 6.never-----------------------------
/*
Thường dùng trong vòng lặp vô tận.
*/
function typeNever() {
    //bắt buộc bên trong cần vòng lặp voo hạn nếu không báo lỗi
    while (true) {
        console.log('vô tận');
    }
}
