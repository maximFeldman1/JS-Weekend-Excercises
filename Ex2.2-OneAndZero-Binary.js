const binary = (arr)=>{
    let power = 0 ,sum = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === 1){
            sum += Math.pow(2,power)
        }
        power++;
    }
    return sum
}

console.log(binary([1, 0, 1, 1]))