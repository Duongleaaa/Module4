"use strict";
let square = {
    sideLength: 10,
};
let circle = {
    radius: 5,
};
function calculateArea(obj) {
    if ('radius' in obj) {
        return Math.PI * obj.radius ** 2;
    }
    else {
        return obj.sideLength * obj.sideLength;
    }
}
console.log(calculateArea(square));
