function mergeObj(obj1:object,obj2:object):object{
   let mergedObj : object & typeof obj1 & typeof obj2 = {...obj1,...obj2};
   return mergedObj;
}

let obj1:object = {
    name:'huy',
    job:'sale',
}

let obj2:object = {
    name:'Bob',
    address:'HN'
}

let obj3 = mergeObj(obj1,obj2);
console.log(obj3);



