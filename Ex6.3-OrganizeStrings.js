function longest(a, b) {
    let margeStr = (a + b);
    let margeStrSplit = margeStr.split('');
   
    let uniq = margeStrSplit.filter((item, index)=>{
        if(margeStrSplit.indexOf(item) === index) {
            return item;
        }
    }).join("")
    return uniq
}

console.log(longest("avvfdd", "afsfsv"))