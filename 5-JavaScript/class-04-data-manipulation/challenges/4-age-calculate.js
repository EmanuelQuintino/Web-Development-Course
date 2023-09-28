// Crie um programa que pergunte em que data o usuário nasceu
// Depois escreva na tela quantos anos ele tem

const dateWasBorn = new Date(prompt("Digite a data (yyyy-mm-dd) em que você nasceu:"));

const dateNow = new Date();
const ageUser = (dateNow - dateWasBorn) / 1000 / 60 / 60 / 24 / 365.25;

alert(`Em você tem ${Math.floor(ageUser)} anos!`);
