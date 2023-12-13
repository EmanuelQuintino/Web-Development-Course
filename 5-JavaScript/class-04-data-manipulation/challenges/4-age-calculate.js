// ⚠️ Desafio: Crie um programa que pergunte em que data (yyyy-mm-dd) o usuário nasceu, depois escreva na tela quantos anos ele tem

const dateWasBorn = new Date(prompt("Digite a data (yyyy-mm-dd) em que você nasceu:"));

const dateNow = new Date();
const ageUser = Math.floor((dateNow - dateWasBorn) / 1000 / 60 / 60 / 24 / 365.25);

alert(`Em você tem ${ageUser} anos!`);
