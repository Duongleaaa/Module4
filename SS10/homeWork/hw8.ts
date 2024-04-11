class Rectangle {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    getWidth(): number {
      return this.width;
    }
  
    setWidth(width: number): void {
      this.width = width;
    }
  
    getHeight(): number {
      return this.height;
    }
  
    setHeight(height: number): void {
      this.height = height;
    }
  
    get calArea(): number {
      return this.width * this.height;
    }
  
    get calPeri(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  let obj8 = new Rectangle(1, 3);
  
  console.log(obj8.getHeight());
  console.log(obj8.getWidth());
  console.log(obj8.calPeri);
  console.log(obj8.calArea);
  
  obj8.setWidth(4);
  obj8.setHeight(8);
  console.log("------------------------------------------");
  console.log(obj8.getHeight());
  console.log(obj8.getWidth());
  console.log(obj8.calPeri);
  console.log(obj8.calArea);