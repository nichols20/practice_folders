
const array1 = [1, 5, 6, 9, 13, 'a']

find = array1.find(function (element){
    return element > 9;
});

console.log(find)

const course = [
    {id: 1, name: 'a'},
    {id:2, name: 'b'}
]

look = course.find(function(search){
    return search.name === 'a'
})

console.log(look)


/* In this exercise I learned how to find elements within an array using
the .find method. at first i was confused as to why the search.name
printed the entire object instead of printing the specific object (.name)
that i had written. I then realised that the code I had written searches for
a .name with the value of 'a' then returns the entire object holding said value.
Meaning if i wish for it to print something else then i must explicityly right
that following the current code written. (good to know later on :)*/