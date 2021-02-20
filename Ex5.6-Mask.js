const maskify = (str)=>{
    if(str.length <= 4) return str
    let rightString = str.substr(-4)
    let leftString = str.substr(0, str.length-4).replace(/.(?=.{0})/g, '#');
    
    return leftString + rightString
}

console.log(maskify("yhheg"))