const gridTravelers = (m , n ,obj={}) => {
    const key = m + ','+ n;
    console.log("key value",key);
    if(key in obj) return obj[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    obj[key] = gridTravelers(m - 1,n,obj) + gridTravelers(m,n -1 , obj);
    return obj[key];
}


console.log(gridTravelers(1,1)); // 1
console.log(gridTravelers(2,1));//1
console.log(gridTravelers(1,3));//1
console.log(gridTravelers(3,3));//6
console.log(gridTravelers(4,4));//20
console.log(gridTravelers(18,18));//2333606220

// time complexity == o(m * n) time complexity
// space complexity = 0(m+n) space complexity