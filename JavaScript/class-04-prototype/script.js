// Prototype (Chain) 

// console.log('Emanuel'.__proto__)
// console.log(10.0.__proto__)

// String Manipulation

let nome = 'Emanuel'
// let num = 536.234
// let frase2 = new String('Emanuel é programador') //criar um objeto

console.log('Emanuel'.length)
console.log('Emanuel'.toLocaleUpperCase())
console.log(nome.toLowerCase())
console.log(nome.includes('Quintino')) //case-sensitive
// console.log(frase.split(' ')[2]) //acessar partes de uma string ou frase
// console.log(frase.replace('!', ' ').split(' ')[4])
// console.log(frase2) // ver as propriedades do objeto

// Esse é o santo grau do Java Script

//* Manippulando number

// console.log('7' + 3) //Coercion
// console.log('7' + 3) //
// console.log(Number('7') + 3) //Typecasting or Type Conversion

// cpf = 32165498758 // Se eu quiser usar máscara

// console.log(cpf + 2)
// console.log(String(cpf))
// console.log(cpf + 2) //fez o coercion
// console.log(String(cpf) + 2) //com o conversion

// console.log(nome.length)
// console.log(String(num).length) // é preciso converter o número para string
// console.log(num.toFixed(2).replace('.', ',')) // Replace transforma em String e não dá para converter com Number

// // *Converter para moeda
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})) //Brasil
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'usd'})) //Dólar Americano
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'eur'})) //Euro
// console.log(num.toLocaleString('pt-br', {style: 'currency', currency: 'jpy'})) // Iene

//código padrão internacional de moedas ISO 4217


//* Manippulando Array

// let frutas = ['manga', 'abacaxi', 'abacate']
// frutas.push('acerola') //adciona elemento no final
// frutas.unshift('cajú') //adciona elemento no início
// frutas.pop() //remove elemento no final

// index = frutas.indexOf('manga')
// frutas.splice(index, 2) //remove do índice até a quantidade especificada

// console.log(frutas)