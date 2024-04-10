"use strict";
//để kiểm tra kiểu dữ liệu dùng typeof
// kiểu dữ liệu của array : object
// làm sao phân biệt được trong khi typeof của array và object = object
/*

*/
//cách 1: dùng isArray.
let number = [5, 6, 7];
console.log(typeof number);
console.log(Array.isArray(number)); // cách kiểm tra mảng có phải mảng không.
//--------------------------------------------------------------------------------
console.log(5 | 6);
/*
biểu diễn nhị phân cơ số 2
*/
let text = 'hello';
text = 5;
console.log(text);
//ví dụ:
function sum(a, b) {
    return a + b;
    //nếu dùng union thì cần kiểm tra điều kiện
}
console.log(sum(5, 6));
//tuple: bộ -------------------------------------------
let arr1 = [5, 'hoa'];
arr1.push(1);
console.log(arr1); // union.
// ví dụ về tuple
let arr2 = [5, 'lan']; // cần đặt đúng thứ tự đã định
let test1 = '';
let car = {
    year: 2024,
    model: 'lambogini'
};
//--------------------------------------------
console.log(5 && 6); //6
let test = {
    name: 'minh thu',
    address: 'HN',
    id: 5,
};
console.log(test);
