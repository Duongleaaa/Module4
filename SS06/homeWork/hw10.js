"use strict";
function sumNum(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Giá trị không hợp lệ';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Giá trị không hợp lệ';
        }
    }
    return a + b;
}
console.log(sumNum(5, 3));
console.log(sumNum("5", "3"));
console.log(sumNum("5", "abc"));
function subNum(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Giá trị không hợp lệ';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Giá trị không hợp lệ';
        }
    }
    return a - b;
}
console.log(subNum(5, 3));
console.log(subNum("5", "3"));
console.log(subNum("5", "abc"));
function multiNum(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Giá trị không hợp lệ';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Giá trị không hợp lệ';
        }
    }
    return a * b;
}
console.log(multiNum(5, 3));
console.log(multiNum("5", "3"));
console.log(multiNum("5", "abc"));
function divNum(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return 'Giá trị không hợp lệ';
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return 'Giá trị không hợp lệ';
        }
    }
    return a / b;
}
console.log(divNum(6, 3));
console.log(divNum("6", "3"));
console.log(divNum("6", "abc"));
