const sumOfLowestNumbers = (arr)=>{
    let sum = 0;
    arr.sort((a,b)=>{
        return a-b;
    });

    for(let i = 0; i < 2; i++)
    {
        sum += arr[i]
    }
    return sum;
}

console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]))