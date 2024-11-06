// ⚠️ Desafio: Crie um lógica que receba o nome do usuário via prompt e filtre uma lista de devs para retornar valores relacionados

const devs = [
  { name: "Nereu", salary: 6500 },
  { name: "Fred", salary: 5800 },
  { name: "Neemias", salary: 7000 },
  { name: "Lucas", salary: 6200 },
];

const resp = prompt("Digite o nome: ").toLocaleLowerCase();
const resultFilter = devs.filter((dev) => dev.name.toLocaleLowerCase().includes(resp));

console.log(resultFilter);
