/*
Phân biệt access modifier protected và private
*Giống: Đều không thể truy cập thuộc tính ở bên ngoài được.
1. protected:
 - Nếu lớp truy cập là lớp con của lớp chứa modifier protected thì sẽ truy cập được vào thuộc tính.
2. private:
 - Nếu thuộc tính, method bị truy cập là private thì sẽ không truy cập ở bên ngoài được,
 kể cả đó là lớp con. Cần dùng get hoặc set để thao tác với phương thức hay thuộc tính đó.
*/

class Vip {
    protected vip1:string;
    private vip2:string;
    constructor(vip1Cln:string,vip2Cln:string){
        this.vip1 = vip1Cln;
        this.vip2 = vip2Cln;
    }
    showVip(){
        console.log(this.vip1);
    }
}
class VipChild extends Vip{
    nameVip:string;
    constructor(vip1Cln:string,vip2Cln:string,nameVip:string){
        super(vip1Cln,vip2Cln);
        this.nameVip = nameVip;
    }
    //truy cập vào protected
    showProtected(obj:Vip){
        console.log(this.vip1);//ok
        console.log(this.vip2);//Property 'vip2' is private and only accessible within class 'Vip'.
    }

}
