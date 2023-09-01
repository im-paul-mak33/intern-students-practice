/* Q. No of days in a week = 7 
Monday
Tuesday
Wednesday
Thursday
Thursday
Friday
Satday
Sunday

Problem Statement: You will have to tell me the day and also print the day no.
*/

const firstDay = "Monday"
const secondDay = "Tuesday"
const thirdDay = "Wednesday"
const fourthDay = "Thursday"
const fifthDay = "Friday"
const sixthDay = "Saturday"
const seventhDay = "Sunday"

let dayNumber = prompt("Write the number of the day of which you want the detail below")

switch (dayNumber) {
    case "1":
        alert(`today is ${firstDay}`)
        checkDay = prompt("Put the day below 👇🏻")
        switch (checkDay == firstDay) {
            case "Monday":
                alert("Today is the first day of week")
                break;
        }
    case "2":
        alert(`today is ${secondDay}`)
        checkDay = prompt("Put the day below 👇🏻")
        switch (checkDay) {
            case "Tuesday":
                alert("Today is the second day of week")
                break;
        }
    case "3":
        alert(`today is ${thirdDay}`)
        checkDay = prompt("Put the day below 👇🏻")
        switch (checkDay) {
            case "Wednesday":
                alert("Today is the third day of week")
                break;
        }
}

// We use this to put javascript functions or variables in strings
// template literal - ${function Name / variable Name}
// backticks - ` Some String  ${function Name / variable Name}`


if (condition1) {
    const hero = "sabka baap movie mey"
    console.log(hero)
} else if (condition2) {
    const hero = "sabka baap movie mey"
    console.log(hero)
} else {
    const hero = "sabka baap movie mey"
    console.log(hero)
}
