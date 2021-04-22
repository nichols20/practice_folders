// Defined objects then created constructed function
let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

function Address(street,city,zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}
////////////////////////////////////////////////////////
//Developed Functions to determine object reference equality and property equality
function areSame(address1, address2){
   return address1 === address2
}



function areEqual(address1, address2){
    return address1.street === address2.street &&
    address1.city === address2.city && 
    address1.zipCode === address2.zipCode
}

console.log(areSame(address1, address2))
console.log(areEqual(address1, address2))

//These functions were made to determine whether the constructed functions
// were equal in terms of object value and the same regarding reference value
