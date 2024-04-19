"use strict";
// tìm hiểu về use strict, trạng thái nghiêm ngặt trong js.
/*type và interface khác nhau như nào-------------------------------------
    type:
    - có thể dùng union và intersection
    - Không kế thừa được
    - không thể implements bởi class
    - thường khai báo kiểu dữ liệu
===============================================================
    
    interface:
    - không dùng được union và intersection
    - có thể kế thừa interface khác.
    - có thể được implements(triển khai) bởi class
    - có thể gộp vào nhau nếu khai báo hai interface cùng tên
    - thường khai báo các thuộc tính và phương thức
*/
/*
extend trong generic-------------------------------------------------------------
*/
//function merge (hợp nhất)
//cách đầu dùng spread. (...) nhưng bản chất là tạo obj mới chứ không phải gộp.
function merge(pr1, pr2) {
    //cách 2
    return Object.assign(pr1, pr2);
}
let m1 = merge({ name: 'hoa' }, { age: 15 });
console.log(m1);
// ?? nullish : nếu là undefined hoặc null bỏ qua, ko thì lấy chính số đó--------------
let test1 = null !== null && null !== void 0 ? null : 10;
// toán tử & : intersection
// ! non null (tìm hiểu)
// toán tử ? optional chain--------------------------------------------------------
//ví du
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(3));
function test3(param) {
    return Object.assign(Object.assign({}, param), { fullName: param.firstName + ' ' + param.lastName });
}
let result3 = test3({ firstName: 'lee', lastName: 'minho' });
console.log(result3);
//chuyển về dạng generic
function test33(param) {
    return Object.assign(Object.assign({}, param), { fullName: param.firstName + ' ' + param.lastName });
}
let result33 = test33({ firstName: 'lee', lastName: 'minho' });
console.log(result33);
// đệ quy != call back
/*
-đệ quy là hàm gọi lại chính nó:
nên tránh việc hàm chạy không có điểm dừng
==> chạy vô tận
*/
//ví dụ dùng đệ quy tính tổng từ 1 đến 10
function deQuy(a) {
    if (a == 1) {
        return 1;
    }
    return a + deQuy(--a);
}
console.log(deQuy(5));
