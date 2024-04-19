/*
Viết hàm nhận vào tham số, nêú là in ra số, nếu là string in ra string.
*/

function inputNoS(val:string|number){
    if(typeof val === 'string'){
        return val;
    }
    else if(typeof val === 'number'){
        return val;
    }
}

console.log(inputNoS('duong'));
/*
viết funtion nếu nhận vào 1 số thì trả về [a], nếu nhận vào 1 mảng thì trả về phần tử cuối cùng
của mảng [arr[arr.lenght-1]]
*/
function inputArr (val:number|(number[]|string[])){
    if(typeof val === 'number'){
        let arr1 = [];
        arr1.push(val);
        return arr1;
    }
    else if(Array.isArray(val)){
        let arr1 = [];
        arr1.push(val[val.length -1]);
        return arr1;
    }
    else{
        console.log('error!');
    }
}

let val:number = 1;
console.log(inputArr(val));
let val2:number[] = [1,2,3];
console.log(inputArr(val2));
//--------------------------------------------------
//generic
type generic = Array<number>; 
type generic2 = Array<string>; 
let generic3 =<T> (param:T)=>{
    return param;
};
console.log(generic3(1));
console.log(generic3('string'));
console.log(generic3([1,2,3]));
// theo đề bài đã làm, dùng generic để xử lí
function inputArrGeneric <U> (val:U|U[]){
    if( val === 'number'){

        return [val];
    }
    else if(Array.isArray(val)){
        return [val[val.length -1]];
    }
    else{
        console.log('error!');
    }
}

let val1:number = 4;
console.log(inputArr(val1));
let val12:number[] = [1,2,3,4,5,6];
console.log(inputArr(val12));
console.log(inputArr(['duong']));
//Tìm hiểu-------------------------------------
/*
link tham khảo: https://www.youtube.com/watch?v=hFSVQ4lxTgE
Mục đích: Generic custom 1 kiểu dữ liệu không các định trước
Tái sử dụng  
*/
//Có hai cách dùng
//1. Kiểu dữ liệu biết trước, có sẵn built-in
let exam: Array<string> = ['duong','vip'];

interface Example {
    name:string,
    age:number
}

let example: Array<Example> = [] // cách viết 1
let example2: Example[] = [];// cách viết 2
//2. Custom kiểu dữ liệu không xác định
/* 3. generic function là hàm có thể dùng các
 kiểu khác nhau = khai báo thêm type parameters (tham số kiểu)
*/