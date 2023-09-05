/* 

Objects are complex data structures that store data in key-value pairs.

A key-value pair is a fundamental data structure that associates a unique identifier (the "key") with a corresponding value.
This structure is commonly used in various programming contexts, including data storage, data retrieval, and data representation.
Key-value pairs are prevalent in data structures like dictionaries, maps, objects, and associative arrays, depending on the
programming language or environment.

*/

const Student1 = {
    name: "Anshul",
    course: "DCE",
    gpa: 9.8
}

const Student2 = {
    name: "Ashwin",
    course: "IT",
    gpa: 9.9,
    subject: 4,
    cars: ["BMW", "AUDI", "FERRARI", "LAMBORGHINI"]
}

console.log(Student2["gpa"])

const Student3 = {
    name: "Mahesh",
    course: "IT",
    gpa: 0.1
}



console.log(Student2)

const person = {
    name: "Paul",
    age: "22",
    isStudent: false,
    personality: "bad"
}

console.log(person.age)
console.log(person['age'])
console.log(person)

person.dimag = "infinite"

person.age = "infinite"

console.log(person)

delete person.personality
console.log(person)

person.personality = "infinitely awesome, good, very good, sab achha cheez pura multiverse aur pura multi-dimension mey"

console.log(person)