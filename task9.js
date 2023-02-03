
const content = 
`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3`

 const inscruction = `move 1 from 2 to 1
 move 3 from 1 to 3
 move 2 from 2 to 1
 move 1 from 1 to 2`


const myArray = content.split(/\r?\n/)

console.log({myArray})

let numberOfRows = myArray.length - 1;
let lastRow = myArray[myArray.length]
let state = []
let column = []

for(let i = 0; i < numberOfRows; i++) {
    const element = myArray[i][1]
    console.log({element})
    
    if(element !== ' ') {
        column.unshift(element)
    } 
}
state.push(column)
console.log({state})

let column2 = []

for(let i = 0; i < numberOfRows; i++) {
    const element = myArray[i][5]
    console.log({element})
    
    if(element !== ' ') {
        column2.unshift(element)
    } 
}

state.push(column2)
console.log({state})

let column3 = []

for(let i = 0; i < numberOfRows; i++) {
    const element = myArray[i][9]
    console.log({element})
    
    if(element !== ' ') {
        column3.unshift(element)
    } 
}

state.push(column3)
console.log({state})