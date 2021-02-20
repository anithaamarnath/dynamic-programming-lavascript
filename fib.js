const fib = (n) => {
    if(n <= 2 ) return 1;
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(4));
console.log(fib(8));
console.log(fib(10));
console.log(fib(40));
console.log(fib(50));

// time complexity 
//big o(n)


const foo = (n)=> {
    if(n <=1 ) return  1;
    foo(n - 1);

}

console.log(foo(2));



const boo = (n)=> {
        if(n <=1 ) return  1;
        foo(n - 2);
    
    }



//memoization 
//js object key will be arg to fn value will the be return value 

//fib time complexity 


const fib = (n, obj = {}) => {
    if (n in obj ) return obj[n];
    if(n <= 2) return 1;
    obj[n] = fib(n -1, obj )+ fib( n-2,obj ) ;
    return obj[n];
} 

console.log(fib(4));
console.log(fib(8));
console.log(fib(10));
console.log(fib(40));
console.log(fib(50));


