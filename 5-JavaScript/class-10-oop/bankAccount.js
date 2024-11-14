class BankAccount {
  #balance; // ES2022
  constructor(client, initialBalance = 0) {
    this.client = client;
    this.#balance = initialBalance; // encapsulation
  }

  // getter
  balance() {
    return this.#balance;
  }

  // setter
  deposit(amount) {
    this.#balance += amount;
    return `Deposito de R$${amount}`;
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      return `Saque de R$${amount}`;
    } else {
      return "Saldo insuficiente!";
    }
  }
}

const account = new BankAccount("Emanuel", 500);
console.log(account.client);
// console.log(account.#balance);
console.log(account.balance());
console.log(account.deposit(100));
console.log(account.balance());
console.log(account.withdraw(200));
console.log(account.balance());
console.log(account.withdraw(500));
console.log(account.balance());
