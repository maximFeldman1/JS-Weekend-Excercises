function isogram(word) {
    let wordLowerLetter = word.toLowerCase();
    let margeStrSplit = word.toLowerCase().split('');
   
    let uniq = margeStrSplit.filter((item, index)=>{
        if(margeStrSplit.indexOf(item) === index) {
            return item;
        }
    }).join("")

    return wordLowerLetter.length === uniq.length ? true : false

}

console.log(isogram("Dermatoglyphics"))