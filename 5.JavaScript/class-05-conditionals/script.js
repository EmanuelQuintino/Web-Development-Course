// >>>>>>>>> CONDITIONALS <<<<<<<<<<<

// >>>>>> If, Else <<<<<<<

// let thereIsSmooke = true

// if (thereIsSmooke) {
//     window.alert("Emergência, evacuar local!")
// }

// let age = Math.abs(Number(prompt("Digite sua idade: ")))

// if (String(age).length >= 3) {
//     console.log("Sua idade está certa?")
// }

// if(age >= 18) {
//     console.log("Maior de idade!")
// } else {
//     console.log("Menor de idade!")
// }

// if(age >= 16) {
//     if(age >=18 && age <=70) {
//         console.log("Voto obrigatório!")
//     }
//     else {
//         console.log("Voto facultativo!")
//     }
// }
// else {
//     console.log("Não pode votar!")
// }

// let money = window.prompt('Quanto você tem?')
// let price = window.prompt('Quanto custa a blusa?')

// if (money > price){
//         window.alert('Está com preço bom, vou comprar!')
//     }
// else if (money == price){
//     window.alert('Vou ficar sem dinheiro mas compro a blusa!')
// }
// else {
//     let resp = window.prompt('Pode pegar dinheiro emprestado? (S/N)')
//     if (resp.toLowerCase() == 's'){
//         window.alert('Me individei mas comprei a blusa!')
//     }
//     else{
//         window.alert('Muito caro, estou fora!')
//     }
// }


// >>>>>>>> Switch <<<<<<<<<

// let weekDay = 9

// switch (weekDay) {
//     case 1:
//         console.log("Domingo")
//         break;
//     case 2:
//         console.log("Segunda")
//         break;
//     case 3:
//         console.log("Terça")
//         break;
//     case 4:
//         console.log("Quarta")
//         break;
//     case 5:
//         console.log("Quinta")
//         break;
//     case 6:
//         console.log("Sexta")
//         break;
//     case 7:
//         console.log("Sábado")
//         break;
//     default:
//         console.log("Dia inválido!")
//         break;
// }


// let option = window.prompt(`
//     Digite a opção desejada:

//     1: Consultoria
//     2: Atendimento
//     3: Encerar`)

// switch (option){
//     case '1':
//         window.alert(`
//         Consultorias em:

//         - Finanças
//         - Vendas
//         - Markting`)
//         break;
//     case '2':
//         window.alert('Vamos passar para um de nossos atendentes!')
//         break;
//     case '3':
//         window.alert('Obrigado pela sua visita, volte sempre!')
//         break;
//     case null:
//         window.alert('Programa ecerrado!')
//         break;
//     default:
//         window.alert('Digite uma opção válida!')
//         break
// }


// >>>>>>> Throw, Try, Catch and Finally <<<<<<<<<

// const runMyAplication = () => "Running Function..."

try {
    console.log(runMyAplication())
} catch (error) {
    console.log(`My Test: ${error}`)
}
finally {
    console.log(`Sempre será executado!`)
}

document.write("Rodando aplicação!")