
let person = {name: 'mosh'}

Object.defineProperty(person, 'name',{ 
  writable: false,
  enumerable: true
})

person.name = 'john'

console.log(person)


/* this was a small exercise to understand the writable enumerable and configurable 
properties. What I learned is that writable determines whether or not you can alter
a defined property in this case name: if false you cannot and it makes the property
only readable. Enumerable determines whethere or not a property is visible through
Object.keys if false it hides the property when calling the value inside the method.
Configurable determines whether or not you can delete an Object explicitly through 
code using the delete method. */