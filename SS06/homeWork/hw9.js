"use strict";
let a9 = "banana";
let filterChar = a9.split("").filter((char, index, arr) => {
    return arr.indexOf(char) === index;
});
let result = filterChar.join("");
console.log(result);
