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

// let resp = false
// do {
//     resp = prompt('Deseja sair?')
// } while (resp)

// console.log("Running...")


// FOR

// for (let count = 0; count <= 10; count++) { // increment factor
//     if (count > 2 && count < 8) {
//         count ++ // Caution, two increments!
//         continue
//         // break
//     }

//     if (count % 2 == 0) {
//         console.log(count)
//     }
// }

// const array = [12, "text", () => "A"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

// const array = [[1, 2, 3], ['a', 'b', 'c'], [[], {}, ()=>'X']] // multidimensional

// console.log(array[0][1]);
// console.log(array[1][2]);
// console.log(array[2][2]());

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j])
//     }
// }


// FOR (OF, IN)

// const team = 'Brasil'
const team = {name: 'Brasil', cups: 5}

// for(let value of team){ // Not iterable {}
//     console.log(value)
// }

// for(let index in team){
//     console.log(index)
//     console.log(team[index])
// }

// console.log(team)

const teams = ['Brasil', 'Argentina', 'Portugal', 'Alemanha']

// for(let value of teams){
//     console.log(value)
// }

// for(let index in teams){
//     console.log(teams[index])
// }

// console.log(teams)

const array = [[1, 2, 3], ['a', 'b', 'c'], [[], {}, ()=>'X']]

// for (const i of array) {
//     for (const j of array[i]) { // Not iterable array[i]
//         console.log(array[i][j])
//     }
// }