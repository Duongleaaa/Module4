"use strict";
function checkType(val) {
    if (typeof val === "number") {
        return val ** 2;
    }
    else if (typeof val === "string") {
        return val.length;
    }
    else if (Array.isArray(val)) {
        return val.length;
    }
}
console.log(checkType(2));
console.log(checkType('huy'));
console.log(checkType([1, 2, 3, 4]));
