// Crie uma função para converter média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F):
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F:  < - 60

function averageCalculate(grade1, grade2) {
  let average = (Number(grade1) + Number(grade2)) / 2;

  if (isNaN(average)) {
    average = "Insira somente notas válidas!";
  }

  return average;
}

function abcConvert(average) {
  let noteABC;

  Number(average);
  if (average >= 90 && average <= 100) {
    noteABC = "A";
  } else if (average >= 80 && average <= 89) {
    noteABC = "B";
  } else if (average >= 70 && average <= 79) {
    noteABC = "C";
  } else if (average >= 60 && average <= 69) {
    noteABC = "D";
  } else if (average >= 0 && average <= 59) {
    noteABC = "F";
  } else {
    noteABC = "Média inválida!";
  }

  return noteABC;
}

let averageStudant = averageCalculate(80, "a90");
console.log(averageStudant);

let abcAverage = abcConvert(averageStudant);
console.log(abcAverage);

switch (abcAverage) {
  case "A":
    alert("Excelente, aprovado com A!");
    break;
  case "B":
    alert("Muito bem, aprovado com B!");
    break;
  case "C":
    alert("Aprovado com C!");
    break;
  case "D":
    alert("Foi quase, reprovado com D!");
    break;
  case "F":
    alert("Precisa estudar mais, reprovado com F!");
    break;
  default:
    alert("Nota ABC Inválida!");
}
