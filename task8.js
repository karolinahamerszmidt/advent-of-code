const content = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

console.log(content)

const myArray = content.split(/\r?\n/)

let sum = 0

for(let i = 0; i < myArray.length; i++) {
    const firstElf = myArray[i].split(",")[0]
    const secondElf = myArray[i].split(",")[1]
    
    console.log(firstElf, secondElf)
    
    
    const firstElfStart = Number(firstElf.split("-")[0])
    console.log(firstElfStart)
    
    const firstElfEnd = Number(firstElf.split('-')[1])
    console.log(firstElfEnd)
    
    const secondElfStart = Number(secondElf.split('-')[0])
    console.log(secondElfStart)
    
    const secondElfEnd = Number(secondElf.split('-')[1])
    console.log(secondElfEnd)
    
   if(firstElfStart <= secondElfEnd && firstElfEnd === secondElfStart) {
    sum += 1
   }
}
console.log(sum)

