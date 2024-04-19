"use strict";
function inputConvert(arr, val) {
    //điều kiện cho mảng chỉ mục chỉ có hai index
    if (val.length === 2) {
        let index1 = val[0];
        let index2 = val[1];
        let current = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = current;
        return arr;
    }
    else {
        console.log('số lượng chỉ mục vượt quá yêu cầu.');
    }
}
console.log(inputConvert([1, 2, 3, 4], [0, 3]));
