"use strict";
function checkString(str) {
    if (typeof str === 'string') {
        console.log(str);
    }
    else if (Array.isArray(str)) {
        str.forEach(element => {
            console.log(element);
        });
    }
}
checkString(['huy', 'lkjhg']);
