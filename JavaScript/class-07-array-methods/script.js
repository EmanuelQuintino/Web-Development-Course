// ARRAYS (Methods) - Principle of Immutability

// teams.forEach((value, index, array) => {
    // console.log(value, index, array)
// })

let team = Array.from('Brasil')
// let testReturnForEach = team.forEach((team, index, array) => {
//     console.log(team, index, array)
// })

// console.log(testReturnForEach) // no return

// let testReturnMap = team.map((team, index, array) => {
//     console.log(team, index, array)
//     return [team, index, array]
// })

// console.log(testReturnMap) // return

const real = [10, 20, 30, 40, 50]
// const convertDollar = real.map((value) => value * 5.36)
// const sumReal = real.reduce((a, b) => a + b)

// const sumConvertedDollar = convertDollar.reduce((a, b) => a + b)

// console.log(convertDollar)
// console.log(sumConvertedDollar)

// console.log(real)
// console.log(sumReal)

// console.log(real.map(value => value * 5.36).reduce((a, b) => a + b))

// console.log(real.filter((value) => value > 30))

// const avaregeStudants = [
//     {name: 'João', avarege: 2},
//     {name: 'Thiago', avarege: 4},
//     {name: 'Pedro', avarege: 7},
//     {name: 'Jonas', avarege: 5},
//     {name: 'Rosa', avarege: 9},
// ]

// let approvedStudants = avaregeStudants.filter((value) => {
//     if (value.avarege >= 7) {
//         return console.log(value.name)
//     }
// })

// console.log(approvedStudants)