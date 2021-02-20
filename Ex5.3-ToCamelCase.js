var camalize = function camalize(str) {
    
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    
}

console.log(camalize("the_Stealth_Warrior"))