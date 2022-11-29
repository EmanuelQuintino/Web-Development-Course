// ARRAYS (Methods) - Principle of Immutability

const team = 'Brasil'
// const team = {name: 'Brasil', cups: 5}
const teams = ['Brasil', 'Argentina', 'Portugal', 'Alemanha']

// teams.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

let teamArray = Array.from(team)
// let testReturnForEach = teamArray.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// console.log(testReturnForEach) // no return

// let testReturnMap = teamArray.map((team, index, array) => {
//     console.log(team, index, array)
//     return [team, index, array]
// })

// console.log(testReturnMap) // Immutable


const real = [10, 20, 30, 40, 50]
// const convertDollar = real.map((value) => value * 5.36)

// const sumReal = real.reduce((a, b) => a + b)
// const sumConvertedDollar = convertDollar.reduce((a, b) => a + b)

// console.log(convertDollar)
// console.log(sumConvertedDollar)

// console.log(real)
// console.log(sumReal)

// console.log(real.map(value => value * 5.36).reduce((a, b) => a + b))

// console.log(real.filter((value) => value < 30))

// const averageStudants = [
//     {name: 'João', average: 2},
//     {name: 'Thiago', average: 4},
//     {name: 'Pedro', average: 7},
//     {name: 'Jonas', average: 5},
//     {name: 'Rosa', average: 9},
// ]

// let approvedStudants = averageStudants.filter((value) => {
//     if (value.average >= 7) {
//         console.log(value.name)
//         return value
//     }
// })

// console.log(approvedStudants)