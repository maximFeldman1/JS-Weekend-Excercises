const tribonacci = (n)=>{

let arrTribonacci = [0,0,1], sum = 0;

    for (let i = 2; i < n-1; i++) {
        sum = arrTribonacci[i-2] + arrTribonacci[i-1]+arrTribonacci[i]
        arrTribonacci.push(sum)
    }
    return arrTribonacci;
}

console.log(tribonacci(10))