/* Q. there was an exam conducted for students of 50 marks, if a student got 20 or above he is pass and if not then 
 he is fail */

// Passing Marks = 20

// Solution

const Student1 = { name: "Ankur", marks: 20 }

const Student2 = { name: "Akash", marks: 34 }

const Student3 = { name: "Mahesh", marks: 15 }

const passingMarks = 20

const Pass = "Student Pass"
const Fail = "Student Fail"

// if (marks >= 20) {
//     console.log("Grade E appointed to Student")
//     if (marks > 29) {
//         console.log("Grade D appointed to Student")
//     }
// } else {
//     console.log("Student has failed the exam")
// }

let userInput = prompt("Should I check the Student's result, Yes or No: ");

if (userInput == "Yes") {
    console.log("Checking Student's Result")
    let studentName = prompt("Put the Name of the Student: ");
    if (studentName) {
        console.log(`Checking ${studentName}'s Result`)
        if (studentName === Student1.name) {
            if (Student1.marks >= 20) {
                console.log(Pass)
            } else {
                console.log(Fail)
            }
        } else if (studentName === Student2.name) {
            if (Student2.marks >= 20) {
                console.log(Pass)
            } else {
                console.log(Fail)
            }
        } else if (studentName === Student3.name) {
            if (Student3.marks >= 20) {
                console.log(Pass)
            } else {
                console.log(Fail)
            }
        }
    }
} else {
    console.log("Exit")
}