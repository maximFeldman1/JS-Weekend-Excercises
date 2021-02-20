const findUnique = (arr)=>{
    arr.sort((a,b)=>{
        return a - b;
    });

    if(arr[0] < arr[1]) return arr[0]
    else return arr[arr.length-1]
}

console.log(findUnique([ 0, 0, 0.55, 0, 0 ]))