"use strict";
let parseInput = (str) => {
    if (str === 'string') {
        return 'thằng nào có tiền, thì nạp tiền donate cho thầy';
    }
    else if (str === 'null') {
        return null;
    }
    else if (str === 'undefined') {
        return undefined;
    }
    else if (str === 'boolean') {
        return true;
    }
    else if (str === 'number') {
        return 10;
    }
};
console.log(parseInput("string"));
