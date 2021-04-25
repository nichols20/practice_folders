const numbers = [1, 2, 3, 4]

const output = move(numbers, 0,  1)

console.log(output) 
function move(array, index, offset){
    const position = index+offset;
    if (position >= array.length || position < 0){ 
        console.error('invalid offset') 
        return;
    }

    const newArray = [...array];
    const removedNumber = newArray.splice(index,1)[0];
    newArray.splice(position, 0, removedNumber)
    return newArray
     
}

/* I created a function that will take the selected number determined by (index) then move that value
left or right depending on the offset value. the newly organized array is then displayed to show the changes
*/


/* Notes: I had a difficult time with this exercise when it came to reimplementing the spliced values into a new array
removing the selected elements was simple and attributing said elements to its new corresponding index wasn't difficult
but then re implementing the remaining values correctly was my challenge. I see now my mistake was first that i was trying
to accomplish this task using a for loop and that's where i was running into a lot of my technical difficulties*/

/*WHAT I LEARNED: After now solving my problem I have realised that one of my main problems is that I tend to overthink
the solution to a problem which then causes me to create more work resulting in either extra/messy code or just technical
difficulties like the ones I was facing. I didn't realize by not deleting an element with .splice and just adding the value
to the selected index it would move all values accordingly. turning my 7-10 line non-functioning  for loop into 2 lines 
of clean code. With this is mind I will work towards training my programming brain to think of efficient solutions without 
overthinking my way to get there. */