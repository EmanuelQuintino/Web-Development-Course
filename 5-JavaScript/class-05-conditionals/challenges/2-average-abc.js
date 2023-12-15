// ⚠️ Desafio: Crie uma função para converter média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F)
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

// A: 90 - 100
// B: 80 - 90
// C: 70 - 80
// D: 60 - 70
// F:  < - 60

function averageCalculate(grade1, grade2) {
  let average = (Number(grade1) + Number(grade2)) / 2;

  if (isNaN(average)) {
    average = "Insira somente notas válidas!";
  }

  return average;
}

function abcConvert(average) {
  if (typeof average === "string") {
    average = Number(average.replace(",", "."));
  }

  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else if (average >= 0 && average < 60) {
    return "F";
  } else {
    return "Média inválida!";
  }
}

let averageStudant = averageCalculate(80, "90");
console.log(averageStudant);

let abcAverage = abcConvert(averageStudant);
console.log(abcAverage);

switch (abcAverage) {
  case "A":
    console.log("Excelente, aprovado com A!");
    break;
  case "B":
    console.log("Muito bem, aprovado com B!");
    break;
  case "C":
    console.log("Aprovado com C!");
    break;
  case "D":
    console.log("Foi quase, reprovado com D!");
    break;
  case "F":
    console.log("Precisa estudar mais, reprovado com F!");
    break;
  default:
    console.log("Nota ABC Inválida!");
}
