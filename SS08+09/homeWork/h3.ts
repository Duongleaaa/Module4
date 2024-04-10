type Square = {
    sideLength:number
}
type Circle = {
    radius:number
}
type unknownShape= Square | Circle;

let square: Square = {
    sideLength: 10,
  };
  
  let circle: Circle = {
    radius: 5,
  };
  
  function calculateArea(obj: unknownShape): number {
    if ('radius' in obj) {
      return Math.PI * obj.radius ** 2;
    } else {
      return (obj as any).sideLength * obj.sideLength;
    }
  }
  
  console.log(calculateArea(square));
