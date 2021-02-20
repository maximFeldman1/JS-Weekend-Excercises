function countDuplicate(str) {
  let count = {}, counter = 0;
  str.split('').map(function(i) {
  count[i] = (count[i] || 0) + 1;
  });
  for (let element in count){
      if(count[element]>1){
        counter++
      }
  }
  return counter

}

console.log(countDuplicate("aabbbcdeedbac"))