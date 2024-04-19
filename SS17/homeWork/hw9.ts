function flat<T>(arr: T[]): T[] {
    return arr.flatMap((e,i) => {
        if (Array.isArray(e)) {
            return flat(e);
        } else {
            return e;
        }
    });
}

console.log(flat([1, [2, [3, 4], 5], 6])); 
