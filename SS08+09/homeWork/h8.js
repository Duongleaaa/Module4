"use strict";
function mergeObj(obj1, obj2) {
    let mergedObj = Object.assign(Object.assign({}, obj1), obj2);
    return mergedObj;
}
let obj1 = {
    name: 'huy',
    job: 'sale',
};
let obj2 = {
    name: 'Bob',
    address: 'HN'
};
let obj3 = mergeObj(obj1, obj2);
console.log(obj3);
