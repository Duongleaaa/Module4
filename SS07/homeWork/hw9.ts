function checkArr (arr:Array<number>){
    arr.forEach((e, i, arr) => {
        if (e <= 1) {
          return false;
        }
      });
      for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
          if (arr[i] % j === 0) {
            return false;
          }
        }
      }
      return true; 
}
let arr:Array<number> = [2,3,5];
console.log(checkArr(arr));