// ⚠️ Desafio: Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo
// Imprima os somatórios e o saldo formatado no padão brasileiro,
// Informe se a situação está positiva ou negativa e se existe dívidas.

const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
];

const incomeValues = incomes.filter((value) => value.includes("R$"));
const incomeValuesNumber = incomeValues.map((income) => {
  return Number(income.replace("R$ ", "").replace(",", "."));
});
const incomesSum = incomeValuesNumber.reduce((a, b) => a + b, 0);

const expensesValues = expenses.filter((value) => value.includes("R$"));
const expensesValuesNumber = expensesValues.map((expense) =>
  Number(expense.replace("R$ ", "").replace(",", "."))
);
const expensesSum = expensesValuesNumber.reduce((a, b) => a + b, 0);

let statusBalance;
let resultBalance = incomesSum - expensesSum;

if (resultBalance > 0) {
  statusBalance = "Existe um superávit. Invista o dinheiro!";
} else if (resultBalance < 0) {
  statusBalance = "Foi gasto todo dinheiro e existe dívidas!";
} else if (resultBalance == 0) {
  statusBalance = "Foi gasto todo dinheiro, mas não existe dívidas!";
}

console.log(
  `Gastos: ${incomesSum.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  })}`
);

console.log(
  `Despesas: ${expensesSum.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  })}`
);

console.log(`
Saldo: ${resultBalance.toLocaleString("pt-br", { style: "currency", currency: "brl" })}
${statusBalance}.`);
