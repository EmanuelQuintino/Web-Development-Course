// Segundo o ECMAScript


// >>>>> Primitive Values : String, Number, Boolean... <<<<<


// ----- String ------
// let nome = "Emanuel"
// let age = "29"

// age = Number(age)
// Number() (função construtora para converter um dado em número)

// console.log(typeof age)


// ----- Number: integer, float, NaN, Infinity -----
// console.log(typeof 32.2)
// console.log(typeof (32 + 5))
// console.log(15/"Emanuel")
// console.log(typeof NaN)


// ----- Boolean: true or false ------
// console.log(typeof (10 == 20))
// console.log(20 == 20)
// console.log(20 == "Emanuel")
// console.log((30 === "11")) //cuidado porque são tipos diferentes de dados


// ------ Template Strings ------

// let num1 = '10'
// let num2 = 20
// let soma = num1 + num2

// console.log(num1 + num2)
// console.log("A soma é: " + (num1 + num2))

// console.log("A soma de " + num1 + " e de " + num2 + " é igual a " + (num1 + num2))
// type conversion (type casting)

// console.log(`A soma de ${num1} e de ${num2} é igual a ${soma}`)


//  >>>>> Tipos Estrutural: Object, Function <<<<<<


// ------ Object ------
// let name = "Emanuel"
// let age = 29
// let profession = "Web Developer"

// console.log(name)
// console.log(age)
// console.log(profession)

// person = {
//     name:"Emanuel",
//     age: 29,
//     profession: "Web Developer"
// }

// console.log(person)
// console.log(typeof person)
// console.log(person.profession)


// ----- Array or Vetor ------
countries = ["Brasil", "Alemanha", "Itália", "Uruguai", "Espanha"]

// console.log(countries)
// console.log(typeof countries)
// console.log(countries[3])
// console.log(typeof countries[3])

countries = ["Brasil", 5, "Alemanha", 4, "Itália", 4, "Uruguai",2 , "Espanha", 1]

countries = [["Brasil", 5], ["Alemanha", 4], ["Itália", 4], ["Uruguai",2] , ["Espanha", 1]]

// console.log(countries)
// console.log(typeof countries)
// console.log(countries[3])
// console.log(typeof countries[3])
// console.log(countries[0][1])

countries = [
    {
        name: "Brasil",
        champion: 5
    },
    
    {
        name: "Alemanha",
        champion: 4
    },

    {
        name: "Itália",
        champion: 4
    },

    {
        name: "Uruguai",
        champion: 2
    },

    {
        name: "Espanha",
        champion: 1
    },
]

console.log(countries)
console.log(typeof countries)
console.log(countries[3].name)
console.log(countries[3].champion)
