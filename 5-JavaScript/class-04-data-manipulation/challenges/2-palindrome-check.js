// ⚠️ Desafio: Crie uma função para verificar palíndromos e retorne TRUE ou FALSE. A lógica deve receber string com palavra ou texto

function isPalindrome(text) {
  const original = text.replaceAll(" ", "").toLocaleLowerCase();
  const reverse = original.split("").reverse().join("");
  return original == reverse;
}

console.log(isPalindrome("Ame o Poema"));
