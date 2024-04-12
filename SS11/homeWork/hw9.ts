class Shape{
    calculateArea(width:number,height:number){
        /*
        Overloading là một tính năng cho phép bạn định nghĩa nhiều phương thức cùng tên nhưng có các danh sách tham số khác nhau.
         Khi gọi phương thức, TypeScript sẽ dựa vào số lượng và kiểu dữ liệu của các đối số được truyền để xác định phương thức tương ứng.
        */
        console.log(width*height);
    }
    calculateArena(radius:number){
        console.log(3.14*(radius**2));
    }
}
class Rectangle extends Shape {
    private width:number;
    private height:number;
    constructor(widthCln:number,heightCln:number){
        super();
        this.width = widthCln;
        this.height = heightCln;
    }
}
class Circle  extends Shape {
    private radius:number;
    constructor(radiusCln:number){
        super();
        this.radius = radiusCln;
    }
}

let rect9 = new Rectangle(10,20);
let cir9 = new Circle(10);
rect9.calculateArea(10,20);
cir9.calculateArena(10);
