
const content = 
`   [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 ` 

 const instruction = ` move 1 from 2 to 1
 move 3 from 1 to 3
 move 2 from 2 to 1
 move 1 from 1 to 2 `


const myArray = content.split(/\r?\n/)

console.log({myArray})

let numberOfRows = myArray.length - 1;
let lastRow = myArray[myArray.length - 1];
let numberOfColumns = Number(lastRow[lastRow.length - 2]);
console.log({numberOfRows});
console.log({numberOfColumns})
let state = []

for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
    let column = []

    for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const element = myArray[rowIndex][columnIndex * 4 + 1]
        console.log({element})
        
        if(element !== ' ') {
            column.unshift(element)
        } 
    }
    state.push(column)
    console.log({state})
}
const myArrayTwo = instruction.split(/\r?\n/).map((line) => line.split(" "))
console.log({myArrayTwo})

for(let instructionIndex = 0; instructionIndex < myArrayTwo.length; instructionIndex++) {
    let numberOfThingsToMove = Number(myArrayTwo[instructionIndex][2])
    console.log({numberOfThingsToMove})
    
    let column = Number(myArrayTwo[instructionIndex][4])
    console.log({column})
    
    let columnWhereIAdd = Number(myArrayTwo[instructionIndex][6])
    console.log({columnWhereIAdd})

    let deletedElement = numberOfThingsToMove.splice(- 1)
    console.log({deletedElement})
}
    


    console.log({state});


let results = state.map((column) => {
    return column[column.length - 1]
}).join("")

console.log({results})
