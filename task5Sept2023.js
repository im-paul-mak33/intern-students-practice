/*

Q. 1
Write a JavaScript function or a line of code to check whether an `input` is an array or not.

Test Data :
const data = 'w3resource'
const data1 = [1, 2, 4, 0]

Q.2
Write a JavaScript function or a line of code to clone an array.
const data = ['w3resource','w3resource','w3resource']
const data1 = [1, 2, 4, 0]

Q.3
Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements
of the array.
const data = [[7, 9, 0, -2]]

*/

// Ankur
const data = ['w3resource', 'w3resource', 'w3resource']
const data1 = [1, 2, 4, 0]
var cloneData = []
var cloneData1 = []

for (var i = 0; i < data.length; i++) {
    cloneData.push(data[i]);
}

for (var i = 0; i < data1.length; i++) {
    cloneData1.push(data1[i]);
}

// Same Array every step
// cloneData = [1]
// cloneData = [1, 2]
// cloneData = [1, 2, 3, 4]

console.log(cloneData)
console.log(cloneData1)

// Mine
const cloneArray = slicingArray = (inputArray) => {
    return inputArray.slice(0)
}

// Different Array every step
// cloneData = [1]
// cloneData = [1, 2]
// cloneData = [1, 2, 3, 4]

console.log(cloneArray(data))
console.log(cloneArray(data1))


// 3 rd question
function getFirstElements(arr, n = 1) {
    if (!Array.isArray(arr)) {
        return [];
    }
    if (n <= 0) {
        return [];
    }
    return arr.slice(0,n);
}
const pataNahi = [[7, 9, 0, -2], [2, 4, 1, -4]];
const firstElement = getFirstElements(pataNahi[0]);

console.log(firstElement)