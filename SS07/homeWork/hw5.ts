//phân biệt
function diffType1 (val:any):void{
    console.log(val.toUpperCase());
}
diffType1(5);
//nếu dùng any thì chỉ khi chạy mới báo bug.
function diffType2 (val:unknown):void{
    console.log(val.toUpperCase());
}
diffType2(5);
//dùng unknowns truyền số báo bug ngay.

/*
1.unknown: unknown đại diện cho một giá trị không xác định loại dữ liệu của nó
  any: any đại diện cho một giá trị có thể có bất kỳ kiểu dữ liệu nào. 

  unknown yêu cầu kiểm tra kiểu hoặc ép kiểu trước khi sử dụng
   any cho phép làm việc với giá trị mà không cần quan tâm đến kiểu dữ liệu.
   
   unknown giúp đảm bảo tính an toàn kiểu dữ liệu trong quá trình phát triển
    any giảm tính an toàn kiểu dữ liệu.
*/