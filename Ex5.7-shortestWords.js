const shortestWord = (str)=>{
    let shortest = str.split(' ').reduce((shortestWord, currentWord)=>{
        return shortestWord.length < currentWord.length ? shortestWord : currentWord
    });
    return shortest;
}

console.log(shortestWord("The quick brown fox jumped over the lazy dog"))