
function sum (a, b){
    let total = 0;
    for(let value of arguments)
        total+= value;
     return total;
    
}

console.log(sum(1, 2, 3, 4, 5));

/* in this exercise i learned about the arguments method
and how I am able to call all arguments that are defined in a function 
even if I only define to arguments to call in the function ex. (a,b) */