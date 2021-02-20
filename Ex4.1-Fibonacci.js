const fibonacci = (n)=>{

let arrFibonacci = [0,1], sum = 0;

    for (let i = 1; i < n-1; i++) {
        sum = arrFibonacci[i-1] + arrFibonacci[i]
        arrFibonacci.push(sum)
    }
    return arrFibonacci;
}

console.log(fibonacci(5))