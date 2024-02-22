// Crie uma classe "Animal" com as caracteristicas raça (race) e nome (name), depois crie uma classe "Dog" que herde os atributos da classe pai "Animal" e tenha o método "action". Passe os valores via argumento quando criar o objeto.

class Animal {
  constructor(name, race, sound) {
    this.name = name;
    this.race = race;
    this.sound = sound;
  }
}

class Dog extends Animal {
  constructor(name, race, sound) {
    super(name, race);
    this.sound = "bark";
  }

  action() {
    return `${this.name}, ${this.sound}!`;
  }
}

const myDog = new Dog("Spyke", "Doberman");

console.log(myDog.name);
console.log(myDog.race);
console.log(myDog.action());
console.log(myDog.sound);
