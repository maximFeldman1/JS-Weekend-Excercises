const longestWord = (str)=>{
    let longest = str.split(' ').reduce((longestWord, currentWord)=>{
        return longestWord.length < currentWord.length ? currentWord : longestWord
    });
    return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"))