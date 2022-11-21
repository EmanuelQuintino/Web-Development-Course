// >>>>>>>>> CONDITIONALS <<<<<<<<<<<

// >>>>>> If, Else <<<<<<<

// let thereIsSmooke = true

// if (thereIsSmooke) {
//     window.alert("Emergência, evacuar local!")
// }

let age = Math.abs(Number(prompt("Digite sua idade: ")))

if (String(age).length >= 3) {
    console.log("Sua idade está certa?")
}

// if(age >= 18) {
//     console.log("Maior de idade!")
// } else {
//     console.log("Menor de idade!")
// }

if(age >= 16) {
    if(age >=18 && age <=70) {
        console.log("Voto obrigatório!")
    }
    else {
        console.log("Voto facultativo!")
    }
}
else {
    console.log("Não pode votar!")
}


// let option = 2

// switch (option) {
//     case 1:
//         console.log("Opção A")
//         break;
//     case 2:
//         console.log("Opção B")
//         break;
//     case 3:
//         console.log("Opção C")
//         break;
//     case 4:
//         console.log("Opção D")
//         break;
//     default:
//         console.log("Opção inválida")
//         break;
// }


// let money = window.prompt('Quanto você tem?')
// let price = window.prompt('Quanto custa a blusa?')

// if (money > price){
//     window.alert('Está com preço bom, vou comprar!')
// }
// else if (money == price){
//     window.alert('Vou ficar sem dinheiro mas compro a blusa!')
// }
// else {
//     let resp = window.prompt('Pode pegar dinheiro emprestado? (S/N)')//.toLocaleLowerCase()
//     if (resp == 's'){
//         window.alert('Me individei mas comprei a blusa!')
//     }
//     else{
//         window.alert('Muito caro, estou fora!')
//     }
// }

// Switch

// let option = window.prompt(`
//     Digite a opção desejada:

//     1: Consultoria
//     2: Atendimento
//     3: Encerar`)

// switch (option){
//     case '1':
//         window.alert(`
//         - Finanças
//         - Vendas
//         - Markting`)
//         break;
//     case '2':
//         windo2w.alert('Vamos passar para um de nossos atendentes!')
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

// try {
//     throw new Error(`My new Error`)
//     runMyAplication
// } catch (error) {
//     console.log(`My Test: ${error}`)
// }
// finally {
//     console.log(`Sempre será executado`)
// }

document.write("Rodando aplicação!")