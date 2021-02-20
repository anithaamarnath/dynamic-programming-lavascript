const bestSum = (targetSum, numbers )=>{
    if(targetSum === 0) return [];
    if(targetSum <  0 ) return null;
    let shortestCombination = null;
    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers)
        if(remainderCombination !== null){
           const combination =  [ ...remainderCombination, num];
           if( shortestCombination === null || combination.length < shortestCombination.lenght){
               shortestCombination = combination;
           }
        }

    }
    return shortestCombination;
};


console.log(bestSum(7,[2,3,7]))
console.log(bestSum(7,[5,3,4,7]));
//console.log(bestSum(140,[5,3,4,7]));
