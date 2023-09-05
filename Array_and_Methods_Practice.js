// Arrays are ordered collectiond of elements that can hold values of different data types.

const Students = [
    Student1 = {
        name: "Anshul",
        course: "DCE",
        gpa: 9.8
    },
    Student2 = {
        name: "Ashwin",
        course: "IT",
        gpa: 9.9,
        subject: 4
    },
    Student3 = {
        name: "Mahesh",
        course: "IT",
        gpa: 0.1
    }
]

for (let i = 0; i < Students.length; i++) {
    console.log(Students[i])
}

// Array Methods

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits);
// [ 'banana', 'apple', 'peach' ]   ----> result now in console log after line 54 runs

fruits.push("pomegranate", "pineapple", "mango");
console.log(fruits);
// [ 'banana', 'apple', 'peach', 'pomegranate', 'pineapple', 'mango' ]   ----> result now in console log after line 58 runs

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

fruits.pop()
console.log(fruits);
// Expected output: "tomato"

fruits.shift()
console.log(fruits);

fruits.unshift("banana")
console.log(fruits);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]