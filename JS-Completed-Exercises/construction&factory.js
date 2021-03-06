const address = showAddress('34 cedar Dr.', 'Mount', '08360')

// Factory Function
function showAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
console.log(address)
///////////////////////////////////////////////


// Constructor Function


function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

const address2 = new Address('34 cedar Dr.', 'Mount', '08360')

console.log(address2)


// What I Learned:
//The differences between a constructor and factory function as well as how to 
//Implement new objects