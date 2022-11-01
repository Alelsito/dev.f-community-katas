// EASY
/* Simple Elevator */

// function goto (level, button) {
//   if (typeof (level) === 'number' && typeof (button) === 'string') {
//     const parseIntButton = parseInt(button)
//     if (level % 1 === 0 && parseIntButton % 1 === 0) {
//       if (level >= 0 && level <= 3 && parseIntButton >= 0 && parseIntButton <= 3) {
//         return parseIntButton - level
//       } else return 0
//     } else return 0
//   } else return 0
// }

// console.log(goto(3, undefined))

/* Grasshopper - Summation */

// const summation = function (num) {
//   let sum = 0
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i
//   }
//   return sum
// }

// console.log(summation(32))

/* Calculate average */

// function findAverage (array) {
//   if (array.length > 0) {
//     let total = 0
//     for (let i = 0; i < array.length; i++) {
//       total += array[i]
//     }
//     return total / array.length
//   } else return 0
// }

// console.log(findAverage([0, 3, 6, 7, 21, 35, 57]))

/* Reverse a Number */

// function reverseNumber (n) {
//   if (n < 0) {
//     const reverseArray = n.toString().split('').reverse()
//     reverseArray.unshift('-')
//     return parseInt(reverseArray.join(''))
//   } else {
//     return parseInt(n.toString().split('').reverse().join(''))
//   }
// }

// console.log(reverseNumber(-34214))
// console.log(reverseNumber(862311))

/* Genetic Algorithm Series - #1 Generate */

const generate = length => {
  let binaryString = ''
  for (let i = 0; i < length; i++) {
    binaryString += Math.floor(Math.random() * Math.floor(2))
  }
  return binaryString
}

console.log(generate(16))
console.log(generate(32))
console.log(generate(64))
