function inputConvert<newArr>(arr:newArr[],val:number[]){
    //điều kiện cho mảng chỉ mục chỉ có hai index
    if(val.length === 2){
        let index1:number = val[0];
        let index2:number = val[1];
        let current:newArr = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = current;
        return arr;
    }
    else{
        console.log('số lượng chỉ mục vượt quá yêu cầu.');
    }
}
console.log(inputConvert([1,2,3,4],[0,3]));