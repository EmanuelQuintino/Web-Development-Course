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

let initial = 200
const sumReal = real.reduce((a, b) => a + b, initial)
// const sumConvertedDollar = convertDollar.reduce((a, b) => a + b)

// console.log(convertDollar)
// console.log(sumConvertedDollar)

// console.log(real)
// console.log(sumReal)

// console.log(real.map(value => value * 5.36).reduce((a, b) => a + b))

// console.log(real.filter((value) => value < 30))


const averageStudants = [
    {id: 1, name: 'João', average: 2, birth: 1995},
    {id: 2, name: 'Thiago', average: 4, birth: 2002},
    {id: 3, name: 'Jonas', average: 5, birth: 1988},
    {id: 4, name: 'Rosa', average: 9, birth: 2004},
    {id: 5, name: 'Amanda', average: 8, birth: 1992},
    {id: 6, name: 'Pedro', average: 7, birth: 1990},
]

let approvedStudants = averageStudants.filter((value) => value.average >= 7)

let birthStudants = averageStudants.filter((value) => value.birth >= 2000)


let ageStudants = averageStudants.filter((value) => (new Date().getFullYear() - value.birth) >= 30)

// console.table(approvedStudants)
// console.table(birthStudants)
// console.table(ageStudants)

// let findStudant = averageStudants.find((studant) => (new Date().getFullYear() - studant.birth) >= 30)

let findStudant = averageStudants.find((studant) => studant.name.toLocaleLowerCase() == 'thiago')

// let findStudant = averageStudants.find((studant) => studant.id == 2)

// console.log(findStudant)


// Table ASCII (0-9, A-Z, a-z)
// console.table(averageStudants.sort((a, b) => a.birth - b.birth))

console.table(averageStudants.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
}))