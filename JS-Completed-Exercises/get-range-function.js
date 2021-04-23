const numbers = getRange(-10, -4)

console.log(numbers)

function getRange(min, max){
    let range = []
    while (min <= max){
        range.push(min)
     min++
    }
    console.log(range)
}

/* In this Exercise I built a function that takes the minimum and maximum
of two integers then applies the range from the minimum to the maximum into
an array using .push: overall this was rather simple, i did encounter some 
trouble at first with the layout of my definded variables but I was able
to solve those issues and formatted it correctly to make the function operable*/