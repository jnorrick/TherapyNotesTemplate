const input = require('readline-sync')
const fs = require('fs')
const util = require('util')

class Patient {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = `${this.firstName} ${this.lastName}`
        this.age = age
        this.mood = null
        this.affect = null
        this.speech = null
        this.perception = null
    }
}

// obtain input for client name
const clientFirstName = input.question("Please enter the client's first name: ");
const clientLastName = input.question("Please enter the client's last name: ");
const clientAge = input.question("Please enter the client's age: ");
let patient = new Patient(clientFirstName, clientLastName, clientAge)

//other misc useful inputs:
function buildNote(createMentalStatusExam, documentMedicalNecessity, documentSafetyConcerns, documentTreatmentPlanProgress) {
    createMentalStatusExam();
    documentMedicalNecessity();
    documentSafetyConcerns();
    documentTreatmentPlanProgress();
}

// obtain input for answers to client MSE


function createMentalStatusExam(patient) {
    patient.mood = input.question(`What is ${patient.fullName}'s mood?: `);
    patient.affect = input.question(`Describe ${patient.fullName}'s affect: `); 
    // let congruency = input.question(`Are mood and affect congruent?: `);
    // let appearance = input.question(`Describe ${clientName}'s appearance: `)//consider expanding, as there are questions re: gait, behaviors, attitude, rapport assessment
    // let mentalStatusExamOrientation = input.question(`Is ${clientName} oriented to time, place, and person? Please enter "yes" or "no": `)
    patient.speech = input.question(`Any abnormalities in ${patient.fullName}'s speech? Please enter "yes" or "no": `);
    patient.perception = input.question(`Any abnormalities of perception present for ${patient.fullName}? Please enter "yes" or "no": `)
    // let thoughtContent = input.question(`Any abnormalities noted for ${clientName}'s thought content? Please enter "yes" or "no": `)
    // let thoughtProcess = input.question(`Any abnormalites of thought process present for ${clientName}? Please enter "yes" or "no": `)
    // let judgement = input.question(`Describe ${clientName}'s current judgement. Please select "poor", "fair", "good": `)
    // let insight = input.question(`Describe ${clientName}'s current insight. Please select "poor", "fair", "good": `)
    // return mood, affect, congruency, appearance, mentalStatusExamOrientation, speech, perception, thoughtContent, thoughtProcess, judgement, insight
}

// obtain input for reason for session over 46 minutes

function documentMedicalNecessity() {
    medicalNecessity = input.question("What is the reason for length of session over 46 minutes? ")
    // find list of documented reasons for medical necessity for sessions lasting over 46 minutes for insurance review - You have that somewhere on your phone
    //could make a dropdown?
    
}


function documentSafetyConcerns() {
    let safetyConcerns = input.question("Does client note any concerns for SI/HI/SIB? Please input 'yes' or 'no'. ");
    let elaborateSafetyConcerns = input.question("What safety concerns are present? \nSelect 0 for SI\nSelect 1 for HI\nSelect 2 for SIB.")
    let noSafetyConcerns = console.log("No concerns for SI/HI/SIB noted by client.");
}       


function documentTreatmentPlanProgress() {

};

createMentalStatusExam(patient)
// console.log(patient)



const writePatientToFile = (patient) => {
    // console.log(util.inspect(patient, { depth: null }))
    let output = `Patient, ${patient.fullName}, was recently here in a ${patient.mood} mood...`
    if (patient.mood === 'happy') {
        output += 'Patient was set for followup in 2 weeks to check on continued happiness.'
    }
    fs.writeFileSync("./testFile.txt", output)
    // Object.keys(patient).forEach(attribute => {
    //     fs.appendFileSync("./testFile.txt", `${patient.fullName}\'s ${attribute} is: ${patient[attribute]}\n`, )
    //     // console.log(patient[attribute])
    // })
}

writePatientToFile(patient)
// fs.writeFile("./testFile.txt", util.inspect(patient, { depth: null }), err => {
//     if (err) {  console.error(err) }

//     console.log("Patient succesfully written to file!")
// })

//TODO:
//output to text file
//take input from text file? (instead of hard coding the information in the note)
// consider benefit of creating a baseline MSE that clinician can choose to alter with any of the input information. 
// would this be most effective as a webform?
