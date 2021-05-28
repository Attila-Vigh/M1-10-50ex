// Ex.21: Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John" 
let y = "Doe"
console.log(`${x} <> ${y}`);
// Ex.22: Create an object with properties such name, surname, email

let person = {
    name : "", 
    surname : "", 
    email : ""
}
// Ex.23: Delete Email from the previously created object

delete person.email

console.log(person);

// Ex.24: Create an array with 10 strings in it

let strings = [
    "Other times",
    "I let the dream guide me",
    "and ",
    "show me whatever it wants. ",
    "I'm still lucid because ",
    "I can think clearly, ",
    "acknowledge ",
    "I'm dreaming ",
    "and experience the dream ",
    "in real-life intensity.",
];
// Ex.25: Print in the console every string in the previous array

for (const string of strings) {
    console.log(string);
}
// Ex.26: Create an array with 100 random numbers in it

let randomNumbers = [];
let numbers = 100

for (let i = 0; i < numbers; i++) {
    let randomNumber = Math.floor(Math.random() * 101)
    randomNumbers.push(randomNumber)
}
console.log( randomNumbers);

// Ex.27: Wrote a function to get the MAX and the MIN from the previously created array

const maxAndMin = () => ({
    max: Math.max( ...randomNumbers),
    min: Math.min( ...randomNumbers)
})

console.log(maxAndMin());

// Ex.28: Create an array of arrays, in which every array has 10 random numbers


let nums = 100
let numberOfArrays = 10
let arrays = []
for (let i = 0; i < numberOfArrays; i++) {
    
    let randomNumbers = [];
    for (let j = 0; j < nums; j++) {
        let randomNumber = Math.floor(Math.random() * 101)
        randomNumbers.push(randomNumber)
    }
    arrays.push(randomNumbers)
}
console.log( arrays);

// Ex.29: Create a function that gets 2 arrays and returns the longest one

const longestArray = (arr1, arr2) => arr1.lenght >= arr2.lenght ? arr1 : arr2

// Ex.30: Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

const hinghestSum = (arr1, arr2) => {
    sum1 = arr1.reduce((a, b) => a + b, 0)
    sum2 = arr2.reduce((a, b) => a + b, 0)
    
    return sum1 >= sum2 ? sum1 : sum2
}

// Ex.31: Get element with ID "container" from the page
let container = document.querySelect("#container")

// Ex.32: Get every "td" from the page
let tds = document.querySelectAll("td")

// Ex.33: Create a cycle that prints the text inside every td of the page
for (const td of tds) {
    td.innerHTML = "text"
}
// Ex.34: Write a function to change the heading of the page
const changePageHeading = () => document.querySelect("h1").innerHTML = "New Title"

// Ex.35: Write a function to add an extra row to the table
const addRow = () => document.querySelectAll("tr").innerHTML += `<tr></tr>`


// DOM 

// Ex.36: Write a function to add the class "test" to each row in the table
// Ex.37: Write a function to add a red background to every link in the page
// Ex.38: Console log "Page loaded" when the page is correctly loaded
// Ex.39: Write a function to add new items to a UL
// Ex.40: Write a function to empty a list

