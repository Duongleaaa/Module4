//để kiểm tra kiểu dữ liệu dùng typeof
// kiểu dữ liệu của array : object
// làm sao phân biệt được trong khi typeof của array và object = object
/*

*/
//cách 1: dùng isArray.
let number: number[] = [5,6,7];
console.log(typeof number);
console.log(Array.isArray(number));// cách kiểm tra mảng có phải mảng không.

//--------------------------------------------------------------------------------
//union type
console.log(5|6);
/*
biểu diễn nhị phân cơ số 2
*/
let text:string|number = 'hello';
text = 5;
console.log(text);
//ví dụ:
function sum(a:number,b:number):number{
    return a+b;
    //nếu dùng union thì cần kiểm tra điều kiện
}
console.log(sum(5,6));

//tuple: bộ -------------------------------------------
let arr1:(number|string)[] = [5,'hoa'];
arr1.push(1);
console.log(arr1); // union.
// ví dụ về tuple
let arr2:[number,string] = [5,'lan']; // cần đặt đúng thứ tự đã định
//nếu thêm readonly thì không thêm đươch phần tử.

//type Alias--------------------------------------
type test = string|number|null|undefined; // gán bí danh cho union.
let test1: test = '';

type Car = {
    year: number,
    model:string,
}

let car:Car = {
    year:2024,
    model:'lambogini'
}
 //--------------------------------------------
console.log(5&&6); //6
// tính từ trái qua phải gặp falsy thì lấy, ko có thì lấy cuối.
// 0,'',"",null, undefined,NaN,false.
// nếu trong phép toán có cả && và || thì ưu tiên &&. ví dụ

//intersection : giao nhau------------------------------------------------
type A = {
 name:string,
}
type B={
name:string,
address:string,
id:number,
}
/*
nếu có chung thuộc tính thì bắt buộc hai thuộc tính cùng kiểu dữ liệu.
*/
type C = A&B;
let test:C = {
    name: 'minh thu',
    address:'HN',
    id:5,
}

console.log(test);


