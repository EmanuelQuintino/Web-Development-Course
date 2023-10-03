// Crie uma lógica que receba a idade do usuário
// Verifique SE ele pode votar ou se o voto é facultativo

const userAge = 18;

if (userAge >= 16) {
  if (userAge >= 18 && userAge <= 70) {
    console.log("Voto obrigatório!");
  } else {
    console.log("Voto facultativo!");
  }
} else {
  console.log("Não pode votar!");
}

if (userAge >= 18 && userAge <= 70) {
  console.log("Voto obrigatório!");
} else if ((userAge >= 16 && userAge < 18) || userAge > 70) {
  console.log("Voto facultativo!");
} else {
  console.log("Não pode votar!");
}
