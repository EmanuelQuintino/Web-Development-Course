// ⚠️ Desafio: Crie uma função para verificar palíndromos e retorne TRUE ou FALSE. A lógica deve receber string com palavra ou texto

function isPalindrome(text) {
  const normalText = text.toLowerCase().replaceAll(" ", "");
  const reverseText = text.toLowerCase().replaceAll(" ", "").split("").reverse().join("");

  return normalText === reverseText;
}

const text = "Ame o Poema";
const result = isPalindrome(text);

console.log(result ? "Verdadeiro" : "Falso");
