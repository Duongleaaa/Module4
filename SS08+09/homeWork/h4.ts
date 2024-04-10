function superUp (element:number|number[]){
    if(typeof element === "number"){
        return element * element;
    } else if(Array.isArray(element)){
        let result = element.map((e)=>{
            return e**2;
        })
        return result;
    }
    else{
        console.log('Không hợp lệ!');
    }
    
    
}
console.log(superUp([1,2,3,4,5]));