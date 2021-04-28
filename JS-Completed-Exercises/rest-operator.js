
function sum(discount, ...prices){
    const total = prices.reduce((value , index)=> value + index )
    return total *(1 - discount)
}

console.log(sum(0.1,20,30, 1))

/* in this exercise I learned about the rest parameter. Instead of using the arguements 
method to sum up all parameters stated in a function, I can just add a ... as a prefix to an
argument and it will pull all values defined. SPECIAL NOTE - The rest operator must be the last
argument passed in a function or else an error will occur. */ 