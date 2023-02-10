const content = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`

const myArray = content.split("")
console.log(myArray)

const getTheFourLetter = myArray.slice(0,4)
console.log({getTheFourLetter})

let isAnyLetterReapted = false

for(let i = 0; i < getTheFourLetter.length; i++) {
    let firstLetter = getTheFourLetter[i]
    let threeLetters = getTheFourLetter.filter((letter, index) => {
        return index === i ? false : true;
    })
    let isItReapeted = threeLetters.includes(firstLetter)
    console.log({isItReapeted})

    if(isItReapeted === true){
        isAnyLetterReapted = true
    }
}

console.log({isAnyLetterReapted})
 
