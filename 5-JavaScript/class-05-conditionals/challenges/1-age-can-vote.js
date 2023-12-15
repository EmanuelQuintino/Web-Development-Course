// ⚠️ Desafio: Crie uma lógica que receba a idade do usuário e verifique SE ele pode votar ou se o voto é facultativo

const userAge = 18;

if ((userAge >= 16 && userAge < 18) || userAge > 70) {
  console.log("Facultativo");
} else if (userAge >= 18) {
  console.log("Vota!");
} else {
  console.log("Não pode!");
}
