// Crie um programa que pergunte o ano que o usuário nasceu
// Depois escreva na tela o ano atual e quantos anos ele vai complatar

const yearBorn = Number(prompt('Digite o ano em que você nasceu:'))
const dateToday = new Date().getFullYear()
const ageUser = dateToday - yearBorn
alert(`Em ${dateToday} você vai completar ${ageUser} anos`);