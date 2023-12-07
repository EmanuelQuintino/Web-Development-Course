// ⚠️ Desafio: Receba dois números do usuário e apresente a soma entre eles. Ex: A soma do "número1" e o "número2" é "soma". (Use Template String)

const num1 = prompt("Digite o primeiro número: ");
const num2 = prompt("Digite o segundo número: ");

const sumNumbers = Number(num1) + Number(num2);

alert(`A soma entre ${num1} e ${num2} = ${sumNumbers}`);
