const howSum = (targetSum, numbers, obj={}) =>{
    if(targetSum in obj) return obj[targetSum];
    if(targetSum === 0) return []; // o means 
    if(targetSum < 0 ) return null; // negative // no tpossible 
    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, obj);
        if(remainderResult !== null){
           obj[targetSum] = [ ...remainderResult, num];
           return obj[targetSum]
        }

    }
    obj[targetSum] = null;
    return obj[targetSum];
}

console.log(howSum(7,[2,3]))
console.log(howSum(7,[5,3,4,7]));
console.log(howSum(140,[5,3,4,7]));






// brute force

// time complexity 
// m = target sum
// n = numbers.length


//time : o(n ^ m * m)
//space : o(m)


//memo
// time complexity 
// m = target sum
// n = numbers.length


//time : o(n  m ^2)
//space : o(m^2)