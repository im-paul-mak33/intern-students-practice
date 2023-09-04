/*

block of code
use for a specific task
reusable
organizing
avoid repetition

*/

/*

there are two types of function in javascript
1.) Arrow Function
2.) Normal Function

*/

function greet(friendName, myName) { // parameters come here
    console.log(`Hello ${friendName}, my name is ${myName}`)
}

greet("Ankur", "Akash") // arguments come here

const greet2 = (friendName, myName) => {
    console.log(`Hello ${friendName}, my name is ${myName}`)
}

greet2("Ankur", "Akash")


const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

const result = divide(68, 23)

console.log(result)

// next go to higherOrderFunction.js file