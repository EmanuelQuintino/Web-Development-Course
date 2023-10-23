const funcionarios = [
  { nome: "João", salario: 2000 },
  { nome: "Maria", salario: 2500 },
  { nome: "Lucas", salario: 1800 },
];

const salariosAumentados = funcionarios.map((funcionario) => ({
  nome: funcionario.nome,
  salario: funcionario.salario * 1.1,
}));

console.log(salariosAumentados);
