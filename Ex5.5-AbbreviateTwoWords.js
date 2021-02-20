const abbreviateTwoWords = (firstLetterWord, secondLetterWord)=>{
    let x = firstLetterWord.charAt(0).toUpperCase();
    let y = secondLetterWord.charAt(0).toUpperCase();
    return x + '.' + y
}

console.log(abbreviateTwoWords('Sam','Harris'))