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

// const generate = length => {
//   let binaryString = ''
//   for (let i = 0; i < length; i++) {
//     binaryString += Math.floor(Math.random() * Math.floor(2))
//   }
//   return binaryString
// }

// console.log(generate(16))
// console.log(generate(32))
// console.log(generate(64))

/* Genetic Algorithm Series - #2 Mutation */

// const mutate = (chromosome, p) => {
//   let mutate = []
//   const split = chromosome.split('')

//   if (p === 1) {
//     split.forEach(e => e === '1' ? mutate.push(0) : mutate.push(1))
//   } else if (p === 0) {
//     mutate = split
//   } else {
//     split.forEach(e => {
//       const r = Math.random()
//       if (r < p) {
//         if (e === '1') { mutate.push(0) } else { mutate.push(1) }
//       } else (mutate.push(parseInt(e)))
//     })
//   }

//   return mutate.join('')
// }

// const zero = Array(10).join('0')
// const one = Array(10).join('1')

// // 100% mutate
// console.log(mutate(zero, 1))
// console.log(mutate(one, 1))

// // 0% mutate
// console.log(mutate(zero, 0))
// console.log(mutate(one, 0))

// // 50% mutate
// console.log(mutate(zero, 0.5))
// console.log(mutate(one, 0.5))

/* Genetic Algorithm Series - #3 Crossover */

const crossover = (chromosome1, chromosome2, index) => {
  const baseCrossoverChromosome1 = chromosome1.substring(0, index).split('')
  const baseCrossoverChromosome2 = chromosome2.substring(0, index).split('')

  chromosome1.substring(index).split('').forEach(e => baseCrossoverChromosome2.push(e))
  chromosome2.substring(index).split('').forEach(e => baseCrossoverChromosome1.push(e))

  return [baseCrossoverChromosome1.join(''), baseCrossoverChromosome2.join('')]
}

console.log(crossover('111000', '000110', 3))
console.log(crossover('110', '001', 2))
