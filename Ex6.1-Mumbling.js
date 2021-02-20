function mumbling(str) {
    return str.split('').map((first, i)=>
        first.toUpperCase() + first.toLowerCase().repeat(i)
    ).join('-')
}

console.log(mumbling('abcd'))
  

                                //to check it!! {}
// function mumbling(str) {
//     return str.split('').map((first, i)=>{
//         first.toUpperCase() + first.toLowerCase().repeat(i)
//     }).join('-')
// }