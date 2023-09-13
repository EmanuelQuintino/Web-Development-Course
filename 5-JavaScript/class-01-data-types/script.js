// ECMAScript Data Types

// >>>>> Primitive Values : String, Number, Boolean... <<<<<

// ----- String ------
// let nome = "Emanuel"
// let age = "29"

// console.log(typeof age)

// ----- Number: integer, float, NaN, Infinity -----
// console.log(typeof 32.2)
// console.log(typeof (32 + 5))
// console.log(typeof 15 + "Emanuel")
// console.log(typeof NaN)

// ----- Boolean: true or false ------
// console.log(typeof (10 == 20))
// console.log(20 == 20)
// console.log(20 == "Emanuel")
// console.log(20 != "Emanuel")
// console.log((11 == "11"))
// console.log((11 === "11")) //cuidado porque são tipos diferentes de dados

// ------ Template Strings (Interpolation) ------

let num1 = "10";
let num2 = 20;

num1 = Number(num1); // type conversion (typecasting)
// Number() (função construtora para converter um dado em número)

// console.log(num1 + num2) // Type Coersion

let soma = num1 + num2;

// console.log("A soma é: " + num1 + num2)

// grouping operator
// console.log("A soma é: " + (num1 + num2))

// concatenation
// console.log("A soma de " + num1 + " e de " + num2 + " é igual a " + (num1 + num2))

// Template Strings (Interpolation)
// console.log(`A soma de ${num1} e de ${num2} é igual a ${soma}`)

//  >>>>> Variables Scope (hoisting) <<<<<<

{
  // var num
  var num = "Global";
  // let num = "Global"

  // const pi = 3.14

  // console.log(num)

  {
    var num = "Local";
    // let num = "Local"
    // var pi = 1
    // let pi = 1
    // console.log(num)
    // console.log(pi)
  }

  {
    // var num = "Local2"
    let num = "Local2";
    // console.log(num)
  }

  // console.log(num)
  // console.log(pi)
}

//  >>>>> Type Structutal (Object, Functions) <<<<<<

// // ------ Object ------
let name = "Emanuel";
let age = 29;
let profession = "Web Developer";

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
// console.log(person.name)

// ----- Array (Vetor) ------
countries = ["Brasil", "Alemanha", "Itália", "Uruguai", "Espanha"];

// console.log(typeof countries)
// console.log(countries)
// console.log(countries[0])

// countries = ["Brasil", 5, "Alemanha", 4, "Itália", 4, "Uruguai",2 , "Espanha", 1]

// countries = [["Brasil", 5], ["Alemanha", 4], ["Itália", 4], ["Uruguai",2] , ["Espanha", 1]]

// console.log(countries)
// console.log(typeof countries)
// console.log(countries[3])
// console.log(typeof countries[4])
// console.log(countries[1])
// console.log(countries[3][1])

countries = [
  {
    name: "Brasil",
    champion: 5,
  },

  {
    name: "Alemanha",
    champion: 4,
  },

  {
    name: "Itália",
    champion: 4,
  },

  {
    name: "Uruguai",
    champion: 2,
  },

  {
    name: "Espanha",
    champion: 1,
  },
];

country = 0;

// console.log(countries)
// console.log(typeof countries)
// console.log(countries[country].name)
// console.log(countries[country].champion)

console.log(`${countries[country].name} tem ${countries[country].champion} título(s)`);
