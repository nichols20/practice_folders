
function total(sum){
    const test = Array.isArray(sum)
    if (test === true){
        let result = sum.reduce((a,b) => a + b)
        console.log(result)
        return;
    }

    let add = 0;
    for (let value of arguments)add += value
    console.log(add)
}


total(10,1,2,3,4)

/* in this exercise i just created a function that added up all the objects defined
in the first section the function detects if the argument sum is an array of numbers
if the result comes back true the if statement will then reduce the array and return
the total value of the array. If the test came back the code will move to the end of 
the function initializing the for loop that adds all values of the arguments given 
in the total declaration line 16. */