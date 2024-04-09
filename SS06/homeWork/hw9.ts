let a9: string = "banana";


let filterChar: string[] = a9.split("").filter( (char, index, arr)=> {
  return arr.indexOf(char) === index;
});

let result: string = filterChar.join("");

console.log(result);