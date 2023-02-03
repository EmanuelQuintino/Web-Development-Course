localStorage.setItem("nome", "Emanuel")
localStorage.setItem(1, "Emanuel")
localStorage.setItem(2, 2)
localStorage.removeItem(1, "Emanuel")

let local = localStorage.getItem('nome')
// console.log(local)

let num = 4
localStorage.setItem(num, "EmanuelTeste")

localStorage.clear()

// console.log(localStorage.key(0))
// console.log(localStorage.length)

const myArray = ['nome', 'copa', 'brasil']
const myObject = {nome: "Emanuel", age: 29}

localStorage.setItem(0, myArray)
console.log(localStorage.getItem(0).split(','))

localStorage.setItem(1, JSON.stringify(myObject))

// let getObject = localStorage.getItem(1)
// let newObject = JSON.parse(getObject)
// console.log(JSON.parse(localStorage.getItem(1)))