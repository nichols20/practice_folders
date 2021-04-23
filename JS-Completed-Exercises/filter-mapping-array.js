const numbers = [1,2,-3,-2,3]

const filter = numbers.filter(value => value >= 0)

const items = filter.map(value => '<li>' + value + '</li>')

console.log(items)

list = items.join('')
const html = (
`<ul>
${list}
</ul>`
)
console.log(html)

/* In this exercise I learned how to filter values in an array as well as how
to map an array. I first filtered the values in numbers to only pull numbers 
that are positive then stored them inside the filter property in the form of 
an array. I then created the items property to map values of filter into 
a <li> html markup, lastly implementing items.join to list to join all mapped
values into one single string*/

const objects = filter.map(value => {
    const obj = {integer: value}
    return obj;
})

console.log(objects)