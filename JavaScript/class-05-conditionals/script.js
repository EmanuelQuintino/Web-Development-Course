// // If , Else

// dinheiro = window.prompt('Quanto você tem?')
// preco = window.prompt('Quanto custa a blusa?')

// if (dinheiro > preco){
//     window.alert('Está com preço bom, vou comprar!')
// }
// else if (dinheiro == preco){
//     window.alert('Vou ficar sem dinheiro!')
// }
// else {
//     resp = window.prompt('Pode pegar dinheiro emprestado? (S/N)')//.toLocaleLowerCase()
//     if (resp == 's'){
//         window.alert('Me individei mas comprei a blusa!')
//     } 
//     else{
//         window.alert('Muito caro, estou fora!')
//     }
// }

// Switch

opcao = window.prompt('Digite a opção desejada: 1:Consultoria   2:Atendimento   3:Encerar')

switch (opcao){
    case '1':
        window.alert('De qual consultoria você deseja?') // Exercício: Criar um menu de consultorias (Use outro Switch)
        break
    case '2':
        window.alert('Vamos passar para um de nossos atendentes!')
        break
    case '3':
        window.alert('Obrigado pela sua visita, volte sempre!') // Exercício: Criar um prompt com pesquisa de satisfação com Bom ou Ruim e responder ao cliente (Use If, else.)
        break
    default:
        window.alert('Digite uma opção válida!')
        break
}

// Throw e Try...catch (Lançar, tentar, capturar) ... >>>>  Criar aula   <<<<