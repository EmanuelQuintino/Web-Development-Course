// Faça um programa que solicite (prompt) o nome do usuáio, dê as boas vindas e avise que irá fazer uma soma: Ex: Bem-vindo "nome", vamos fazer uma soma!

// Receba os números e apresente a soma com alerta na tela Ex: A soma do "número1" e o "número2" é "soma". (Use Template String)

let userName = prompt("Digite seu nome: ");

alert("Olá, " + userName + ", vamos fazer uma soma!");

let firstNumber = Number(prompt("O primeiro número: "));
let secondNumber = Number(prompt("O segundo número: "));

const sum = firstNumber + secondNumber;

alert(`A soma de ${firstNumber} e ${secondNumber} = ${sum}`);
