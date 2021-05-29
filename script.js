//* JS EXERCISES

// Ex.21: Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
console.log("Ex.21: ");
let x = "John" 
let y = "Doe"
console.log(`${x} <> ${y}`);
// Ex.22: Create an object with properties such name, surname, email
console.log("Ex.22: ");

let person = {
    name : "", 
    surname : "", 
    email : ""
}
console.log(person);

// Ex.23: Delete Email from the previously created object
console.log("Ex.23: ");

delete person.email

console.log(person);

// Ex.24: Create an array with 10 strings in it
console.log("Ex.24: ");

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
console.log(strings);

// Ex.25: Print in the console every string in the previous array
console.log("Ex.25: ");

for (const string of strings) {
    console.log(string);
}
// Ex.26: Create an array with 100 random numbers in it
console.log("Ex.26: ");

let randomNumbers = [];
let numbers = 100

for (let i = 0; i < numbers; i++) {
    let randomNumber = Math.floor(Math.random() * 101)
    randomNumbers.push(randomNumber)
}
console.log( randomNumbers);

// Ex.27: Wrote a function to get the MAX and the MIN from the previously created array
console.log("Ex.27: ");

const maxAndMin = () => ({
    max: Math.max( ...randomNumbers),
    min: Math.min( ...randomNumbers)
})

console.log(maxAndMin());

// Ex.28: Create an array of arrays, in which every array has 10 random numbers
console.log("Ex.28: ");


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
console.log("Ex.29: ");

const longestArray = (arr1, arr2) => arr1.length >= arr2.length ? arr1 : arr2

let arr1 = [ 1, 2]
let arr2 = [ 1, 2, 3]

console.log(longestArray(arr1, arr2)); 

//* DOM 

// Ex.30: Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
console.log("Ex.30: ");

const sum = (arr) => arr.reduce((a, b) => a + b, 0)
const hinghestSum = (arr1, arr2) => {
    
    console.log(arr1);
    console.log(arr2);
    
    return sum(arr1) >= sum(arr2) ? sum(arr1) : sum(arr2)
}

console.log( hinghestSum(arrays[1], arrays[2]));

// Ex.31: Get element with ID "container" from the page
console.log("Ex.31: ");
let container = document.querySelector("#container")

// Ex.32: Get every "td" from the page
console.log("Ex.32: ");
let tds = document.querySelectorAll("td")
// Ex.33: Create a cycle that prints the text inside every td of the page
console.log("Ex.33: ");
for (const td of tds) {
    // td.innerHTML = "text"
}
// Ex.34: Write a function to change the heading of the page
console.log("Ex.34: ");
const changePageHeading = () => document.querySelector("h1").innerHTML = "New Title"
changePageHeading()

// Ex.35: Write a function to add an extra row to the table
console.log("Ex.35: ");
const addRow = () =>  document.querySelector("tbody").innerHTML += `<tr>new row</tr>`
addRow()

// Ex.36: Write a function to add the class "test" to each row in the table
console.log("Ex.36: ");

const addClassTestToRows = () => {
    const tableRows = document.querySelectorAll("tr")
    for (const tableRow of tableRows) 
        tableRow.classList.add("test")

}
addClassTestToRows()

// Ex.37: Write a function to add a red background to every link in the page
console.log("Ex.37: ");

const addClassToRows = () => {
    const links = document.querySelectorAll("a")
    for (const link of links) 
        link.style.backgroundColor = "red"

}
addClassToRows()
// Ex.38: Console log "Page loaded" when the page is correctly loaded
console.log("Ex.38: ");

window.onload = function() {
    console.log("Page loaded");
}

// Ex.39: Write a function to add new items to a UL
console.log("Ex.39: ");

const addItemsToUL = function (content) {
    const ul = document.querySelector("ul")

    ul.insertAdjacentHTML('beforeend', `<li>${content}</li>` )
}
addItemsToUL("New item added")

// Ex.40: Write a function to empty a list
console.log("Ex.40: ");

const emptyList = () => {
    const ul = document.querySelector("ul")

    ul.innerHTML = ""
}

emptyList()

//*  EXTRA 

// Ex.41: Add an eventListener to alert when the mouse is over a link, displaying the URL
console.log("Ex.41: ")

const onMouseOverLink = function(){
    const links = document.querySelectorAll("a")

    links.forEach( 
        link => link.addEventListener( "mouseover", () => alert(link.href) )
    )
} 
onMouseOverLink()
// Ex.42: Add a button to hide every image on the page
console.log("Ex.42: ")

const hideAllImages = () => {
    const allImages = document.querySelectorAll('img')
    const button = document.querySelector(".btn-hideAllImages")
    
    button.addEventListener('click', () =>
    allImages.forEach( img => img.classList.toggle( 'hidden' ) )
    )
}
hideAllImages()
// Ex.43: Add a button to hide and show the table from the page
console.log("Ex.43: ")

const hideTable = () => {
    const button = document.querySelector(".btn-hideTable")
    const table = document.querySelector("table")
    
    button.addEventListener("click", () => table.classList.toggle( 'hidden' ))

}
hideTable()

// Ex.44: Write a function to sum every number inside the TD (if the content is numeric)
console.log("Ex.44: ")

const sumNumbersInsideTDs = () => {
    const tds = [ ...document.querySelectorAll("td")]
    console.log(tds)

    return tds.map   ((td)              => td.innerText)
              .filter(isNumber          => Number( isNumber))
              .reduce((sum = 0, number) => Number( sum) + Number( number) )
}
console.log(sumNumbersInsideTDs())

// Ex.45: Delete the last letter from the title each time the user clicks on it
console.log("Ex.45: ")

const deleteFirstLetterOnCLick = () => {
    const title = document.querySelector("h1")

    title.onclick = () => title.textContent = title.textContent.substr(1)
}

deleteFirstLetterOnCLick()
// Ex.46: Change a single TD background color when the user clicks on it
console.log("Ex.46: ")

// Ex.47: Add a button DELETE, on click it should delete a random TD from the page
console.log("Ex.47: ")

// Ex.48: Add a pink border to a cell when the mouse is over it
console.log("Ex.48: ")

// Ex.49: Write a function to add a table with 4 rows and 3 columns programmatically
console.log("Ex.49: ")

// Ex.50: Write a function to remove the table from the page
console.log("Ex.50: ")

