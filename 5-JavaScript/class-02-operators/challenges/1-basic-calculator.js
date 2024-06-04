// ⚠️ Desafio: Solicite 2 números do usuário via prompt, apresente as operações e os resultados escrevendo no documento (função write). Crie constantes e atribua as operações de +, -, *, /, %, ** e raiz para os números solicitados.

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o sugundo número: "));

const add = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;
const rem = num1 % num2;
const pow = num1 ** num2;
const sqr = num1 ** (1 / num2);

document.write(`${num1} + ${num2} = ${add} <br>`);
document.write(`${num1} - ${num2} = ${sub} <br>`);
document.write(`${num1} * ${num2} = ${mul} <br>`);
document.write(`${num1} / ${num2} = ${div.toFixed(2)} <br>`);
document.write(`O resto de ${num1} e ${num2} = ${rem} <br>`);
document.write(`${num1} elevado a ${num2} = ${exp} <br>`);
document.write(`A raiz ${num2}(a) de ${num1} = ${sqr.toFixed(2)} <br>`);
