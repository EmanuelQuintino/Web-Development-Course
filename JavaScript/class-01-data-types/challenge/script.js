// Faça um programa que solicite (prompt) o nome do usuáio e dê as boas vindas: Ex: Bem-vindo "nome"!
// Solicite dois números usando o nome do usuário Ex: Digite dois números "nome"
// Apresente a soma dos números com alerta na tela Ex: A soma do "número1" e o "número2" é "soma". (Use Template String) 

let name = prompt("Digite seu nome: ");

alert("Olá, " + name);

let firstNumber = Number(prompt("Digite o primeiro número: "));
let secondNumber = Number(prompt("Digite o sugundo número: "));

const sum = firstNumber + secondNumber;

alert(`A soma de ${firstNumber} e ${secondNumber} = ${sum}`);
