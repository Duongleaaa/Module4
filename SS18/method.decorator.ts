/**
 trang trí cho phương thức
 - Khác nhau giữa hàm và phương thức.
 + Hàm là những function tự định nghĩa
 + phương thức dùng trong đối tượng hoặc lớp.

 - map,filter, forEach là hàm hay phương thức? là phương thức.

 - để dùng decorator cho hàm thì phải dùng @ và đặt trước tên phương thức.
 */
//taoh function decor cho sum trong class test
// hàm decor phải có 3 đối số
function decorMethodSum(target:any,propertyKey:string,descriptor:PropertyDescriptor) {
    console.log(111,target);
    console.log(222,propertyKey);
    console.log(descriptor);
    //trong descriptor có chứa thuộc tính value
    // nhờ value này thì mới có thể decor cho method được.
    descriptor.value = function(a:number,b:number):number{
        return (a+b)*2
    }
}
class Test{
    // viết phương thức
    //tạo hàm tính tổng
    //đặt decorator ở đây
    @decorMethodSum
    sum1(a:number,b:number){
        return a+b;
    }
}
let sum1 = new Test();
console.log(sum1.sum1(1,2));//6