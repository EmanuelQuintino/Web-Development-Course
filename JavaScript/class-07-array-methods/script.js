// ARRAYS (Methods) - Principle of Immutability

const team = 'Brasil'
// const team = {name: 'Brasil', cups: 5}
const teams = ['Brasil', 'Argentina', 'Portugal', 'Alemanha']

// >>>>>>>>> forEach <<<<<<<<<<
// teams.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// let teamArray = Array.from(team)
// let testReturnForEach = teamArray.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// console.log(testReturnForEach) // no return

//>>>>>>>>> Map <<<<<<<<<<<
// let testReturnMap = teamArray.map((team, index, array) => {
//     console.log(team, index, array)
//     return [team, index, array]
// })

// console.log(testReturnMap) // Immutable

const real = [10, 20, 30, 40, 50]
// const convertDollar = real.map((value) => value * 5.36)
// console.log(convertDollar)
// console.log(real)

// >>>>>>>>> Reduce <<<<<<<<<<
// let initial = 200
// const sumReal = real.reduce((a, b) => a + b, initial)
// console.log(sumReal)

// const sumConvertedDollar = convertDollar.reduce((a, b) => a + b)
// console.log(sumConvertedDollar)

// console.log(real.map(value => value * 5.36).reduce((a, b) => a + b))

// >>>>>>>>> Filter <<<<<<<<<<
// console.log(real.filter((value) => value < 40))

const averageStudants = [
    {id: 1, name: 'João', average: 4, birth: 1990},
    {id: 2, name: 'Thiago', average: 6, birth: 2002},
    {id: 3, name: 'Jonas', average: 5, birth: 1998},
    {id: 4, name: 'Rosa', average: 9, birth: 2004},
    {id: 5, name: 'Amanda', average: 8, birth: 1992},
    {id: 6, name: 'Pedro', average: 7, birth: 1993},
]

// console.table(averageStudants.filter((studant) => studant.average >= 7));
// console.table(averageStudants.filter(studant => studant.birth >= 2000))

let yearCurrent = new Date().getFullYear()
// console.log(yearCurrent);

// console.table(averageStudants.filter(studant => (yearCurrent - studant.birth) >= 30))
// console.table(averageStudants.filter((studant) => Array.from(studant.name)[0].toLocaleLowerCase() == "j"));

// >>>>>>> Find <<<<<<<
// console.log(averageStudants.find((studant) => (yearCurrent - studant.birth) >= 30));
// console.log(averageStudants.find((studant) => studant.name.toLocaleLowerCase() == 'amanda'));
// console.log(averageStudants.find((studant) => studant.id == 5));

// >>>>>>> Sort <<<<<<<<
// Table ASCII (0-9, A-Z, a-z)

const numArray = [2, "2", 2, 1, 5, 19, 10, 20]
// console.log(numArray.sort((a, b) => a - b))

// console.table(averageStudants.sort((a, b) => b.average - a.average))

console.table(averageStudants.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
}))

// >>>>>> Concat <<<<<<
console.log(numArray.concat(real).sort((a, b) => a - b))