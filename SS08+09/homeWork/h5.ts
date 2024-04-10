/*
1.union: xác định nhiều kiểu dữ liệu khác nhau,
 nhưng là một trong các kiểu đã khai báo. Kí hiệu |
2. intersection: tạo ra kiểu dữ liệu mới bằng việc kết hợp các kiểu cũ &
và cần phải thỏa mãn tất cả kiểu dữ liệu đã kết hợp. 
*/
type Student  = string | number;
let std:Student = 10;// ok
std = 'huy';//ok
std = true;// kiểu này không có trong Student.

//intersection
type Person5 = {
    name: string;
    age: number;
  };
  
  type Employee5 = {
    name: string;
    wage:number;
  };
  
  type Info = Person5 & Employee5;//kết hợp
  // đều phải có các thuộc tính của cả 2.
  let emp: Info = {
    name: "John",
    age: 30,
    wage:100000,
  };