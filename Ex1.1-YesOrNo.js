
let booleanYes = 'Yes';
let booleanNo = 'No'
const yesOrNo = (str1, str2)=>{
    if(str1 === str2){
        return booleanYes;
    }
    else return booleanNo
    
}

console.log(yesOrNo("example", "example"))