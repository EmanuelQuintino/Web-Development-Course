// ⚠️ Desafio: Crie uma função que retorne quantas palavras tem em uma frase

function textWordCount(text) {
  return text.trim().split(" ").length;
}

const text = "Foque no processo, não pule etapas!";
const numberWordText = textWordCount(text);

console.log(numberWordText);
