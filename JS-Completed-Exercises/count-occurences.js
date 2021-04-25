const numbers = [1,2, 3, 4, 1, 1];

const output = countOccurences(numbers, 1);

console.log(output)
function countOccurences(array, searchElement){
    const search = [...array]
    const found = []

    console.log(search.forEach(value => { 
        const br = value === searchElement
        if (br === true)found.push(searchElement)
    }
    ))
    console.log(found.length)
}