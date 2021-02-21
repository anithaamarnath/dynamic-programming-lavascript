const bestSum = (targetSum, numbers, obj={} )=>{
    if(targetSum in obj) return obj[targetSum];
    if(targetSum === 0) return [];
    if(targetSum <  0 ) return null;
    let shortestCombination = null;

    for (let num of numbers){ //index in 
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, obj)
        if(remainderCombination !== null){
           const combination =  [ ...remainderCombination, num];
           if( shortestCombination === null || combination.length < shortestCombination.length){
               shortestCombination = combination;
           }
        }

    }

    obj[targetSum]= shortestCombination;
    return shortestCombination;
};


console.log(bestSum(7,[2,3,7]))
console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(14000,[5,3,4,7]));

