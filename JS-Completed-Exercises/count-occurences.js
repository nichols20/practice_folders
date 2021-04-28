
function countOccurences(array, searchElement){
    if (!Array.isArray(array)){
        throw new Error('Value defined is not an Array')
    }
    const search = [...array]
    const found = []

    search.forEach(value => { 
        const br = value === searchElement
        if (br === true)found.push(searchElement)
    }
    )
    console.log(found.length)
}


try{
    const numbers = [1,2, 3, 4, 1, 1];
    countOccurences(numbers, 1);
}

catch(e){
    console.log(e)
}