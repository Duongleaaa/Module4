class Shape10 {
    calculateArea(width: number, height: number): void;
    calculateArea(radius: number): void;
    
    calculateArea(val1: number, val2?: number): void {
        if (typeof val1 === 'number' && typeof val2 === 'number') {
            console.log(val1 * val2); 
        } else if (typeof val1 === 'number' && typeof val2 === 'undefined') {
            console.log(3.14 * (val1 ** 2));
        }
    }
    
    calculatePerimeter(width: number, height: number): void;
    calculatePerimeter(radius: number): void;
    calculatePerimeter(val1:number, val2?:number):void{
        if (typeof val1 === 'number' && typeof val2 === 'number') {
            console.log((val1 + val2)*2); 
        } else if (typeof val1 === 'number' && typeof val2 === 'undefined') {
            console.log(3.14 * val1 * 2);
        }
    }
}

class Rectangle10 extends Shape10 {
    private width:number;
    private height:number;
    constructor(widthCln:number,heightCln:number){
        super();
        this.width = widthCln;
        this.height = heightCln;
    }
}
class Circle10  extends Shape10 {
    private radius:number;
    constructor(radiusCln:number){
        super();
        this.radius = radiusCln;
    }
}

let rect10 = new Rectangle10(10,20);
let cir10 = new Circle10(10);
rect10.calculatePerimeter(10,20);
cir10.calculatePerimeter(10);
