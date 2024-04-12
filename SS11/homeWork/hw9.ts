class Shape {
    calculateArea(width: number, height: number): void;
    calculateArea(radius: number): void;
    
    calculateArea(val1: number, val2?: number): void {
        if (typeof val1 === 'number' && typeof val2 === 'number') {
            console.log(val1 * val2); 
        } else if (typeof val1 === 'number' && typeof val2 === 'undefined') {
            console.log(3.14 * (val1 ** 2));
        }
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
cir9.calculateArea(10);
