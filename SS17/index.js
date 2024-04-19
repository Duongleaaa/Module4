"use strict";
/*
kiểu dữ liệu generic <>
*/
//viết 1 function đảo các phần tử trong mảng
/*
input: [1,2,3,4,5]
output: [5,4,3,2,1]

input[' hoa','hồng',' nhung']
output [nhung,hong,hoa]
*/
// ví dụ 1
function reverse(param) {
    return param.reverse();
}
let result = reverse([1, 2, 3, 4, 5]);
console.log(result);
let result1 = reverse(['vip', 'pro', 'max']);
console.log(result1);
//ví dụ 2
/*
viết 1 function trả về 1 mảng chứa hai phần tử
in: 5,6
out: [5,6]

in 5,"hoa"
out [5,"hoa"]

in "hoa","hong"
out ["hoa","hong"]
*/
function test(param1, param2) {
    return [param1, param2];
}
console.log(test(5, 6));
console.log(test(5, "hoa"));
console.log(test("hoa", "hong"));
