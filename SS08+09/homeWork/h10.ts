interface Person10 {
    name:string;
    age:number;
}
interface Employee extends Person10 {
    employeeId:number
}

//kiểm tra 
let obj10:Employee = {
    name:'huy',
    age:10,
    employeeId:1234,
}
console.log(obj10);
