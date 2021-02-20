const basicOp =(char, num1, num2)=>{
    let result = 0
    if(char ==='+'){
        return result = num1 + num2;
    }
    else if(char ==='-'){
        return result = num1 - num2;
    }
     else if(char ==='*'){
        return result = num1 * num2;
    }
     else if(char ==='/'){
        return result = num1 / num2;
    }
    else return -1;
}

console.log(basicOp('*', 5, 5))