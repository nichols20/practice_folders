
const person = {
    firstName: 'mosh',
    lastName: 'hamadani',
    get fullName(){
        return ` ${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)throw new Error('Enter a first and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = null
}

catch (e) {
    console.log(e)
}

console.log(person)

/* In this lesson i learned about the throw, try, and catch methods. an exception is 
defined once a new error method is thrown (throw new Error) if it is now thrown it is
only considered an error object. the catch method is used to catch a thrown error
so that the developer may then call said error. While the try method allows you to
throw an exception which allows the new error to function. */