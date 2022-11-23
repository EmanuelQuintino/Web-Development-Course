// >>>>>>>>> LOOPINGS <<<<<<<<<<<

// DO - WHILE

// let count = 10 //flag

// while (count <= 10) {
//     if (count > 2 && count < 8) {
//         count ++
//         continue
//         // break
//     }

//     if (count % 2 == 0) {
//         console.log(count)
//     }
//     count++ // container
// }

// do {
    // console.log("Do While")
// } while (count = 0);

// console.log("Running...")



// FOR

// for (let count = 0; count <= 10; count++) { // increment factor
//         if (count > 2 && count < 8) {
//             count ++ // Caution, two increments!
//             continue
//             // break
//         }

//         if (count % 2 == 0) {
//             console.log(count)
//         }
// }



// FOR (OF, IN)

// let team = 'Brasil'
// let team = {name: 'Brasil', cups: 5}
// let teams = ['Brasil', 'Argentina', 'Portugal', 'Alemanha']


// for(let value of teams){
//     console.log(value)
// }

// for(let index in team){
//     console.log(team[index])
// }

// console.log(team)



// ARRAYS (Methods)

// teams.forEach((value, index, array) => {
    // console.log(value, index, array)
// })

// let team = Array.from('Brasil')
// team.forEach((team, index, array) => {
//     console.log(team, index, array)
// })

const real = [10, 20, 30, 40, 50]
// const convertDollar = real.map((value) => value * 5.36)
// const sumConvertedDollar = convertDollar.reduce((a, b) => a + b)

// console.log(convertDollar)
// console.log(sumConvertedDollar)
// console.log(real)

// console.log(real.map(value => value * 5.36).reduce((a, b) => a + b))

console.log(real.filter((value) => value > 30))

const avaregeStudants = [
    {name: 'João', avarege: 8},
    {name: 'Thiago', avarege: 8},
    {name: 'Pedro', avarege: 7},
    {name: 'Jonas', avarege: 5},
    {name: 'Rosa', avarege: 9},
]

const approvedStudants = avaregeStudants.filter((value) => {
    if (value.avarege >= 7) {
        console.log(value.name)
    }
})