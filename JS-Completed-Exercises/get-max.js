const layout = [20, 40 , 50 ,100, 200, 1, 3, 5, 600, 800, 900, 902, 904, 903]

const max = getMax(layout)
console.log(max)

function getMax(array) {
    if (array.length === 0) return undefined
    return array.reduce(( a,b) => (a > b) ? a : b);
}


