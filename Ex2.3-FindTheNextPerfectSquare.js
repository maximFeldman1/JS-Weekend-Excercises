const findNextSquare = (number)=>{
    if(Number.isInteger(Math.sqrt(number))){
        return Math.pow(Math.sqrt(number)+1,2)
    }
    else return -1
    
}

console.log(findNextSquare(25))

