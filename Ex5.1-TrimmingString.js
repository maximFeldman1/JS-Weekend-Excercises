const trimmingString = (str)=>{
    // return str.substr(1,str.length-2)
    str = str.split(" ")    
    return str.splice(1,str.length-2).join(" ")
    
}

console.log(trimmingString("Hello Max,how are you my friend?"))