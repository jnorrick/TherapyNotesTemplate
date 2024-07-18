//what is included in a patient?
const fs = require('fs')
const input = require("readline-sync");

class Patient {
    constructor(firstName, lastName, dateOfBirth, email, address) {
        this.firstName = firstName
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.address = address
    }
}

// For every PT
let counter = 0
let patients = {}
let continueLoop = true
while (continueLoop) {
    let firstName = input.question("What is the client's first name? ")
    let lastName = input.question("What is the client's last name? ")
    let dateOfBirth = input.question("What is the client's date of birth (yyyy/mm/dd)? ")
    let email = input.question("What is the client's email address? ")
    let address = input.question("What is the client's street address? ")

    let patientName = `patient_${counter}`
    patients[patientName] = new Patient(firstName, lastName, dateOfBirth, email, address)
    continueInput = input.question("Would you like to add another patient? Y/N ")
    counter += 1
    if (continueInput.toLowerCase() === "n")
        continueLoop = false
}
console.log(patients)


let data = JSON.stringify(patients)


fs.writeFile('test.txt', data, (err) => {
    if (err) throw err;
})