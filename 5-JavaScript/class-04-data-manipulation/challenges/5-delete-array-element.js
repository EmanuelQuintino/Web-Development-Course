// ⚠️ Desafio: Crie uma função que remova um elemento específico de um Array. Insira o nome do elemento e o array via parâmetros depois retorne o array com valor atualizado

const techs = ["HTML", 10, "CSS", 20, "JavaScript", 30];

function deleteArrayElement(element, array) {
  const index = array.indexOf(element);
  index != -1 ? array.splice(index, 1) : "";
  return array;
}

console.log(deleteArrayElement("JavaScript", techs));
