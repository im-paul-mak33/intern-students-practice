/*

In Javascript Higher order function is a function that either takes one or more functions as an arguments or returns a function
as its result.

Note:-
higher order functions is a powerful concept or individualed method that allows for more flexibility and resuability of code

*/


// Higher Order Function using an Example

// this is higher order function
const operateOnArray = (array, operation) => {
    const result = []
    for (let num = 0; num < array.length; num++) {
        result.push(operation(array[num]))
    }
    return result;
}

// separate function that is passed as an argument to higher order function
function square(number) {
    return number * number
}

// another separate function that is passed as an argument to higher order function
function double(number) {
    return number * 2
}

const numbersArray = [1, 2, 3, 4, 5]

// Using operateOnArrays function with square function
const squaredNumbers = operateOnArray(numbersArray, square)
console.log(squaredNumbers)

// Using operateOnArrays function with double function
const doubledNumbers = operateOnArray(numbersArray, double);
console.log(doubledNumbers)