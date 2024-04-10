function checkString (str:string|string[]) {
    if(typeof str === 'string'){
        console.log(str);
    }
    else if(Array.isArray(str)){
        str.forEach(element => {
            console.log(element);
        });
    }
}
checkString(['huy','lkjhg']);