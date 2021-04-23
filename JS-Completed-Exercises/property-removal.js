const numbers = [1,2,3,4]
const output = except(numbers, [1,2])

console.log(output)
function except(array, excluded){
    let out = []
    for (element of array)
    if (!excluded.includes(element))
    out.push(element)
    return out
}

/* this function takes all of the values in numbers then pushes the values
that aren't set to be excluded into the out variable, printing a new array
of values excluding the ones explicitly removed.*/



/* I was able to independently take the number array and inherit it into the 
out array however when it came to excluding specific values I struggled, I 
need to better understand the formatting of loops so I may create the functions
I desire */