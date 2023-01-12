
const strategy = `A Y
B X
C Z`

const myArray = strategy.split(/\r?\n/).map((line) => line.split(" "));
console.log(myArray)

let score = 0

const mapper = {
    A: "rock",
    B: "paper",
    C: "scissors",
    X: "rock",
    Y: "paper",
    Z: "scissors",

}

for(let i=0; i<myArray.length; i++) {
    let moveOpponent = myArray[i][0]
    moveOpponent = mapper[moveOpponent]
    console.log(moveOpponent)
    
    let myMove = myArray[i][1]
    myMove = mapper[myMove]
    console.log(myMove)
    
    if(myMove === "rock") {
        score += 1
    }
    if(myMove === "paper") {
        score += 2
    }
    if(myMove === "scissors") {
        score += 3
    }
    
    if(myMove === moveOpponent) {
        score += 3
    }
    
    if (
        (myMove === "rock" && moveOpponent === "scissors") ||
        (myMove === "scissors" && moveOpponent === "paper") ||
        (myMove === "paper" && moveOpponent === "rock" )
    ) {
        score += 6
    }
}




console.log(score)

