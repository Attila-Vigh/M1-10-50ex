//* JS EXERCISES

// Ex.21: Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
console.log("Ex.21: ");
let x = "John" 
let y = "Doe"
// console.log(`${x} <> ${y}`);

// Ex.22: Create an object with properties such name, surname, email
console.log("Ex.22: ");

let person = {
    name : "", 
    surname : "", 
    email : ""
}
// console.log(person);

// Ex.23: Delete Email from the previously created object
console.log("Ex.23: ");

delete person.email

// console.log(person);

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
// console.log(strings);

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
// console.log( randomNumbers);

// Ex.27: Wrote a function to get the MAX and the MIN from the previously created array
console.log("Ex.27: ");

const maxAndMin = () => ({
    max: Math.max( ...randomNumbers),
    min: Math.min( ...randomNumbers)
})
// console.log(maxAndMin());

// Ex.28: Create an array of arrays, in which every array has 10 random numbers
console.log("Ex.28: ");

let numberOfArrays = 10
let arrays = []
for (let i = 0; i < numberOfArrays; i++) {
    
    let nums = 100
    let randomNumbers = [];
    for (let j = 0; j < nums; j++) {
        let randomNumber = Math.floor(Math.random() * 101)
        randomNumbers.push(randomNumber)
    }
    arrays.push(randomNumbers)
}
// console.log( arrays);

// Ex.29: Create a function that gets 2 arrays and returns the longest one
console.log("Ex.29: ");

const longestArray = (arr1, arr2) => arr1.length >= arr2.length ? arr1 : arr2

let arr1 = [ 1, 2]
let arr2 = [ 1, 2, 3]
// console.log(longestArray(arr1, arr2)); 

console.log("Ex.30: ");

const sum = (arr) => arr.reduce((a, b) => a + b, 0)
const hinghestSum = (arr1, arr2) =>( 
    sum(arr1) >= sum(arr2) 
    ? sum(arr1) 
    : sum(arr2)
    )
    // console.log( hinghestSum(arrays[1], arrays[2]));
    
    
// Ex.30: Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
const hinghestSum2 = (arr1, arr2) => {
    let sum1 = sum2 = 0

    for (const elem of arr1) 
        sum1 += elem
    for (const elem of arr2) 
        sum2 += elem
    return sum1 >= sum2 
            ? sum1 
            : sum2
}
console.log("hinghestSum2(arr1, arr2): ", hinghestSum2(arr1, arr2));
//* DOM 

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
const changePageHeading = () => (
    document.querySelector("h1").innerHTML = "New Title"
)
changePageHeading()

// Ex.35: Write a function to add an extra row to the table
console.log("Ex.35: ");
const addRow = () =>  (
    document.querySelector("tbody").innerHTML 
    += `<tr>new row</tr>`
)
addRow()

// Ex.36: Write a function to add the class "test" to each row in the table
console.log("Ex.36: ");

const addClassTestToRows = () => (
    document.querySelectorAll("tr")
    .forEach( tableRow => 
        tableRow.classList.add("test"))
)
addClassTestToRows()

// Ex.37: Write a function to add a red background to every link in the page
console.log("Ex.37: ");

const addClassToRows = () => (
    document.querySelectorAll("a")
    .forEach( link => 
        link.style.backgroundColor = "red")
)
addClassToRows()

// Ex.38: Console log "Page loaded" when the page is correctly loaded
console.log("Ex.38: ");

window.onload = () => console.log("Page loaded");

// Ex.39: Write a function to add new items to a UL
console.log("Ex.39: ");

const addItemsToUL = (content) => (
    document.querySelector("ul")
    .insertAdjacentHTML("beforeend", `<li>${content}</li>` )
)
addItemsToUL("New item added")

// Ex.40: Write a function to empty a list
console.log("Ex.40: ");

const emptyList = () => ( 
    document.querySelector("ul").innerHTML = ""
)
emptyList()

//*  EXTRA 

// Ex.41: Add an eventListener to alert when the mouse is over a link, displaying the URL
console.log("Ex.41: ")

const onMouseOverLink = () => (
    document.querySelectorAll("a")
    .forEach( link => 
        link.addEventListener( "mouseover", () => 
            alert(link.href) 
        )
    )
)
onMouseOverLink()

// Ex.42: Add a button to hide every image on the page
console.log("Ex.42: ")

const hideAllImages = () => {
    const allImages = document.querySelectorAll('img')
    const button = document.querySelector(".btn-hideAllImages")
    
    button.addEventListener('click', () =>
        allImages.forEach( img => 
            img.classList.toggle( 'hidden' ) 
        )
    )
}
hideAllImages()

// Ex.43: Add a button to hide and show the table from the page
console.log("Ex.43: ")

const hideTable = () => {
    const button = document.querySelector(".btn-hideTable")
    const table = document.querySelector("table")
    
    button.addEventListener("click", () => 
        table.classList.toggle('hidden')
    )

}
hideTable()

// Ex.44: Write a function to sum every number inside the TD (if the content is numeric)
console.log("Ex.44: ")

const sumNumbersInsideTDs = () => (
    [ ...document.querySelectorAll("td")]                               // Get all td
        .map   ( td               => td.innerText)                      // get all the text inside the td
        .filter(isNumber          => Number( isNumber))                 // get strings which are just numbers 
        .reduce((sum = 0, number) => Number( sum) + Number( number) )   // because filter() will return strings they have to be parsed again to number type
)
console.log(sumNumbersInsideTDs())

// Ex.45: Delete the last letter from the title each time the user clicks on it
console.log("Ex.45: ")

const deleteFirstLetterOnCLick = () => {
    const title = document.querySelector("h1")

    title.onclick = () => ( 
        title.textContent = title.textContent.substr(1)
    )
}
deleteFirstLetterOnCLick()

// Ex.46: Change a single TD background color when the user clicks on it
console.log("Ex.46: ")

const changeTdBackgroundOnClick = () => {
    const tds = document.querySelectorAll("td")
    
    tds.forEach( td => 
        td.onclick = () => td.style.backgroundColor = "brown"
    )
}
changeTdBackgroundOnClick()

// Ex.47: Add a button DELETE, on click it should delete a random TD from the page
console.log("Ex.47: ")

const randomTdDelete = () => {
    const tds               = document.querySelectorAll("td")
    const btnRandomTDdelete = document.querySelector(".btn-randomTDdelete")
    
    btnRandomTDdelete.onclick = () => {
        let randomNum = Math.floor(Math.random() * tds.length)

        tds[randomNum].remove()
    }
}
randomTdDelete()

// Ex.48: Add a pink border to a cell when the mouse is over it
console.log("Ex.48: ")

const addPinkBorder = () => {
    const tds = document.querySelectorAll("td")
    
    tds.forEach( td => 
        td.addEventListener('mouseover', 
            () => td.style.border = "2px solid pink"
        )
    )
}
addPinkBorder()

// Ex.49: Write a function to add a table with 4 rows and 3 columns programmatically
console.log("Ex.49: ")

const addTable = (td=3, tr=4) => {
    const body = document.querySelector("body")
    
    return body.innerHTML += 
        `<table>
            ${`<tr>
                ${ `<td>text</td>`.repeat(td) }
            </tr>`.repeat(tr)}
        </table>
        `
}
addTable()

// const addTable = (td=2, tr=5) => document.querySelector("body").innerHTML += 
//         `<table>
//             ${`<tr>
//                 ${ `<td>text</td>`.repeat(td) }
//             </tr>`.repeat(tr)}
//         </table>
//         `
// addTable(3,4)

// Ex.50: Write a function to remove the table from the page
console.log("Ex.50: ")
    
const removeTable = () => document.querySelector("table").remove()

// removeTable()