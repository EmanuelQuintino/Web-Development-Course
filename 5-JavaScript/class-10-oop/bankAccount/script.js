"use strict";

class Client {
  #cpf; // ES2022
  constructor(name, phone, cpf) {
    this.name = name;
    this.phone = phone;
    this.#cpf = cpf; // encapsulation
  }

  get clientInfo() {
    return `
      Nome: ${this.name}, 
      Telefone: ${this.phone}, 
      CPF: ${this.#cpf}
    `;
  }
}

// inherit
class BankAccount extends Client {
  #balance;
  constructor(name, phone, cpf, initialBalance = 0) {
    super(name, phone, cpf);
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  // setter
  deposit(amount) {
    this.#isNegativeAmount(amount);
    this.#balance += amount;
    return `Deposito de R$${amount}`;
  }

  withdraw(amount) {
    this.#isNegativeAmount(amount);
    if (this.#balance >= amount) {
      this.#balance -= amount;
      return `Saque de R$${amount}`;
    } else {
      return "Saldo insuficiente!";
    }
  }

  #isNegativeAmount(amount) {
    if (amount <= 0) throw Error("Valor inválido!");
  }
}

const client = new Client("Emanuel", "(88) 99999-9999", "123.123.123-12");

console.log(client.name);
console.log(client.phone);
console.log(client.clientInfo);

const account = new BankAccount("Emanuel", "(88) 99999-9999", "123.123.123-12", 500);

console.log(account.name);
console.log(account.clientInfo);
console.log(account.balance);
console.log(account.deposit(100));
console.log(account.balance);
console.log(account.withdraw(200));
console.log(account.balance);
console.log(account.withdraw(500));
console.log(account.balance);
console.log(account.deposit(-500));
console.log(account.withdraw(-500));
