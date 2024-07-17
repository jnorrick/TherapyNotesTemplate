//what is included in a patient?
const fs = require('fs')

class Patient {
    constructor(firstName, lastName, dateOfBirth, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.address = address
    }
}

const patient1 = new Patient("jessica", "orrick", "6/2/85", "jessica@jessica.com", "123 Main Street")
console.log(patient1)

let data = JSON.stringify(patient1)


fs.writeFile('test.txt', data, (err) => {
    if (err) throw err;
})