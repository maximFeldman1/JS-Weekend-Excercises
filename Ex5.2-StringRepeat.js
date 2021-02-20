const repeatStr = (numAppear,word)=>{
    let str = '';
    for(let i = 0; i < numAppear; i++){
        // console.log(word)
        str += word;
    }
    console.log(str)
}

repeatStr(5, "Hello")