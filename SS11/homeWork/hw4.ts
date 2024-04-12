class Vehicle {
    protected id:number;
    protected speed:number;
    protected name:string;
    constructor(idCln:number,speedCln:number,nameCln:string){
        this.id = idCln;
        this.name = nameCln;
        this.speed = speedCln;
    }
    //phương thức
    speedUp():void{
        this.speed+=2;
    }
    slowDown():void{
        this.speed -=2;
    }
    showSpeed():void{
        console.log(this.speed);
    }

}

class Bicycle extends Vehicle{
    private gear:number;
    constructor(idCln:number,speedCln:number,nameCln:string,gearCln:number){
        super(idCln,speedCln,nameCln);
        this.gear = gearCln;
    }

}

let obj4 = new Bicycle(1,10,'Xe đạp',1);
console.log('ban đầu:');
obj4.showSpeed();
console.log(' Sau khi điều chỉnh:');
obj4.speedUp();
obj4.showSpeed();