const canConstruct = (target, wordbank,obj={}) =>{
    if(target in obj) return obj[target];
    if(target === '') return true;


    for(let word of wordbank) {
       if(target.indexOf(word) === 0) {// true
       
       const suffix = target.slice(word.length);
       console.log(("suffix",suffix));
       if(canConstruct(suffix, wordbank,obj) === true){
        obj[target] = true
        return true;
       }
       
    }
}
    obj[target] = false;
    return false;

};
console.log(canConstruct("anitha",[ "ani","ni","a"])) //true
console.log(canConstruct("abcdef",[ "ab","abc","cd","def","abcd"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[ "e","ee","eeee","eeeeee"]))// false
