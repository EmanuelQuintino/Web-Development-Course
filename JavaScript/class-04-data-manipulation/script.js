// >>>> Data Manipulation <<<< 

// Prototype (Chain) 
// console.log('Emanuel'.__proto__)
// console.log(10.0.__proto__)


// >>>> String <<<<

// let myName = 'Emanuel'
// let num = 53.34234
// let phrase = 'Emanuel sou Web Developer'

// console.log(myName.length)
// console.log(String(num).length)

// console.log(myName.toLocaleUpperCase())

// console.log(typeof phrase.split(' ')[2])
// console.log(typeof phrase.split(' ').join("-"))

// console.log(phrase.includes('web')) //case-sensitive
// console.log(phrase.toLocaleLowerCase().includes('web'))


// >>>> Number Manipulation <<<<

// console.log(num)
// console.log(typeof Number(num.toFixed(2)))
// console.log(Number(num.toFixed(2).replace(".", ",")))
// console.log(typeof num.toFixed(2).replace(".", ","))

// Convert Currency
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})) //Brasil
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'usd'})) //Dólar Americano
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'eur'})) //Euro
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'jpy'})) // Iene

//Código Padrão Internacional de Moedas ISO 4217

// let cpf = 32165498758
// console.log(cpf + 2)
// console.log(String(cpf))
// console.log(cpf + 2) //fez o coercion
// console.log(String(cpf) + 2) //com o conversion


// >>>> Date Manipulation <<<<
data = new Date()
console.log(data.getDate())


// >>>> Array Manipulation <<<<

// let myArray = Array(1, "a", () => "A" )
// console.log(myArray[2]())

// let techs = ['HTML', 'CSS', 'Git']

// techs.push('JavaScript')
// techs.pop()
// techs.unshift('SQL')

// let index = techs.indexOf('SQL')
// techs.splice(index, 1)
// techs.splice(techs.indexOf("SQL"), 1)

// function deleteArrayIndex(techName) {
//     let aux = techs
//     techs = []

//     aux.map(tech => {
//         if(tech.toLocaleLowerCase() != techName.toLocaleLowerCase()) {
//             techs.push(tech)
//         }
//     })
// } 

// deleteArrayIndex("css")

// console.log(techs)