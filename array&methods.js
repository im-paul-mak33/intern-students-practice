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