"use strict";
let a6 = '2';
let b6 = 2;
let cmp6 = a6 === b6;
console.log(cmp6); // false
cmp6 = a6 == b6;
console.log(cmp6); //true
// cảnh báo đỏ nhưng vẫn so sáng được, nếu so sánh tương đối thì sẽ bằng nhau,
// nếu so sánh tuyệt đối thì sai vì chuỗi không thể bằng số.
