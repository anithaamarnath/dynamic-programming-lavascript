// const canSum = (targetSum, number) =>{
//     if(targetSum === 0) return true;
//     if(targetSum < 0) return false;

//     for(let num of number){
//        const remainder = targetSum - num;
      
//        if(canSum(remainder,number) === true){
//            return true;
//        }
//     }
//     return false ;
    
// }




const canSum = (targetSum, number,obj={}) =>{
    if(targetSum in obj) return obj[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of number){
       const remainder = targetSum - num;
      console.log(remainder);
       if(canSum(remainder,number,obj) === true){
           obj[targetSum] = true;
           return true;
       }
    }
    obj[targetSum] = false;
    return false ;
    
}

console.log(canSum(7,[1,3,4,7]));
console.log(canSum(300,[7,14]));