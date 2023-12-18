// ⚠️ Desafio: Crie uma função de converter média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F)
// Insira validações para notas strings e fora do range.

// A: 90 - 100
// B: 80 - 90
// C: 70 - 80
// D: 60 - 70
// F:  < - 60

function convertABC(average) {
  if (typeof average == "string") {
    average = Number(average.replace(",", "."));

    if (isNaN(average)) {
      return "Insira somente notas válidas!";
    }
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
    return "Média fora do do intervalo de 0 a 100!";
  }
}

const averageConverted = convertABC("90");
console.log(averageConverted);

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
    console.log("Nota inválida!");
}
