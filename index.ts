function doubleNumber(n: number): number {
  return n * 2
}

function squareNumber(n: number): number {
  return n * n
}

function isEven(n: number): boolean {
  return n % 2 === 0
}

function isAdult(age: number): boolean {
  return age >= 18
}

function reverseString(s: string): string {
  return s.split("").reverse().join("")
}

function capitalizeString(s: string): string {
  return s[0].toUpperCase() + s.slice(1).toLowerCase()
}

// Usage and output

const sampleNum = 7
console.log("--- Numbers ---")
console.log(`doubleNumber(${sampleNum})`, doubleNumber(sampleNum))
console.log(`squareNumber(${sampleNum})`, squareNumber(sampleNum))

console.log("\n--- Booleans ---")
console.log(`isEven(10)`, isEven(10))
console.log(`isEven(11)`, isEven(11))
console.log(`isAdult(17)`, isAdult(17))
console.log(`isAdult(18)`, isAdult(18))

const sampleStr = "hello"
console.log("\n--- Strings ---")
console.log(`reverseString("${sampleStr}")`, reverseString(sampleStr))
console.log(`capitalizeString("${sampleStr}")`, capitalizeString(sampleStr))
console.log(`capitalizeString("ALICE")`, capitalizeString("ALICE"))

// export {}
