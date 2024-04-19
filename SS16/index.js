"use strict";
/*
Viết hàm nhận vào tham số, nêú là in ra số, nếu là string in ra string.
*/
function inputNoS(val) {
    if (typeof val === 'string') {
        return val;
    }
    else if (typeof val === 'number') {
        return val;
    }
}
console.log(inputNoS('duong'));
/*
viết funtion nếu nhận vào 1 số thì trả về [a], nếu nhận vào 1 mảng thì trả về phần tử cuối cùng
của mảng [arr[arr.lenght-1]]
*/
function inputArr(val) {
    if (typeof val === 'number') {
        let arr1 = [];
        arr1.push(val);
        return arr1;
    }
    else if (Array.isArray(val)) {
        let arr1 = [];
        arr1.push(val[val.length - 1]);
        return arr1;
    }
    else {
        console.log('error!');
    }
}
let val = 1;
console.log(inputArr(val));
let val2 = [1, 2, 3];
console.log(inputArr(val2));
let generic3 = (param) => {
    return param;
};
console.log(generic3(1));
console.log(generic3('string'));
console.log(generic3([1, 2, 3]));
// theo đề bài đã làm, dùng generic để xử lí
function inputArrGeneric(val) {
    if (val === 'number') {
        return [val];
    }
    else if (Array.isArray(val)) {
        return [val[val.length - 1]];
    }
    else {
        console.log('error!');
    }
}
let val1 = 4;
console.log(inputArr(val1));
let val12 = [1, 2, 3, 4, 5, 6];
console.log(inputArr(val12));
console.log(inputArr(['duong']));
