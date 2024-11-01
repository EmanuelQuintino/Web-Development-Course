// ⚠️ Desafio: Crie uma lógica que verifique quantos dias faltam para o ano novo

const today = new Date();
const newYear = new Date("2025-01-01 00:00:00");
const daysToNewYear = newYear - today;

console.log(daysToNewYear / 1000 / 60 / 60 / 24);
