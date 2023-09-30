const userAge = 30;
const hasCNH = true;

if (userAge >= 18) {
  console.log("Maior de idade!");
} else {
  console.log("Menor de idade!");
}

if (userAge >= 18 && hasCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

if (userAge >= 16) {
  if (userAge >= 18 && userAge <= 70) {
    console.log("Voto obrigatório!");
  } else {
    console.log("Voto facultativo!");
  }
} else {
  console.log("Não pode votar!");
}

let money = window.prompt("Quanto você tem?");
let price = window.prompt("Quanto custa a blusa?");

if (money > price) {
  window.alert("Está com preço bom, vou comprar!");
} else if (money == price) {
  window.alert("Vou ficar sem dinheiro mas compro a blusa!");
} else {
  let resp = window.prompt("Pode pegar dinheiro emprestado? (S/N)");
  if (resp.toLowerCase() == "s") {
    window.alert("Me individei mas comprei a blusa!");
  } else {
    window.alert("Muito caro, estou fora!");
  }
}
