let num1:number = 1;
let num2:number = 2;
let num3:number = 3;
num3 = num1 +num2;
console.log(num3);
num3 = num1 -num2;
console.log(num3);
num3 = num1 *num2;
console.log(num3);
num3 = num1 /num2;
console.log(num3);
//thay num1 = string, num2 =boolean
num1 = 'duong';
num2 = true;
// không thể thay đỏi kiểu dữ liệu khác khi biến được khai báo.
num3 = num1 +num2;//duongTrue
console.log(num3);
num3 = num1 -num2;//NaN
console.log(num3);
num3 = num1 *num2;//NaN
console.log(num3);
num3 = num1 /num2;//NaN
console.log(num3);
