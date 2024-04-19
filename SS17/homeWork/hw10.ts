type calculate = number | string;

function sum(val1: calculate, val2: calculate): calculate {
    if (typeof val1 === 'string') {
        if (isNaN(Number(val1))) {
            return "Tham số không hợp lệ";
        }
        val1 = Number(val1);
    }
    if (typeof val2 === 'string') {
        if (isNaN(Number(val2))) {
            return "Tham số không hợp lệ";
        }
        val2 = Number(val2);
    }
    return val1 + val2;
}

function subNum(val1: calculate, val2: calculate): calculate {
    if (typeof val1 === 'string') {
        if (isNaN(Number(val1))) {
            return "Tham số không hợp lệ";
        }
        val1 = Number(val1);
    }
    if (typeof val2 === 'string') {
        if (isNaN(Number(val2))) {
            return "Tham số không hợp lệ";
        }
        val2 = Number(val2);
    }
    return val1 - val2;
}

function mul(val1: calculate, val2: calculate): calculate {
    if (typeof val1 === 'string') {
        if (isNaN(Number(val1))) {
            return "Tham số không hợp lệ";
        }
        val1 = Number(val1);
    }
    if (typeof val2 === 'string') {
        if (isNaN(Number(val2))) {
            return "Tham số không hợp lệ";
        }
        val2 = Number(val2);
    }
    return val1 * val2;
}

function div(val1: calculate, val2: calculate): calculate {
    if (typeof val1 === 'string') {
        if (isNaN(Number(val1))) {
            return "Tham số không hợp lệ";
        }
        val1 = Number(val1);
    }
    if (typeof val2 === 'string') {
        if (isNaN(Number(val2))) {
            return "Tham số không hợp lệ";
        }
        val2 = Number(val2);
    }
    return val1 / val2;
}



console.log( div(1, 2)); 
console.log( sum("1", 2));
console.log( subNum("1", 2)); 
console.log( mul(1, 2)); 
