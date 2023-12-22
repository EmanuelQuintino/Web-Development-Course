class Animal {
  constructor(nome, wight) {
    this.nome = nome;
    this.wight = wight;
  }
}

class Dog extends Animal {
  constructor(nome, wight, race) {
    super(nome, wight);
    this.race = race;
  }

  action() {
    console.log("Latir!");
  }
}

const animal = new Animal("Spike");
console.log(animal.nome);

const spike = new Dog("Spike", 15, "Doberman");
console.log(spike.nome);
console.log(spike.race);
spike.action();
