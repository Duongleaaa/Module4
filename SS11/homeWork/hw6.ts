class Product{
    name:string;
    price:string;
    constructor(nameCln:string,priceCln:string){
        this.name = nameCln;
        this.price = priceCln;
    }
    getDescription (){
        console.log('Thông tin hiện tại:');
        console.log(this.name);
        console.log(this.price);
    }

}
class Electronics extends Product {
    private brand:string;
    constructor(nameCln:string,priceCln:string,brandCln:string){
        super(nameCln,priceCln);
        this.brand = brandCln;
    }
    getDescription(): void {
        super.getDescription();
        console.log(this.brand);
    }

}
let elect = new Electronics('GG','18000','Gucci');
console.log(elect);
elect.getDescription();