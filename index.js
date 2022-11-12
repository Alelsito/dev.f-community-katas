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

// const crossover = (chromosome1, chromosome2, index) => {
//   const baseCrossoverChromosome1 = chromosome1.substring(0, index).split('')
//   const baseCrossoverChromosome2 = chromosome2.substring(0, index).split('')

//   chromosome1.substring(index).split('').forEach(e => baseCrossoverChromosome2.push(e))
//   chromosome2.substring(index).split('').forEach(e => baseCrossoverChromosome1.push(e))

//   return [baseCrossoverChromosome1.join(''), baseCrossoverChromosome2.join('')]
// }

// console.log(crossover('111000', '000110', 3))
// console.log(crossover('110', '001', 2))

/* Genetic Algorithm Series - #4 Get population and fitnesses */

// const population = ['11001111', '01110001',
//   '00010011', '01101100', '00110101', '00110011', '01011000', '11101001', '11101101',
//   '10001100', '01100101', '01000001', '01010000', '00000000', '11110111', '01100000',
//   '11110011', '10101110', '10101100', '11101010', '10011000', '01100001', '00101001',
//   '11101000', '11011101', '00110111', '00111011', '10100100', '11101100', '01111011',
//   '00001010', '10010010', '11101000', '00110000', '01000010', '10100110', '10011101',
//   '11110000', '00100010', '11001010', '11010001', '00010110', '10110011', '00111000',
//   '10111010', '10000100', '11101011', '01001111', '01101101', '00101110', '11010110',
//   '11100110', '10010011', '00110100', '11011111', '00111100', '01011011', '11101100',
//   '01110101', '11010111', '00101000', '00100110', '11001010', '10011011', '01000011',
//   '00101111', '01110110', '10011110', '11011101', '10011110', '00001101', '01101100',
//   '01110111', '00111101', '00000011', '00111001', '10000011', '01000110', '01011101',
//   '01110011', '10011011', '10000110', '10101111', '10111100', '00011010', '11100101',
//   '01110101', '00000110', '11111000', '10000110', '01001000', '11111100', '11010000',
//   '10011101', '01001100', '01101011', '11010110', '11011100', '01000101', '01110000']

// const fitness = (c) => {
//   const ideal = '11110000'
//   let r = 0
//   for (let i = 0; i < c.length; ++i) {
//     if (c[i] === ideal[i]) {
//       r++
//     }
//   }
//   return r / ideal.length
// }

// const mapPopulationFit = (population, fitness) => {
//   return population.map(c => { return { chromosome: `${c}`, fitness: fitness(c) } })
// }

// console.log(mapPopulationFit(population, fitness))

// Extract the domain name from a URL

const github = 'http://github.com/carbonfive/raygun'
const zombieBites = 'http://www.zombie-bites.com'
const cnet = 'https://www.cnet.com'

function domainName (url) {
  return url.replace(/.+\/|www.|\..+/g, '')
}

console.log(domainName(github))
console.log(domainName(zombieBites))
console.log(domainName(cnet))
